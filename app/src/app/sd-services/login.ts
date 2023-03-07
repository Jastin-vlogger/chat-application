/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class login {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_login

  async loginRequestToBackend(email = '', password = '', ...others) {
    try {
      var bh: any = {
        input: {
          email: email,
          password: password,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_plC6Fr6ZPtMOSpK4(bh);
      //appendnew_next_loginRequestToBackend
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sRvYkQD67xElzhSw');
    }
  }

  async loginCredentialsOfNeutrinos(email = '', displayName = '', ...others) {
    try {
      var bh: any = {
        input: {
          email: email,
          displayName: displayName,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_nNWSrfJGcgY6E1mV(bh);
      //appendnew_next_loginCredentialsOfNeutrinos
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ItHrLslBoKmvSFdj');
    }
  }

  async savingMessagsToTheDb(
    fro: any = undefined,
    to: any = undefined,
    msg: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          fro: fro,
          to: to,
          msg: msg,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_3SB1hVLRTYoOj3eo(bh);
      //appendnew_next_savingMessagsToTheDb
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oL5a3tB1VWkpCby6');
    }
  }

  //appendnew_flow_login_start

  async sd_plC6Fr6ZPtMOSpK4(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_PYJSRp3Emai5CkWb(bh);
      //appendnew_next_sd_plC6Fr6ZPtMOSpK4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_plC6Fr6ZPtMOSpK4');
    }
  }

  async sd_PYJSRp3Emai5CkWb(bh) {
    try {
      bh.loginUrl = `${bh.local.baseUrl}login`;

      console.log(bh.input.email, bh.input.password);
      bh.body = {
        email: bh.input.email,
        password: bh.input.password,
      };

      bh = await this.sd_WOSKh6aKJCKMMSuY(bh);
      //appendnew_next_sd_PYJSRp3Emai5CkWb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PYJSRp3Emai5CkWb');
    }
  }

  async sd_WOSKh6aKJCKMMSuY(bh) {
    try {
      let requestOptions = {
        url: bh.loginUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_WOSKh6aKJCKMMSuY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WOSKh6aKJCKMMSuY');
    }
  }

  async sd_nNWSrfJGcgY6E1mV(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_ON07BgiR8lTn2fHh(bh);
      //appendnew_next_sd_nNWSrfJGcgY6E1mV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nNWSrfJGcgY6E1mV');
    }
  }

  async sd_ON07BgiR8lTn2fHh(bh) {
    try {
      bh.loginUrl = `${bh.local.baseUrl}login`;

      console.log(bh.input.email, bh.input.password);
      bh.body = {
        email: bh.input.email,
        name: bh.input.displayName,
      };

      bh = await this.sd_MjcjAgCelZFWTdrE(bh);
      //appendnew_next_sd_ON07BgiR8lTn2fHh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ON07BgiR8lTn2fHh');
    }
  }

  async sd_MjcjAgCelZFWTdrE(bh) {
    try {
      let requestOptions = {
        url: bh.loginUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_C53ofSyhC2TEuyX1(bh);
      //appendnew_next_sd_MjcjAgCelZFWTdrE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MjcjAgCelZFWTdrE');
    }
  }

  async sd_C53ofSyhC2TEuyX1(bh) {
    try {
      console.log(bh.local.result);

      //appendnew_next_sd_C53ofSyhC2TEuyX1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C53ofSyhC2TEuyX1');
    }
  }

  async sd_3SB1hVLRTYoOj3eo(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_8EU641ieLf5pVk9Z(bh);
      //appendnew_next_sd_3SB1hVLRTYoOj3eo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3SB1hVLRTYoOj3eo');
    }
  }

  async sd_8EU641ieLf5pVk9Z(bh) {
    try {
      bh.messageUrl = `${bh.local.baseUrl}messages`;

      console.log(bh.input.fro, bh.input.to, bh.input.msg);

      bh.body = {
        from: bh.input.fro,
        to: bh.input.to,
        message: bh.input.msg,
      };

      bh = await this.httpRequestToAddMessage(bh);
      //appendnew_next_sd_8EU641ieLf5pVk9Z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8EU641ieLf5pVk9Z');
    }
  }

  async httpRequestToAddMessage(bh) {
    try {
      let requestOptions = {
        url: bh.messageUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_6Mdj2fEXppO96yOp(bh);
      //appendnew_next_httpRequestToAddMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W1fn3gjNDl3uquUl');
    }
  }

  async sd_6Mdj2fEXppO96yOp(bh) {
    try {
      console.log(bh.local.result);

      //appendnew_next_sd_6Mdj2fEXppO96yOp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6Mdj2fEXppO96yOp');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_login_Catch
}
