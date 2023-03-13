let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import * as sd_XgoZXZd8prKz2rOj from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_o7sq8PKw8gCAsmO2(bh, parentSpanInst);
          //appendnew_next_sd_2owaE7JnLvwd8Bmo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2owaE7JnLvwd8Bmo');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_xCs5Yt7JPMvUeXW9(bh, parentSpanInst);
          //appendnew_next_sd_hD3988K826BWQaXC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hD3988K826BWQaXC');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_S3Cdr1mB3LatMiDE(bh, parentSpanInst);
          //appendnew_next_sd_lcGH02tIzLqpQGHh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lcGH02tIzLqpQGHh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_55YFYiJ1g48yAi18(bh, parentSpanInst);
          //appendnew_next_sd_y0ARO440WXF9OfJ5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_y0ARO440WXF9OfJ5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_PsZLdbEs6NAUqScJ(bh, parentSpanInst);
          //appendnew_next_sd_zvIxciVdPiIfn9Zc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zvIxciVdPiIfn9Zc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_JIrxgPqAc1DJWsdz(bh, parentSpanInst);
          //appendnew_next_sd_GT6itSpUmLSfFQ0r
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GT6itSpUmLSfFQ0r');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_S31fyzHdyvkJmkO2(bh, parentSpanInst);
          //appendnew_next_sd_R4q6N6dp0en1VwQJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_R4q6N6dp0en1VwQJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_S3Cdr1mB3LatMiDE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S3Cdr1mB3LatMiDE',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nivEtkSG0vRaDGvf(bh, parentSpanInst);
      //appendnew_next_sd_S3Cdr1mB3LatMiDE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S3Cdr1mB3LatMiDE',
        spanInst,
        'sd_S3Cdr1mB3LatMiDE'
      );
    }
  }

  async sd_nivEtkSG0vRaDGvf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nivEtkSG0vRaDGvf',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HzefuljEQwyrcGUR(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_di2Hs4Vc2lvfI1ak(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nivEtkSG0vRaDGvf',
        spanInst,
        'sd_nivEtkSG0vRaDGvf'
      );
    }
  }

  async sd_HzefuljEQwyrcGUR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HzefuljEQwyrcGUR',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A6CB2xEpzlYoNVdB(bh, parentSpanInst);
      //appendnew_next_sd_HzefuljEQwyrcGUR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HzefuljEQwyrcGUR',
        spanInst,
        'sd_HzefuljEQwyrcGUR'
      );
    }
  }

  async sd_A6CB2xEpzlYoNVdB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A6CB2xEpzlYoNVdB',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UwOmKj9N5NR9AuqL(bh, parentSpanInst);
      //appendnew_next_sd_A6CB2xEpzlYoNVdB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A6CB2xEpzlYoNVdB',
        spanInst,
        'sd_A6CB2xEpzlYoNVdB'
      );
    }
  }

  async sd_UwOmKj9N5NR9AuqL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UwOmKj9N5NR9AuqL',
      parentSpanInst
    );
    try {
      const sd_XgoZXZd8prKz2rOjInstance: sd_XgoZXZd8prKz2rOj.idsutil =
        sd_XgoZXZd8prKz2rOj.idsutil.getInstance();
      let outputVariables =
        await sd_XgoZXZd8prKz2rOjInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mcpeNkjzWDWwOUKx(bh, parentSpanInst);
      //appendnew_next_sd_UwOmKj9N5NR9AuqL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UwOmKj9N5NR9AuqL',
        spanInst,
        'sd_UwOmKj9N5NR9AuqL'
      );
    }
  }

  async sd_mcpeNkjzWDWwOUKx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mcpeNkjzWDWwOUKx',
      parentSpanInst
    );
    try {
      const sd_XgoZXZd8prKz2rOjInstance: sd_XgoZXZd8prKz2rOj.idsutil =
        sd_XgoZXZd8prKz2rOj.idsutil.getInstance();
      let outputVariables =
        await sd_XgoZXZd8prKz2rOjInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_N0EtWifWeQoJVjuc(bh, parentSpanInst);
      //appendnew_next_sd_mcpeNkjzWDWwOUKx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mcpeNkjzWDWwOUKx',
        spanInst,
        'sd_mcpeNkjzWDWwOUKx'
      );
    }
  }

  async sd_N0EtWifWeQoJVjuc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N0EtWifWeQoJVjuc',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_w8UUZK2NnkPTBaYm(bh, parentSpanInst);
      //appendnew_next_sd_N0EtWifWeQoJVjuc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N0EtWifWeQoJVjuc',
        spanInst,
        'sd_N0EtWifWeQoJVjuc'
      );
    }
  }

  async sd_w8UUZK2NnkPTBaYm(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w8UUZK2NnkPTBaYm');
    }
  }

  async sd_di2Hs4Vc2lvfI1ak(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_di2Hs4Vc2lvfI1ak',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3C0qetbi4ZUKhvZr(bh, parentSpanInst);
      //appendnew_next_sd_di2Hs4Vc2lvfI1ak
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_di2Hs4Vc2lvfI1ak',
        spanInst,
        'sd_di2Hs4Vc2lvfI1ak'
      );
    }
  }

  async sd_3C0qetbi4ZUKhvZr(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3C0qetbi4ZUKhvZr');
    }
  }

  async sd_o7sq8PKw8gCAsmO2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o7sq8PKw8gCAsmO2',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ij168lWAWN1LNpkv(bh, parentSpanInst);
      //appendnew_next_sd_o7sq8PKw8gCAsmO2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o7sq8PKw8gCAsmO2',
        spanInst,
        'sd_o7sq8PKw8gCAsmO2'
      );
    }
  }

  async sd_ij168lWAWN1LNpkv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ij168lWAWN1LNpkv',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ij168lWAWN1LNpkv',
        spanInst,
        'sd_ij168lWAWN1LNpkv'
      );
    }
  }

  async sd_55YFYiJ1g48yAi18(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_55YFYiJ1g48yAi18',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cjuy8HIqYzwuKJdN(bh, parentSpanInst);
      //appendnew_next_sd_55YFYiJ1g48yAi18
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_55YFYiJ1g48yAi18',
        spanInst,
        'sd_55YFYiJ1g48yAi18'
      );
    }
  }

  async sd_cjuy8HIqYzwuKJdN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cjuy8HIqYzwuKJdN',
      parentSpanInst
    );
    try {
      const sd_XgoZXZd8prKz2rOjInstance: sd_XgoZXZd8prKz2rOj.idsutil =
        sd_XgoZXZd8prKz2rOj.idsutil.getInstance();
      let outputVariables =
        await sd_XgoZXZd8prKz2rOjInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KP7Mic9m7oZVwxRQ(bh, parentSpanInst);
      //appendnew_next_sd_cjuy8HIqYzwuKJdN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cjuy8HIqYzwuKJdN',
        spanInst,
        'sd_cjuy8HIqYzwuKJdN'
      );
    }
  }

  async sd_KP7Mic9m7oZVwxRQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KP7Mic9m7oZVwxRQ',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6ovavZxfIOc9nBT2(bh, parentSpanInst);
      //appendnew_next_sd_KP7Mic9m7oZVwxRQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KP7Mic9m7oZVwxRQ',
        spanInst,
        'sd_KP7Mic9m7oZVwxRQ'
      );
    }
  }

  async sd_6ovavZxfIOc9nBT2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6ovavZxfIOc9nBT2',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pfEQI3tonK2QDoFO(bh, parentSpanInst);
      //appendnew_next_sd_6ovavZxfIOc9nBT2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6ovavZxfIOc9nBT2',
        spanInst,
        'sd_6ovavZxfIOc9nBT2'
      );
    }
  }

  async sd_pfEQI3tonK2QDoFO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pfEQI3tonK2QDoFO',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sS4ZPQ1ueLOTgXwg(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xo6x3bQArymVCbOg(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pfEQI3tonK2QDoFO',
        spanInst,
        'sd_pfEQI3tonK2QDoFO'
      );
    }
  }

  async sd_sS4ZPQ1ueLOTgXwg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sS4ZPQ1ueLOTgXwg',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_m2D0U70T8LQmvw5k(bh, parentSpanInst);
      //appendnew_next_sd_sS4ZPQ1ueLOTgXwg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sS4ZPQ1ueLOTgXwg',
        spanInst,
        'sd_sS4ZPQ1ueLOTgXwg'
      );
    }
  }

  async sd_m2D0U70T8LQmvw5k(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m2D0U70T8LQmvw5k');
    }
  }

  async sd_xo6x3bQArymVCbOg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xo6x3bQArymVCbOg',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NMMh6nfIVnyLqSjg(bh, parentSpanInst);
      //appendnew_next_sd_xo6x3bQArymVCbOg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xo6x3bQArymVCbOg',
        spanInst,
        'sd_xo6x3bQArymVCbOg'
      );
    }
  }

  async sd_NMMh6nfIVnyLqSjg(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NMMh6nfIVnyLqSjg');
    }
  }

  async sd_PsZLdbEs6NAUqScJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PsZLdbEs6NAUqScJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_rEQhcRqNI6awLFLj(bh, parentSpanInst);
      //appendnew_next_sd_PsZLdbEs6NAUqScJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PsZLdbEs6NAUqScJ',
        spanInst,
        'sd_PsZLdbEs6NAUqScJ'
      );
    }
  }

  async sd_rEQhcRqNI6awLFLj(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rEQhcRqNI6awLFLj');
    }
  }

  async sd_JRjHJ67t85JaB1Oo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JRjHJ67t85JaB1Oo',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JRjHJ67t85JaB1Oo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JRjHJ67t85JaB1Oo',
        spanInst,
        'sd_JRjHJ67t85JaB1Oo'
      );
    }
  }

  async sd_JIrxgPqAc1DJWsdz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JIrxgPqAc1DJWsdz',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xvelzpWhasaYGIOf(bh, parentSpanInst);
      //appendnew_next_sd_JIrxgPqAc1DJWsdz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JIrxgPqAc1DJWsdz',
        spanInst,
        'sd_JIrxgPqAc1DJWsdz'
      );
    }
  }

  async sd_xvelzpWhasaYGIOf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xvelzpWhasaYGIOf',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NtctY1HpxIHkZg3A(bh, parentSpanInst);
      //appendnew_next_sd_xvelzpWhasaYGIOf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xvelzpWhasaYGIOf',
        spanInst,
        'sd_xvelzpWhasaYGIOf'
      );
    }
  }

  async sd_NtctY1HpxIHkZg3A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NtctY1HpxIHkZg3A',
      parentSpanInst
    );
    try {
      const sd_XgoZXZd8prKz2rOjInstance: sd_XgoZXZd8prKz2rOj.idsutil =
        sd_XgoZXZd8prKz2rOj.idsutil.getInstance();
      let outputVariables =
        await sd_XgoZXZd8prKz2rOjInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CZK6H116tctZ9XZ5(bh, parentSpanInst);
      //appendnew_next_sd_NtctY1HpxIHkZg3A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NtctY1HpxIHkZg3A',
        spanInst,
        'sd_NtctY1HpxIHkZg3A'
      );
    }
  }

  async sd_CZK6H116tctZ9XZ5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CZK6H116tctZ9XZ5',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Gc85IEmO78Nt3xWt(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WwNZUKrHdSGoNqt8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CZK6H116tctZ9XZ5',
        spanInst,
        'sd_CZK6H116tctZ9XZ5'
      );
    }
  }

  async sd_Gc85IEmO78Nt3xWt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gc85IEmO78Nt3xWt',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_Gc85IEmO78Nt3xWt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gc85IEmO78Nt3xWt',
        spanInst,
        'sd_Gc85IEmO78Nt3xWt'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vAuxY04ZnQNVExoT(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_vAuxY04ZnQNVExoT(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vAuxY04ZnQNVExoT');
    }
  }

  async sd_WwNZUKrHdSGoNqt8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WwNZUKrHdSGoNqt8',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vAuxY04ZnQNVExoT(bh, parentSpanInst);
      //appendnew_next_sd_WwNZUKrHdSGoNqt8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WwNZUKrHdSGoNqt8',
        spanInst,
        'sd_WwNZUKrHdSGoNqt8'
      );
    }
  }

  async sd_S31fyzHdyvkJmkO2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S31fyzHdyvkJmkO2',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hN6fXr3HQI6s1MXS(bh, parentSpanInst);
      //appendnew_next_sd_S31fyzHdyvkJmkO2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S31fyzHdyvkJmkO2',
        spanInst,
        'sd_S31fyzHdyvkJmkO2'
      );
    }
  }

  async sd_hN6fXr3HQI6s1MXS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hN6fXr3HQI6s1MXS',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_firjBAA63pxE4IvM(bh, parentSpanInst);
      //appendnew_next_sd_hN6fXr3HQI6s1MXS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hN6fXr3HQI6s1MXS',
        spanInst,
        'sd_hN6fXr3HQI6s1MXS'
      );
    }
  }

  async sd_firjBAA63pxE4IvM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_firjBAA63pxE4IvM',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_e4WydE5dE42XjIXC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_76q0SemLUAM5mxpR(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_firjBAA63pxE4IvM',
        spanInst,
        'sd_firjBAA63pxE4IvM'
      );
    }
  }

  async sd_e4WydE5dE42XjIXC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e4WydE5dE42XjIXC',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xXv8Vp2zeuH12nhG(bh, parentSpanInst);
      //appendnew_next_sd_e4WydE5dE42XjIXC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e4WydE5dE42XjIXC',
        spanInst,
        'sd_e4WydE5dE42XjIXC'
      );
    }
  }

  async sd_xXv8Vp2zeuH12nhG(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xXv8Vp2zeuH12nhG');
    }
  }

  async sd_76q0SemLUAM5mxpR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_76q0SemLUAM5mxpR',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YRvIj5sVNWLqItXY(bh, parentSpanInst);
      //appendnew_next_sd_76q0SemLUAM5mxpR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_76q0SemLUAM5mxpR',
        spanInst,
        'sd_76q0SemLUAM5mxpR'
      );
    }
  }

  async sd_YRvIj5sVNWLqItXY(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YRvIj5sVNWLqItXY');
    }
  }

  async sd_xCs5Yt7JPMvUeXW9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xCs5Yt7JPMvUeXW9',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aGb58be8pKBEZvpw(bh, parentSpanInst);
      //appendnew_next_sd_xCs5Yt7JPMvUeXW9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xCs5Yt7JPMvUeXW9',
        spanInst,
        'sd_xCs5Yt7JPMvUeXW9'
      );
    }
  }

  async sd_aGb58be8pKBEZvpw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aGb58be8pKBEZvpw',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_42csRNkuwVrtZDbA(bh, parentSpanInst);
      //appendnew_next_sd_aGb58be8pKBEZvpw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aGb58be8pKBEZvpw',
        spanInst,
        'sd_aGb58be8pKBEZvpw'
      );
    }
  }

  async sd_42csRNkuwVrtZDbA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_42csRNkuwVrtZDbA',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uwUAyFJh5lZDQP87(bh, parentSpanInst);
      //appendnew_next_sd_42csRNkuwVrtZDbA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_42csRNkuwVrtZDbA',
        spanInst,
        'sd_42csRNkuwVrtZDbA'
      );
    }
  }

  async sd_uwUAyFJh5lZDQP87(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uwUAyFJh5lZDQP87',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Yyy7GbSRo6kHIiq9(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_11QXptQ2Gd1die7H(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uwUAyFJh5lZDQP87',
        spanInst,
        'sd_uwUAyFJh5lZDQP87'
      );
    }
  }

  async sd_Yyy7GbSRo6kHIiq9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Yyy7GbSRo6kHIiq9',
      parentSpanInst
    );
    try {
      const sd_XgoZXZd8prKz2rOjInstance: sd_XgoZXZd8prKz2rOj.idsutil =
        sd_XgoZXZd8prKz2rOj.idsutil.getInstance();
      let outputVariables = await sd_XgoZXZd8prKz2rOjInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IzOBk4HXGV0nB3XH(bh, parentSpanInst);
      //appendnew_next_sd_Yyy7GbSRo6kHIiq9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yyy7GbSRo6kHIiq9',
        spanInst,
        'sd_Yyy7GbSRo6kHIiq9'
      );
    }
  }

  async sd_IzOBk4HXGV0nB3XH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IzOBk4HXGV0nB3XH',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Fo0XOmEpgcj8yHPC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_683Zv1z9o4zrNfbs(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IzOBk4HXGV0nB3XH',
        spanInst,
        'sd_IzOBk4HXGV0nB3XH'
      );
    }
  }

  async sd_Fo0XOmEpgcj8yHPC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fo0XOmEpgcj8yHPC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KCbRL2jbFxvNr6Ng(bh, parentSpanInst);
      //appendnew_next_sd_Fo0XOmEpgcj8yHPC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fo0XOmEpgcj8yHPC',
        spanInst,
        'sd_Fo0XOmEpgcj8yHPC'
      );
    }
  }

  async sd_KCbRL2jbFxvNr6Ng(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KCbRL2jbFxvNr6Ng',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xXkwBW0wIKgZ7aPV(bh, parentSpanInst);
      //appendnew_next_sd_KCbRL2jbFxvNr6Ng
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KCbRL2jbFxvNr6Ng',
        spanInst,
        'sd_KCbRL2jbFxvNr6Ng'
      );
    }
  }

  async sd_xXkwBW0wIKgZ7aPV(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xXkwBW0wIKgZ7aPV');
    }
  }

  async sd_683Zv1z9o4zrNfbs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_683Zv1z9o4zrNfbs',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_M2rG37SLWHH2KlOh(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_v2KMCpG7q0jWDdWL(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_683Zv1z9o4zrNfbs',
        spanInst,
        'sd_683Zv1z9o4zrNfbs'
      );
    }
  }

  async sd_M2rG37SLWHH2KlOh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M2rG37SLWHH2KlOh',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IlXdPhkpCqIWhaJC(bh, parentSpanInst);
      //appendnew_next_sd_M2rG37SLWHH2KlOh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M2rG37SLWHH2KlOh',
        spanInst,
        'sd_M2rG37SLWHH2KlOh'
      );
    }
  }

  async sd_IlXdPhkpCqIWhaJC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IlXdPhkpCqIWhaJC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_v2KMCpG7q0jWDdWL(bh, parentSpanInst);
      //appendnew_next_sd_IlXdPhkpCqIWhaJC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IlXdPhkpCqIWhaJC',
        spanInst,
        'sd_IlXdPhkpCqIWhaJC'
      );
    }
  }

  async sd_v2KMCpG7q0jWDdWL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v2KMCpG7q0jWDdWL',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v2KMCpG7q0jWDdWL',
        spanInst,
        'sd_v2KMCpG7q0jWDdWL'
      );
    }
  }

  async sd_11QXptQ2Gd1die7H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_11QXptQ2Gd1die7H',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aJAIBWbEMmBNPjCi(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yVAgl7z2QP01xB04(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_11QXptQ2Gd1die7H',
        spanInst,
        'sd_11QXptQ2Gd1die7H'
      );
    }
  }

  async sd_aJAIBWbEMmBNPjCi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aJAIBWbEMmBNPjCi',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xXkwBW0wIKgZ7aPV(bh, parentSpanInst);
      //appendnew_next_sd_aJAIBWbEMmBNPjCi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aJAIBWbEMmBNPjCi',
        spanInst,
        'sd_aJAIBWbEMmBNPjCi'
      );
    }
  }

  async sd_yVAgl7z2QP01xB04(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yVAgl7z2QP01xB04',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xXkwBW0wIKgZ7aPV(bh, parentSpanInst);
      //appendnew_next_sd_yVAgl7z2QP01xB04
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yVAgl7z2QP01xB04',
        spanInst,
        'sd_yVAgl7z2QP01xB04'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_lWMuOPgfIgYdJC8q(bh, parentSpanInst)) ||
      (await this.sd_emw6Myh9rcr1KReV(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_lWMuOPgfIgYdJC8q(bh, parentSpanInst) {
    const nodes = [
      'sd_mcpeNkjzWDWwOUKx',
      'sd_y0ARO440WXF9OfJ5',
      'sd_cjuy8HIqYzwuKJdN',
      'sd_KP7Mic9m7oZVwxRQ',
      'sd_55YFYiJ1g48yAi18',
      'sd_pfEQI3tonK2QDoFO',
      'sd_sS4ZPQ1ueLOTgXwg',
      'sd_xo6x3bQArymVCbOg',
      'sd_m2D0U70T8LQmvw5k',
      'sd_NMMh6nfIVnyLqSjg',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_JRjHJ67t85JaB1Oo(bh, parentSpanInst);
      //appendnew_next_sd_lWMuOPgfIgYdJC8q
      return true;
    }
    return false;
  }
  async sd_emw6Myh9rcr1KReV(bh, parentSpanInst) {
    const nodes = ['sd_Yyy7GbSRo6kHIiq9'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KCbRL2jbFxvNr6Ng(bh, parentSpanInst);
      //appendnew_next_sd_emw6Myh9rcr1KReV
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
