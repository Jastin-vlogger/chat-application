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
import * as sd_brLj7Jq9dh7nvOTo from './idsutil'; //_splitter_
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
          bh = await this.sd_2jzScFYyficjjxBw(bh, parentSpanInst);
          //appendnew_next_sd_eZjOdhE6KiZLNZ7T
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eZjOdhE6KiZLNZ7T');
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
          bh = await this.sd_gB3S5W7w0bxmyhdY(bh, parentSpanInst);
          //appendnew_next_sd_Gk7sjlm6jJmgAfJw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Gk7sjlm6jJmgAfJw');
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
          bh = await this.sd_iByDA85sUT5sAPo8(bh, parentSpanInst);
          //appendnew_next_sd_XpsxTHr8NakxkDhx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XpsxTHr8NakxkDhx');
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
          bh = await this.sd_sUAeafQ8TEzAPjaA(bh, parentSpanInst);
          //appendnew_next_sd_uDbpwXdQSosSWbzv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uDbpwXdQSosSWbzv');
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
          bh = await this.sd_ESarN0mL53ve5IE1(bh, parentSpanInst);
          //appendnew_next_sd_OYOhEy24mrozCVjZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OYOhEy24mrozCVjZ');
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
          bh = await this.sd_QVuaC9Cb0ZSHnehk(bh, parentSpanInst);
          //appendnew_next_sd_l0KDCsHz578tCTnq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l0KDCsHz578tCTnq');
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
          bh = await this.sd_PLeHpqQx5Z02UbXg(bh, parentSpanInst);
          //appendnew_next_sd_hlXdByVCds5HzD7X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hlXdByVCds5HzD7X');
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

  async sd_iByDA85sUT5sAPo8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iByDA85sUT5sAPo8',
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
      bh = await this.sd_DEQ3bGMiI7OsOS7y(bh, parentSpanInst);
      //appendnew_next_sd_iByDA85sUT5sAPo8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iByDA85sUT5sAPo8',
        spanInst,
        'sd_iByDA85sUT5sAPo8'
      );
    }
  }

  async sd_DEQ3bGMiI7OsOS7y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DEQ3bGMiI7OsOS7y',
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
        bh = await this.sd_oD05qOP6mJnpkogd(bh, parentSpanInst);
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
        bh = await this.sd_9yTK2SQ2IQPNiw7c(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DEQ3bGMiI7OsOS7y',
        spanInst,
        'sd_DEQ3bGMiI7OsOS7y'
      );
    }
  }

  async sd_oD05qOP6mJnpkogd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oD05qOP6mJnpkogd',
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
      bh = await this.sd_GgpkO2mQ81tQOQn8(bh, parentSpanInst);
      //appendnew_next_sd_oD05qOP6mJnpkogd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oD05qOP6mJnpkogd',
        spanInst,
        'sd_oD05qOP6mJnpkogd'
      );
    }
  }

  async sd_GgpkO2mQ81tQOQn8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GgpkO2mQ81tQOQn8',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rjWQqLraV6vWQK6A(bh, parentSpanInst);
      //appendnew_next_sd_GgpkO2mQ81tQOQn8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GgpkO2mQ81tQOQn8',
        spanInst,
        'sd_GgpkO2mQ81tQOQn8'
      );
    }
  }

  async sd_rjWQqLraV6vWQK6A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rjWQqLraV6vWQK6A',
      parentSpanInst
    );
    try {
      const sd_brLj7Jq9dh7nvOToInstance: sd_brLj7Jq9dh7nvOTo.idsutil =
        sd_brLj7Jq9dh7nvOTo.idsutil.getInstance();
      let outputVariables =
        await sd_brLj7Jq9dh7nvOToInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6CImrVcJe9wrxsVQ(bh, parentSpanInst);
      //appendnew_next_sd_rjWQqLraV6vWQK6A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rjWQqLraV6vWQK6A',
        spanInst,
        'sd_rjWQqLraV6vWQK6A'
      );
    }
  }

  async sd_6CImrVcJe9wrxsVQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6CImrVcJe9wrxsVQ',
      parentSpanInst
    );
    try {
      const sd_brLj7Jq9dh7nvOToInstance: sd_brLj7Jq9dh7nvOTo.idsutil =
        sd_brLj7Jq9dh7nvOTo.idsutil.getInstance();
      let outputVariables =
        await sd_brLj7Jq9dh7nvOToInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zs7Bg4SsrPSj4RJP(bh, parentSpanInst);
      //appendnew_next_sd_6CImrVcJe9wrxsVQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6CImrVcJe9wrxsVQ',
        spanInst,
        'sd_6CImrVcJe9wrxsVQ'
      );
    }
  }

  async sd_zs7Bg4SsrPSj4RJP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zs7Bg4SsrPSj4RJP',
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
      await this.sd_ObtWUIdDFZpjuGmc(bh, parentSpanInst);
      //appendnew_next_sd_zs7Bg4SsrPSj4RJP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zs7Bg4SsrPSj4RJP',
        spanInst,
        'sd_zs7Bg4SsrPSj4RJP'
      );
    }
  }

  async sd_ObtWUIdDFZpjuGmc(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ObtWUIdDFZpjuGmc');
    }
  }

  async sd_9yTK2SQ2IQPNiw7c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9yTK2SQ2IQPNiw7c',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aYetNqZgK7zkX2po(bh, parentSpanInst);
      //appendnew_next_sd_9yTK2SQ2IQPNiw7c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9yTK2SQ2IQPNiw7c',
        spanInst,
        'sd_9yTK2SQ2IQPNiw7c'
      );
    }
  }

  async sd_aYetNqZgK7zkX2po(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aYetNqZgK7zkX2po');
    }
  }

  async sd_2jzScFYyficjjxBw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2jzScFYyficjjxBw',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_R2ERYsztxS4F2WVG(bh, parentSpanInst);
      //appendnew_next_sd_2jzScFYyficjjxBw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2jzScFYyficjjxBw',
        spanInst,
        'sd_2jzScFYyficjjxBw'
      );
    }
  }

  async sd_R2ERYsztxS4F2WVG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R2ERYsztxS4F2WVG',
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
        'sd_R2ERYsztxS4F2WVG',
        spanInst,
        'sd_R2ERYsztxS4F2WVG'
      );
    }
  }

  async sd_sUAeafQ8TEzAPjaA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sUAeafQ8TEzAPjaA',
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
      bh = await this.sd_4RDU4mL844Jr5Pwr(bh, parentSpanInst);
      //appendnew_next_sd_sUAeafQ8TEzAPjaA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sUAeafQ8TEzAPjaA',
        spanInst,
        'sd_sUAeafQ8TEzAPjaA'
      );
    }
  }

  async sd_4RDU4mL844Jr5Pwr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4RDU4mL844Jr5Pwr',
      parentSpanInst
    );
    try {
      const sd_brLj7Jq9dh7nvOToInstance: sd_brLj7Jq9dh7nvOTo.idsutil =
        sd_brLj7Jq9dh7nvOTo.idsutil.getInstance();
      let outputVariables =
        await sd_brLj7Jq9dh7nvOToInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z0s6jZvBYoQZC3sQ(bh, parentSpanInst);
      //appendnew_next_sd_4RDU4mL844Jr5Pwr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4RDU4mL844Jr5Pwr',
        spanInst,
        'sd_4RDU4mL844Jr5Pwr'
      );
    }
  }

  async sd_z0s6jZvBYoQZC3sQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z0s6jZvBYoQZC3sQ',
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
      bh = await this.sd_iHqhuXhAbpBCNGX0(bh, parentSpanInst);
      //appendnew_next_sd_z0s6jZvBYoQZC3sQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z0s6jZvBYoQZC3sQ',
        spanInst,
        'sd_z0s6jZvBYoQZC3sQ'
      );
    }
  }

  async sd_iHqhuXhAbpBCNGX0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iHqhuXhAbpBCNGX0',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GY5Obd86sAH6hiRd(bh, parentSpanInst);
      //appendnew_next_sd_iHqhuXhAbpBCNGX0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iHqhuXhAbpBCNGX0',
        spanInst,
        'sd_iHqhuXhAbpBCNGX0'
      );
    }
  }

  async sd_GY5Obd86sAH6hiRd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GY5Obd86sAH6hiRd',
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
        bh = await this.sd_K9NjWi4dYcGln8Pp(bh, parentSpanInst);
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
        bh = await this.sd_Mj4iQcVYjJsZsXo6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GY5Obd86sAH6hiRd',
        spanInst,
        'sd_GY5Obd86sAH6hiRd'
      );
    }
  }

  async sd_K9NjWi4dYcGln8Pp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K9NjWi4dYcGln8Pp',
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
      await this.sd_wIB7eTovXq3GrTG9(bh, parentSpanInst);
      //appendnew_next_sd_K9NjWi4dYcGln8Pp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K9NjWi4dYcGln8Pp',
        spanInst,
        'sd_K9NjWi4dYcGln8Pp'
      );
    }
  }

  async sd_wIB7eTovXq3GrTG9(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wIB7eTovXq3GrTG9');
    }
  }

  async sd_Mj4iQcVYjJsZsXo6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mj4iQcVYjJsZsXo6',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1ClqRBHEhTyiQxSB(bh, parentSpanInst);
      //appendnew_next_sd_Mj4iQcVYjJsZsXo6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mj4iQcVYjJsZsXo6',
        spanInst,
        'sd_Mj4iQcVYjJsZsXo6'
      );
    }
  }

  async sd_1ClqRBHEhTyiQxSB(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ClqRBHEhTyiQxSB');
    }
  }

  async sd_ESarN0mL53ve5IE1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ESarN0mL53ve5IE1',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_X5yQdPkTmMvx79Ob(bh, parentSpanInst);
      //appendnew_next_sd_ESarN0mL53ve5IE1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ESarN0mL53ve5IE1',
        spanInst,
        'sd_ESarN0mL53ve5IE1'
      );
    }
  }

  async sd_X5yQdPkTmMvx79Ob(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X5yQdPkTmMvx79Ob');
    }
  }

  async sd_vapSDjCOjrZjAk8L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vapSDjCOjrZjAk8L',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vapSDjCOjrZjAk8L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vapSDjCOjrZjAk8L',
        spanInst,
        'sd_vapSDjCOjrZjAk8L'
      );
    }
  }

  async sd_QVuaC9Cb0ZSHnehk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QVuaC9Cb0ZSHnehk',
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
      bh = await this.sd_lkZqmFg2ZkrCPnkZ(bh, parentSpanInst);
      //appendnew_next_sd_QVuaC9Cb0ZSHnehk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QVuaC9Cb0ZSHnehk',
        spanInst,
        'sd_QVuaC9Cb0ZSHnehk'
      );
    }
  }

  async sd_lkZqmFg2ZkrCPnkZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lkZqmFg2ZkrCPnkZ',
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
      bh = await this.sd_NIB6G2F5GbPaJu3z(bh, parentSpanInst);
      //appendnew_next_sd_lkZqmFg2ZkrCPnkZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lkZqmFg2ZkrCPnkZ',
        spanInst,
        'sd_lkZqmFg2ZkrCPnkZ'
      );
    }
  }

  async sd_NIB6G2F5GbPaJu3z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NIB6G2F5GbPaJu3z',
      parentSpanInst
    );
    try {
      const sd_brLj7Jq9dh7nvOToInstance: sd_brLj7Jq9dh7nvOTo.idsutil =
        sd_brLj7Jq9dh7nvOTo.idsutil.getInstance();
      let outputVariables =
        await sd_brLj7Jq9dh7nvOToInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JNiw04eLS7FgKbMf(bh, parentSpanInst);
      //appendnew_next_sd_NIB6G2F5GbPaJu3z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NIB6G2F5GbPaJu3z',
        spanInst,
        'sd_NIB6G2F5GbPaJu3z'
      );
    }
  }

  async sd_JNiw04eLS7FgKbMf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JNiw04eLS7FgKbMf',
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
        bh = await this.sd_I1PfjBD2guHuYH1t(bh, parentSpanInst);
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
        bh = await this.sd_gbxkEBH39JiQOlmy(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JNiw04eLS7FgKbMf',
        spanInst,
        'sd_JNiw04eLS7FgKbMf'
      );
    }
  }

  async sd_I1PfjBD2guHuYH1t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I1PfjBD2guHuYH1t',
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
      //appendnew_next_sd_I1PfjBD2guHuYH1t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I1PfjBD2guHuYH1t',
        spanInst,
        'sd_I1PfjBD2guHuYH1t'
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
      await this.sd_71YVWmoh0codx2lC(bh, parentSpanInst);
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

  async sd_71YVWmoh0codx2lC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_71YVWmoh0codx2lC');
    }
  }

  async sd_gbxkEBH39JiQOlmy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gbxkEBH39JiQOlmy',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_71YVWmoh0codx2lC(bh, parentSpanInst);
      //appendnew_next_sd_gbxkEBH39JiQOlmy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gbxkEBH39JiQOlmy',
        spanInst,
        'sd_gbxkEBH39JiQOlmy'
      );
    }
  }

  async sd_PLeHpqQx5Z02UbXg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PLeHpqQx5Z02UbXg',
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
      bh = await this.sd_bid0fidpgOB8HgAR(bh, parentSpanInst);
      //appendnew_next_sd_PLeHpqQx5Z02UbXg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PLeHpqQx5Z02UbXg',
        spanInst,
        'sd_PLeHpqQx5Z02UbXg'
      );
    }
  }

  async sd_bid0fidpgOB8HgAR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bid0fidpgOB8HgAR',
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
      bh = await this.sd_gjwU4ZZBs5Iwae7G(bh, parentSpanInst);
      //appendnew_next_sd_bid0fidpgOB8HgAR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bid0fidpgOB8HgAR',
        spanInst,
        'sd_bid0fidpgOB8HgAR'
      );
    }
  }

  async sd_gjwU4ZZBs5Iwae7G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gjwU4ZZBs5Iwae7G',
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
        bh = await this.sd_7w32cT0CteMSRyPz(bh, parentSpanInst);
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
        bh = await this.sd_SobjHVgHZLBUeRcs(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gjwU4ZZBs5Iwae7G',
        spanInst,
        'sd_gjwU4ZZBs5Iwae7G'
      );
    }
  }

  async sd_7w32cT0CteMSRyPz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7w32cT0CteMSRyPz',
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
      await this.sd_Y33HhFTK7fWzpsCp(bh, parentSpanInst);
      //appendnew_next_sd_7w32cT0CteMSRyPz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7w32cT0CteMSRyPz',
        spanInst,
        'sd_7w32cT0CteMSRyPz'
      );
    }
  }

  async sd_Y33HhFTK7fWzpsCp(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y33HhFTK7fWzpsCp');
    }
  }

  async sd_SobjHVgHZLBUeRcs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SobjHVgHZLBUeRcs',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wQhlT9VyPkdMAomi(bh, parentSpanInst);
      //appendnew_next_sd_SobjHVgHZLBUeRcs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SobjHVgHZLBUeRcs',
        spanInst,
        'sd_SobjHVgHZLBUeRcs'
      );
    }
  }

  async sd_wQhlT9VyPkdMAomi(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wQhlT9VyPkdMAomi');
    }
  }

  async sd_gB3S5W7w0bxmyhdY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gB3S5W7w0bxmyhdY',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tsxslO1ZnF6GOD56(bh, parentSpanInst);
      //appendnew_next_sd_gB3S5W7w0bxmyhdY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gB3S5W7w0bxmyhdY',
        spanInst,
        'sd_gB3S5W7w0bxmyhdY'
      );
    }
  }

  async sd_tsxslO1ZnF6GOD56(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tsxslO1ZnF6GOD56',
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
      bh = await this.sd_xthYwAxyVxi4X5GO(bh, parentSpanInst);
      //appendnew_next_sd_tsxslO1ZnF6GOD56
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tsxslO1ZnF6GOD56',
        spanInst,
        'sd_tsxslO1ZnF6GOD56'
      );
    }
  }

  async sd_xthYwAxyVxi4X5GO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xthYwAxyVxi4X5GO',
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
      bh = await this.sd_l4U2fA1zvmRHFUgg(bh, parentSpanInst);
      //appendnew_next_sd_xthYwAxyVxi4X5GO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xthYwAxyVxi4X5GO',
        spanInst,
        'sd_xthYwAxyVxi4X5GO'
      );
    }
  }

  async sd_l4U2fA1zvmRHFUgg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l4U2fA1zvmRHFUgg',
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
        bh = await this.sd_Czkhz3NbKvc9OZ2R(bh, parentSpanInst);
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
        bh = await this.sd_vv9YMO6y9aVD9uw6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l4U2fA1zvmRHFUgg',
        spanInst,
        'sd_l4U2fA1zvmRHFUgg'
      );
    }
  }

  async sd_Czkhz3NbKvc9OZ2R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Czkhz3NbKvc9OZ2R',
      parentSpanInst
    );
    try {
      const sd_brLj7Jq9dh7nvOToInstance: sd_brLj7Jq9dh7nvOTo.idsutil =
        sd_brLj7Jq9dh7nvOTo.idsutil.getInstance();
      let outputVariables = await sd_brLj7Jq9dh7nvOToInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y2ycfJmAmMivYZ1a(bh, parentSpanInst);
      //appendnew_next_sd_Czkhz3NbKvc9OZ2R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Czkhz3NbKvc9OZ2R',
        spanInst,
        'sd_Czkhz3NbKvc9OZ2R'
      );
    }
  }

  async sd_Y2ycfJmAmMivYZ1a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y2ycfJmAmMivYZ1a',
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
        bh = await this.sd_7tHsKh473qp2VxTf(bh, parentSpanInst);
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
        bh = await this.sd_4COaCOX5VUow8PMV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y2ycfJmAmMivYZ1a',
        spanInst,
        'sd_Y2ycfJmAmMivYZ1a'
      );
    }
  }

  async sd_7tHsKh473qp2VxTf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7tHsKh473qp2VxTf',
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
      bh = await this.sd_WRVNyGVbGkg6tkX5(bh, parentSpanInst);
      //appendnew_next_sd_7tHsKh473qp2VxTf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7tHsKh473qp2VxTf',
        spanInst,
        'sd_7tHsKh473qp2VxTf'
      );
    }
  }

  async sd_WRVNyGVbGkg6tkX5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WRVNyGVbGkg6tkX5',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Q6q7OGrnwV5x0I4m(bh, parentSpanInst);
      //appendnew_next_sd_WRVNyGVbGkg6tkX5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WRVNyGVbGkg6tkX5',
        spanInst,
        'sd_WRVNyGVbGkg6tkX5'
      );
    }
  }

  async sd_Q6q7OGrnwV5x0I4m(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q6q7OGrnwV5x0I4m');
    }
  }

  async sd_4COaCOX5VUow8PMV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4COaCOX5VUow8PMV',
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
        bh = await this.sd_898cBuj6j4SiVdgw(bh, parentSpanInst);
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
        bh = await this.sd_pt4nakqMVt8xBair(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4COaCOX5VUow8PMV',
        spanInst,
        'sd_4COaCOX5VUow8PMV'
      );
    }
  }

  async sd_898cBuj6j4SiVdgw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_898cBuj6j4SiVdgw',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oTv9ZAlVUSX3z8AP(bh, parentSpanInst);
      //appendnew_next_sd_898cBuj6j4SiVdgw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_898cBuj6j4SiVdgw',
        spanInst,
        'sd_898cBuj6j4SiVdgw'
      );
    }
  }

  async sd_oTv9ZAlVUSX3z8AP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oTv9ZAlVUSX3z8AP',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pt4nakqMVt8xBair(bh, parentSpanInst);
      //appendnew_next_sd_oTv9ZAlVUSX3z8AP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oTv9ZAlVUSX3z8AP',
        spanInst,
        'sd_oTv9ZAlVUSX3z8AP'
      );
    }
  }

  async sd_pt4nakqMVt8xBair(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pt4nakqMVt8xBair',
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
        'sd_pt4nakqMVt8xBair',
        spanInst,
        'sd_pt4nakqMVt8xBair'
      );
    }
  }

  async sd_vv9YMO6y9aVD9uw6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vv9YMO6y9aVD9uw6',
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
        bh = await this.sd_sWXeX9Qrspw2PX0J(bh, parentSpanInst);
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
        bh = await this.sd_67IfjMHykyEOshRO(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vv9YMO6y9aVD9uw6',
        spanInst,
        'sd_vv9YMO6y9aVD9uw6'
      );
    }
  }

  async sd_sWXeX9Qrspw2PX0J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sWXeX9Qrspw2PX0J',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Q6q7OGrnwV5x0I4m(bh, parentSpanInst);
      //appendnew_next_sd_sWXeX9Qrspw2PX0J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sWXeX9Qrspw2PX0J',
        spanInst,
        'sd_sWXeX9Qrspw2PX0J'
      );
    }
  }

  async sd_67IfjMHykyEOshRO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_67IfjMHykyEOshRO',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Q6q7OGrnwV5x0I4m(bh, parentSpanInst);
      //appendnew_next_sd_67IfjMHykyEOshRO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_67IfjMHykyEOshRO',
        spanInst,
        'sd_67IfjMHykyEOshRO'
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
      (await this.sd_MLqvzEft6eosniIw(bh, parentSpanInst)) ||
      (await this.sd_Ph40tRNzeQ0NI8PI(bh, parentSpanInst))
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
  async sd_MLqvzEft6eosniIw(bh, parentSpanInst) {
    const nodes = [
      'sd_6CImrVcJe9wrxsVQ',
      'sd_uDbpwXdQSosSWbzv',
      'sd_4RDU4mL844Jr5Pwr',
      'sd_z0s6jZvBYoQZC3sQ',
      'sd_sUAeafQ8TEzAPjaA',
      'sd_GY5Obd86sAH6hiRd',
      'sd_K9NjWi4dYcGln8Pp',
      'sd_Mj4iQcVYjJsZsXo6',
      'sd_wIB7eTovXq3GrTG9',
      'sd_1ClqRBHEhTyiQxSB',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_vapSDjCOjrZjAk8L(bh, parentSpanInst);
      //appendnew_next_sd_MLqvzEft6eosniIw
      return true;
    }
    return false;
  }
  async sd_Ph40tRNzeQ0NI8PI(bh, parentSpanInst) {
    const nodes = ['sd_Czkhz3NbKvc9OZ2R'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_WRVNyGVbGkg6tkX5(bh, parentSpanInst);
      //appendnew_next_sd_Ph40tRNzeQ0NI8PI
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
