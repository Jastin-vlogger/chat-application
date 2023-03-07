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
import * as sd_0MNofI4A2sESAmMg from './idsutil'; //_splitter_
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
          bh = await this.sd_dZEMIwMceCLdhuBs(bh, parentSpanInst);
          //appendnew_next_sd_hexfhKrJL26pGhzq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hexfhKrJL26pGhzq');
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
          bh = await this.sd_xye5OpkWDJWWXxGg(bh, parentSpanInst);
          //appendnew_next_sd_ILPdYcl8oxMXtUcj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ILPdYcl8oxMXtUcj');
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
          bh = await this.sd_MOqehUznbJ5liBQK(bh, parentSpanInst);
          //appendnew_next_sd_GI25stlsynKeJzCK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GI25stlsynKeJzCK');
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
          bh = await this.sd_g6lrvqFyQCzCpmrS(bh, parentSpanInst);
          //appendnew_next_sd_aqwhao5m8ZfNvjbX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aqwhao5m8ZfNvjbX');
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
          bh = await this.sd_JEjk0j8sXvf3Aj8l(bh, parentSpanInst);
          //appendnew_next_sd_3bEoNDXYojJQD0HF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3bEoNDXYojJQD0HF');
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
          bh = await this.sd_9EwmxtCAgzZMs9Dh(bh, parentSpanInst);
          //appendnew_next_sd_Xn1J78QlOvKQb3qA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Xn1J78QlOvKQb3qA');
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
          bh = await this.sd_KUM6hDX6a2PjZIwV(bh, parentSpanInst);
          //appendnew_next_sd_moyaESfNlTbonI4z
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_moyaESfNlTbonI4z');
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

  async sd_MOqehUznbJ5liBQK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MOqehUznbJ5liBQK',
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
      bh = await this.sd_fmTQjxqeTiels5bO(bh, parentSpanInst);
      //appendnew_next_sd_MOqehUznbJ5liBQK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MOqehUznbJ5liBQK',
        spanInst,
        'sd_MOqehUznbJ5liBQK'
      );
    }
  }

  async sd_fmTQjxqeTiels5bO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fmTQjxqeTiels5bO',
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
        bh = await this.sd_UisMTCGJr1Td9KB1(bh, parentSpanInst);
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
        bh = await this.sd_6kiCqRXttO7xgys5(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fmTQjxqeTiels5bO',
        spanInst,
        'sd_fmTQjxqeTiels5bO'
      );
    }
  }

  async sd_UisMTCGJr1Td9KB1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UisMTCGJr1Td9KB1',
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
      bh = await this.sd_86ON6HJl2nA9KCKI(bh, parentSpanInst);
      //appendnew_next_sd_UisMTCGJr1Td9KB1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UisMTCGJr1Td9KB1',
        spanInst,
        'sd_UisMTCGJr1Td9KB1'
      );
    }
  }

  async sd_86ON6HJl2nA9KCKI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_86ON6HJl2nA9KCKI',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sHUrpeqezp37Vnla(bh, parentSpanInst);
      //appendnew_next_sd_86ON6HJl2nA9KCKI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_86ON6HJl2nA9KCKI',
        spanInst,
        'sd_86ON6HJl2nA9KCKI'
      );
    }
  }

  async sd_sHUrpeqezp37Vnla(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sHUrpeqezp37Vnla',
      parentSpanInst
    );
    try {
      const sd_0MNofI4A2sESAmMgInstance: sd_0MNofI4A2sESAmMg.idsutil =
        sd_0MNofI4A2sESAmMg.idsutil.getInstance();
      let outputVariables =
        await sd_0MNofI4A2sESAmMgInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PnV15X4f5TDO8hlX(bh, parentSpanInst);
      //appendnew_next_sd_sHUrpeqezp37Vnla
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sHUrpeqezp37Vnla',
        spanInst,
        'sd_sHUrpeqezp37Vnla'
      );
    }
  }

  async sd_PnV15X4f5TDO8hlX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PnV15X4f5TDO8hlX',
      parentSpanInst
    );
    try {
      const sd_0MNofI4A2sESAmMgInstance: sd_0MNofI4A2sESAmMg.idsutil =
        sd_0MNofI4A2sESAmMg.idsutil.getInstance();
      let outputVariables =
        await sd_0MNofI4A2sESAmMgInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zs11RYyreMGldaSR(bh, parentSpanInst);
      //appendnew_next_sd_PnV15X4f5TDO8hlX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PnV15X4f5TDO8hlX',
        spanInst,
        'sd_PnV15X4f5TDO8hlX'
      );
    }
  }

  async sd_zs11RYyreMGldaSR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zs11RYyreMGldaSR',
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
      await this.sd_X2a4w74nMWFCylDj(bh, parentSpanInst);
      //appendnew_next_sd_zs11RYyreMGldaSR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zs11RYyreMGldaSR',
        spanInst,
        'sd_zs11RYyreMGldaSR'
      );
    }
  }

  async sd_X2a4w74nMWFCylDj(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X2a4w74nMWFCylDj');
    }
  }

  async sd_6kiCqRXttO7xgys5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6kiCqRXttO7xgys5',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_r1VUuqLTEv4HDiZW(bh, parentSpanInst);
      //appendnew_next_sd_6kiCqRXttO7xgys5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6kiCqRXttO7xgys5',
        spanInst,
        'sd_6kiCqRXttO7xgys5'
      );
    }
  }

  async sd_r1VUuqLTEv4HDiZW(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r1VUuqLTEv4HDiZW');
    }
  }

  async sd_dZEMIwMceCLdhuBs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dZEMIwMceCLdhuBs',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BumI3G1UIDF9hMuZ(bh, parentSpanInst);
      //appendnew_next_sd_dZEMIwMceCLdhuBs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dZEMIwMceCLdhuBs',
        spanInst,
        'sd_dZEMIwMceCLdhuBs'
      );
    }
  }

  async sd_BumI3G1UIDF9hMuZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BumI3G1UIDF9hMuZ',
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
        'sd_BumI3G1UIDF9hMuZ',
        spanInst,
        'sd_BumI3G1UIDF9hMuZ'
      );
    }
  }

  async sd_g6lrvqFyQCzCpmrS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g6lrvqFyQCzCpmrS',
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
      bh = await this.sd_DmyEY7uXNZfLMtdz(bh, parentSpanInst);
      //appendnew_next_sd_g6lrvqFyQCzCpmrS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g6lrvqFyQCzCpmrS',
        spanInst,
        'sd_g6lrvqFyQCzCpmrS'
      );
    }
  }

  async sd_DmyEY7uXNZfLMtdz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DmyEY7uXNZfLMtdz',
      parentSpanInst
    );
    try {
      const sd_0MNofI4A2sESAmMgInstance: sd_0MNofI4A2sESAmMg.idsutil =
        sd_0MNofI4A2sESAmMg.idsutil.getInstance();
      let outputVariables =
        await sd_0MNofI4A2sESAmMgInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vdrAp4rHuqxmznd6(bh, parentSpanInst);
      //appendnew_next_sd_DmyEY7uXNZfLMtdz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DmyEY7uXNZfLMtdz',
        spanInst,
        'sd_DmyEY7uXNZfLMtdz'
      );
    }
  }

  async sd_vdrAp4rHuqxmznd6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vdrAp4rHuqxmznd6',
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
      bh = await this.sd_CTYGM80wzus1FRc5(bh, parentSpanInst);
      //appendnew_next_sd_vdrAp4rHuqxmznd6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vdrAp4rHuqxmznd6',
        spanInst,
        'sd_vdrAp4rHuqxmznd6'
      );
    }
  }

  async sd_CTYGM80wzus1FRc5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CTYGM80wzus1FRc5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_j5VoHY5VspFyRFCd(bh, parentSpanInst);
      //appendnew_next_sd_CTYGM80wzus1FRc5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CTYGM80wzus1FRc5',
        spanInst,
        'sd_CTYGM80wzus1FRc5'
      );
    }
  }

  async sd_j5VoHY5VspFyRFCd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j5VoHY5VspFyRFCd',
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
        bh = await this.sd_iPvgcCutidOr90sp(bh, parentSpanInst);
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
        bh = await this.sd_cgNquRGcPHHKNnjy(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j5VoHY5VspFyRFCd',
        spanInst,
        'sd_j5VoHY5VspFyRFCd'
      );
    }
  }

  async sd_iPvgcCutidOr90sp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iPvgcCutidOr90sp',
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
      await this.sd_eWp6HMPgXBFbWMlA(bh, parentSpanInst);
      //appendnew_next_sd_iPvgcCutidOr90sp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iPvgcCutidOr90sp',
        spanInst,
        'sd_iPvgcCutidOr90sp'
      );
    }
  }

  async sd_eWp6HMPgXBFbWMlA(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eWp6HMPgXBFbWMlA');
    }
  }

  async sd_cgNquRGcPHHKNnjy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cgNquRGcPHHKNnjy',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VXSb5LIA8QCnUf96(bh, parentSpanInst);
      //appendnew_next_sd_cgNquRGcPHHKNnjy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cgNquRGcPHHKNnjy',
        spanInst,
        'sd_cgNquRGcPHHKNnjy'
      );
    }
  }

  async sd_VXSb5LIA8QCnUf96(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VXSb5LIA8QCnUf96');
    }
  }

  async sd_JEjk0j8sXvf3Aj8l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JEjk0j8sXvf3Aj8l',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_8u6Zna3MgiFf4J34(bh, parentSpanInst);
      //appendnew_next_sd_JEjk0j8sXvf3Aj8l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JEjk0j8sXvf3Aj8l',
        spanInst,
        'sd_JEjk0j8sXvf3Aj8l'
      );
    }
  }

  async sd_8u6Zna3MgiFf4J34(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8u6Zna3MgiFf4J34');
    }
  }

  async sd_U9vWb8rZmxhnSKAb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U9vWb8rZmxhnSKAb',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_U9vWb8rZmxhnSKAb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U9vWb8rZmxhnSKAb',
        spanInst,
        'sd_U9vWb8rZmxhnSKAb'
      );
    }
  }

  async sd_9EwmxtCAgzZMs9Dh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9EwmxtCAgzZMs9Dh',
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
      bh = await this.sd_jmaRWxRs8h9dlToy(bh, parentSpanInst);
      //appendnew_next_sd_9EwmxtCAgzZMs9Dh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9EwmxtCAgzZMs9Dh',
        spanInst,
        'sd_9EwmxtCAgzZMs9Dh'
      );
    }
  }

  async sd_jmaRWxRs8h9dlToy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jmaRWxRs8h9dlToy',
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
      bh = await this.sd_ZECzuxkUUYP4CQkC(bh, parentSpanInst);
      //appendnew_next_sd_jmaRWxRs8h9dlToy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jmaRWxRs8h9dlToy',
        spanInst,
        'sd_jmaRWxRs8h9dlToy'
      );
    }
  }

  async sd_ZECzuxkUUYP4CQkC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZECzuxkUUYP4CQkC',
      parentSpanInst
    );
    try {
      const sd_0MNofI4A2sESAmMgInstance: sd_0MNofI4A2sESAmMg.idsutil =
        sd_0MNofI4A2sESAmMg.idsutil.getInstance();
      let outputVariables =
        await sd_0MNofI4A2sESAmMgInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g3diPsdUM985WYj7(bh, parentSpanInst);
      //appendnew_next_sd_ZECzuxkUUYP4CQkC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZECzuxkUUYP4CQkC',
        spanInst,
        'sd_ZECzuxkUUYP4CQkC'
      );
    }
  }

  async sd_g3diPsdUM985WYj7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g3diPsdUM985WYj7',
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
        bh = await this.sd_IaZg9AaWhNgnRsjA(bh, parentSpanInst);
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
        bh = await this.sd_VApNvDr5PydYqGvN(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g3diPsdUM985WYj7',
        spanInst,
        'sd_g3diPsdUM985WYj7'
      );
    }
  }

  async sd_IaZg9AaWhNgnRsjA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IaZg9AaWhNgnRsjA',
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
      //appendnew_next_sd_IaZg9AaWhNgnRsjA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IaZg9AaWhNgnRsjA',
        spanInst,
        'sd_IaZg9AaWhNgnRsjA'
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
      await this.sd_F4JRi6FdyPhkPKHg(bh, parentSpanInst);
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

  async sd_F4JRi6FdyPhkPKHg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F4JRi6FdyPhkPKHg');
    }
  }

  async sd_VApNvDr5PydYqGvN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VApNvDr5PydYqGvN',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_F4JRi6FdyPhkPKHg(bh, parentSpanInst);
      //appendnew_next_sd_VApNvDr5PydYqGvN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VApNvDr5PydYqGvN',
        spanInst,
        'sd_VApNvDr5PydYqGvN'
      );
    }
  }

  async sd_KUM6hDX6a2PjZIwV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KUM6hDX6a2PjZIwV',
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
      bh = await this.sd_APmIXA94MCNns23q(bh, parentSpanInst);
      //appendnew_next_sd_KUM6hDX6a2PjZIwV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KUM6hDX6a2PjZIwV',
        spanInst,
        'sd_KUM6hDX6a2PjZIwV'
      );
    }
  }

  async sd_APmIXA94MCNns23q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_APmIXA94MCNns23q',
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
      bh = await this.sd_cteHXeIieEWUKLWr(bh, parentSpanInst);
      //appendnew_next_sd_APmIXA94MCNns23q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_APmIXA94MCNns23q',
        spanInst,
        'sd_APmIXA94MCNns23q'
      );
    }
  }

  async sd_cteHXeIieEWUKLWr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cteHXeIieEWUKLWr',
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
        bh = await this.sd_R8hgLApa6eU1PmlT(bh, parentSpanInst);
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
        bh = await this.sd_LT8ckdl6EqW6idGj(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cteHXeIieEWUKLWr',
        spanInst,
        'sd_cteHXeIieEWUKLWr'
      );
    }
  }

  async sd_R8hgLApa6eU1PmlT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R8hgLApa6eU1PmlT',
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
      await this.sd_0kpgq7LErCo0sYaY(bh, parentSpanInst);
      //appendnew_next_sd_R8hgLApa6eU1PmlT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R8hgLApa6eU1PmlT',
        spanInst,
        'sd_R8hgLApa6eU1PmlT'
      );
    }
  }

  async sd_0kpgq7LErCo0sYaY(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0kpgq7LErCo0sYaY');
    }
  }

  async sd_LT8ckdl6EqW6idGj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LT8ckdl6EqW6idGj',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WRSEEN1UUptQg5NV(bh, parentSpanInst);
      //appendnew_next_sd_LT8ckdl6EqW6idGj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LT8ckdl6EqW6idGj',
        spanInst,
        'sd_LT8ckdl6EqW6idGj'
      );
    }
  }

  async sd_WRSEEN1UUptQg5NV(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WRSEEN1UUptQg5NV');
    }
  }

  async sd_xye5OpkWDJWWXxGg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xye5OpkWDJWWXxGg',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cIaZuQIPffuyyydV(bh, parentSpanInst);
      //appendnew_next_sd_xye5OpkWDJWWXxGg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xye5OpkWDJWWXxGg',
        spanInst,
        'sd_xye5OpkWDJWWXxGg'
      );
    }
  }

  async sd_cIaZuQIPffuyyydV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cIaZuQIPffuyyydV',
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
      bh = await this.sd_7zOluHCcY6XhDk0j(bh, parentSpanInst);
      //appendnew_next_sd_cIaZuQIPffuyyydV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cIaZuQIPffuyyydV',
        spanInst,
        'sd_cIaZuQIPffuyyydV'
      );
    }
  }

  async sd_7zOluHCcY6XhDk0j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7zOluHCcY6XhDk0j',
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
      bh = await this.sd_61EhMKEyix0S2S79(bh, parentSpanInst);
      //appendnew_next_sd_7zOluHCcY6XhDk0j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7zOluHCcY6XhDk0j',
        spanInst,
        'sd_7zOluHCcY6XhDk0j'
      );
    }
  }

  async sd_61EhMKEyix0S2S79(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_61EhMKEyix0S2S79',
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
        bh = await this.sd_XcCSihhOYPPWNVlq(bh, parentSpanInst);
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
        bh = await this.sd_liAExkbgezGCCMrL(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_61EhMKEyix0S2S79',
        spanInst,
        'sd_61EhMKEyix0S2S79'
      );
    }
  }

  async sd_XcCSihhOYPPWNVlq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XcCSihhOYPPWNVlq',
      parentSpanInst
    );
    try {
      const sd_0MNofI4A2sESAmMgInstance: sd_0MNofI4A2sESAmMg.idsutil =
        sd_0MNofI4A2sESAmMg.idsutil.getInstance();
      let outputVariables = await sd_0MNofI4A2sESAmMgInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KnSyqk0jCnHaGEV9(bh, parentSpanInst);
      //appendnew_next_sd_XcCSihhOYPPWNVlq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XcCSihhOYPPWNVlq',
        spanInst,
        'sd_XcCSihhOYPPWNVlq'
      );
    }
  }

  async sd_KnSyqk0jCnHaGEV9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KnSyqk0jCnHaGEV9',
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
        bh = await this.sd_fFmV3F7aSYA1beIq(bh, parentSpanInst);
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
        bh = await this.sd_OKeHKAlH2qiGvK01(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KnSyqk0jCnHaGEV9',
        spanInst,
        'sd_KnSyqk0jCnHaGEV9'
      );
    }
  }

  async sd_fFmV3F7aSYA1beIq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fFmV3F7aSYA1beIq',
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
      bh = await this.sd_2b0LL0Of0b7Y9jBS(bh, parentSpanInst);
      //appendnew_next_sd_fFmV3F7aSYA1beIq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fFmV3F7aSYA1beIq',
        spanInst,
        'sd_fFmV3F7aSYA1beIq'
      );
    }
  }

  async sd_2b0LL0Of0b7Y9jBS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2b0LL0Of0b7Y9jBS',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_a4qk0Koxiq5XaToc(bh, parentSpanInst);
      //appendnew_next_sd_2b0LL0Of0b7Y9jBS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2b0LL0Of0b7Y9jBS',
        spanInst,
        'sd_2b0LL0Of0b7Y9jBS'
      );
    }
  }

  async sd_a4qk0Koxiq5XaToc(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a4qk0Koxiq5XaToc');
    }
  }

  async sd_OKeHKAlH2qiGvK01(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OKeHKAlH2qiGvK01',
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
        bh = await this.sd_wUJDz6Wfckd9XyVJ(bh, parentSpanInst);
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
        bh = await this.sd_T1nkxYlclBkLEULz(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OKeHKAlH2qiGvK01',
        spanInst,
        'sd_OKeHKAlH2qiGvK01'
      );
    }
  }

  async sd_wUJDz6Wfckd9XyVJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wUJDz6Wfckd9XyVJ',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A9qNa9W5b4v8yTfX(bh, parentSpanInst);
      //appendnew_next_sd_wUJDz6Wfckd9XyVJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wUJDz6Wfckd9XyVJ',
        spanInst,
        'sd_wUJDz6Wfckd9XyVJ'
      );
    }
  }

  async sd_A9qNa9W5b4v8yTfX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A9qNa9W5b4v8yTfX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_T1nkxYlclBkLEULz(bh, parentSpanInst);
      //appendnew_next_sd_A9qNa9W5b4v8yTfX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9qNa9W5b4v8yTfX',
        spanInst,
        'sd_A9qNa9W5b4v8yTfX'
      );
    }
  }

  async sd_T1nkxYlclBkLEULz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T1nkxYlclBkLEULz',
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
        'sd_T1nkxYlclBkLEULz',
        spanInst,
        'sd_T1nkxYlclBkLEULz'
      );
    }
  }

  async sd_liAExkbgezGCCMrL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_liAExkbgezGCCMrL',
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
        bh = await this.sd_n6pnNraDJaUoP2cx(bh, parentSpanInst);
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
        bh = await this.sd_nck1OoCRhSnDk26r(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_liAExkbgezGCCMrL',
        spanInst,
        'sd_liAExkbgezGCCMrL'
      );
    }
  }

  async sd_n6pnNraDJaUoP2cx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n6pnNraDJaUoP2cx',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_a4qk0Koxiq5XaToc(bh, parentSpanInst);
      //appendnew_next_sd_n6pnNraDJaUoP2cx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n6pnNraDJaUoP2cx',
        spanInst,
        'sd_n6pnNraDJaUoP2cx'
      );
    }
  }

  async sd_nck1OoCRhSnDk26r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nck1OoCRhSnDk26r',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_a4qk0Koxiq5XaToc(bh, parentSpanInst);
      //appendnew_next_sd_nck1OoCRhSnDk26r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nck1OoCRhSnDk26r',
        spanInst,
        'sd_nck1OoCRhSnDk26r'
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
      (await this.sd_wQjFuJ5pRTgbE2kE(bh, parentSpanInst)) ||
      (await this.sd_KKPVbypR8WnB6tOj(bh, parentSpanInst))
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
  async sd_wQjFuJ5pRTgbE2kE(bh, parentSpanInst) {
    const nodes = [
      'sd_PnV15X4f5TDO8hlX',
      'sd_aqwhao5m8ZfNvjbX',
      'sd_DmyEY7uXNZfLMtdz',
      'sd_vdrAp4rHuqxmznd6',
      'sd_g6lrvqFyQCzCpmrS',
      'sd_j5VoHY5VspFyRFCd',
      'sd_iPvgcCutidOr90sp',
      'sd_cgNquRGcPHHKNnjy',
      'sd_eWp6HMPgXBFbWMlA',
      'sd_VXSb5LIA8QCnUf96',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_U9vWb8rZmxhnSKAb(bh, parentSpanInst);
      //appendnew_next_sd_wQjFuJ5pRTgbE2kE
      return true;
    }
    return false;
  }
  async sd_KKPVbypR8WnB6tOj(bh, parentSpanInst) {
    const nodes = ['sd_XcCSihhOYPPWNVlq'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_2b0LL0Of0b7Y9jBS(bh, parentSpanInst);
      //appendnew_next_sd_KKPVbypR8WnB6tOj
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
