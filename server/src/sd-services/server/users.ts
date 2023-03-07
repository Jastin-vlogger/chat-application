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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class users {
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
    this.serviceName = 'users';
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
      instance = new users(
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
      //appendnew_flow_users_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: users');

    //appendnew_flow_users_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: users');

    this.app['post'](
      `${this.serviceBasePath}/getMessages`,
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
          bh = await this.sd_781617gYMcJxKqMd(bh, parentSpanInst);
          //appendnew_next_sd_UL5x2QohTGrTYhca
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UL5x2QohTGrTYhca');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_users_HttpIn
  }
  //   service flows_users

  //appendnew_flow_users_start

  async sd_781617gYMcJxKqMd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_781617gYMcJxKqMd',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);

      bh.local.query = {
        users: { $all: [bh.input.body.from, bh.input.body.to] },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Qcxj3Krw1QeL5PMD(bh, parentSpanInst);
      //appendnew_next_sd_781617gYMcJxKqMd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_781617gYMcJxKqMd',
        spanInst,
        'sd_781617gYMcJxKqMd'
      );
    }
  }

  async sd_Qcxj3Krw1QeL5PMD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qcxj3Krw1QeL5PMD',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_Vg1PCIdliHqSslUW',
        'messages',
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hs8vL2lQLQN0OnHk(bh, parentSpanInst);
      //appendnew_next_sd_Qcxj3Krw1QeL5PMD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qcxj3Krw1QeL5PMD',
        spanInst,
        'sd_Qcxj3Krw1QeL5PMD'
      );
    }
  }

  async sd_hs8vL2lQLQN0OnHk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hs8vL2lQLQN0OnHk');
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
      false
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
  //appendnew_flow_users_Catch
}
