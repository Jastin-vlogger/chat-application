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
import * as sd_B8uftufE16HFo8cr from './idsutil'; //_splitter_
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
          bh = await this.sd_rVnPvHDlJ9t5c8ZM(bh, parentSpanInst);
          //appendnew_next_sd_nTMbChbsgEOtBQgU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nTMbChbsgEOtBQgU');
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
          bh = await this.sd_KClYVUYoGhdgameM(bh, parentSpanInst);
          //appendnew_next_sd_anHLwBQFFDUbX2qD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_anHLwBQFFDUbX2qD');
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
          bh = await this.sd_mHmzExaWMIFiJyDj(bh, parentSpanInst);
          //appendnew_next_sd_0o2PS3R3dew4KBDJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0o2PS3R3dew4KBDJ');
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
          bh = await this.sd_kemCvzk4rKWA6g5P(bh, parentSpanInst);
          //appendnew_next_sd_nAqw7QxUiQuDgdEV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nAqw7QxUiQuDgdEV');
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
          bh = await this.sd_iaapzqIfmmogKLnf(bh, parentSpanInst);
          //appendnew_next_sd_eyJl7rqanTOpfNyC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eyJl7rqanTOpfNyC');
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
          bh = await this.sd_usaARRhH0VK16AdN(bh, parentSpanInst);
          //appendnew_next_sd_uDwQb59fkJeJxF05
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uDwQb59fkJeJxF05');
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
          bh = await this.sd_wUU1wiZToDmNHJH1(bh, parentSpanInst);
          //appendnew_next_sd_dLiLc3HYN9RKH3Dg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dLiLc3HYN9RKH3Dg');
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

  async sd_mHmzExaWMIFiJyDj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mHmzExaWMIFiJyDj',
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
      bh = await this.sd_Bxf4pTTzBYUF8Jjj(bh, parentSpanInst);
      //appendnew_next_sd_mHmzExaWMIFiJyDj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mHmzExaWMIFiJyDj',
        spanInst,
        'sd_mHmzExaWMIFiJyDj'
      );
    }
  }

  async sd_Bxf4pTTzBYUF8Jjj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bxf4pTTzBYUF8Jjj',
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
        bh = await this.sd_tCClDdTFVFFpHPCJ(bh, parentSpanInst);
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
        bh = await this.sd_vzIE5q49qEQj2js2(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bxf4pTTzBYUF8Jjj',
        spanInst,
        'sd_Bxf4pTTzBYUF8Jjj'
      );
    }
  }

  async sd_tCClDdTFVFFpHPCJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tCClDdTFVFFpHPCJ',
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
      bh = await this.sd_CAPtr5xHQC8RQdXn(bh, parentSpanInst);
      //appendnew_next_sd_tCClDdTFVFFpHPCJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tCClDdTFVFFpHPCJ',
        spanInst,
        'sd_tCClDdTFVFFpHPCJ'
      );
    }
  }

  async sd_CAPtr5xHQC8RQdXn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CAPtr5xHQC8RQdXn',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BFY3n52yk4UbnpyB(bh, parentSpanInst);
      //appendnew_next_sd_CAPtr5xHQC8RQdXn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CAPtr5xHQC8RQdXn',
        spanInst,
        'sd_CAPtr5xHQC8RQdXn'
      );
    }
  }

  async sd_BFY3n52yk4UbnpyB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BFY3n52yk4UbnpyB',
      parentSpanInst
    );
    try {
      const sd_B8uftufE16HFo8crInstance: sd_B8uftufE16HFo8cr.idsutil =
        sd_B8uftufE16HFo8cr.idsutil.getInstance();
      let outputVariables =
        await sd_B8uftufE16HFo8crInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bjanOSPSrpoqJGrZ(bh, parentSpanInst);
      //appendnew_next_sd_BFY3n52yk4UbnpyB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BFY3n52yk4UbnpyB',
        spanInst,
        'sd_BFY3n52yk4UbnpyB'
      );
    }
  }

  async sd_bjanOSPSrpoqJGrZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bjanOSPSrpoqJGrZ',
      parentSpanInst
    );
    try {
      const sd_B8uftufE16HFo8crInstance: sd_B8uftufE16HFo8cr.idsutil =
        sd_B8uftufE16HFo8cr.idsutil.getInstance();
      let outputVariables =
        await sd_B8uftufE16HFo8crInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gCPHXKLMhA5CzGsL(bh, parentSpanInst);
      //appendnew_next_sd_bjanOSPSrpoqJGrZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bjanOSPSrpoqJGrZ',
        spanInst,
        'sd_bjanOSPSrpoqJGrZ'
      );
    }
  }

  async sd_gCPHXKLMhA5CzGsL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gCPHXKLMhA5CzGsL',
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
      await this.sd_SHZJY9rHiNlYQTVa(bh, parentSpanInst);
      //appendnew_next_sd_gCPHXKLMhA5CzGsL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gCPHXKLMhA5CzGsL',
        spanInst,
        'sd_gCPHXKLMhA5CzGsL'
      );
    }
  }

  async sd_SHZJY9rHiNlYQTVa(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SHZJY9rHiNlYQTVa');
    }
  }

  async sd_vzIE5q49qEQj2js2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vzIE5q49qEQj2js2',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zJa2SICRpftm6yT1(bh, parentSpanInst);
      //appendnew_next_sd_vzIE5q49qEQj2js2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vzIE5q49qEQj2js2',
        spanInst,
        'sd_vzIE5q49qEQj2js2'
      );
    }
  }

  async sd_zJa2SICRpftm6yT1(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zJa2SICRpftm6yT1');
    }
  }

  async sd_rVnPvHDlJ9t5c8ZM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rVnPvHDlJ9t5c8ZM',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_s0d7CbNxC4O7CE4B(bh, parentSpanInst);
      //appendnew_next_sd_rVnPvHDlJ9t5c8ZM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rVnPvHDlJ9t5c8ZM',
        spanInst,
        'sd_rVnPvHDlJ9t5c8ZM'
      );
    }
  }

  async sd_s0d7CbNxC4O7CE4B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s0d7CbNxC4O7CE4B',
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
        'sd_s0d7CbNxC4O7CE4B',
        spanInst,
        'sd_s0d7CbNxC4O7CE4B'
      );
    }
  }

  async sd_kemCvzk4rKWA6g5P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kemCvzk4rKWA6g5P',
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
      bh = await this.sd_MBq5HZv4iVPk6pzf(bh, parentSpanInst);
      //appendnew_next_sd_kemCvzk4rKWA6g5P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kemCvzk4rKWA6g5P',
        spanInst,
        'sd_kemCvzk4rKWA6g5P'
      );
    }
  }

  async sd_MBq5HZv4iVPk6pzf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MBq5HZv4iVPk6pzf',
      parentSpanInst
    );
    try {
      const sd_B8uftufE16HFo8crInstance: sd_B8uftufE16HFo8cr.idsutil =
        sd_B8uftufE16HFo8cr.idsutil.getInstance();
      let outputVariables =
        await sd_B8uftufE16HFo8crInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OgEvIJVqC7bsufGA(bh, parentSpanInst);
      //appendnew_next_sd_MBq5HZv4iVPk6pzf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MBq5HZv4iVPk6pzf',
        spanInst,
        'sd_MBq5HZv4iVPk6pzf'
      );
    }
  }

  async sd_OgEvIJVqC7bsufGA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OgEvIJVqC7bsufGA',
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
      bh = await this.sd_QLvKzKuVgcko8KUj(bh, parentSpanInst);
      //appendnew_next_sd_OgEvIJVqC7bsufGA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OgEvIJVqC7bsufGA',
        spanInst,
        'sd_OgEvIJVqC7bsufGA'
      );
    }
  }

  async sd_QLvKzKuVgcko8KUj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QLvKzKuVgcko8KUj',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fILb90wWWLQ5axKP(bh, parentSpanInst);
      //appendnew_next_sd_QLvKzKuVgcko8KUj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QLvKzKuVgcko8KUj',
        spanInst,
        'sd_QLvKzKuVgcko8KUj'
      );
    }
  }

  async sd_fILb90wWWLQ5axKP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fILb90wWWLQ5axKP',
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
        bh = await this.sd_0LHhxGfxYEZTRFaP(bh, parentSpanInst);
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
        bh = await this.sd_G8sTcVdzWzYLxDaK(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fILb90wWWLQ5axKP',
        spanInst,
        'sd_fILb90wWWLQ5axKP'
      );
    }
  }

  async sd_0LHhxGfxYEZTRFaP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0LHhxGfxYEZTRFaP',
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
      await this.sd_C0p2lw7j3UtTT1dq(bh, parentSpanInst);
      //appendnew_next_sd_0LHhxGfxYEZTRFaP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0LHhxGfxYEZTRFaP',
        spanInst,
        'sd_0LHhxGfxYEZTRFaP'
      );
    }
  }

  async sd_C0p2lw7j3UtTT1dq(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C0p2lw7j3UtTT1dq');
    }
  }

  async sd_G8sTcVdzWzYLxDaK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G8sTcVdzWzYLxDaK',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5i3mMc0OpzFDOguE(bh, parentSpanInst);
      //appendnew_next_sd_G8sTcVdzWzYLxDaK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G8sTcVdzWzYLxDaK',
        spanInst,
        'sd_G8sTcVdzWzYLxDaK'
      );
    }
  }

  async sd_5i3mMc0OpzFDOguE(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5i3mMc0OpzFDOguE');
    }
  }

  async sd_iaapzqIfmmogKLnf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iaapzqIfmmogKLnf',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_9QfRnwfmbuYgRdWd(bh, parentSpanInst);
      //appendnew_next_sd_iaapzqIfmmogKLnf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iaapzqIfmmogKLnf',
        spanInst,
        'sd_iaapzqIfmmogKLnf'
      );
    }
  }

  async sd_9QfRnwfmbuYgRdWd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9QfRnwfmbuYgRdWd');
    }
  }

  async sd_9mYrw6csCLd07dJC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9mYrw6csCLd07dJC',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9mYrw6csCLd07dJC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9mYrw6csCLd07dJC',
        spanInst,
        'sd_9mYrw6csCLd07dJC'
      );
    }
  }

  async sd_usaARRhH0VK16AdN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_usaARRhH0VK16AdN',
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
      bh = await this.sd_Vtgei09xBt45R4k8(bh, parentSpanInst);
      //appendnew_next_sd_usaARRhH0VK16AdN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_usaARRhH0VK16AdN',
        spanInst,
        'sd_usaARRhH0VK16AdN'
      );
    }
  }

  async sd_Vtgei09xBt45R4k8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vtgei09xBt45R4k8',
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
      bh = await this.sd_bfjC4MEQLxmA94kr(bh, parentSpanInst);
      //appendnew_next_sd_Vtgei09xBt45R4k8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vtgei09xBt45R4k8',
        spanInst,
        'sd_Vtgei09xBt45R4k8'
      );
    }
  }

  async sd_bfjC4MEQLxmA94kr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bfjC4MEQLxmA94kr',
      parentSpanInst
    );
    try {
      const sd_B8uftufE16HFo8crInstance: sd_B8uftufE16HFo8cr.idsutil =
        sd_B8uftufE16HFo8cr.idsutil.getInstance();
      let outputVariables =
        await sd_B8uftufE16HFo8crInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OsXfoK2un3cGuKJ6(bh, parentSpanInst);
      //appendnew_next_sd_bfjC4MEQLxmA94kr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bfjC4MEQLxmA94kr',
        spanInst,
        'sd_bfjC4MEQLxmA94kr'
      );
    }
  }

  async sd_OsXfoK2un3cGuKJ6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OsXfoK2un3cGuKJ6',
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
        bh = await this.sd_BsOt4RNq238FsBuc(bh, parentSpanInst);
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
        bh = await this.sd_RZh4ByPkpJ3vPwdN(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OsXfoK2un3cGuKJ6',
        spanInst,
        'sd_OsXfoK2un3cGuKJ6'
      );
    }
  }

  async sd_BsOt4RNq238FsBuc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BsOt4RNq238FsBuc',
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
      //appendnew_next_sd_BsOt4RNq238FsBuc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BsOt4RNq238FsBuc',
        spanInst,
        'sd_BsOt4RNq238FsBuc'
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
      await this.sd_DiDlgOqm3lamh8CZ(bh, parentSpanInst);
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

  async sd_DiDlgOqm3lamh8CZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DiDlgOqm3lamh8CZ');
    }
  }

  async sd_RZh4ByPkpJ3vPwdN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RZh4ByPkpJ3vPwdN',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DiDlgOqm3lamh8CZ(bh, parentSpanInst);
      //appendnew_next_sd_RZh4ByPkpJ3vPwdN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RZh4ByPkpJ3vPwdN',
        spanInst,
        'sd_RZh4ByPkpJ3vPwdN'
      );
    }
  }

  async sd_wUU1wiZToDmNHJH1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wUU1wiZToDmNHJH1',
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
      bh = await this.sd_BeiAuxgeEvdkep1k(bh, parentSpanInst);
      //appendnew_next_sd_wUU1wiZToDmNHJH1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wUU1wiZToDmNHJH1',
        spanInst,
        'sd_wUU1wiZToDmNHJH1'
      );
    }
  }

  async sd_BeiAuxgeEvdkep1k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BeiAuxgeEvdkep1k',
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
      bh = await this.sd_miFXxVYzwcuiymXq(bh, parentSpanInst);
      //appendnew_next_sd_BeiAuxgeEvdkep1k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BeiAuxgeEvdkep1k',
        spanInst,
        'sd_BeiAuxgeEvdkep1k'
      );
    }
  }

  async sd_miFXxVYzwcuiymXq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_miFXxVYzwcuiymXq',
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
        bh = await this.sd_37O0ImsTlnql7aMf(bh, parentSpanInst);
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
        bh = await this.sd_OdmVbTOdO5yLE80D(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_miFXxVYzwcuiymXq',
        spanInst,
        'sd_miFXxVYzwcuiymXq'
      );
    }
  }

  async sd_37O0ImsTlnql7aMf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_37O0ImsTlnql7aMf',
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
      await this.sd_vUQkGWwpV4aA0hvM(bh, parentSpanInst);
      //appendnew_next_sd_37O0ImsTlnql7aMf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_37O0ImsTlnql7aMf',
        spanInst,
        'sd_37O0ImsTlnql7aMf'
      );
    }
  }

  async sd_vUQkGWwpV4aA0hvM(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vUQkGWwpV4aA0hvM');
    }
  }

  async sd_OdmVbTOdO5yLE80D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OdmVbTOdO5yLE80D',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6NarisyEudQcEI7Z(bh, parentSpanInst);
      //appendnew_next_sd_OdmVbTOdO5yLE80D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OdmVbTOdO5yLE80D',
        spanInst,
        'sd_OdmVbTOdO5yLE80D'
      );
    }
  }

  async sd_6NarisyEudQcEI7Z(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6NarisyEudQcEI7Z');
    }
  }

  async sd_KClYVUYoGhdgameM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KClYVUYoGhdgameM',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hPHYgBgigBeVQU17(bh, parentSpanInst);
      //appendnew_next_sd_KClYVUYoGhdgameM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KClYVUYoGhdgameM',
        spanInst,
        'sd_KClYVUYoGhdgameM'
      );
    }
  }

  async sd_hPHYgBgigBeVQU17(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hPHYgBgigBeVQU17',
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
      bh = await this.sd_dOl6WI8hmr00jZyJ(bh, parentSpanInst);
      //appendnew_next_sd_hPHYgBgigBeVQU17
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hPHYgBgigBeVQU17',
        spanInst,
        'sd_hPHYgBgigBeVQU17'
      );
    }
  }

  async sd_dOl6WI8hmr00jZyJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dOl6WI8hmr00jZyJ',
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
      bh = await this.sd_t1gaOW6ZFykg4CJL(bh, parentSpanInst);
      //appendnew_next_sd_dOl6WI8hmr00jZyJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dOl6WI8hmr00jZyJ',
        spanInst,
        'sd_dOl6WI8hmr00jZyJ'
      );
    }
  }

  async sd_t1gaOW6ZFykg4CJL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t1gaOW6ZFykg4CJL',
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
        bh = await this.sd_klPFvBs8NqymVq6N(bh, parentSpanInst);
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
        bh = await this.sd_kUTOPUZrm5J5RS1l(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t1gaOW6ZFykg4CJL',
        spanInst,
        'sd_t1gaOW6ZFykg4CJL'
      );
    }
  }

  async sd_klPFvBs8NqymVq6N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_klPFvBs8NqymVq6N',
      parentSpanInst
    );
    try {
      const sd_B8uftufE16HFo8crInstance: sd_B8uftufE16HFo8cr.idsutil =
        sd_B8uftufE16HFo8cr.idsutil.getInstance();
      let outputVariables = await sd_B8uftufE16HFo8crInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MhB09lMSKNsV0kuB(bh, parentSpanInst);
      //appendnew_next_sd_klPFvBs8NqymVq6N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_klPFvBs8NqymVq6N',
        spanInst,
        'sd_klPFvBs8NqymVq6N'
      );
    }
  }

  async sd_MhB09lMSKNsV0kuB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MhB09lMSKNsV0kuB',
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
        bh = await this.sd_hWx06cukaSdTlWeJ(bh, parentSpanInst);
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
        bh = await this.sd_NlzNkD0KcmsN4sCf(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MhB09lMSKNsV0kuB',
        spanInst,
        'sd_MhB09lMSKNsV0kuB'
      );
    }
  }

  async sd_hWx06cukaSdTlWeJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hWx06cukaSdTlWeJ',
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
      bh = await this.sd_IU53JRXmYnffIwQz(bh, parentSpanInst);
      //appendnew_next_sd_hWx06cukaSdTlWeJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hWx06cukaSdTlWeJ',
        spanInst,
        'sd_hWx06cukaSdTlWeJ'
      );
    }
  }

  async sd_IU53JRXmYnffIwQz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IU53JRXmYnffIwQz',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6U2XWOYsaaR4EVKt(bh, parentSpanInst);
      //appendnew_next_sd_IU53JRXmYnffIwQz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IU53JRXmYnffIwQz',
        spanInst,
        'sd_IU53JRXmYnffIwQz'
      );
    }
  }

  async sd_6U2XWOYsaaR4EVKt(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6U2XWOYsaaR4EVKt');
    }
  }

  async sd_NlzNkD0KcmsN4sCf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NlzNkD0KcmsN4sCf',
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
        bh = await this.sd_iKCUMrTElrsF1PwP(bh, parentSpanInst);
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
        bh = await this.sd_8Osk9lEudkCn0L3K(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NlzNkD0KcmsN4sCf',
        spanInst,
        'sd_NlzNkD0KcmsN4sCf'
      );
    }
  }

  async sd_iKCUMrTElrsF1PwP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iKCUMrTElrsF1PwP',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IygzZWEYyej4AMzi(bh, parentSpanInst);
      //appendnew_next_sd_iKCUMrTElrsF1PwP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iKCUMrTElrsF1PwP',
        spanInst,
        'sd_iKCUMrTElrsF1PwP'
      );
    }
  }

  async sd_IygzZWEYyej4AMzi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IygzZWEYyej4AMzi',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8Osk9lEudkCn0L3K(bh, parentSpanInst);
      //appendnew_next_sd_IygzZWEYyej4AMzi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IygzZWEYyej4AMzi',
        spanInst,
        'sd_IygzZWEYyej4AMzi'
      );
    }
  }

  async sd_8Osk9lEudkCn0L3K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8Osk9lEudkCn0L3K',
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
        'sd_8Osk9lEudkCn0L3K',
        spanInst,
        'sd_8Osk9lEudkCn0L3K'
      );
    }
  }

  async sd_kUTOPUZrm5J5RS1l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kUTOPUZrm5J5RS1l',
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
        bh = await this.sd_AdiVEjCxJm7SFvLb(bh, parentSpanInst);
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
        bh = await this.sd_kjVlzgY7EAaaRFKT(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kUTOPUZrm5J5RS1l',
        spanInst,
        'sd_kUTOPUZrm5J5RS1l'
      );
    }
  }

  async sd_AdiVEjCxJm7SFvLb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AdiVEjCxJm7SFvLb',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6U2XWOYsaaR4EVKt(bh, parentSpanInst);
      //appendnew_next_sd_AdiVEjCxJm7SFvLb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AdiVEjCxJm7SFvLb',
        spanInst,
        'sd_AdiVEjCxJm7SFvLb'
      );
    }
  }

  async sd_kjVlzgY7EAaaRFKT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kjVlzgY7EAaaRFKT',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6U2XWOYsaaR4EVKt(bh, parentSpanInst);
      //appendnew_next_sd_kjVlzgY7EAaaRFKT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kjVlzgY7EAaaRFKT',
        spanInst,
        'sd_kjVlzgY7EAaaRFKT'
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
      (await this.sd_zPnr1iSvJwuc2zqE(bh, parentSpanInst)) ||
      (await this.sd_r82gBojYIdanswne(bh, parentSpanInst))
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
  async sd_zPnr1iSvJwuc2zqE(bh, parentSpanInst) {
    const nodes = [
      'sd_bjanOSPSrpoqJGrZ',
      'sd_nAqw7QxUiQuDgdEV',
      'sd_MBq5HZv4iVPk6pzf',
      'sd_OgEvIJVqC7bsufGA',
      'sd_kemCvzk4rKWA6g5P',
      'sd_fILb90wWWLQ5axKP',
      'sd_0LHhxGfxYEZTRFaP',
      'sd_G8sTcVdzWzYLxDaK',
      'sd_C0p2lw7j3UtTT1dq',
      'sd_5i3mMc0OpzFDOguE',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_9mYrw6csCLd07dJC(bh, parentSpanInst);
      //appendnew_next_sd_zPnr1iSvJwuc2zqE
      return true;
    }
    return false;
  }
  async sd_r82gBojYIdanswne(bh, parentSpanInst) {
    const nodes = ['sd_klPFvBs8NqymVq6N'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_IU53JRXmYnffIwQz(bh, parentSpanInst);
      //appendnew_next_sd_r82gBojYIdanswne
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
