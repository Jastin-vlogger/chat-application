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
import * as sd_IY1gO6W6XvXqWad3 from './idsutil'; //_splitter_
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
          bh = await this.sd_FbAr03ClXEuqtXDh(bh, parentSpanInst);
          //appendnew_next_sd_T3weJDqtd41pp80f
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_T3weJDqtd41pp80f');
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
          bh = await this.sd_fxUs71SGI5F04fW0(bh, parentSpanInst);
          //appendnew_next_sd_AMqXg8wUxGci6nfr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AMqXg8wUxGci6nfr');
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
          bh = await this.sd_MGlIVibjEOyuJd28(bh, parentSpanInst);
          //appendnew_next_sd_e7pRijjLzjHjSC52
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_e7pRijjLzjHjSC52');
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
          bh = await this.sd_EjuOSrsP0xcSApH0(bh, parentSpanInst);
          //appendnew_next_sd_CLia022tqFuDUuud
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CLia022tqFuDUuud');
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
          bh = await this.sd_aCrwCJR7YSR5Krbp(bh, parentSpanInst);
          //appendnew_next_sd_0nuGKM5qlwzdFIOE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0nuGKM5qlwzdFIOE');
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
          bh = await this.sd_IckwtOVGshovvjWv(bh, parentSpanInst);
          //appendnew_next_sd_vKexZiJMmHRxpLlT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vKexZiJMmHRxpLlT');
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
          bh = await this.sd_2009SQ6sbz2TMNz7(bh, parentSpanInst);
          //appendnew_next_sd_O8JDBNDCfLxl8ZP2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_O8JDBNDCfLxl8ZP2');
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

  async sd_MGlIVibjEOyuJd28(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MGlIVibjEOyuJd28',
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
      bh = await this.sd_82BSik43dYneQCiA(bh, parentSpanInst);
      //appendnew_next_sd_MGlIVibjEOyuJd28
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MGlIVibjEOyuJd28',
        spanInst,
        'sd_MGlIVibjEOyuJd28'
      );
    }
  }

  async sd_82BSik43dYneQCiA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_82BSik43dYneQCiA',
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
        bh = await this.sd_p9ttTLKB79iOOxjS(bh, parentSpanInst);
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
        bh = await this.sd_JIKlxOFM2JiCTnpw(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_82BSik43dYneQCiA',
        spanInst,
        'sd_82BSik43dYneQCiA'
      );
    }
  }

  async sd_p9ttTLKB79iOOxjS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p9ttTLKB79iOOxjS',
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
      bh = await this.sd_4JVhTRDgP1WF8pBn(bh, parentSpanInst);
      //appendnew_next_sd_p9ttTLKB79iOOxjS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p9ttTLKB79iOOxjS',
        spanInst,
        'sd_p9ttTLKB79iOOxjS'
      );
    }
  }

  async sd_4JVhTRDgP1WF8pBn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4JVhTRDgP1WF8pBn',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tvWVqTT0a2WsMwPX(bh, parentSpanInst);
      //appendnew_next_sd_4JVhTRDgP1WF8pBn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4JVhTRDgP1WF8pBn',
        spanInst,
        'sd_4JVhTRDgP1WF8pBn'
      );
    }
  }

  async sd_tvWVqTT0a2WsMwPX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tvWVqTT0a2WsMwPX',
      parentSpanInst
    );
    try {
      const sd_IY1gO6W6XvXqWad3Instance: sd_IY1gO6W6XvXqWad3.idsutil =
        sd_IY1gO6W6XvXqWad3.idsutil.getInstance();
      let outputVariables =
        await sd_IY1gO6W6XvXqWad3Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RDfGg2DvjpyI2hbE(bh, parentSpanInst);
      //appendnew_next_sd_tvWVqTT0a2WsMwPX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tvWVqTT0a2WsMwPX',
        spanInst,
        'sd_tvWVqTT0a2WsMwPX'
      );
    }
  }

  async sd_RDfGg2DvjpyI2hbE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RDfGg2DvjpyI2hbE',
      parentSpanInst
    );
    try {
      const sd_IY1gO6W6XvXqWad3Instance: sd_IY1gO6W6XvXqWad3.idsutil =
        sd_IY1gO6W6XvXqWad3.idsutil.getInstance();
      let outputVariables =
        await sd_IY1gO6W6XvXqWad3Instance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yXI1E7CyROTaUkez(bh, parentSpanInst);
      //appendnew_next_sd_RDfGg2DvjpyI2hbE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RDfGg2DvjpyI2hbE',
        spanInst,
        'sd_RDfGg2DvjpyI2hbE'
      );
    }
  }

  async sd_yXI1E7CyROTaUkez(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yXI1E7CyROTaUkez',
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
      await this.sd_IqGQ67A4D1sLSyFE(bh, parentSpanInst);
      //appendnew_next_sd_yXI1E7CyROTaUkez
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yXI1E7CyROTaUkez',
        spanInst,
        'sd_yXI1E7CyROTaUkez'
      );
    }
  }

  async sd_IqGQ67A4D1sLSyFE(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IqGQ67A4D1sLSyFE');
    }
  }

  async sd_JIKlxOFM2JiCTnpw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JIKlxOFM2JiCTnpw',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Mrd9jLJzqzxvsXFh(bh, parentSpanInst);
      //appendnew_next_sd_JIKlxOFM2JiCTnpw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JIKlxOFM2JiCTnpw',
        spanInst,
        'sd_JIKlxOFM2JiCTnpw'
      );
    }
  }

  async sd_Mrd9jLJzqzxvsXFh(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mrd9jLJzqzxvsXFh');
    }
  }

  async sd_FbAr03ClXEuqtXDh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FbAr03ClXEuqtXDh',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EmfBmrf33m4N94Nm(bh, parentSpanInst);
      //appendnew_next_sd_FbAr03ClXEuqtXDh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbAr03ClXEuqtXDh',
        spanInst,
        'sd_FbAr03ClXEuqtXDh'
      );
    }
  }

  async sd_EmfBmrf33m4N94Nm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EmfBmrf33m4N94Nm',
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
        'sd_EmfBmrf33m4N94Nm',
        spanInst,
        'sd_EmfBmrf33m4N94Nm'
      );
    }
  }

  async sd_EjuOSrsP0xcSApH0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EjuOSrsP0xcSApH0',
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
      bh = await this.sd_KCFrrDXCdHJUn6k4(bh, parentSpanInst);
      //appendnew_next_sd_EjuOSrsP0xcSApH0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EjuOSrsP0xcSApH0',
        spanInst,
        'sd_EjuOSrsP0xcSApH0'
      );
    }
  }

  async sd_KCFrrDXCdHJUn6k4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KCFrrDXCdHJUn6k4',
      parentSpanInst
    );
    try {
      const sd_IY1gO6W6XvXqWad3Instance: sd_IY1gO6W6XvXqWad3.idsutil =
        sd_IY1gO6W6XvXqWad3.idsutil.getInstance();
      let outputVariables =
        await sd_IY1gO6W6XvXqWad3Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OoGzlLgCXBlOMnnT(bh, parentSpanInst);
      //appendnew_next_sd_KCFrrDXCdHJUn6k4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KCFrrDXCdHJUn6k4',
        spanInst,
        'sd_KCFrrDXCdHJUn6k4'
      );
    }
  }

  async sd_OoGzlLgCXBlOMnnT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OoGzlLgCXBlOMnnT',
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
      bh = await this.sd_0qq2RQTA3KTJRoHF(bh, parentSpanInst);
      //appendnew_next_sd_OoGzlLgCXBlOMnnT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OoGzlLgCXBlOMnnT',
        spanInst,
        'sd_OoGzlLgCXBlOMnnT'
      );
    }
  }

  async sd_0qq2RQTA3KTJRoHF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0qq2RQTA3KTJRoHF',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TRPvUssrgwNCSwxZ(bh, parentSpanInst);
      //appendnew_next_sd_0qq2RQTA3KTJRoHF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0qq2RQTA3KTJRoHF',
        spanInst,
        'sd_0qq2RQTA3KTJRoHF'
      );
    }
  }

  async sd_TRPvUssrgwNCSwxZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TRPvUssrgwNCSwxZ',
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
        bh = await this.sd_bUNuniZMEEtWwtDH(bh, parentSpanInst);
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
        bh = await this.sd_svbs08PxQngaheyV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TRPvUssrgwNCSwxZ',
        spanInst,
        'sd_TRPvUssrgwNCSwxZ'
      );
    }
  }

  async sd_bUNuniZMEEtWwtDH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bUNuniZMEEtWwtDH',
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
      await this.sd_m4WZi39rt1KXY8lx(bh, parentSpanInst);
      //appendnew_next_sd_bUNuniZMEEtWwtDH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bUNuniZMEEtWwtDH',
        spanInst,
        'sd_bUNuniZMEEtWwtDH'
      );
    }
  }

  async sd_m4WZi39rt1KXY8lx(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m4WZi39rt1KXY8lx');
    }
  }

  async sd_svbs08PxQngaheyV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_svbs08PxQngaheyV',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_keH9yEmT13heygqS(bh, parentSpanInst);
      //appendnew_next_sd_svbs08PxQngaheyV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_svbs08PxQngaheyV',
        spanInst,
        'sd_svbs08PxQngaheyV'
      );
    }
  }

  async sd_keH9yEmT13heygqS(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_keH9yEmT13heygqS');
    }
  }

  async sd_aCrwCJR7YSR5Krbp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aCrwCJR7YSR5Krbp',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_cdIjj3pKlagWQkz8(bh, parentSpanInst);
      //appendnew_next_sd_aCrwCJR7YSR5Krbp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aCrwCJR7YSR5Krbp',
        spanInst,
        'sd_aCrwCJR7YSR5Krbp'
      );
    }
  }

  async sd_cdIjj3pKlagWQkz8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cdIjj3pKlagWQkz8');
    }
  }

  async sd_9v6S9MaLccIMvMhN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9v6S9MaLccIMvMhN',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9v6S9MaLccIMvMhN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9v6S9MaLccIMvMhN',
        spanInst,
        'sd_9v6S9MaLccIMvMhN'
      );
    }
  }

  async sd_IckwtOVGshovvjWv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IckwtOVGshovvjWv',
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
      bh = await this.sd_pbE13pJEd0IezGT9(bh, parentSpanInst);
      //appendnew_next_sd_IckwtOVGshovvjWv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IckwtOVGshovvjWv',
        spanInst,
        'sd_IckwtOVGshovvjWv'
      );
    }
  }

  async sd_pbE13pJEd0IezGT9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pbE13pJEd0IezGT9',
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
      bh = await this.sd_HSPt9KhGQkg6qK83(bh, parentSpanInst);
      //appendnew_next_sd_pbE13pJEd0IezGT9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pbE13pJEd0IezGT9',
        spanInst,
        'sd_pbE13pJEd0IezGT9'
      );
    }
  }

  async sd_HSPt9KhGQkg6qK83(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HSPt9KhGQkg6qK83',
      parentSpanInst
    );
    try {
      const sd_IY1gO6W6XvXqWad3Instance: sd_IY1gO6W6XvXqWad3.idsutil =
        sd_IY1gO6W6XvXqWad3.idsutil.getInstance();
      let outputVariables =
        await sd_IY1gO6W6XvXqWad3Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vDfVU7vpin60UirE(bh, parentSpanInst);
      //appendnew_next_sd_HSPt9KhGQkg6qK83
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HSPt9KhGQkg6qK83',
        spanInst,
        'sd_HSPt9KhGQkg6qK83'
      );
    }
  }

  async sd_vDfVU7vpin60UirE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vDfVU7vpin60UirE',
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
        bh = await this.sd_HX8CMmn9CUooZWK1(bh, parentSpanInst);
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
        bh = await this.sd_FqByI87bCEGVt7gO(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vDfVU7vpin60UirE',
        spanInst,
        'sd_vDfVU7vpin60UirE'
      );
    }
  }

  async sd_HX8CMmn9CUooZWK1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HX8CMmn9CUooZWK1',
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
      //appendnew_next_sd_HX8CMmn9CUooZWK1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HX8CMmn9CUooZWK1',
        spanInst,
        'sd_HX8CMmn9CUooZWK1'
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
      await this.sd_rTgA65BMTycvm2Pz(bh, parentSpanInst);
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

  async sd_rTgA65BMTycvm2Pz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rTgA65BMTycvm2Pz');
    }
  }

  async sd_FqByI87bCEGVt7gO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FqByI87bCEGVt7gO',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rTgA65BMTycvm2Pz(bh, parentSpanInst);
      //appendnew_next_sd_FqByI87bCEGVt7gO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FqByI87bCEGVt7gO',
        spanInst,
        'sd_FqByI87bCEGVt7gO'
      );
    }
  }

  async sd_2009SQ6sbz2TMNz7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2009SQ6sbz2TMNz7',
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
      bh = await this.sd_S9RSazsFbTZu8LdE(bh, parentSpanInst);
      //appendnew_next_sd_2009SQ6sbz2TMNz7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2009SQ6sbz2TMNz7',
        spanInst,
        'sd_2009SQ6sbz2TMNz7'
      );
    }
  }

  async sd_S9RSazsFbTZu8LdE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S9RSazsFbTZu8LdE',
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
      bh = await this.sd_KKnJrYSjT5rU9Dzr(bh, parentSpanInst);
      //appendnew_next_sd_S9RSazsFbTZu8LdE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S9RSazsFbTZu8LdE',
        spanInst,
        'sd_S9RSazsFbTZu8LdE'
      );
    }
  }

  async sd_KKnJrYSjT5rU9Dzr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KKnJrYSjT5rU9Dzr',
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
        bh = await this.sd_vN5t2GW3uvhIvD2f(bh, parentSpanInst);
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
        bh = await this.sd_0AxwONRjinFsQmT2(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KKnJrYSjT5rU9Dzr',
        spanInst,
        'sd_KKnJrYSjT5rU9Dzr'
      );
    }
  }

  async sd_vN5t2GW3uvhIvD2f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vN5t2GW3uvhIvD2f',
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
      await this.sd_y9ny6cpKuGZUJvH1(bh, parentSpanInst);
      //appendnew_next_sd_vN5t2GW3uvhIvD2f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vN5t2GW3uvhIvD2f',
        spanInst,
        'sd_vN5t2GW3uvhIvD2f'
      );
    }
  }

  async sd_y9ny6cpKuGZUJvH1(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y9ny6cpKuGZUJvH1');
    }
  }

  async sd_0AxwONRjinFsQmT2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0AxwONRjinFsQmT2',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_h8PGvQHP8lPajXRZ(bh, parentSpanInst);
      //appendnew_next_sd_0AxwONRjinFsQmT2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0AxwONRjinFsQmT2',
        spanInst,
        'sd_0AxwONRjinFsQmT2'
      );
    }
  }

  async sd_h8PGvQHP8lPajXRZ(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h8PGvQHP8lPajXRZ');
    }
  }

  async sd_fxUs71SGI5F04fW0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fxUs71SGI5F04fW0',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AVWFdl9vGqNlTxON(bh, parentSpanInst);
      //appendnew_next_sd_fxUs71SGI5F04fW0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fxUs71SGI5F04fW0',
        spanInst,
        'sd_fxUs71SGI5F04fW0'
      );
    }
  }

  async sd_AVWFdl9vGqNlTxON(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AVWFdl9vGqNlTxON',
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
      bh = await this.sd_req0UjB4Cq6MSr3R(bh, parentSpanInst);
      //appendnew_next_sd_AVWFdl9vGqNlTxON
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AVWFdl9vGqNlTxON',
        spanInst,
        'sd_AVWFdl9vGqNlTxON'
      );
    }
  }

  async sd_req0UjB4Cq6MSr3R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_req0UjB4Cq6MSr3R',
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
      bh = await this.sd_4HHi3qIUHpBhlO5p(bh, parentSpanInst);
      //appendnew_next_sd_req0UjB4Cq6MSr3R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_req0UjB4Cq6MSr3R',
        spanInst,
        'sd_req0UjB4Cq6MSr3R'
      );
    }
  }

  async sd_4HHi3qIUHpBhlO5p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4HHi3qIUHpBhlO5p',
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
        bh = await this.sd_dMW4tD6UhZNrxVJU(bh, parentSpanInst);
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
        bh = await this.sd_2zNkC28jE7SnPWGA(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4HHi3qIUHpBhlO5p',
        spanInst,
        'sd_4HHi3qIUHpBhlO5p'
      );
    }
  }

  async sd_dMW4tD6UhZNrxVJU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dMW4tD6UhZNrxVJU',
      parentSpanInst
    );
    try {
      const sd_IY1gO6W6XvXqWad3Instance: sd_IY1gO6W6XvXqWad3.idsutil =
        sd_IY1gO6W6XvXqWad3.idsutil.getInstance();
      let outputVariables = await sd_IY1gO6W6XvXqWad3Instance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fp8DBmGCexTgYSIZ(bh, parentSpanInst);
      //appendnew_next_sd_dMW4tD6UhZNrxVJU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dMW4tD6UhZNrxVJU',
        spanInst,
        'sd_dMW4tD6UhZNrxVJU'
      );
    }
  }

  async sd_Fp8DBmGCexTgYSIZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fp8DBmGCexTgYSIZ',
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
        bh = await this.sd_uBnHIadGAKQy1khF(bh, parentSpanInst);
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
        bh = await this.sd_29hknNayLuIEVMXv(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fp8DBmGCexTgYSIZ',
        spanInst,
        'sd_Fp8DBmGCexTgYSIZ'
      );
    }
  }

  async sd_uBnHIadGAKQy1khF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uBnHIadGAKQy1khF',
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
      bh = await this.sd_eLOvdPMfUJOytKUJ(bh, parentSpanInst);
      //appendnew_next_sd_uBnHIadGAKQy1khF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uBnHIadGAKQy1khF',
        spanInst,
        'sd_uBnHIadGAKQy1khF'
      );
    }
  }

  async sd_eLOvdPMfUJOytKUJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eLOvdPMfUJOytKUJ',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xelhYANOq3aceU2O(bh, parentSpanInst);
      //appendnew_next_sd_eLOvdPMfUJOytKUJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eLOvdPMfUJOytKUJ',
        spanInst,
        'sd_eLOvdPMfUJOytKUJ'
      );
    }
  }

  async sd_xelhYANOq3aceU2O(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xelhYANOq3aceU2O');
    }
  }

  async sd_29hknNayLuIEVMXv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_29hknNayLuIEVMXv',
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
        bh = await this.sd_KhVP7G16FDurBYs1(bh, parentSpanInst);
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
        bh = await this.sd_N0hQTHLAAF4MJhPv(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_29hknNayLuIEVMXv',
        spanInst,
        'sd_29hknNayLuIEVMXv'
      );
    }
  }

  async sd_KhVP7G16FDurBYs1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KhVP7G16FDurBYs1',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mmEpEBiOBSpBA61n(bh, parentSpanInst);
      //appendnew_next_sd_KhVP7G16FDurBYs1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KhVP7G16FDurBYs1',
        spanInst,
        'sd_KhVP7G16FDurBYs1'
      );
    }
  }

  async sd_mmEpEBiOBSpBA61n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mmEpEBiOBSpBA61n',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N0hQTHLAAF4MJhPv(bh, parentSpanInst);
      //appendnew_next_sd_mmEpEBiOBSpBA61n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mmEpEBiOBSpBA61n',
        spanInst,
        'sd_mmEpEBiOBSpBA61n'
      );
    }
  }

  async sd_N0hQTHLAAF4MJhPv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N0hQTHLAAF4MJhPv',
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
        'sd_N0hQTHLAAF4MJhPv',
        spanInst,
        'sd_N0hQTHLAAF4MJhPv'
      );
    }
  }

  async sd_2zNkC28jE7SnPWGA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2zNkC28jE7SnPWGA',
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
        bh = await this.sd_1qILPJ92fJX7GMZT(bh, parentSpanInst);
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
        bh = await this.sd_BY6hUHsqnTQ3g2do(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2zNkC28jE7SnPWGA',
        spanInst,
        'sd_2zNkC28jE7SnPWGA'
      );
    }
  }

  async sd_1qILPJ92fJX7GMZT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1qILPJ92fJX7GMZT',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xelhYANOq3aceU2O(bh, parentSpanInst);
      //appendnew_next_sd_1qILPJ92fJX7GMZT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1qILPJ92fJX7GMZT',
        spanInst,
        'sd_1qILPJ92fJX7GMZT'
      );
    }
  }

  async sd_BY6hUHsqnTQ3g2do(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BY6hUHsqnTQ3g2do',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xelhYANOq3aceU2O(bh, parentSpanInst);
      //appendnew_next_sd_BY6hUHsqnTQ3g2do
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BY6hUHsqnTQ3g2do',
        spanInst,
        'sd_BY6hUHsqnTQ3g2do'
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
      (await this.sd_uOl1KjIhJDSOIBFn(bh, parentSpanInst)) ||
      (await this.sd_WV7SDfHq3lKAUfiW(bh, parentSpanInst))
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
  async sd_uOl1KjIhJDSOIBFn(bh, parentSpanInst) {
    const nodes = [
      'sd_RDfGg2DvjpyI2hbE',
      'sd_CLia022tqFuDUuud',
      'sd_KCFrrDXCdHJUn6k4',
      'sd_OoGzlLgCXBlOMnnT',
      'sd_EjuOSrsP0xcSApH0',
      'sd_TRPvUssrgwNCSwxZ',
      'sd_bUNuniZMEEtWwtDH',
      'sd_svbs08PxQngaheyV',
      'sd_m4WZi39rt1KXY8lx',
      'sd_keH9yEmT13heygqS',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_9v6S9MaLccIMvMhN(bh, parentSpanInst);
      //appendnew_next_sd_uOl1KjIhJDSOIBFn
      return true;
    }
    return false;
  }
  async sd_WV7SDfHq3lKAUfiW(bh, parentSpanInst) {
    const nodes = ['sd_dMW4tD6UhZNrxVJU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_eLOvdPMfUJOytKUJ(bh, parentSpanInst);
      //appendnew_next_sd_WV7SDfHq3lKAUfiW
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
