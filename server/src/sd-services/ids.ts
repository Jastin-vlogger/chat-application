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
import * as sd_Qz8OrR6P2sAcUp69 from './idsutil'; //_splitter_
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
          bh = await this.sd_ip8OSdxyXGQLO8GB(bh, parentSpanInst);
          //appendnew_next_sd_5z3F1OnxKezDsDvE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5z3F1OnxKezDsDvE');
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
          bh = await this.sd_9Yu4tA0CNHOkg7Dk(bh, parentSpanInst);
          //appendnew_next_sd_Ug4QhllHyQGcvKru
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ug4QhllHyQGcvKru');
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
          bh = await this.sd_xg0warx0CZtoCOGs(bh, parentSpanInst);
          //appendnew_next_sd_yb4MmESM3pGEQmow
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yb4MmESM3pGEQmow');
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
          bh = await this.sd_u7z9qe6EOCS99Gmt(bh, parentSpanInst);
          //appendnew_next_sd_KH3cT1QXsTzYHUzb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KH3cT1QXsTzYHUzb');
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
          bh = await this.sd_HjSVIBn20GddtJON(bh, parentSpanInst);
          //appendnew_next_sd_2e9mDp3Spwc1Bx4M
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2e9mDp3Spwc1Bx4M');
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
          bh = await this.sd_c4Gc2gN8Q2PLlCce(bh, parentSpanInst);
          //appendnew_next_sd_C7gnWcqCLeWqnhR7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_C7gnWcqCLeWqnhR7');
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
          bh = await this.sd_NsdSTEA5h1fQs6Rd(bh, parentSpanInst);
          //appendnew_next_sd_nreza399nJDSGaJA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nreza399nJDSGaJA');
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

  async sd_xg0warx0CZtoCOGs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xg0warx0CZtoCOGs',
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
      bh = await this.sd_Ilxsp3iHCbiHbGZy(bh, parentSpanInst);
      //appendnew_next_sd_xg0warx0CZtoCOGs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xg0warx0CZtoCOGs',
        spanInst,
        'sd_xg0warx0CZtoCOGs'
      );
    }
  }

  async sd_Ilxsp3iHCbiHbGZy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ilxsp3iHCbiHbGZy',
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
        bh = await this.sd_P3ke2jCKbrnhXs3W(bh, parentSpanInst);
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
        bh = await this.sd_AgcZiZC0cD0uOqCQ(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ilxsp3iHCbiHbGZy',
        spanInst,
        'sd_Ilxsp3iHCbiHbGZy'
      );
    }
  }

  async sd_P3ke2jCKbrnhXs3W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P3ke2jCKbrnhXs3W',
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
      bh = await this.sd_UuiH8T6H9ZoliCMd(bh, parentSpanInst);
      //appendnew_next_sd_P3ke2jCKbrnhXs3W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P3ke2jCKbrnhXs3W',
        spanInst,
        'sd_P3ke2jCKbrnhXs3W'
      );
    }
  }

  async sd_UuiH8T6H9ZoliCMd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UuiH8T6H9ZoliCMd',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RqvmB2Z6sQpKmANI(bh, parentSpanInst);
      //appendnew_next_sd_UuiH8T6H9ZoliCMd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UuiH8T6H9ZoliCMd',
        spanInst,
        'sd_UuiH8T6H9ZoliCMd'
      );
    }
  }

  async sd_RqvmB2Z6sQpKmANI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RqvmB2Z6sQpKmANI',
      parentSpanInst
    );
    try {
      const sd_Qz8OrR6P2sAcUp69Instance: sd_Qz8OrR6P2sAcUp69.idsutil =
        sd_Qz8OrR6P2sAcUp69.idsutil.getInstance();
      let outputVariables =
        await sd_Qz8OrR6P2sAcUp69Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fFZK5WHczgCv7UEq(bh, parentSpanInst);
      //appendnew_next_sd_RqvmB2Z6sQpKmANI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RqvmB2Z6sQpKmANI',
        spanInst,
        'sd_RqvmB2Z6sQpKmANI'
      );
    }
  }

  async sd_fFZK5WHczgCv7UEq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fFZK5WHczgCv7UEq',
      parentSpanInst
    );
    try {
      const sd_Qz8OrR6P2sAcUp69Instance: sd_Qz8OrR6P2sAcUp69.idsutil =
        sd_Qz8OrR6P2sAcUp69.idsutil.getInstance();
      let outputVariables =
        await sd_Qz8OrR6P2sAcUp69Instance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jh5x29SyG3eDjN6M(bh, parentSpanInst);
      //appendnew_next_sd_fFZK5WHczgCv7UEq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fFZK5WHczgCv7UEq',
        spanInst,
        'sd_fFZK5WHczgCv7UEq'
      );
    }
  }

  async sd_jh5x29SyG3eDjN6M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jh5x29SyG3eDjN6M',
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
      await this.sd_9f0t0EO80ljB73DR(bh, parentSpanInst);
      //appendnew_next_sd_jh5x29SyG3eDjN6M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jh5x29SyG3eDjN6M',
        spanInst,
        'sd_jh5x29SyG3eDjN6M'
      );
    }
  }

  async sd_9f0t0EO80ljB73DR(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9f0t0EO80ljB73DR');
    }
  }

  async sd_AgcZiZC0cD0uOqCQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AgcZiZC0cD0uOqCQ',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ARGHnnNlKS7N2K6O(bh, parentSpanInst);
      //appendnew_next_sd_AgcZiZC0cD0uOqCQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AgcZiZC0cD0uOqCQ',
        spanInst,
        'sd_AgcZiZC0cD0uOqCQ'
      );
    }
  }

  async sd_ARGHnnNlKS7N2K6O(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ARGHnnNlKS7N2K6O');
    }
  }

  async sd_ip8OSdxyXGQLO8GB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ip8OSdxyXGQLO8GB',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vF9CosvpgL2pX6G4(bh, parentSpanInst);
      //appendnew_next_sd_ip8OSdxyXGQLO8GB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ip8OSdxyXGQLO8GB',
        spanInst,
        'sd_ip8OSdxyXGQLO8GB'
      );
    }
  }

  async sd_vF9CosvpgL2pX6G4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vF9CosvpgL2pX6G4',
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
        'sd_vF9CosvpgL2pX6G4',
        spanInst,
        'sd_vF9CosvpgL2pX6G4'
      );
    }
  }

  async sd_u7z9qe6EOCS99Gmt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u7z9qe6EOCS99Gmt',
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
      bh = await this.sd_KPxET9Zeg09I4uvc(bh, parentSpanInst);
      //appendnew_next_sd_u7z9qe6EOCS99Gmt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u7z9qe6EOCS99Gmt',
        spanInst,
        'sd_u7z9qe6EOCS99Gmt'
      );
    }
  }

  async sd_KPxET9Zeg09I4uvc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KPxET9Zeg09I4uvc',
      parentSpanInst
    );
    try {
      const sd_Qz8OrR6P2sAcUp69Instance: sd_Qz8OrR6P2sAcUp69.idsutil =
        sd_Qz8OrR6P2sAcUp69.idsutil.getInstance();
      let outputVariables =
        await sd_Qz8OrR6P2sAcUp69Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TNGRQBSOKColp2FS(bh, parentSpanInst);
      //appendnew_next_sd_KPxET9Zeg09I4uvc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KPxET9Zeg09I4uvc',
        spanInst,
        'sd_KPxET9Zeg09I4uvc'
      );
    }
  }

  async sd_TNGRQBSOKColp2FS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TNGRQBSOKColp2FS',
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
      bh = await this.sd_kVdWT9R15nxg4vh7(bh, parentSpanInst);
      //appendnew_next_sd_TNGRQBSOKColp2FS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TNGRQBSOKColp2FS',
        spanInst,
        'sd_TNGRQBSOKColp2FS'
      );
    }
  }

  async sd_kVdWT9R15nxg4vh7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kVdWT9R15nxg4vh7',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9BtxrE4ylxEJ2UHv(bh, parentSpanInst);
      //appendnew_next_sd_kVdWT9R15nxg4vh7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kVdWT9R15nxg4vh7',
        spanInst,
        'sd_kVdWT9R15nxg4vh7'
      );
    }
  }

  async sd_9BtxrE4ylxEJ2UHv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9BtxrE4ylxEJ2UHv',
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
        bh = await this.sd_VQALKQLpTjkyo4Oh(bh, parentSpanInst);
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
        bh = await this.sd_MVUA7lp7nuJ16XSS(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9BtxrE4ylxEJ2UHv',
        spanInst,
        'sd_9BtxrE4ylxEJ2UHv'
      );
    }
  }

  async sd_VQALKQLpTjkyo4Oh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VQALKQLpTjkyo4Oh',
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
      await this.sd_1Z6xHE6aycUVvs9a(bh, parentSpanInst);
      //appendnew_next_sd_VQALKQLpTjkyo4Oh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VQALKQLpTjkyo4Oh',
        spanInst,
        'sd_VQALKQLpTjkyo4Oh'
      );
    }
  }

  async sd_1Z6xHE6aycUVvs9a(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Z6xHE6aycUVvs9a');
    }
  }

  async sd_MVUA7lp7nuJ16XSS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MVUA7lp7nuJ16XSS',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_INMe3k5ZBQbOYniz(bh, parentSpanInst);
      //appendnew_next_sd_MVUA7lp7nuJ16XSS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MVUA7lp7nuJ16XSS',
        spanInst,
        'sd_MVUA7lp7nuJ16XSS'
      );
    }
  }

  async sd_INMe3k5ZBQbOYniz(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_INMe3k5ZBQbOYniz');
    }
  }

  async sd_HjSVIBn20GddtJON(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HjSVIBn20GddtJON',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_zZk8XYk6q1hvOIRR(bh, parentSpanInst);
      //appendnew_next_sd_HjSVIBn20GddtJON
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HjSVIBn20GddtJON',
        spanInst,
        'sd_HjSVIBn20GddtJON'
      );
    }
  }

  async sd_zZk8XYk6q1hvOIRR(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zZk8XYk6q1hvOIRR');
    }
  }

  async sd_mDIDN7prdNqYdAm8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mDIDN7prdNqYdAm8',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mDIDN7prdNqYdAm8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mDIDN7prdNqYdAm8',
        spanInst,
        'sd_mDIDN7prdNqYdAm8'
      );
    }
  }

  async sd_c4Gc2gN8Q2PLlCce(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c4Gc2gN8Q2PLlCce',
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
      bh = await this.sd_nV5INUqwne4aa4sv(bh, parentSpanInst);
      //appendnew_next_sd_c4Gc2gN8Q2PLlCce
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c4Gc2gN8Q2PLlCce',
        spanInst,
        'sd_c4Gc2gN8Q2PLlCce'
      );
    }
  }

  async sd_nV5INUqwne4aa4sv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nV5INUqwne4aa4sv',
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
      bh = await this.sd_jPuPuBxs5oPTNQp4(bh, parentSpanInst);
      //appendnew_next_sd_nV5INUqwne4aa4sv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nV5INUqwne4aa4sv',
        spanInst,
        'sd_nV5INUqwne4aa4sv'
      );
    }
  }

  async sd_jPuPuBxs5oPTNQp4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jPuPuBxs5oPTNQp4',
      parentSpanInst
    );
    try {
      const sd_Qz8OrR6P2sAcUp69Instance: sd_Qz8OrR6P2sAcUp69.idsutil =
        sd_Qz8OrR6P2sAcUp69.idsutil.getInstance();
      let outputVariables =
        await sd_Qz8OrR6P2sAcUp69Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Tl96vLyTtRQkwBCj(bh, parentSpanInst);
      //appendnew_next_sd_jPuPuBxs5oPTNQp4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jPuPuBxs5oPTNQp4',
        spanInst,
        'sd_jPuPuBxs5oPTNQp4'
      );
    }
  }

  async sd_Tl96vLyTtRQkwBCj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tl96vLyTtRQkwBCj',
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
        bh = await this.sd_OWWO1ef64Aigs0uo(bh, parentSpanInst);
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
        bh = await this.sd_JkiqAkJY8w72PIFr(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tl96vLyTtRQkwBCj',
        spanInst,
        'sd_Tl96vLyTtRQkwBCj'
      );
    }
  }

  async sd_OWWO1ef64Aigs0uo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OWWO1ef64Aigs0uo',
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
      //appendnew_next_sd_OWWO1ef64Aigs0uo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OWWO1ef64Aigs0uo',
        spanInst,
        'sd_OWWO1ef64Aigs0uo'
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
      await this.sd_TuSfMUi7WaC7PemQ(bh, parentSpanInst);
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

  async sd_TuSfMUi7WaC7PemQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TuSfMUi7WaC7PemQ');
    }
  }

  async sd_JkiqAkJY8w72PIFr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JkiqAkJY8w72PIFr',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TuSfMUi7WaC7PemQ(bh, parentSpanInst);
      //appendnew_next_sd_JkiqAkJY8w72PIFr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JkiqAkJY8w72PIFr',
        spanInst,
        'sd_JkiqAkJY8w72PIFr'
      );
    }
  }

  async sd_NsdSTEA5h1fQs6Rd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NsdSTEA5h1fQs6Rd',
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
      bh = await this.sd_3Sria93kvVNWXWJ0(bh, parentSpanInst);
      //appendnew_next_sd_NsdSTEA5h1fQs6Rd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NsdSTEA5h1fQs6Rd',
        spanInst,
        'sd_NsdSTEA5h1fQs6Rd'
      );
    }
  }

  async sd_3Sria93kvVNWXWJ0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3Sria93kvVNWXWJ0',
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
      bh = await this.sd_81rvvGx5a5fupuEl(bh, parentSpanInst);
      //appendnew_next_sd_3Sria93kvVNWXWJ0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Sria93kvVNWXWJ0',
        spanInst,
        'sd_3Sria93kvVNWXWJ0'
      );
    }
  }

  async sd_81rvvGx5a5fupuEl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_81rvvGx5a5fupuEl',
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
        bh = await this.sd_09kstcbo728Ddmmx(bh, parentSpanInst);
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
        bh = await this.sd_Z7u6tPjGnrNOwviW(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_81rvvGx5a5fupuEl',
        spanInst,
        'sd_81rvvGx5a5fupuEl'
      );
    }
  }

  async sd_09kstcbo728Ddmmx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_09kstcbo728Ddmmx',
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
      await this.sd_c9zrXOp9tCGhPYFc(bh, parentSpanInst);
      //appendnew_next_sd_09kstcbo728Ddmmx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_09kstcbo728Ddmmx',
        spanInst,
        'sd_09kstcbo728Ddmmx'
      );
    }
  }

  async sd_c9zrXOp9tCGhPYFc(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c9zrXOp9tCGhPYFc');
    }
  }

  async sd_Z7u6tPjGnrNOwviW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z7u6tPjGnrNOwviW',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oDjME4mtHNNalpth(bh, parentSpanInst);
      //appendnew_next_sd_Z7u6tPjGnrNOwviW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z7u6tPjGnrNOwviW',
        spanInst,
        'sd_Z7u6tPjGnrNOwviW'
      );
    }
  }

  async sd_oDjME4mtHNNalpth(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oDjME4mtHNNalpth');
    }
  }

  async sd_9Yu4tA0CNHOkg7Dk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Yu4tA0CNHOkg7Dk',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HUFt9CiL5P2si5cf(bh, parentSpanInst);
      //appendnew_next_sd_9Yu4tA0CNHOkg7Dk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Yu4tA0CNHOkg7Dk',
        spanInst,
        'sd_9Yu4tA0CNHOkg7Dk'
      );
    }
  }

  async sd_HUFt9CiL5P2si5cf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HUFt9CiL5P2si5cf',
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
      bh = await this.sd_9uFefydOZX53kKa1(bh, parentSpanInst);
      //appendnew_next_sd_HUFt9CiL5P2si5cf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HUFt9CiL5P2si5cf',
        spanInst,
        'sd_HUFt9CiL5P2si5cf'
      );
    }
  }

  async sd_9uFefydOZX53kKa1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9uFefydOZX53kKa1',
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
      bh = await this.sd_buCEmdESwMnjfPNy(bh, parentSpanInst);
      //appendnew_next_sd_9uFefydOZX53kKa1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9uFefydOZX53kKa1',
        spanInst,
        'sd_9uFefydOZX53kKa1'
      );
    }
  }

  async sd_buCEmdESwMnjfPNy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_buCEmdESwMnjfPNy',
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
        bh = await this.sd_QcjW2JTnDrjDBt2g(bh, parentSpanInst);
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
        bh = await this.sd_cZm4fv2NKy2OF0Oc(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_buCEmdESwMnjfPNy',
        spanInst,
        'sd_buCEmdESwMnjfPNy'
      );
    }
  }

  async sd_QcjW2JTnDrjDBt2g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QcjW2JTnDrjDBt2g',
      parentSpanInst
    );
    try {
      const sd_Qz8OrR6P2sAcUp69Instance: sd_Qz8OrR6P2sAcUp69.idsutil =
        sd_Qz8OrR6P2sAcUp69.idsutil.getInstance();
      let outputVariables = await sd_Qz8OrR6P2sAcUp69Instance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TbDJz5qZunOYktG1(bh, parentSpanInst);
      //appendnew_next_sd_QcjW2JTnDrjDBt2g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QcjW2JTnDrjDBt2g',
        spanInst,
        'sd_QcjW2JTnDrjDBt2g'
      );
    }
  }

  async sd_TbDJz5qZunOYktG1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TbDJz5qZunOYktG1',
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
        bh = await this.sd_5Vl805ADEYbAWx58(bh, parentSpanInst);
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
        bh = await this.sd_6QVNciGm07U1MubJ(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TbDJz5qZunOYktG1',
        spanInst,
        'sd_TbDJz5qZunOYktG1'
      );
    }
  }

  async sd_5Vl805ADEYbAWx58(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5Vl805ADEYbAWx58',
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
      bh = await this.sd_5JWpzCi5Bmo7GiT1(bh, parentSpanInst);
      //appendnew_next_sd_5Vl805ADEYbAWx58
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5Vl805ADEYbAWx58',
        spanInst,
        'sd_5Vl805ADEYbAWx58'
      );
    }
  }

  async sd_5JWpzCi5Bmo7GiT1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5JWpzCi5Bmo7GiT1',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6GIA6CYgyjNIhZDf(bh, parentSpanInst);
      //appendnew_next_sd_5JWpzCi5Bmo7GiT1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5JWpzCi5Bmo7GiT1',
        spanInst,
        'sd_5JWpzCi5Bmo7GiT1'
      );
    }
  }

  async sd_6GIA6CYgyjNIhZDf(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6GIA6CYgyjNIhZDf');
    }
  }

  async sd_6QVNciGm07U1MubJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6QVNciGm07U1MubJ',
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
        bh = await this.sd_v1NGKub5Rg3EucHy(bh, parentSpanInst);
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
        bh = await this.sd_tkmtjTx7hpHXyM0Z(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6QVNciGm07U1MubJ',
        spanInst,
        'sd_6QVNciGm07U1MubJ'
      );
    }
  }

  async sd_v1NGKub5Rg3EucHy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v1NGKub5Rg3EucHy',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LcU2D3IP0PAzQIfc(bh, parentSpanInst);
      //appendnew_next_sd_v1NGKub5Rg3EucHy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v1NGKub5Rg3EucHy',
        spanInst,
        'sd_v1NGKub5Rg3EucHy'
      );
    }
  }

  async sd_LcU2D3IP0PAzQIfc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LcU2D3IP0PAzQIfc',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tkmtjTx7hpHXyM0Z(bh, parentSpanInst);
      //appendnew_next_sd_LcU2D3IP0PAzQIfc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LcU2D3IP0PAzQIfc',
        spanInst,
        'sd_LcU2D3IP0PAzQIfc'
      );
    }
  }

  async sd_tkmtjTx7hpHXyM0Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tkmtjTx7hpHXyM0Z',
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
        'sd_tkmtjTx7hpHXyM0Z',
        spanInst,
        'sd_tkmtjTx7hpHXyM0Z'
      );
    }
  }

  async sd_cZm4fv2NKy2OF0Oc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cZm4fv2NKy2OF0Oc',
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
        bh = await this.sd_Ye4qa83FJqMjqhjt(bh, parentSpanInst);
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
        bh = await this.sd_LxXGzo3uGq0gguZf(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cZm4fv2NKy2OF0Oc',
        spanInst,
        'sd_cZm4fv2NKy2OF0Oc'
      );
    }
  }

  async sd_Ye4qa83FJqMjqhjt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ye4qa83FJqMjqhjt',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6GIA6CYgyjNIhZDf(bh, parentSpanInst);
      //appendnew_next_sd_Ye4qa83FJqMjqhjt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ye4qa83FJqMjqhjt',
        spanInst,
        'sd_Ye4qa83FJqMjqhjt'
      );
    }
  }

  async sd_LxXGzo3uGq0gguZf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LxXGzo3uGq0gguZf',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6GIA6CYgyjNIhZDf(bh, parentSpanInst);
      //appendnew_next_sd_LxXGzo3uGq0gguZf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LxXGzo3uGq0gguZf',
        spanInst,
        'sd_LxXGzo3uGq0gguZf'
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
      (await this.sd_227SfJKJyHjjSoA5(bh, parentSpanInst)) ||
      (await this.sd_iis4BR8VYkbcZmQa(bh, parentSpanInst))
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
  async sd_227SfJKJyHjjSoA5(bh, parentSpanInst) {
    const nodes = [
      'sd_fFZK5WHczgCv7UEq',
      'sd_KH3cT1QXsTzYHUzb',
      'sd_KPxET9Zeg09I4uvc',
      'sd_TNGRQBSOKColp2FS',
      'sd_u7z9qe6EOCS99Gmt',
      'sd_9BtxrE4ylxEJ2UHv',
      'sd_VQALKQLpTjkyo4Oh',
      'sd_MVUA7lp7nuJ16XSS',
      'sd_1Z6xHE6aycUVvs9a',
      'sd_INMe3k5ZBQbOYniz',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_mDIDN7prdNqYdAm8(bh, parentSpanInst);
      //appendnew_next_sd_227SfJKJyHjjSoA5
      return true;
    }
    return false;
  }
  async sd_iis4BR8VYkbcZmQa(bh, parentSpanInst) {
    const nodes = ['sd_QcjW2JTnDrjDBt2g'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5JWpzCi5Bmo7GiT1(bh, parentSpanInst);
      //appendnew_next_sd_iis4BR8VYkbcZmQa
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
