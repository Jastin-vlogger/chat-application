import * as cookie from 'cookie';
import * as crypto from 'crypto';
import { Request } from 'express';
import got from 'got';
import * as hashSum from 'hash-sum';
import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent';
import * as multer from 'multer';
import * as querystring from 'query-string';
import * as tough from 'tough-cookie';
import { URL, URLSearchParams } from 'url';
import * as uuid from 'uuid';
import config from '../config/config';
import configNodes from '../config/configNodes';
import { Middlewares } from '../middleware/GlobalMiddlewares';

export class SDBaseService {
    public configNodes = configNodes;
    __constructDefault(bh, ...webVars) {
        const system: any = {};
        const web: any = {};
        try {
            system.environment = process.env;
            if (!bh.input) {
                bh.input = {};
            }
            if (!bh.local) {
                bh.local = {};
            }
            if (!bh.model) {
                bh.model = {};
            }
            if (webVars[0]) {
                web.req = webVars[0];
                bh.input.params = web.req.params;
                bh.input.query = web.req.query;
                bh.input.body = web.req.body;
                bh.input.files = web.req.files;
                bh.input.cookies = web.req.cookies;
                bh.input.headers = web.req.headers;
                bh.input.hostname = web.req.hostname;
                bh.input.method = web.req.method;
                bh.input.path = web.req.path;
                bh.input.signedCookies = web.req.signedCookies;
            }
            if (webVars[1]) {
                web.res = webVars[1];
            }
            if (webVars[2]) {
                web.next = webVars[2];
            }
            Object.defineProperty(bh, 'system', {
                value: system,
                writable: false,
            });

            Object.defineProperty(bh, 'web', {
                value: web,
                writable: true,
            });
            return bh;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    addDMPropertiesToBh(bh, req: Request, entityName?: string) {
        if (entityName) {
            bh.model = {};
            bh.model[entityName] = req.body[entityName];
        }else{
            bh.model = undefined;
        }
        bh.filter = req.body.filter;
        bh.pageSize = req.body.pageSize;
        bh.offSet = req.body.offSet;
        bh.orderBy = req.body.orderBy;
        bh.data = req.body.data;
        bh.result = req.body.result;
    }

    operators = {
        eq(a, b, c, d) {
            return a == b;
        },
        se(a, b, c, d) {
            return a === b;
        },
        neq(a, b, c, d) {
            return a != b;
        },
        sne(a, b, c, d) {
            return a !== b;
        },
        lt(a, b, c, d) {
            return a < b;
        },
        lte(a, b, c, d) {
            return a <= b;
        },
        gt(a, b, c, d) {
            return a > b;
        },
        gte(a, b, c, d) {
            return a >= b;
        },
        btwn(a, b, c, d) {
            return a >= b && a <= c;
        },
        cont(a, b, c, d) {
            return (a + '').indexOf(b) !== -1;
        },
        regex(a, b, c, d) {
            return (a + '').match(new RegExp(b, d ? 'i' : ''));
        },
        true(a, b, c, d) {
            return a === true;
        },
        false(a, b, c, d) {
            return a === false;
        },
        null(a, b, c, d) {
            return typeof a === 'undefined' || a === null;
        },
        nnull(a, b, c, d) {
            return typeof a !== 'undefined' && a !== null;
        },
        empty(a, b, c, d) {
            if (typeof a === 'string' || Array.isArray(a)) {
                return a.length === 0;
            } else if (typeof a === 'object' && a !== null) {
                return Object.keys(a).length === 0;
            }
            return false;
        },
        nempty(a, b, c, d) {
            if (typeof a === 'string' || Array.isArray(a)) {
                return a.length !== 0;
            } else if (typeof a === 'object' && a !== null) {
                return Object.keys(a).length !== 0;
            }
            return false;
        },

        istype(a, b, c, d) {
            if (b === 'array') {
                return Array.isArray(a);
            } else if (b === 'json') {
                try {
                    JSON.parse(a);
                    return true;
                } catch (e) {
                    // or maybe ??? a !== null; }
                    return false;
                }
            } else if (b === 'null') {
                return a === null;
            } else {
                return typeof a === b && !Array.isArray(a) && a !== null;
            }
        },
        else(a, b, c, d) {
            return a === true;
        },
    };

    /**
     *
     * construct http request options and make a request
     *
     */

    httpRequest(
        url,
        timeout,
        method,
        headers,
        followRedirects,
        cookies,
        authType,
        body,
        paytoqs,
        proxyConfig,
        tlsConfig,
        ret,
        params,
        rejectUnauthorized,
        username,
        password,
        token
    ) {
        let opts = {};
        opts['url'] = url;
        if (ret == 'arraybuffer') {
            opts['responseType'] = 'buffer';
        } else {
            opts['responseType'] = ret;
        }
        opts['timeout'] = {
            send: timeout,
            response: timeout,
        };
        opts['method'] = method;
        opts['headers'] = {};
        opts['maxRedirects'] = 21;
        opts['cookieJar'] = new tough.CookieJar();
        opts['proxy'] = null;
        opts['https'] = { rejectUnauthorized: rejectUnauthorized };
        const preRequestTimestamp = process.hrtime();
        const originalHeaderMap = {};
        const redirectList = [];
        opts['hooks'] = {
            beforeRequest: [
                options => {
                    // Whilst HTTP headers are meant to be case-insensitive,
                    // in the real world, there are servers that aren't so compliant.
                    // GOT will lower case all headers given a chance, so we need
                    // to restore the case of any headers the user has set.
                    Object.keys(options.headers).forEach(h => {
                        if (
                            originalHeaderMap[h] &&
                            originalHeaderMap[h] !== h
                        ) {
                            options.headers[originalHeaderMap[h]] =
                                options.headers[h];
                            delete options.headers[h];
                        }
                    });
                },
            ],
            beforeRedirect: [
                (options, response) => {
                    let redirectInfo = {
                        location: response.headers.location,
                    };
                    if (response.headers.hasOwnProperty('set-cookie')) {
                        redirectInfo['cookies'] = this.extractCookies(
                            response.headers['set-cookie']
                        );
                    }
                    redirectList.push(redirectInfo);
                },
            ],
        };
        // known headers to normalize
        const ctSet = 'Content-Type'; // set default camel case
        const clSet = 'Content-Length';
        opts = this.setHeaders(opts, headers, clSet, ctSet);
        opts = this.setRedirects(
            opts,
            followRedirects,
            redirectList,
            originalHeaderMap
        );
        opts = this.setCookies(opts, cookies, url);
        opts = this.addRequestCredentials(
            opts,
            authType,
            username,
            password,
            token
        );
        opts = this.constructBody(opts, method, body, clSet, ctSet);
        opts = this.setPaytoqs(opts, method, body, paytoqs);
        opts = this.revertCapitalisation(opts, clSet, ctSet);
        opts = this.addProxyConfig(opts, proxyConfig, url);
        opts = this.addTLSOptions(opts, tlsConfig);
        opts = this.addQueryParams(opts, params);
        return new Promise((resolve, reject) => {
            /*
             * got pacakage implementation replacing required
             */
            var current = this;
            got(opts)
                .then(function (res) {
                    const msg = {};
                    msg['statusCode'] = res.statusCode;
                    msg['headers'] = res.headers;
                    msg['responseUrl'] = res.url;
                    msg['payload'] = res.body;
                    msg['redirectList'] = redirectList;
                    if (msg['headers'].hasOwnProperty('set-cookie')) {
                        msg['responseCookies'] = current.extractCookies(
                            msg['headers']['set-cookie']
                        );
                    }
                    msg['headers']['x-neutrinos-request-node'] = hashSum(
                        msg['headers']
                    );
                    // Calculate request time
                    const diff = process.hrtime(preRequestTimestamp);
                    const ms = diff[0] * 1e3 + diff[1] * 1e-6;
                    const metricRequestDurationMillis = ms.toFixed(3);
                    msg['requestDuration'] = metricRequestDurationMillis;
                    if (res['client'] && res['client'].bytesRead) {
                        msg['bytesRead'] = res['client'].bytesRead;
                    }
                    // Convert the payload to the required return type
                    if (ret !== 'arraybuffer') {
                        // txt
                        if (ret === 'json') {
                            try {
                                msg['payload'] = JSON.parse(
                                    JSON.stringify(msg['payload'])
                                );
                            } catch (e) {
                                // obj

                                throw e;
                            }
                        } else {
                            msg['payload'] = msg['payload'].toString('utf8');
                        }
                    }
                    return resolve(msg);
                })
                .catch(function (err: any) {
                    return reject(err);
                });
        });
    }

    setHeaders(opts, headers, clSet, ctSet) {
        // headers is an object, each key is treated as a header
        if (headers) {
            for (const v in headers) {
                if (headers.hasOwnProperty(v)) {
                    // normalize known headers
                    let name = v.toLowerCase();
                    if (name !== 'content-type' && name !== 'content-length') {
                        // only normalise the known headers used later in this
                        // function. Otherwise leave them alone.
                        name = v;
                    } else if (name === 'content-type') {
                        ctSet = v;
                    } else {
                        clSet = v;
                    }
                    opts.headers[name] = headers[v];
                }
            }
        }
        return opts;
    }

    setRedirects(opts, followRedirects, redirectList, originalHeaderMap) {
        opts.followRedirect = !!followRedirects;
        return opts;
    }

    setCookies(opts, cookies, url) {
        if (opts.headers.hasOwnProperty('cookie')) {
            var cookies = cookie.parse(opts.headers.cookie, { decode: String });
            for (var name in cookies) {
                opts.cookieJar.setCookie(
                    cookie.serialize(name, cookies[name], { encode: String }),
                    url,
                    { ignoreError: true }
                );
            }
            delete opts.headers.cookie;
        }
        // cookie is an object, each key is treated as a new cookie
        if (cookies) {
            for (const name in cookies) {
                if (cookies.hasOwnProperty(name)) {
                    if (
                        cookies[name] === null ||
                        cookies[name].value === null
                    ) {
                        // This case clears a cookie for HTTP In/Response nodes.
                        // Ignore for this node.
                    } else if (typeof cookies[name] === 'object') {
                        if (cookies[name].encode === false) {
                            // If the encode option is false, the value is not encoded.
                            opts.cookieJar.setCookie(
                                cookie.serialize(name, cookies[name].value, {
                                    encode: String,
                                }),
                                url,
                                { ignoreError: true }
                            );
                        } else {
                            // The value is encoded by encodeURIComponent().
                            opts.cookieJar.setCookie(
                                cookie.serialize(name, cookies[name].value),
                                url,
                                { ignoreError: true }
                            );
                        }
                    } else {
                        opts.cookieJar.setCookie(
                            cookie.serialize(name, cookies[name]),
                            url,
                            { ignoreError: true }
                        );
                    }
                }
            }
        }
        return opts;
    }

    addRequestCredentials(opts, authType, user, password, token) {
        if (user || password || token) {
            if (authType === 'basic') {
                var cred = '';
                if (user) {
                    cred = user;
                }
                if (password) {
                    cred += ':' + password;
                }
                opts.headers.Authorization =
                    'Basic ' + Buffer.from(cred).toString('base64');
            } else if (authType === 'digest') {
                /**
                 * Code Change from required to got

                 */
                let digestCreds = {
                    user,
                    password: password,
                };
                let sentCreds = false;
                opts['hooks'].afterResponse = [
                    (response, retry) => {
                        if (response.statusCode === 401) {
                            if (sentCreds) {
                                return response;
                            }
                            const requestUrl = new URL(
                                response.request.requestUrl
                            );
                            const options = response.request.options;
                            const normalisedHeaders = {};
                            Object.keys(response.headers).forEach(k => {
                                normalisedHeaders[k.toLowerCase()] =
                                    response.headers[k];
                            });
                            if (normalisedHeaders['www-authenticate']) {
                                let authHeader = this.buildDigestHeader(
                                    digestCreds.user,
                                    digestCreds.password,
                                    options.method,
                                    requestUrl.pathname,
                                    normalisedHeaders['www-authenticate']
                                );
                                options.headers.Authorization = authHeader;
                            }
                            sentCreds = true;
                            return retry(options);
                        }
                        return response;
                    },
                ];
            } else if (authType === 'bearer') {
                opts.headers.Authorization = `Bearer ${token || ''}`;
            }
        }
        return opts;
    }

    setPaytoqs(opts, method, body, paytoqs) {
        if (method === 'GET' && typeof body !== 'undefined' && paytoqs) {
            if (typeof body === 'object') {
                try {
                    if (opts.url.indexOf('?') !== -1) {
                        opts.url +=
                            (opts.url.endsWith('?') ? '' : '&') +
                            querystring.stringify(body);
                    } else {
                        opts.url += '?' + querystring.stringify(body);
                    }
                } catch (err) {
                    throw new Error('Invalid Payload');
                }
            } else {
                throw new Error('Invalid Payload');
            }
        }
        return opts;
    }

    addQueryParams(opts, params) {
        if (typeof params === 'object' && Object.entries(params).length > 0) {
            try {
                var paramsMap = [];
                for (const [key, value] of Object.entries(params)) {
                    paramsMap.push([key, value]);
                }
                const searchParams = new URLSearchParams(paramsMap);
                opts.url = opts.url + '?' + searchParams.toString();
            } catch (err) {
                throw new Error('Invalid params');
            }
        }

        return opts;
    }
    revertCapitalisation(opts, clSet, ctSet) {
        // revert to user supplied Capitalisation if needed.
        if (
            opts.headers.hasOwnProperty('content-type') &&
            ctSet !== 'content-type'
        ) {
            opts.headers[ctSet] = opts.headers['content-type'];
            delete opts.headers['content-type'];
        }
        if (
            opts.headers.hasOwnProperty('content-length') &&
            clSet !== 'content-length'
        ) {
            opts.headers[clSet] = opts.headers['content-length'];
            delete opts.headers['content-length'];
        }
        return opts;
    }
    constructBody(opts, method, body, clSet, ctSet) {
        let payload = null;
        if (
            method !== 'GET' &&
            method !== 'HEAD' &&
            typeof body !== 'undefined'
        ) {
            if (
                opts.headers['content-type'] === 'multipart/form-data' &&
                typeof body === 'object'
            ) {
                opts.formData = {};
                for (const opt in body) {
                    if (body.hasOwnProperty(opt)) {
                        const val = body[opt];
                        if (val !== undefined && val !== null) {
                            if (
                                typeof val === 'string' ||
                                Buffer.isBuffer(val)
                            ) {
                                opts.formData[opt] = val;
                            } else if (
                                typeof val === 'object' &&
                                val.hasOwnProperty('value')
                            ) {
                                // Treat as file to upload - ensure it has an options object
                                // as request complains if it doesn't
                                if (!val.hasOwnProperty('options')) {
                                    val.options = {};
                                }
                                opts.formData[opt] = val;
                            } else {
                                opts.formData[opt] = JSON.stringify(val);
                            }
                        }
                    }
                }
            } else {
                if (typeof body === 'string' || Buffer.isBuffer(body)) {
                    payload = body;
                } else if (typeof body === 'number') {
                    payload = body + '';
                } else {
                    if (
                        opts.headers['content-type'] ===
                        'application/x-www-form-urlencoded'
                    ) {
                        payload = querystring.stringify(body);
                    } else {
                        payload = JSON.stringify(body);
                        if (opts.headers['content-type'] == null) {
                            opts.headers[ctSet] = 'application/json';
                        }
                    }
                }
                if (opts.headers['content-length'] == null) {
                    if (Buffer.isBuffer(payload)) {
                        opts.headers[clSet] = payload.length;
                    } else {
                        opts.headers[clSet] = Buffer.byteLength(payload);
                    }
                }
                opts.body = payload;
            }
        }
        return opts;
    }

    addProxyConfig(opts, proxyConfig, url) {
        let prox = null;
        let noprox = null;
        if (proxyConfig) {
            prox = proxyConfig.url;
            noprox = proxyConfig.noproxy;
        }
        let noproxy;
        if (noprox) {
            for (const i in noprox) {
                if (url.indexOf(noprox[i]) !== -1) {
                    noproxy = true;
                }
            }
        }
        if (prox && !noproxy) {
            var match = prox.match(/^(https?:\/\/)?(.+)?:([0-9]+)?/i);
            if (match) {
                let proxyAgent;
                let proxyURL = new URL(prox);
                //set username/password to null to stop empty creds header
                let proxyOptions = {
                    proxy: proxyURL,
                    maxFreeSockets: 256,
                    maxSockets: 256,
                    keepAlive: true,
                };
                if (proxyConfig && proxyConfig.credentials) {
                    let proxyUsername = proxyConfig.credentials.username || '';
                    let proxyPassword = proxyConfig.credentials.password || '';
                    if (proxyUsername || proxyPassword) {
                        proxyOptions.proxy.username = proxyUsername;
                        proxyOptions.proxy.password = proxyPassword;
                    }
                } else if (proxyURL.username || proxyURL.password) {
                    proxyOptions.proxy.username = proxyURL.username;
                    proxyOptions.proxy.password = proxyURL.password;
                }
                //need both incase of http -> https redirect

                opts.agent = {
                    http: new HttpProxyAgent(proxyOptions),
                    https: new HttpsProxyAgent(proxyOptions),
                };
            } else {
                opts.proxy = null;
                throw new Error('Invalid proxy url');
            }
        }
        return opts;
    }
    addTLSOptions(opts, tlsConfig) {
        if (tlsConfig) {
            opts.https = {};
            tlsConfig.addTLSOptions(opts.https);
            if (opts.https.ca) {
                opts.https.certificateAuthority = opts.https.ca;
                delete opts.https.ca;
            }
            if (opts.https.cert) {
                opts.https.certificate = opts.https.cert;
                delete opts.https.cert;
            }
        } else {
            if (opts.hasOwnProperty('rejectUnauthorized')) {
                opts.https = { rejectUnauthorized: opts.rejectUnauthorized };
            }
        }
        return opts;
    }

    extractCookies(setCookie) {
        const cookies = {};
        setCookie.forEach(function (c) {
            const parsedCookie = cookie.parse(c);
            const eqIdx = c.indexOf('=');
            const key = c.substr(0, eqIdx).trim();
            parsedCookie.value = parsedCookie[key];
            delete parsedCookie[key];
            cookies[key] = parsedCookie;
        });
        return cookies;
    }

    getMiddlesWaresBySequenceId(
        sequenceId: string,
        type: string,
        generatedMiddleWares: any
    ) {
        const returnedMws = [];
        if (
            config['middlewares'] &&
            config['middlewares']['sequences'] &&
            config['middlewares']['sequences'][sequenceId] &&
            config['middlewares']['sequences'][sequenceId][type]
        ) {
            const middleWares =
                config['middlewares']['sequences'][sequenceId][type];
            if (middleWares instanceof Array) {
                for (let i = 0; i < middleWares.length; i++) {
                    const serviceName = Object.getOwnPropertyNames(
                        middleWares[i]
                    )[0];
                    const mwName = middleWares[i][serviceName];
                    if (
                        serviceName === '__ssdGlobalMiddlewares__' &&
                        typeof Middlewares[mwName] === 'function'
                    ) {
                        returnedMws.push(Middlewares[mwName]());
                    } else if (
                        generatedMiddleWares[serviceName] &&
                        generatedMiddleWares[serviceName][mwName]
                    ) {
                        returnedMws.push(
                            generatedMiddleWares[serviceName][mwName]
                                .functionDef
                        );
                    }
                }
            }
        }
        return returnedMws;
    }

    multipartParser(fileUploadOptions) {
        let o: any = {
            storage: multer.memoryStorage(),
        };
        if (fileUploadOptions.path) {
            o = {
                dest: fileUploadOptions.path,
            };
        }
        let mp;
        if (fileUploadOptions.options instanceof Array) {
            mp = multer(o).fields(fileUploadOptions.options);
        } else {
            mp = multer(o).any();
        }
        return function (req, res, next) {
            mp(req, res, function (err) {
                req._body = true;
                next(err);
            });
        };
    }

    /**
     *
     * @param configType
     * @param id
     *
     * Based on config type and id return respective config object
     */
    getConfigObj(configType, id): any {
        if (configType && id) {
            if (this.configNodes) {
                if (
                    this.configNodes.hasOwnProperty(configType) &&
                    this.configNodes[configType].hasOwnProperty(id)
                ) {
                    return this.configNodes[configType][id];
                } else {
                    throw new Error(
                        `Cannot find the ${configType} config type or id ${id}`
                    );
                }
            } else {
                throw new Error('Cannot find the config nodes');
            }
        }
    }

    /**
     *
     * @param bh
     * @param c - cookies should be object
     *
     * sets the cookies to the response
     */
    cookieSetter(bh, c) {
        if (typeof c === 'object') {
            const cs = Object.keys(c);
            for (const i of cs) {
                bh.web.res.cookie(i, c[i].value, c[i]);
            }
        }
        return bh;
    }

    md5 = value => {
        return crypto.createHash('md5').update(value).digest('hex');
    };

    ha1Compute(algorithm, user, realm, pass, nonce, cnonce) {
        /**
         * RFC 2617: handle both MD5 and MD5-sess algorithms.
         *
         * If the algorithm directive's value is "MD5" or unspecified, then HA1 is
         *   HA1=MD5(username:realm:password)
         * If the algorithm directive's value is "MD5-sess", then HA1 is
         *   HA1=MD5(MD5(username:realm:password):nonce:cnonce)
         */
        var ha1 = this.md5(user + ':' + realm + ':' + pass);
        if (algorithm && algorithm.toLowerCase() === 'md5-sess') {
            return this.md5(ha1 + ':' + nonce + ':' + cnonce);
        } else {
            return ha1;
        }
    }

    buildDigestHeader(user, pass, method, path, authHeader) {
        var challenge = {};
        var re = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (;;) {
            var match = re.exec(authHeader);
            if (!match) {
                break;
            }
            challenge[match[1]] = match[2] || match[3];
        }
        var qop = /(^|,)\s*auth\s*($|,)/.test(challenge['realm']) && 'auth';
        var nc = qop && '00000001';
        var cnonce = qop && uuid().replace(/-/g, '');
        var ha1 = this.ha1Compute(
            challenge['algorithm'],
            user,
            challenge['realm'],
            pass,
            challenge['realm'],
            cnonce
        );
        var ha2 = this.md5(method + ':' + path);
        var digestResponse = qop
            ? this.md5(
                  ha1 +
                      ':' +
                      challenge['nonce'] +
                      ':' +
                      nc +
                      ':' +
                      cnonce +
                      ':' +
                      qop +
                      ':' +
                      ha2
              )
            : this.md5(ha1 + ':' + challenge['nonce'] + ':' + ha2);
        var authValues = {
            username: user,
            realm: challenge['realm'],
            nonce: challenge['nonce'],
            uri: path,
            qop: qop,
            response: digestResponse,
            nc: nc,
            cnonce: cnonce,
            algorithm: challenge['algorithm'],
            opaque: challenge['opaque'],
        };

        authHeader = [];
        for (var k in authValues) {
            if (authValues[k]) {
                if (k === 'qop' || k === 'nc' || k === 'algorithm') {
                    authHeader.push(k + '=' + authValues[k]);
                } else {
                    authHeader.push(k + '="' + authValues[k] + '"');
                }
            }
        }
        authHeader = 'Digest ' + authHeader.join(', ');
        return authHeader;
    }
}
