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
import * as sd_eNmGkHQOOHLeJSBa from './idsutil'; //_splitter_
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
          bh = await this.sd_G4smDvvvD1MoFB2A(bh, parentSpanInst);
          //appendnew_next_sd_9vvCJBhfdPHQqmUF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9vvCJBhfdPHQqmUF');
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
          bh = await this.sd_J1OzM3kzwuE9AUpM(bh, parentSpanInst);
          //appendnew_next_sd_Y1cARXUTmRyfTdpm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Y1cARXUTmRyfTdpm');
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
          bh = await this.sd_D6wjrWFzCKqcbsRf(bh, parentSpanInst);
          //appendnew_next_sd_Hjyb2rZJTCgnJI7X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Hjyb2rZJTCgnJI7X');
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
          bh = await this.sd_fc8cXG40qo9hkbTK(bh, parentSpanInst);
          //appendnew_next_sd_GtHqL3P9he1VkblJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GtHqL3P9he1VkblJ');
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
          bh = await this.sd_5c0Q6T51Lp8Z4L4q(bh, parentSpanInst);
          //appendnew_next_sd_GNxXm7aC47Y3OUyX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GNxXm7aC47Y3OUyX');
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
          bh = await this.sd_udqshvekmApMDnPH(bh, parentSpanInst);
          //appendnew_next_sd_J5YXgKFqwWdvN1gZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_J5YXgKFqwWdvN1gZ');
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
          bh = await this.sd_nsHdsDpdJ7HKzEVP(bh, parentSpanInst);
          //appendnew_next_sd_pGfeaKiJa36Bjl9D
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pGfeaKiJa36Bjl9D');
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

  async sd_D6wjrWFzCKqcbsRf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_D6wjrWFzCKqcbsRf',
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
      bh = await this.sd_S27j5KBFXSPETQuL(bh, parentSpanInst);
      //appendnew_next_sd_D6wjrWFzCKqcbsRf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D6wjrWFzCKqcbsRf',
        spanInst,
        'sd_D6wjrWFzCKqcbsRf'
      );
    }
  }

  async sd_S27j5KBFXSPETQuL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S27j5KBFXSPETQuL',
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
        bh = await this.sd_bWH2hrjoxGyn2PwA(bh, parentSpanInst);
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
        bh = await this.sd_9YnhhIsWn7YKHFdU(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S27j5KBFXSPETQuL',
        spanInst,
        'sd_S27j5KBFXSPETQuL'
      );
    }
  }

  async sd_bWH2hrjoxGyn2PwA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bWH2hrjoxGyn2PwA',
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
      bh = await this.sd_AWzXR7gxHb0Me44s(bh, parentSpanInst);
      //appendnew_next_sd_bWH2hrjoxGyn2PwA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bWH2hrjoxGyn2PwA',
        spanInst,
        'sd_bWH2hrjoxGyn2PwA'
      );
    }
  }

  async sd_AWzXR7gxHb0Me44s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AWzXR7gxHb0Me44s',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WbGlAjScfONEO4H5(bh, parentSpanInst);
      //appendnew_next_sd_AWzXR7gxHb0Me44s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AWzXR7gxHb0Me44s',
        spanInst,
        'sd_AWzXR7gxHb0Me44s'
      );
    }
  }

  async sd_WbGlAjScfONEO4H5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WbGlAjScfONEO4H5',
      parentSpanInst
    );
    try {
      const sd_eNmGkHQOOHLeJSBaInstance: sd_eNmGkHQOOHLeJSBa.idsutil =
        sd_eNmGkHQOOHLeJSBa.idsutil.getInstance();
      let outputVariables =
        await sd_eNmGkHQOOHLeJSBaInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AAPtQ3l3sUxG87Dp(bh, parentSpanInst);
      //appendnew_next_sd_WbGlAjScfONEO4H5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WbGlAjScfONEO4H5',
        spanInst,
        'sd_WbGlAjScfONEO4H5'
      );
    }
  }

  async sd_AAPtQ3l3sUxG87Dp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AAPtQ3l3sUxG87Dp',
      parentSpanInst
    );
    try {
      const sd_eNmGkHQOOHLeJSBaInstance: sd_eNmGkHQOOHLeJSBa.idsutil =
        sd_eNmGkHQOOHLeJSBa.idsutil.getInstance();
      let outputVariables =
        await sd_eNmGkHQOOHLeJSBaInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2Wlxm5doQXEFx9Vw(bh, parentSpanInst);
      //appendnew_next_sd_AAPtQ3l3sUxG87Dp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AAPtQ3l3sUxG87Dp',
        spanInst,
        'sd_AAPtQ3l3sUxG87Dp'
      );
    }
  }

  async sd_2Wlxm5doQXEFx9Vw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Wlxm5doQXEFx9Vw',
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
      await this.sd_ykuExbpKcXBVMB49(bh, parentSpanInst);
      //appendnew_next_sd_2Wlxm5doQXEFx9Vw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Wlxm5doQXEFx9Vw',
        spanInst,
        'sd_2Wlxm5doQXEFx9Vw'
      );
    }
  }

  async sd_ykuExbpKcXBVMB49(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ykuExbpKcXBVMB49');
    }
  }

  async sd_9YnhhIsWn7YKHFdU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9YnhhIsWn7YKHFdU',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LmVRfPZGJRDItT7f(bh, parentSpanInst);
      //appendnew_next_sd_9YnhhIsWn7YKHFdU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9YnhhIsWn7YKHFdU',
        spanInst,
        'sd_9YnhhIsWn7YKHFdU'
      );
    }
  }

  async sd_LmVRfPZGJRDItT7f(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LmVRfPZGJRDItT7f');
    }
  }

  async sd_G4smDvvvD1MoFB2A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G4smDvvvD1MoFB2A',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_juiejj9z1HTg37gC(bh, parentSpanInst);
      //appendnew_next_sd_G4smDvvvD1MoFB2A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G4smDvvvD1MoFB2A',
        spanInst,
        'sd_G4smDvvvD1MoFB2A'
      );
    }
  }

  async sd_juiejj9z1HTg37gC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_juiejj9z1HTg37gC',
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
        'sd_juiejj9z1HTg37gC',
        spanInst,
        'sd_juiejj9z1HTg37gC'
      );
    }
  }

  async sd_fc8cXG40qo9hkbTK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fc8cXG40qo9hkbTK',
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
      bh = await this.sd_pzDTNwjy2v3XZHre(bh, parentSpanInst);
      //appendnew_next_sd_fc8cXG40qo9hkbTK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fc8cXG40qo9hkbTK',
        spanInst,
        'sd_fc8cXG40qo9hkbTK'
      );
    }
  }

  async sd_pzDTNwjy2v3XZHre(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pzDTNwjy2v3XZHre',
      parentSpanInst
    );
    try {
      const sd_eNmGkHQOOHLeJSBaInstance: sd_eNmGkHQOOHLeJSBa.idsutil =
        sd_eNmGkHQOOHLeJSBa.idsutil.getInstance();
      let outputVariables =
        await sd_eNmGkHQOOHLeJSBaInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BKYeZiPwtVDZLHto(bh, parentSpanInst);
      //appendnew_next_sd_pzDTNwjy2v3XZHre
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pzDTNwjy2v3XZHre',
        spanInst,
        'sd_pzDTNwjy2v3XZHre'
      );
    }
  }

  async sd_BKYeZiPwtVDZLHto(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BKYeZiPwtVDZLHto',
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
      bh = await this.sd_Jkofb4AIOl8y7PLV(bh, parentSpanInst);
      //appendnew_next_sd_BKYeZiPwtVDZLHto
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BKYeZiPwtVDZLHto',
        spanInst,
        'sd_BKYeZiPwtVDZLHto'
      );
    }
  }

  async sd_Jkofb4AIOl8y7PLV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jkofb4AIOl8y7PLV',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_smVCKp6WYGuQ8Y3m(bh, parentSpanInst);
      //appendnew_next_sd_Jkofb4AIOl8y7PLV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jkofb4AIOl8y7PLV',
        spanInst,
        'sd_Jkofb4AIOl8y7PLV'
      );
    }
  }

  async sd_smVCKp6WYGuQ8Y3m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_smVCKp6WYGuQ8Y3m',
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
        bh = await this.sd_HU0UeXrTi1LFd4q3(bh, parentSpanInst);
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
        bh = await this.sd_mtAUFc9Ez7Ggjv4J(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_smVCKp6WYGuQ8Y3m',
        spanInst,
        'sd_smVCKp6WYGuQ8Y3m'
      );
    }
  }

  async sd_HU0UeXrTi1LFd4q3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HU0UeXrTi1LFd4q3',
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
      await this.sd_AWF9YL1XZ43ELc7e(bh, parentSpanInst);
      //appendnew_next_sd_HU0UeXrTi1LFd4q3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HU0UeXrTi1LFd4q3',
        spanInst,
        'sd_HU0UeXrTi1LFd4q3'
      );
    }
  }

  async sd_AWF9YL1XZ43ELc7e(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AWF9YL1XZ43ELc7e');
    }
  }

  async sd_mtAUFc9Ez7Ggjv4J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mtAUFc9Ez7Ggjv4J',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aSmmu9G4NTGgtZfu(bh, parentSpanInst);
      //appendnew_next_sd_mtAUFc9Ez7Ggjv4J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mtAUFc9Ez7Ggjv4J',
        spanInst,
        'sd_mtAUFc9Ez7Ggjv4J'
      );
    }
  }

  async sd_aSmmu9G4NTGgtZfu(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aSmmu9G4NTGgtZfu');
    }
  }

  async sd_5c0Q6T51Lp8Z4L4q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5c0Q6T51Lp8Z4L4q',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_VaGZuAdAtcStsqbz(bh, parentSpanInst);
      //appendnew_next_sd_5c0Q6T51Lp8Z4L4q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5c0Q6T51Lp8Z4L4q',
        spanInst,
        'sd_5c0Q6T51Lp8Z4L4q'
      );
    }
  }

  async sd_VaGZuAdAtcStsqbz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VaGZuAdAtcStsqbz');
    }
  }

  async sd_SR2UopBStynhK2Mh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SR2UopBStynhK2Mh',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SR2UopBStynhK2Mh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SR2UopBStynhK2Mh',
        spanInst,
        'sd_SR2UopBStynhK2Mh'
      );
    }
  }

  async sd_udqshvekmApMDnPH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_udqshvekmApMDnPH',
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
      bh = await this.sd_y2doKXRSSc6I9hO9(bh, parentSpanInst);
      //appendnew_next_sd_udqshvekmApMDnPH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_udqshvekmApMDnPH',
        spanInst,
        'sd_udqshvekmApMDnPH'
      );
    }
  }

  async sd_y2doKXRSSc6I9hO9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y2doKXRSSc6I9hO9',
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
      bh = await this.sd_LD1FhMIQ1RIiZB0d(bh, parentSpanInst);
      //appendnew_next_sd_y2doKXRSSc6I9hO9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y2doKXRSSc6I9hO9',
        spanInst,
        'sd_y2doKXRSSc6I9hO9'
      );
    }
  }

  async sd_LD1FhMIQ1RIiZB0d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LD1FhMIQ1RIiZB0d',
      parentSpanInst
    );
    try {
      const sd_eNmGkHQOOHLeJSBaInstance: sd_eNmGkHQOOHLeJSBa.idsutil =
        sd_eNmGkHQOOHLeJSBa.idsutil.getInstance();
      let outputVariables =
        await sd_eNmGkHQOOHLeJSBaInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3wnOkIhciXoGVR9y(bh, parentSpanInst);
      //appendnew_next_sd_LD1FhMIQ1RIiZB0d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LD1FhMIQ1RIiZB0d',
        spanInst,
        'sd_LD1FhMIQ1RIiZB0d'
      );
    }
  }

  async sd_3wnOkIhciXoGVR9y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3wnOkIhciXoGVR9y',
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
        bh = await this.sd_CD1FDRJH2yvkaXep(bh, parentSpanInst);
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
        bh = await this.sd_xSMQ5tIF2VHc6uCU(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wnOkIhciXoGVR9y',
        spanInst,
        'sd_3wnOkIhciXoGVR9y'
      );
    }
  }

  async sd_CD1FDRJH2yvkaXep(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CD1FDRJH2yvkaXep',
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
      //appendnew_next_sd_CD1FDRJH2yvkaXep
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CD1FDRJH2yvkaXep',
        spanInst,
        'sd_CD1FDRJH2yvkaXep'
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
      await this.sd_eBi7BTEx0VpYjCEz(bh, parentSpanInst);
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

  async sd_eBi7BTEx0VpYjCEz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eBi7BTEx0VpYjCEz');
    }
  }

  async sd_xSMQ5tIF2VHc6uCU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xSMQ5tIF2VHc6uCU',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eBi7BTEx0VpYjCEz(bh, parentSpanInst);
      //appendnew_next_sd_xSMQ5tIF2VHc6uCU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xSMQ5tIF2VHc6uCU',
        spanInst,
        'sd_xSMQ5tIF2VHc6uCU'
      );
    }
  }

  async sd_nsHdsDpdJ7HKzEVP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nsHdsDpdJ7HKzEVP',
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
      bh = await this.sd_Hu2WiZnA4r3b5km1(bh, parentSpanInst);
      //appendnew_next_sd_nsHdsDpdJ7HKzEVP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nsHdsDpdJ7HKzEVP',
        spanInst,
        'sd_nsHdsDpdJ7HKzEVP'
      );
    }
  }

  async sd_Hu2WiZnA4r3b5km1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hu2WiZnA4r3b5km1',
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
      bh = await this.sd_GaAGlmWApVWA9kO9(bh, parentSpanInst);
      //appendnew_next_sd_Hu2WiZnA4r3b5km1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hu2WiZnA4r3b5km1',
        spanInst,
        'sd_Hu2WiZnA4r3b5km1'
      );
    }
  }

  async sd_GaAGlmWApVWA9kO9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GaAGlmWApVWA9kO9',
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
        bh = await this.sd_ZGfncgW0zbyPMkiT(bh, parentSpanInst);
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
        bh = await this.sd_2H5ZdNMw8HnqHFBJ(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GaAGlmWApVWA9kO9',
        spanInst,
        'sd_GaAGlmWApVWA9kO9'
      );
    }
  }

  async sd_ZGfncgW0zbyPMkiT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZGfncgW0zbyPMkiT',
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
      await this.sd_kAosCVkoS0njUxFz(bh, parentSpanInst);
      //appendnew_next_sd_ZGfncgW0zbyPMkiT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZGfncgW0zbyPMkiT',
        spanInst,
        'sd_ZGfncgW0zbyPMkiT'
      );
    }
  }

  async sd_kAosCVkoS0njUxFz(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kAosCVkoS0njUxFz');
    }
  }

  async sd_2H5ZdNMw8HnqHFBJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2H5ZdNMw8HnqHFBJ',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IEZl3q725ONtCL5u(bh, parentSpanInst);
      //appendnew_next_sd_2H5ZdNMw8HnqHFBJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2H5ZdNMw8HnqHFBJ',
        spanInst,
        'sd_2H5ZdNMw8HnqHFBJ'
      );
    }
  }

  async sd_IEZl3q725ONtCL5u(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IEZl3q725ONtCL5u');
    }
  }

  async sd_J1OzM3kzwuE9AUpM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J1OzM3kzwuE9AUpM',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Bh6a75RrAerNmzZz(bh, parentSpanInst);
      //appendnew_next_sd_J1OzM3kzwuE9AUpM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J1OzM3kzwuE9AUpM',
        spanInst,
        'sd_J1OzM3kzwuE9AUpM'
      );
    }
  }

  async sd_Bh6a75RrAerNmzZz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bh6a75RrAerNmzZz',
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
      bh = await this.sd_5wCIDEVYs4Nvrcmz(bh, parentSpanInst);
      //appendnew_next_sd_Bh6a75RrAerNmzZz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bh6a75RrAerNmzZz',
        spanInst,
        'sd_Bh6a75RrAerNmzZz'
      );
    }
  }

  async sd_5wCIDEVYs4Nvrcmz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5wCIDEVYs4Nvrcmz',
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
      bh = await this.sd_geOtcdpvKbg6kKCZ(bh, parentSpanInst);
      //appendnew_next_sd_5wCIDEVYs4Nvrcmz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5wCIDEVYs4Nvrcmz',
        spanInst,
        'sd_5wCIDEVYs4Nvrcmz'
      );
    }
  }

  async sd_geOtcdpvKbg6kKCZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_geOtcdpvKbg6kKCZ',
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
        bh = await this.sd_tRxT0O76E26HNu76(bh, parentSpanInst);
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
        bh = await this.sd_1R9JLDw9vhHvp7oD(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_geOtcdpvKbg6kKCZ',
        spanInst,
        'sd_geOtcdpvKbg6kKCZ'
      );
    }
  }

  async sd_tRxT0O76E26HNu76(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tRxT0O76E26HNu76',
      parentSpanInst
    );
    try {
      const sd_eNmGkHQOOHLeJSBaInstance: sd_eNmGkHQOOHLeJSBa.idsutil =
        sd_eNmGkHQOOHLeJSBa.idsutil.getInstance();
      let outputVariables = await sd_eNmGkHQOOHLeJSBaInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mwVwkFTSaIYWUnwD(bh, parentSpanInst);
      //appendnew_next_sd_tRxT0O76E26HNu76
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tRxT0O76E26HNu76',
        spanInst,
        'sd_tRxT0O76E26HNu76'
      );
    }
  }

  async sd_mwVwkFTSaIYWUnwD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mwVwkFTSaIYWUnwD',
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
        bh = await this.sd_eoOkU4zKNvt1DT2u(bh, parentSpanInst);
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
        bh = await this.sd_gR4y8XZPxhJikaDD(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mwVwkFTSaIYWUnwD',
        spanInst,
        'sd_mwVwkFTSaIYWUnwD'
      );
    }
  }

  async sd_eoOkU4zKNvt1DT2u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eoOkU4zKNvt1DT2u',
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
      bh = await this.sd_TlLM6H7L3FScIEpS(bh, parentSpanInst);
      //appendnew_next_sd_eoOkU4zKNvt1DT2u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eoOkU4zKNvt1DT2u',
        spanInst,
        'sd_eoOkU4zKNvt1DT2u'
      );
    }
  }

  async sd_TlLM6H7L3FScIEpS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TlLM6H7L3FScIEpS',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W7nlMQvBrgGlYoeY(bh, parentSpanInst);
      //appendnew_next_sd_TlLM6H7L3FScIEpS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TlLM6H7L3FScIEpS',
        spanInst,
        'sd_TlLM6H7L3FScIEpS'
      );
    }
  }

  async sd_W7nlMQvBrgGlYoeY(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W7nlMQvBrgGlYoeY');
    }
  }

  async sd_gR4y8XZPxhJikaDD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gR4y8XZPxhJikaDD',
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
        bh = await this.sd_pTgkJiSV4eWjNARz(bh, parentSpanInst);
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
        bh = await this.sd_cLe9txrsv90XTO7K(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gR4y8XZPxhJikaDD',
        spanInst,
        'sd_gR4y8XZPxhJikaDD'
      );
    }
  }

  async sd_pTgkJiSV4eWjNARz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pTgkJiSV4eWjNARz',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LGq0ER4oAvwDBfgA(bh, parentSpanInst);
      //appendnew_next_sd_pTgkJiSV4eWjNARz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pTgkJiSV4eWjNARz',
        spanInst,
        'sd_pTgkJiSV4eWjNARz'
      );
    }
  }

  async sd_LGq0ER4oAvwDBfgA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LGq0ER4oAvwDBfgA',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cLe9txrsv90XTO7K(bh, parentSpanInst);
      //appendnew_next_sd_LGq0ER4oAvwDBfgA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LGq0ER4oAvwDBfgA',
        spanInst,
        'sd_LGq0ER4oAvwDBfgA'
      );
    }
  }

  async sd_cLe9txrsv90XTO7K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cLe9txrsv90XTO7K',
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
        'sd_cLe9txrsv90XTO7K',
        spanInst,
        'sd_cLe9txrsv90XTO7K'
      );
    }
  }

  async sd_1R9JLDw9vhHvp7oD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1R9JLDw9vhHvp7oD',
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
        bh = await this.sd_8SlsFvA5KTVovsaS(bh, parentSpanInst);
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
        bh = await this.sd_gL7tjyZdXwy2Ynpz(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1R9JLDw9vhHvp7oD',
        spanInst,
        'sd_1R9JLDw9vhHvp7oD'
      );
    }
  }

  async sd_8SlsFvA5KTVovsaS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8SlsFvA5KTVovsaS',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W7nlMQvBrgGlYoeY(bh, parentSpanInst);
      //appendnew_next_sd_8SlsFvA5KTVovsaS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8SlsFvA5KTVovsaS',
        spanInst,
        'sd_8SlsFvA5KTVovsaS'
      );
    }
  }

  async sd_gL7tjyZdXwy2Ynpz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gL7tjyZdXwy2Ynpz',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W7nlMQvBrgGlYoeY(bh, parentSpanInst);
      //appendnew_next_sd_gL7tjyZdXwy2Ynpz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gL7tjyZdXwy2Ynpz',
        spanInst,
        'sd_gL7tjyZdXwy2Ynpz'
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
      (await this.sd_iEXsNsbNtJ7kDIji(bh, parentSpanInst)) ||
      (await this.sd_g4cHfG0FJ7CEttq7(bh, parentSpanInst))
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
  async sd_iEXsNsbNtJ7kDIji(bh, parentSpanInst) {
    const nodes = [
      'sd_AAPtQ3l3sUxG87Dp',
      'sd_GtHqL3P9he1VkblJ',
      'sd_pzDTNwjy2v3XZHre',
      'sd_BKYeZiPwtVDZLHto',
      'sd_fc8cXG40qo9hkbTK',
      'sd_smVCKp6WYGuQ8Y3m',
      'sd_HU0UeXrTi1LFd4q3',
      'sd_mtAUFc9Ez7Ggjv4J',
      'sd_AWF9YL1XZ43ELc7e',
      'sd_aSmmu9G4NTGgtZfu',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_SR2UopBStynhK2Mh(bh, parentSpanInst);
      //appendnew_next_sd_iEXsNsbNtJ7kDIji
      return true;
    }
    return false;
  }
  async sd_g4cHfG0FJ7CEttq7(bh, parentSpanInst) {
    const nodes = ['sd_tRxT0O76E26HNu76'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_TlLM6H7L3FScIEpS(bh, parentSpanInst);
      //appendnew_next_sd_g4cHfG0FJ7CEttq7
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
