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
import * as sd_f4bcAoI7OEo678uN from './idsutil'; //_splitter_
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
          bh = await this.sd_YjwJlEJ2W1wFiV9m(bh, parentSpanInst);
          //appendnew_next_sd_sP5KT1gAIOa3BiZK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sP5KT1gAIOa3BiZK');
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
          bh = await this.sd_fHDCItytoCGxzuL9(bh, parentSpanInst);
          //appendnew_next_sd_UVTv4OvLUF1K0pD5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UVTv4OvLUF1K0pD5');
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
          bh = await this.sd_bEbwpywyo1ETxzbI(bh, parentSpanInst);
          //appendnew_next_sd_tJ5zDRn9fvuRZcb1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tJ5zDRn9fvuRZcb1');
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
          bh = await this.sd_r0pIgL41xXi3TBlE(bh, parentSpanInst);
          //appendnew_next_sd_6Br4btWwIlgfjQlZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6Br4btWwIlgfjQlZ');
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
          bh = await this.sd_G0QN9vbSpxfrFsvw(bh, parentSpanInst);
          //appendnew_next_sd_3u0C5cDG41CrOxRC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3u0C5cDG41CrOxRC');
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
          bh = await this.sd_cwtFB3RWEiNacmQ3(bh, parentSpanInst);
          //appendnew_next_sd_pzgnNCUt9NToE1F0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pzgnNCUt9NToE1F0');
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
          bh = await this.sd_ARHVhj7v6tQllaEa(bh, parentSpanInst);
          //appendnew_next_sd_6yTswqAHSb4Zfmje
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6yTswqAHSb4Zfmje');
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

  async sd_bEbwpywyo1ETxzbI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bEbwpywyo1ETxzbI',
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
      bh = await this.sd_aEiKByn16FY9926G(bh, parentSpanInst);
      //appendnew_next_sd_bEbwpywyo1ETxzbI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bEbwpywyo1ETxzbI',
        spanInst,
        'sd_bEbwpywyo1ETxzbI'
      );
    }
  }

  async sd_aEiKByn16FY9926G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aEiKByn16FY9926G',
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
        bh = await this.sd_sTO4Yy1pUsW5YwWn(bh, parentSpanInst);
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
        bh = await this.sd_MsV32oTbCmkqF1K6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aEiKByn16FY9926G',
        spanInst,
        'sd_aEiKByn16FY9926G'
      );
    }
  }

  async sd_sTO4Yy1pUsW5YwWn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sTO4Yy1pUsW5YwWn',
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
      bh = await this.sd_t4FmcMbS1umPryiY(bh, parentSpanInst);
      //appendnew_next_sd_sTO4Yy1pUsW5YwWn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sTO4Yy1pUsW5YwWn',
        spanInst,
        'sd_sTO4Yy1pUsW5YwWn'
      );
    }
  }

  async sd_t4FmcMbS1umPryiY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t4FmcMbS1umPryiY',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rNSlrNpXurl4Ga47(bh, parentSpanInst);
      //appendnew_next_sd_t4FmcMbS1umPryiY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t4FmcMbS1umPryiY',
        spanInst,
        'sd_t4FmcMbS1umPryiY'
      );
    }
  }

  async sd_rNSlrNpXurl4Ga47(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rNSlrNpXurl4Ga47',
      parentSpanInst
    );
    try {
      const sd_f4bcAoI7OEo678uNInstance: sd_f4bcAoI7OEo678uN.idsutil =
        sd_f4bcAoI7OEo678uN.idsutil.getInstance();
      let outputVariables =
        await sd_f4bcAoI7OEo678uNInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mf4RqYTxbtEjtFc7(bh, parentSpanInst);
      //appendnew_next_sd_rNSlrNpXurl4Ga47
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rNSlrNpXurl4Ga47',
        spanInst,
        'sd_rNSlrNpXurl4Ga47'
      );
    }
  }

  async sd_Mf4RqYTxbtEjtFc7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mf4RqYTxbtEjtFc7',
      parentSpanInst
    );
    try {
      const sd_f4bcAoI7OEo678uNInstance: sd_f4bcAoI7OEo678uN.idsutil =
        sd_f4bcAoI7OEo678uN.idsutil.getInstance();
      let outputVariables =
        await sd_f4bcAoI7OEo678uNInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SApF5nrX6IxgHXti(bh, parentSpanInst);
      //appendnew_next_sd_Mf4RqYTxbtEjtFc7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mf4RqYTxbtEjtFc7',
        spanInst,
        'sd_Mf4RqYTxbtEjtFc7'
      );
    }
  }

  async sd_SApF5nrX6IxgHXti(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SApF5nrX6IxgHXti',
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
      await this.sd_JuOlnPiOOQfFBCvL(bh, parentSpanInst);
      //appendnew_next_sd_SApF5nrX6IxgHXti
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SApF5nrX6IxgHXti',
        spanInst,
        'sd_SApF5nrX6IxgHXti'
      );
    }
  }

  async sd_JuOlnPiOOQfFBCvL(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JuOlnPiOOQfFBCvL');
    }
  }

  async sd_MsV32oTbCmkqF1K6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MsV32oTbCmkqF1K6',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gzgjrCCTkoNG0iFR(bh, parentSpanInst);
      //appendnew_next_sd_MsV32oTbCmkqF1K6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MsV32oTbCmkqF1K6',
        spanInst,
        'sd_MsV32oTbCmkqF1K6'
      );
    }
  }

  async sd_gzgjrCCTkoNG0iFR(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gzgjrCCTkoNG0iFR');
    }
  }

  async sd_YjwJlEJ2W1wFiV9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YjwJlEJ2W1wFiV9m',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7i8klbmICbFZe5ok(bh, parentSpanInst);
      //appendnew_next_sd_YjwJlEJ2W1wFiV9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YjwJlEJ2W1wFiV9m',
        spanInst,
        'sd_YjwJlEJ2W1wFiV9m'
      );
    }
  }

  async sd_7i8klbmICbFZe5ok(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7i8klbmICbFZe5ok',
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
        'sd_7i8klbmICbFZe5ok',
        spanInst,
        'sd_7i8klbmICbFZe5ok'
      );
    }
  }

  async sd_r0pIgL41xXi3TBlE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r0pIgL41xXi3TBlE',
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
      bh = await this.sd_M3Z5nQRJWnVsFCnd(bh, parentSpanInst);
      //appendnew_next_sd_r0pIgL41xXi3TBlE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r0pIgL41xXi3TBlE',
        spanInst,
        'sd_r0pIgL41xXi3TBlE'
      );
    }
  }

  async sd_M3Z5nQRJWnVsFCnd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M3Z5nQRJWnVsFCnd',
      parentSpanInst
    );
    try {
      const sd_f4bcAoI7OEo678uNInstance: sd_f4bcAoI7OEo678uN.idsutil =
        sd_f4bcAoI7OEo678uN.idsutil.getInstance();
      let outputVariables =
        await sd_f4bcAoI7OEo678uNInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HoWHBGmTmYcifYfn(bh, parentSpanInst);
      //appendnew_next_sd_M3Z5nQRJWnVsFCnd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M3Z5nQRJWnVsFCnd',
        spanInst,
        'sd_M3Z5nQRJWnVsFCnd'
      );
    }
  }

  async sd_HoWHBGmTmYcifYfn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HoWHBGmTmYcifYfn',
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
      bh = await this.sd_YrPZHr7up8TYBlM2(bh, parentSpanInst);
      //appendnew_next_sd_HoWHBGmTmYcifYfn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HoWHBGmTmYcifYfn',
        spanInst,
        'sd_HoWHBGmTmYcifYfn'
      );
    }
  }

  async sd_YrPZHr7up8TYBlM2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YrPZHr7up8TYBlM2',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B3x51LCOQYiSoAhG(bh, parentSpanInst);
      //appendnew_next_sd_YrPZHr7up8TYBlM2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YrPZHr7up8TYBlM2',
        spanInst,
        'sd_YrPZHr7up8TYBlM2'
      );
    }
  }

  async sd_B3x51LCOQYiSoAhG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B3x51LCOQYiSoAhG',
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
        bh = await this.sd_yQlF3bioFy2s9gZX(bh, parentSpanInst);
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
        bh = await this.sd_guVgf9VSjpoBtqP0(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B3x51LCOQYiSoAhG',
        spanInst,
        'sd_B3x51LCOQYiSoAhG'
      );
    }
  }

  async sd_yQlF3bioFy2s9gZX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yQlF3bioFy2s9gZX',
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
      await this.sd_1HaPSWbYfVrgRa9H(bh, parentSpanInst);
      //appendnew_next_sd_yQlF3bioFy2s9gZX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yQlF3bioFy2s9gZX',
        spanInst,
        'sd_yQlF3bioFy2s9gZX'
      );
    }
  }

  async sd_1HaPSWbYfVrgRa9H(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1HaPSWbYfVrgRa9H');
    }
  }

  async sd_guVgf9VSjpoBtqP0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_guVgf9VSjpoBtqP0',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FocK2iQHPY5WiwLa(bh, parentSpanInst);
      //appendnew_next_sd_guVgf9VSjpoBtqP0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_guVgf9VSjpoBtqP0',
        spanInst,
        'sd_guVgf9VSjpoBtqP0'
      );
    }
  }

  async sd_FocK2iQHPY5WiwLa(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FocK2iQHPY5WiwLa');
    }
  }

  async sd_G0QN9vbSpxfrFsvw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G0QN9vbSpxfrFsvw',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_20GqlL8xORu4Ip08(bh, parentSpanInst);
      //appendnew_next_sd_G0QN9vbSpxfrFsvw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G0QN9vbSpxfrFsvw',
        spanInst,
        'sd_G0QN9vbSpxfrFsvw'
      );
    }
  }

  async sd_20GqlL8xORu4Ip08(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_20GqlL8xORu4Ip08');
    }
  }

  async sd_sEGLHSa9Fe14nGgE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sEGLHSa9Fe14nGgE',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sEGLHSa9Fe14nGgE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sEGLHSa9Fe14nGgE',
        spanInst,
        'sd_sEGLHSa9Fe14nGgE'
      );
    }
  }

  async sd_cwtFB3RWEiNacmQ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cwtFB3RWEiNacmQ3',
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
      bh = await this.sd_Wa3yGO6hCQ5xzLxc(bh, parentSpanInst);
      //appendnew_next_sd_cwtFB3RWEiNacmQ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cwtFB3RWEiNacmQ3',
        spanInst,
        'sd_cwtFB3RWEiNacmQ3'
      );
    }
  }

  async sd_Wa3yGO6hCQ5xzLxc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wa3yGO6hCQ5xzLxc',
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
      bh = await this.sd_mXZnecsPFJSQMSmO(bh, parentSpanInst);
      //appendnew_next_sd_Wa3yGO6hCQ5xzLxc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wa3yGO6hCQ5xzLxc',
        spanInst,
        'sd_Wa3yGO6hCQ5xzLxc'
      );
    }
  }

  async sd_mXZnecsPFJSQMSmO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mXZnecsPFJSQMSmO',
      parentSpanInst
    );
    try {
      const sd_f4bcAoI7OEo678uNInstance: sd_f4bcAoI7OEo678uN.idsutil =
        sd_f4bcAoI7OEo678uN.idsutil.getInstance();
      let outputVariables =
        await sd_f4bcAoI7OEo678uNInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dQcrbAW4YbD32dLQ(bh, parentSpanInst);
      //appendnew_next_sd_mXZnecsPFJSQMSmO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mXZnecsPFJSQMSmO',
        spanInst,
        'sd_mXZnecsPFJSQMSmO'
      );
    }
  }

  async sd_dQcrbAW4YbD32dLQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dQcrbAW4YbD32dLQ',
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
        bh = await this.sd_uy87nBoM5138i3vS(bh, parentSpanInst);
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
        bh = await this.sd_oYfbxsc2Lda8SRw5(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dQcrbAW4YbD32dLQ',
        spanInst,
        'sd_dQcrbAW4YbD32dLQ'
      );
    }
  }

  async sd_uy87nBoM5138i3vS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uy87nBoM5138i3vS',
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
      //appendnew_next_sd_uy87nBoM5138i3vS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uy87nBoM5138i3vS',
        spanInst,
        'sd_uy87nBoM5138i3vS'
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
      await this.sd_pZcX5r4dFDXWTmT7(bh, parentSpanInst);
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

  async sd_pZcX5r4dFDXWTmT7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pZcX5r4dFDXWTmT7');
    }
  }

  async sd_oYfbxsc2Lda8SRw5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oYfbxsc2Lda8SRw5',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pZcX5r4dFDXWTmT7(bh, parentSpanInst);
      //appendnew_next_sd_oYfbxsc2Lda8SRw5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oYfbxsc2Lda8SRw5',
        spanInst,
        'sd_oYfbxsc2Lda8SRw5'
      );
    }
  }

  async sd_ARHVhj7v6tQllaEa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ARHVhj7v6tQllaEa',
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
      bh = await this.sd_myHrWsjhT7zqfNg7(bh, parentSpanInst);
      //appendnew_next_sd_ARHVhj7v6tQllaEa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ARHVhj7v6tQllaEa',
        spanInst,
        'sd_ARHVhj7v6tQllaEa'
      );
    }
  }

  async sd_myHrWsjhT7zqfNg7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_myHrWsjhT7zqfNg7',
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
      bh = await this.sd_UYa3OBAr1AwYWggM(bh, parentSpanInst);
      //appendnew_next_sd_myHrWsjhT7zqfNg7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_myHrWsjhT7zqfNg7',
        spanInst,
        'sd_myHrWsjhT7zqfNg7'
      );
    }
  }

  async sd_UYa3OBAr1AwYWggM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UYa3OBAr1AwYWggM',
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
        bh = await this.sd_9MpVrGRsainjiijo(bh, parentSpanInst);
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
        bh = await this.sd_6PjOPHLDJIAqj2Oo(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UYa3OBAr1AwYWggM',
        spanInst,
        'sd_UYa3OBAr1AwYWggM'
      );
    }
  }

  async sd_9MpVrGRsainjiijo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9MpVrGRsainjiijo',
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
      await this.sd_HZk7HWH4F3fW2r7m(bh, parentSpanInst);
      //appendnew_next_sd_9MpVrGRsainjiijo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9MpVrGRsainjiijo',
        spanInst,
        'sd_9MpVrGRsainjiijo'
      );
    }
  }

  async sd_HZk7HWH4F3fW2r7m(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HZk7HWH4F3fW2r7m');
    }
  }

  async sd_6PjOPHLDJIAqj2Oo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6PjOPHLDJIAqj2Oo',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yLt3hRx94pb8Ha8U(bh, parentSpanInst);
      //appendnew_next_sd_6PjOPHLDJIAqj2Oo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6PjOPHLDJIAqj2Oo',
        spanInst,
        'sd_6PjOPHLDJIAqj2Oo'
      );
    }
  }

  async sd_yLt3hRx94pb8Ha8U(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yLt3hRx94pb8Ha8U');
    }
  }

  async sd_fHDCItytoCGxzuL9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fHDCItytoCGxzuL9',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EqW5RwXR0YR8N8wh(bh, parentSpanInst);
      //appendnew_next_sd_fHDCItytoCGxzuL9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fHDCItytoCGxzuL9',
        spanInst,
        'sd_fHDCItytoCGxzuL9'
      );
    }
  }

  async sd_EqW5RwXR0YR8N8wh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EqW5RwXR0YR8N8wh',
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
      bh = await this.sd_KY0d2lWAH6AE70LR(bh, parentSpanInst);
      //appendnew_next_sd_EqW5RwXR0YR8N8wh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EqW5RwXR0YR8N8wh',
        spanInst,
        'sd_EqW5RwXR0YR8N8wh'
      );
    }
  }

  async sd_KY0d2lWAH6AE70LR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KY0d2lWAH6AE70LR',
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
      bh = await this.sd_HMbksQirSXgXH92K(bh, parentSpanInst);
      //appendnew_next_sd_KY0d2lWAH6AE70LR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KY0d2lWAH6AE70LR',
        spanInst,
        'sd_KY0d2lWAH6AE70LR'
      );
    }
  }

  async sd_HMbksQirSXgXH92K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HMbksQirSXgXH92K',
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
        bh = await this.sd_hcxYGPL7QYtOrOx7(bh, parentSpanInst);
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
        bh = await this.sd_hkIsdY302f2s3Us8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HMbksQirSXgXH92K',
        spanInst,
        'sd_HMbksQirSXgXH92K'
      );
    }
  }

  async sd_hcxYGPL7QYtOrOx7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hcxYGPL7QYtOrOx7',
      parentSpanInst
    );
    try {
      const sd_f4bcAoI7OEo678uNInstance: sd_f4bcAoI7OEo678uN.idsutil =
        sd_f4bcAoI7OEo678uN.idsutil.getInstance();
      let outputVariables = await sd_f4bcAoI7OEo678uNInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_COk3TrwPbGRIRkxZ(bh, parentSpanInst);
      //appendnew_next_sd_hcxYGPL7QYtOrOx7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hcxYGPL7QYtOrOx7',
        spanInst,
        'sd_hcxYGPL7QYtOrOx7'
      );
    }
  }

  async sd_COk3TrwPbGRIRkxZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_COk3TrwPbGRIRkxZ',
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
        bh = await this.sd_dKFGq59tHf5fkaoN(bh, parentSpanInst);
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
        bh = await this.sd_NIBCWzSfT3bCPRb3(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_COk3TrwPbGRIRkxZ',
        spanInst,
        'sd_COk3TrwPbGRIRkxZ'
      );
    }
  }

  async sd_dKFGq59tHf5fkaoN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dKFGq59tHf5fkaoN',
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
      bh = await this.sd_LJ9dE3vX7bMzJuhq(bh, parentSpanInst);
      //appendnew_next_sd_dKFGq59tHf5fkaoN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dKFGq59tHf5fkaoN',
        spanInst,
        'sd_dKFGq59tHf5fkaoN'
      );
    }
  }

  async sd_LJ9dE3vX7bMzJuhq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LJ9dE3vX7bMzJuhq',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_puEYhnrxJqiGTn5g(bh, parentSpanInst);
      //appendnew_next_sd_LJ9dE3vX7bMzJuhq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LJ9dE3vX7bMzJuhq',
        spanInst,
        'sd_LJ9dE3vX7bMzJuhq'
      );
    }
  }

  async sd_puEYhnrxJqiGTn5g(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_puEYhnrxJqiGTn5g');
    }
  }

  async sd_NIBCWzSfT3bCPRb3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NIBCWzSfT3bCPRb3',
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
        bh = await this.sd_2uzQz4bsrx4Mw5p2(bh, parentSpanInst);
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
        bh = await this.sd_WcY9pkZ6d5sSlTj8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NIBCWzSfT3bCPRb3',
        spanInst,
        'sd_NIBCWzSfT3bCPRb3'
      );
    }
  }

  async sd_2uzQz4bsrx4Mw5p2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2uzQz4bsrx4Mw5p2',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XbiB6AMpnniiKoY7(bh, parentSpanInst);
      //appendnew_next_sd_2uzQz4bsrx4Mw5p2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2uzQz4bsrx4Mw5p2',
        spanInst,
        'sd_2uzQz4bsrx4Mw5p2'
      );
    }
  }

  async sd_XbiB6AMpnniiKoY7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XbiB6AMpnniiKoY7',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WcY9pkZ6d5sSlTj8(bh, parentSpanInst);
      //appendnew_next_sd_XbiB6AMpnniiKoY7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XbiB6AMpnniiKoY7',
        spanInst,
        'sd_XbiB6AMpnniiKoY7'
      );
    }
  }

  async sd_WcY9pkZ6d5sSlTj8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WcY9pkZ6d5sSlTj8',
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
        'sd_WcY9pkZ6d5sSlTj8',
        spanInst,
        'sd_WcY9pkZ6d5sSlTj8'
      );
    }
  }

  async sd_hkIsdY302f2s3Us8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hkIsdY302f2s3Us8',
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
        bh = await this.sd_cuzPYDv9tvoFr87N(bh, parentSpanInst);
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
        bh = await this.sd_bvp8vdAHeMG6V9Dg(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hkIsdY302f2s3Us8',
        spanInst,
        'sd_hkIsdY302f2s3Us8'
      );
    }
  }

  async sd_cuzPYDv9tvoFr87N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cuzPYDv9tvoFr87N',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_puEYhnrxJqiGTn5g(bh, parentSpanInst);
      //appendnew_next_sd_cuzPYDv9tvoFr87N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cuzPYDv9tvoFr87N',
        spanInst,
        'sd_cuzPYDv9tvoFr87N'
      );
    }
  }

  async sd_bvp8vdAHeMG6V9Dg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bvp8vdAHeMG6V9Dg',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_puEYhnrxJqiGTn5g(bh, parentSpanInst);
      //appendnew_next_sd_bvp8vdAHeMG6V9Dg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bvp8vdAHeMG6V9Dg',
        spanInst,
        'sd_bvp8vdAHeMG6V9Dg'
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
      (await this.sd_RYpRtIFSeS4rtir6(bh, parentSpanInst)) ||
      (await this.sd_TL21SGM3uQBAsiIu(bh, parentSpanInst))
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
  async sd_RYpRtIFSeS4rtir6(bh, parentSpanInst) {
    const nodes = [
      'sd_Mf4RqYTxbtEjtFc7',
      'sd_6Br4btWwIlgfjQlZ',
      'sd_M3Z5nQRJWnVsFCnd',
      'sd_HoWHBGmTmYcifYfn',
      'sd_r0pIgL41xXi3TBlE',
      'sd_B3x51LCOQYiSoAhG',
      'sd_yQlF3bioFy2s9gZX',
      'sd_guVgf9VSjpoBtqP0',
      'sd_1HaPSWbYfVrgRa9H',
      'sd_FocK2iQHPY5WiwLa',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_sEGLHSa9Fe14nGgE(bh, parentSpanInst);
      //appendnew_next_sd_RYpRtIFSeS4rtir6
      return true;
    }
    return false;
  }
  async sd_TL21SGM3uQBAsiIu(bh, parentSpanInst) {
    const nodes = ['sd_hcxYGPL7QYtOrOx7'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_LJ9dE3vX7bMzJuhq(bh, parentSpanInst);
      //appendnew_next_sd_TL21SGM3uQBAsiIu
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
