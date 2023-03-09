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
import * as sd_vjMafMQJT7AmJwEd from './idsutil'; //_splitter_
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
          bh = await this.sd_lsVkdiASNtcCQAVI(bh, parentSpanInst);
          //appendnew_next_sd_pjMdW1vXI5rJsjY8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pjMdW1vXI5rJsjY8');
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
          bh = await this.sd_1u8cAxAiIUDUoBPE(bh, parentSpanInst);
          //appendnew_next_sd_aV614I8tYA2NE4b1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aV614I8tYA2NE4b1');
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
          bh = await this.sd_dMtxHSJZcaFnraNY(bh, parentSpanInst);
          //appendnew_next_sd_XfkT9AkpzvjC1O1r
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XfkT9AkpzvjC1O1r');
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
          bh = await this.sd_nAMOjCLejXTi5yid(bh, parentSpanInst);
          //appendnew_next_sd_2LlVjHnk4k9grZev
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2LlVjHnk4k9grZev');
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
          bh = await this.sd_hrgsZArDrPSUazvr(bh, parentSpanInst);
          //appendnew_next_sd_uQu2MakGbXFKVI1J
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uQu2MakGbXFKVI1J');
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
          bh = await this.sd_jFYRgUgMHK8vAACT(bh, parentSpanInst);
          //appendnew_next_sd_TJlaXNHqmXqQOL5F
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TJlaXNHqmXqQOL5F');
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
          bh = await this.sd_VHuH0eq41v9HXEOE(bh, parentSpanInst);
          //appendnew_next_sd_iy8XCUL57Lc6LE1f
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iy8XCUL57Lc6LE1f');
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

  async sd_dMtxHSJZcaFnraNY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dMtxHSJZcaFnraNY',
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
      bh = await this.sd_RboEnQgRkABTeO3e(bh, parentSpanInst);
      //appendnew_next_sd_dMtxHSJZcaFnraNY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dMtxHSJZcaFnraNY',
        spanInst,
        'sd_dMtxHSJZcaFnraNY'
      );
    }
  }

  async sd_RboEnQgRkABTeO3e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RboEnQgRkABTeO3e',
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
        bh = await this.sd_F3ZfiBr4ve1ooPat(bh, parentSpanInst);
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
        bh = await this.sd_81Tmgv1Knu7RMwwk(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RboEnQgRkABTeO3e',
        spanInst,
        'sd_RboEnQgRkABTeO3e'
      );
    }
  }

  async sd_F3ZfiBr4ve1ooPat(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F3ZfiBr4ve1ooPat',
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
      bh = await this.sd_7xfWhY3pRiS1w6rv(bh, parentSpanInst);
      //appendnew_next_sd_F3ZfiBr4ve1ooPat
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F3ZfiBr4ve1ooPat',
        spanInst,
        'sd_F3ZfiBr4ve1ooPat'
      );
    }
  }

  async sd_7xfWhY3pRiS1w6rv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7xfWhY3pRiS1w6rv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RQKvXVoLeft2rTmO(bh, parentSpanInst);
      //appendnew_next_sd_7xfWhY3pRiS1w6rv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7xfWhY3pRiS1w6rv',
        spanInst,
        'sd_7xfWhY3pRiS1w6rv'
      );
    }
  }

  async sd_RQKvXVoLeft2rTmO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RQKvXVoLeft2rTmO',
      parentSpanInst
    );
    try {
      const sd_vjMafMQJT7AmJwEdInstance: sd_vjMafMQJT7AmJwEd.idsutil =
        sd_vjMafMQJT7AmJwEd.idsutil.getInstance();
      let outputVariables =
        await sd_vjMafMQJT7AmJwEdInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0WDIJ183Uh8bZACP(bh, parentSpanInst);
      //appendnew_next_sd_RQKvXVoLeft2rTmO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RQKvXVoLeft2rTmO',
        spanInst,
        'sd_RQKvXVoLeft2rTmO'
      );
    }
  }

  async sd_0WDIJ183Uh8bZACP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0WDIJ183Uh8bZACP',
      parentSpanInst
    );
    try {
      const sd_vjMafMQJT7AmJwEdInstance: sd_vjMafMQJT7AmJwEd.idsutil =
        sd_vjMafMQJT7AmJwEd.idsutil.getInstance();
      let outputVariables =
        await sd_vjMafMQJT7AmJwEdInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iCjxaasyOFjgvr4r(bh, parentSpanInst);
      //appendnew_next_sd_0WDIJ183Uh8bZACP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0WDIJ183Uh8bZACP',
        spanInst,
        'sd_0WDIJ183Uh8bZACP'
      );
    }
  }

  async sd_iCjxaasyOFjgvr4r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iCjxaasyOFjgvr4r',
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
      await this.sd_zPYqKsymSmw1F5Ns(bh, parentSpanInst);
      //appendnew_next_sd_iCjxaasyOFjgvr4r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iCjxaasyOFjgvr4r',
        spanInst,
        'sd_iCjxaasyOFjgvr4r'
      );
    }
  }

  async sd_zPYqKsymSmw1F5Ns(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zPYqKsymSmw1F5Ns');
    }
  }

  async sd_81Tmgv1Knu7RMwwk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_81Tmgv1Knu7RMwwk',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Y4GtaQQiR93WZW1c(bh, parentSpanInst);
      //appendnew_next_sd_81Tmgv1Knu7RMwwk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_81Tmgv1Knu7RMwwk',
        spanInst,
        'sd_81Tmgv1Knu7RMwwk'
      );
    }
  }

  async sd_Y4GtaQQiR93WZW1c(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y4GtaQQiR93WZW1c');
    }
  }

  async sd_lsVkdiASNtcCQAVI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lsVkdiASNtcCQAVI',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tu7qzStUdy7TP3NC(bh, parentSpanInst);
      //appendnew_next_sd_lsVkdiASNtcCQAVI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lsVkdiASNtcCQAVI',
        spanInst,
        'sd_lsVkdiASNtcCQAVI'
      );
    }
  }

  async sd_tu7qzStUdy7TP3NC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tu7qzStUdy7TP3NC',
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
        'sd_tu7qzStUdy7TP3NC',
        spanInst,
        'sd_tu7qzStUdy7TP3NC'
      );
    }
  }

  async sd_nAMOjCLejXTi5yid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nAMOjCLejXTi5yid',
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
      bh = await this.sd_HtYTxppVZzStyjxe(bh, parentSpanInst);
      //appendnew_next_sd_nAMOjCLejXTi5yid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nAMOjCLejXTi5yid',
        spanInst,
        'sd_nAMOjCLejXTi5yid'
      );
    }
  }

  async sd_HtYTxppVZzStyjxe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HtYTxppVZzStyjxe',
      parentSpanInst
    );
    try {
      const sd_vjMafMQJT7AmJwEdInstance: sd_vjMafMQJT7AmJwEd.idsutil =
        sd_vjMafMQJT7AmJwEd.idsutil.getInstance();
      let outputVariables =
        await sd_vjMafMQJT7AmJwEdInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zlNrmlawx4YVwCv3(bh, parentSpanInst);
      //appendnew_next_sd_HtYTxppVZzStyjxe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HtYTxppVZzStyjxe',
        spanInst,
        'sd_HtYTxppVZzStyjxe'
      );
    }
  }

  async sd_zlNrmlawx4YVwCv3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zlNrmlawx4YVwCv3',
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
      bh = await this.sd_ZCY6G7TsmWSc33HT(bh, parentSpanInst);
      //appendnew_next_sd_zlNrmlawx4YVwCv3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zlNrmlawx4YVwCv3',
        spanInst,
        'sd_zlNrmlawx4YVwCv3'
      );
    }
  }

  async sd_ZCY6G7TsmWSc33HT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZCY6G7TsmWSc33HT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uIbXDIqI040XxAP2(bh, parentSpanInst);
      //appendnew_next_sd_ZCY6G7TsmWSc33HT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZCY6G7TsmWSc33HT',
        spanInst,
        'sd_ZCY6G7TsmWSc33HT'
      );
    }
  }

  async sd_uIbXDIqI040XxAP2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uIbXDIqI040XxAP2',
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
        bh = await this.sd_PMHOKDJWUsmXZ35G(bh, parentSpanInst);
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
        bh = await this.sd_UcAOBIj4wtlc92aV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uIbXDIqI040XxAP2',
        spanInst,
        'sd_uIbXDIqI040XxAP2'
      );
    }
  }

  async sd_PMHOKDJWUsmXZ35G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PMHOKDJWUsmXZ35G',
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
      await this.sd_cyxnhCmD5IU3IMfF(bh, parentSpanInst);
      //appendnew_next_sd_PMHOKDJWUsmXZ35G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PMHOKDJWUsmXZ35G',
        spanInst,
        'sd_PMHOKDJWUsmXZ35G'
      );
    }
  }

  async sd_cyxnhCmD5IU3IMfF(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cyxnhCmD5IU3IMfF');
    }
  }

  async sd_UcAOBIj4wtlc92aV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UcAOBIj4wtlc92aV',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HqDMD8VGKRaCJwLO(bh, parentSpanInst);
      //appendnew_next_sd_UcAOBIj4wtlc92aV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UcAOBIj4wtlc92aV',
        spanInst,
        'sd_UcAOBIj4wtlc92aV'
      );
    }
  }

  async sd_HqDMD8VGKRaCJwLO(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HqDMD8VGKRaCJwLO');
    }
  }

  async sd_hrgsZArDrPSUazvr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hrgsZArDrPSUazvr',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_d0OXUxIXRc9Rs8yH(bh, parentSpanInst);
      //appendnew_next_sd_hrgsZArDrPSUazvr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hrgsZArDrPSUazvr',
        spanInst,
        'sd_hrgsZArDrPSUazvr'
      );
    }
  }

  async sd_d0OXUxIXRc9Rs8yH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d0OXUxIXRc9Rs8yH');
    }
  }

  async sd_OsXMIMQduPNyxsMs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OsXMIMQduPNyxsMs',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OsXMIMQduPNyxsMs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OsXMIMQduPNyxsMs',
        spanInst,
        'sd_OsXMIMQduPNyxsMs'
      );
    }
  }

  async sd_jFYRgUgMHK8vAACT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jFYRgUgMHK8vAACT',
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
      bh = await this.sd_3nNRHbdLVzRYu1Xf(bh, parentSpanInst);
      //appendnew_next_sd_jFYRgUgMHK8vAACT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jFYRgUgMHK8vAACT',
        spanInst,
        'sd_jFYRgUgMHK8vAACT'
      );
    }
  }

  async sd_3nNRHbdLVzRYu1Xf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3nNRHbdLVzRYu1Xf',
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
      bh = await this.sd_T853guO7CP0DdgbI(bh, parentSpanInst);
      //appendnew_next_sd_3nNRHbdLVzRYu1Xf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3nNRHbdLVzRYu1Xf',
        spanInst,
        'sd_3nNRHbdLVzRYu1Xf'
      );
    }
  }

  async sd_T853guO7CP0DdgbI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T853guO7CP0DdgbI',
      parentSpanInst
    );
    try {
      const sd_vjMafMQJT7AmJwEdInstance: sd_vjMafMQJT7AmJwEd.idsutil =
        sd_vjMafMQJT7AmJwEd.idsutil.getInstance();
      let outputVariables =
        await sd_vjMafMQJT7AmJwEdInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m0X31qdScXo6T3p8(bh, parentSpanInst);
      //appendnew_next_sd_T853guO7CP0DdgbI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T853guO7CP0DdgbI',
        spanInst,
        'sd_T853guO7CP0DdgbI'
      );
    }
  }

  async sd_m0X31qdScXo6T3p8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m0X31qdScXo6T3p8',
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
        bh = await this.sd_DC0Ot0VUqExQ74dK(bh, parentSpanInst);
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
        bh = await this.sd_Jl9EnEgJrdfvpJDC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m0X31qdScXo6T3p8',
        spanInst,
        'sd_m0X31qdScXo6T3p8'
      );
    }
  }

  async sd_DC0Ot0VUqExQ74dK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DC0Ot0VUqExQ74dK',
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
      //appendnew_next_sd_DC0Ot0VUqExQ74dK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DC0Ot0VUqExQ74dK',
        spanInst,
        'sd_DC0Ot0VUqExQ74dK'
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
      await this.sd_qscZ4ffDgShFrSpl(bh, parentSpanInst);
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

  async sd_qscZ4ffDgShFrSpl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qscZ4ffDgShFrSpl');
    }
  }

  async sd_Jl9EnEgJrdfvpJDC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jl9EnEgJrdfvpJDC',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qscZ4ffDgShFrSpl(bh, parentSpanInst);
      //appendnew_next_sd_Jl9EnEgJrdfvpJDC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jl9EnEgJrdfvpJDC',
        spanInst,
        'sd_Jl9EnEgJrdfvpJDC'
      );
    }
  }

  async sd_VHuH0eq41v9HXEOE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VHuH0eq41v9HXEOE',
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
      bh = await this.sd_MqtLLv6cwJhwW5fs(bh, parentSpanInst);
      //appendnew_next_sd_VHuH0eq41v9HXEOE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHuH0eq41v9HXEOE',
        spanInst,
        'sd_VHuH0eq41v9HXEOE'
      );
    }
  }

  async sd_MqtLLv6cwJhwW5fs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MqtLLv6cwJhwW5fs',
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
      bh = await this.sd_t2P8lbwCBS6nP7iB(bh, parentSpanInst);
      //appendnew_next_sd_MqtLLv6cwJhwW5fs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MqtLLv6cwJhwW5fs',
        spanInst,
        'sd_MqtLLv6cwJhwW5fs'
      );
    }
  }

  async sd_t2P8lbwCBS6nP7iB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t2P8lbwCBS6nP7iB',
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
        bh = await this.sd_2Szg08HX1pilXe1f(bh, parentSpanInst);
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
        bh = await this.sd_Il8PgFRXayxTznkX(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t2P8lbwCBS6nP7iB',
        spanInst,
        'sd_t2P8lbwCBS6nP7iB'
      );
    }
  }

  async sd_2Szg08HX1pilXe1f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Szg08HX1pilXe1f',
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
      await this.sd_d0nquBbV3pe3YlCo(bh, parentSpanInst);
      //appendnew_next_sd_2Szg08HX1pilXe1f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Szg08HX1pilXe1f',
        spanInst,
        'sd_2Szg08HX1pilXe1f'
      );
    }
  }

  async sd_d0nquBbV3pe3YlCo(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d0nquBbV3pe3YlCo');
    }
  }

  async sd_Il8PgFRXayxTznkX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Il8PgFRXayxTznkX',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CAPXOcYx2WcF13gU(bh, parentSpanInst);
      //appendnew_next_sd_Il8PgFRXayxTznkX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Il8PgFRXayxTznkX',
        spanInst,
        'sd_Il8PgFRXayxTznkX'
      );
    }
  }

  async sd_CAPXOcYx2WcF13gU(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CAPXOcYx2WcF13gU');
    }
  }

  async sd_1u8cAxAiIUDUoBPE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1u8cAxAiIUDUoBPE',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RodkrdCNzo7MlaGl(bh, parentSpanInst);
      //appendnew_next_sd_1u8cAxAiIUDUoBPE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1u8cAxAiIUDUoBPE',
        spanInst,
        'sd_1u8cAxAiIUDUoBPE'
      );
    }
  }

  async sd_RodkrdCNzo7MlaGl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RodkrdCNzo7MlaGl',
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
      bh = await this.sd_P1ADFk6VTpblWJ6i(bh, parentSpanInst);
      //appendnew_next_sd_RodkrdCNzo7MlaGl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RodkrdCNzo7MlaGl',
        spanInst,
        'sd_RodkrdCNzo7MlaGl'
      );
    }
  }

  async sd_P1ADFk6VTpblWJ6i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P1ADFk6VTpblWJ6i',
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
      bh = await this.sd_UC1oCp1x1sLgo9du(bh, parentSpanInst);
      //appendnew_next_sd_P1ADFk6VTpblWJ6i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P1ADFk6VTpblWJ6i',
        spanInst,
        'sd_P1ADFk6VTpblWJ6i'
      );
    }
  }

  async sd_UC1oCp1x1sLgo9du(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UC1oCp1x1sLgo9du',
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
        bh = await this.sd_dU32BWuF0iGigErG(bh, parentSpanInst);
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
        bh = await this.sd_lznlENJ1JQt5qCHd(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UC1oCp1x1sLgo9du',
        spanInst,
        'sd_UC1oCp1x1sLgo9du'
      );
    }
  }

  async sd_dU32BWuF0iGigErG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dU32BWuF0iGigErG',
      parentSpanInst
    );
    try {
      const sd_vjMafMQJT7AmJwEdInstance: sd_vjMafMQJT7AmJwEd.idsutil =
        sd_vjMafMQJT7AmJwEd.idsutil.getInstance();
      let outputVariables = await sd_vjMafMQJT7AmJwEdInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ky3MvGpQRDFVlx08(bh, parentSpanInst);
      //appendnew_next_sd_dU32BWuF0iGigErG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dU32BWuF0iGigErG',
        spanInst,
        'sd_dU32BWuF0iGigErG'
      );
    }
  }

  async sd_Ky3MvGpQRDFVlx08(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ky3MvGpQRDFVlx08',
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
        bh = await this.sd_DZASne37iDod5ThN(bh, parentSpanInst);
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
        bh = await this.sd_cvhzfNlISboUaQYm(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ky3MvGpQRDFVlx08',
        spanInst,
        'sd_Ky3MvGpQRDFVlx08'
      );
    }
  }

  async sd_DZASne37iDod5ThN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DZASne37iDod5ThN',
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
      bh = await this.sd_Ajegw9lLvZWZs2GX(bh, parentSpanInst);
      //appendnew_next_sd_DZASne37iDod5ThN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DZASne37iDod5ThN',
        spanInst,
        'sd_DZASne37iDod5ThN'
      );
    }
  }

  async sd_Ajegw9lLvZWZs2GX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ajegw9lLvZWZs2GX',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_10y98BFerWe0P5iK(bh, parentSpanInst);
      //appendnew_next_sd_Ajegw9lLvZWZs2GX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ajegw9lLvZWZs2GX',
        spanInst,
        'sd_Ajegw9lLvZWZs2GX'
      );
    }
  }

  async sd_10y98BFerWe0P5iK(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_10y98BFerWe0P5iK');
    }
  }

  async sd_cvhzfNlISboUaQYm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cvhzfNlISboUaQYm',
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
        bh = await this.sd_pS7NI4cGg7PbztgC(bh, parentSpanInst);
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
        bh = await this.sd_GRzQqe0PWUzQFuO9(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cvhzfNlISboUaQYm',
        spanInst,
        'sd_cvhzfNlISboUaQYm'
      );
    }
  }

  async sd_pS7NI4cGg7PbztgC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pS7NI4cGg7PbztgC',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_i7ZLz8QfJaarGljw(bh, parentSpanInst);
      //appendnew_next_sd_pS7NI4cGg7PbztgC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pS7NI4cGg7PbztgC',
        spanInst,
        'sd_pS7NI4cGg7PbztgC'
      );
    }
  }

  async sd_i7ZLz8QfJaarGljw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i7ZLz8QfJaarGljw',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GRzQqe0PWUzQFuO9(bh, parentSpanInst);
      //appendnew_next_sd_i7ZLz8QfJaarGljw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i7ZLz8QfJaarGljw',
        spanInst,
        'sd_i7ZLz8QfJaarGljw'
      );
    }
  }

  async sd_GRzQqe0PWUzQFuO9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GRzQqe0PWUzQFuO9',
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
        'sd_GRzQqe0PWUzQFuO9',
        spanInst,
        'sd_GRzQqe0PWUzQFuO9'
      );
    }
  }

  async sd_lznlENJ1JQt5qCHd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lznlENJ1JQt5qCHd',
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
        bh = await this.sd_4Ri3F73rqo4dUSG7(bh, parentSpanInst);
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
        bh = await this.sd_HEXrTzvxP8nrH3DB(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lznlENJ1JQt5qCHd',
        spanInst,
        'sd_lznlENJ1JQt5qCHd'
      );
    }
  }

  async sd_4Ri3F73rqo4dUSG7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Ri3F73rqo4dUSG7',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_10y98BFerWe0P5iK(bh, parentSpanInst);
      //appendnew_next_sd_4Ri3F73rqo4dUSG7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Ri3F73rqo4dUSG7',
        spanInst,
        'sd_4Ri3F73rqo4dUSG7'
      );
    }
  }

  async sd_HEXrTzvxP8nrH3DB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HEXrTzvxP8nrH3DB',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_10y98BFerWe0P5iK(bh, parentSpanInst);
      //appendnew_next_sd_HEXrTzvxP8nrH3DB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HEXrTzvxP8nrH3DB',
        spanInst,
        'sd_HEXrTzvxP8nrH3DB'
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
      (await this.sd_iMkgHaYpfyfVN4HY(bh, parentSpanInst)) ||
      (await this.sd_r7OERCLS3eBsRb5y(bh, parentSpanInst))
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
  async sd_iMkgHaYpfyfVN4HY(bh, parentSpanInst) {
    const nodes = [
      'sd_0WDIJ183Uh8bZACP',
      'sd_2LlVjHnk4k9grZev',
      'sd_HtYTxppVZzStyjxe',
      'sd_zlNrmlawx4YVwCv3',
      'sd_nAMOjCLejXTi5yid',
      'sd_uIbXDIqI040XxAP2',
      'sd_PMHOKDJWUsmXZ35G',
      'sd_UcAOBIj4wtlc92aV',
      'sd_cyxnhCmD5IU3IMfF',
      'sd_HqDMD8VGKRaCJwLO',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_OsXMIMQduPNyxsMs(bh, parentSpanInst);
      //appendnew_next_sd_iMkgHaYpfyfVN4HY
      return true;
    }
    return false;
  }
  async sd_r7OERCLS3eBsRb5y(bh, parentSpanInst) {
    const nodes = ['sd_dU32BWuF0iGigErG'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Ajegw9lLvZWZs2GX(bh, parentSpanInst);
      //appendnew_next_sd_r7OERCLS3eBsRb5y
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
