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
export class login {
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
    this.serviceName = 'login';
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
      instance = new login(
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
      //appendnew_flow_login_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login');

    //appendnew_flow_login_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: login');

    this.app['post'](
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
          bh = await this.sd_oy1g61hUGqDMliGt(bh, parentSpanInst);
          //appendnew_next_sd_98by2MYj7mwZHI0U
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_98by2MYj7mwZHI0U');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user_fetch`,
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
          bh = await this.sd_ORUHd57Dz7ITiJ9V(bh, parentSpanInst);
          //appendnew_next_sd_oFQwtoj5NYXELFRw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oFQwtoj5NYXELFRw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/messages`,
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
          bh = await this.sd_UPiQETFTtfYdYPsD(bh, parentSpanInst);
          //appendnew_next_sd_HRoHQgkYHtRrqW4P
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HRoHQgkYHtRrqW4P');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_HttpIn
  }
  //   service flows_login

  //appendnew_flow_login_start

  async sd_oy1g61hUGqDMliGt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oy1g61hUGqDMliGt',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);

      console.log(bh.web.req.session, 'session');
      bh.local.email = bh.input.body.email;
      bh.local.query = { email: bh.local.email };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkIfTheUserIsThere(bh, parentSpanInst);
      //appendnew_next_sd_oy1g61hUGqDMliGt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oy1g61hUGqDMliGt',
        spanInst,
        'sd_oy1g61hUGqDMliGt'
      );
    }
  }

  async checkIfTheUserIsThere(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkIfTheUserIsThere',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_Vg1PCIdliHqSslUW',
        'users',
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DTE0hh4416VrIYiO(bh, parentSpanInst);
      //appendnew_next_checkIfTheUserIsThere
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZD7p9gY76THfw0ry',
        spanInst,
        'checkIfTheUserIsThere'
      );
    }
  }

  async sd_DTE0hh4416VrIYiO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DTE0hh4416VrIYiO',
      parentSpanInst
    );
    try {
      if (bh.result.length === 0) {
        bh.local.alreadyPresnt = false;
      } else {
        bh.local.alreadyPresnt = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6T9FMvYkwmo2jAvw(bh, parentSpanInst);
      //appendnew_next_sd_DTE0hh4416VrIYiO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DTE0hh4416VrIYiO',
        spanInst,
        'sd_DTE0hh4416VrIYiO'
      );
    }
  }

  async sd_6T9FMvYkwmo2jAvw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6T9FMvYkwmo2jAvw',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.alreadyPresnt,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.alreadyPresent(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.alreadyPresnt,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7RsJxY5DdtljZZN2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6T9FMvYkwmo2jAvw',
        spanInst,
        'sd_6T9FMvYkwmo2jAvw'
      );
    }
  }

  async alreadyPresent(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'email already present' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8aXa36uUE73vSbFM');
    }
  }

  async sd_7RsJxY5DdtljZZN2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7RsJxY5DdtljZZN2',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Vg1PCIdliHqSslUW',
        'users',
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      await this.loginSucess(bh, parentSpanInst);
      //appendnew_next_sd_7RsJxY5DdtljZZN2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7RsJxY5DdtljZZN2',
        spanInst,
        'sd_7RsJxY5DdtljZZN2'
      );
    }
  }

  async loginSucess(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'succesfully logged In' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MPVSVQFXN25cryU2');
    }
  }

  async sd_MChLyTVweUglTMQ7(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send({ message: 'something went wrong' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MChLyTVweUglTMQ7');
    }
  }

  async sd_ORUHd57Dz7ITiJ9V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ORUHd57Dz7ITiJ9V',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.user = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zhdeOdCQMI3iYrSR(bh, parentSpanInst);
      //appendnew_next_sd_ORUHd57Dz7ITiJ9V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ORUHd57Dz7ITiJ9V',
        spanInst,
        'sd_ORUHd57Dz7ITiJ9V'
      );
    }
  }

  async sd_zhdeOdCQMI3iYrSR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zhdeOdCQMI3iYrSR',
      parentSpanInst
    );
    try {
      console.log(bh.user.data.userInfo.username);
      let user = bh.user.data.userInfo.username;

      bh.local.query = { email: { $ne: user } };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DNdoFnxnMmoA230M(bh, parentSpanInst);
      //appendnew_next_sd_zhdeOdCQMI3iYrSR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zhdeOdCQMI3iYrSR',
        spanInst,
        'sd_zhdeOdCQMI3iYrSR'
      );
    }
  }

  async sd_DNdoFnxnMmoA230M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DNdoFnxnMmoA230M',
      parentSpanInst
    );
    try {
      bh.resultantUser = await MongoPersistance.getInstance().find(
        'sd_Vg1PCIdliHqSslUW',
        'users',
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NxfTN35y3qcUoAww(bh, parentSpanInst);
      //appendnew_next_sd_DNdoFnxnMmoA230M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DNdoFnxnMmoA230M',
        spanInst,
        'sd_DNdoFnxnMmoA230M'
      );
    }
  }

  async sd_NxfTN35y3qcUoAww(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NxfTN35y3qcUoAww',
      parentSpanInst
    );
    try {
      console.log(bh.resultantUser);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yUONkUTMANLQEOZH(bh, parentSpanInst);
      //appendnew_next_sd_NxfTN35y3qcUoAww
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NxfTN35y3qcUoAww',
        spanInst,
        'sd_NxfTN35y3qcUoAww'
      );
    }
  }

  async sd_yUONkUTMANLQEOZH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.resultantUser);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yUONkUTMANLQEOZH');
    }
  }

  async sd_UPiQETFTtfYdYPsD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UPiQETFTtfYdYPsD',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);

      bh.local.message = {
        message: {
          text: bh.input.body.message,
        },
        users: [bh.input.body.from, bh.input.body.to],
        sender: bh.input.body.from,
        date: new Date(),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Rf1Wpzf3ZVDQYY9c(bh, parentSpanInst);
      //appendnew_next_sd_UPiQETFTtfYdYPsD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UPiQETFTtfYdYPsD',
        spanInst,
        'sd_UPiQETFTtfYdYPsD'
      );
    }
  }

  async sd_Rf1Wpzf3ZVDQYY9c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rf1Wpzf3ZVDQYY9c',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Vg1PCIdliHqSslUW',
        'messages',
        bh.local.message,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RC6FbRC0zGoT3JvE(bh, parentSpanInst);
      //appendnew_next_sd_Rf1Wpzf3ZVDQYY9c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rf1Wpzf3ZVDQYY9c',
        spanInst,
        'sd_Rf1Wpzf3ZVDQYY9c'
      );
    }
  }

  async sd_RC6FbRC0zGoT3JvE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RC6FbRC0zGoT3JvE');
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
      (await this.catchError(bh, parentSpanInst))
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
  async catchError(bh, parentSpanInst) {
    const nodes = ['sd_7RsJxY5DdtljZZN2'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_MChLyTVweUglTMQ7(bh, parentSpanInst);
      //appendnew_next_catchError
      return true;
    }
    return false;
  }
  //appendnew_flow_login_Catch
}
