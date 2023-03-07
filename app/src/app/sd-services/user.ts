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
export class user {
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

  //   service flows_user

  async fetchUsersData(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_t1h5e2TVPHz8VZ9L(bh);
      //appendnew_next_fetchUsersData
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
      return await this.errorHandler(bh, e, 'sd_s1cpBW880vJr4stE');
    }
  }

  async getMessagesFromTheBackend(
    fro: any = undefined,
    to: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          fro: fro,
          to: to,
        },
        local: {
          messages: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_cfISb6ERorSkKIOO(bh);
      //appendnew_next_getMessagesFromTheBackend
      return (
        // formatting output variables
        {
          input: {},
          local: {
            messages: bh.local.messages,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q4PPgEXaWxGWUJIh');
    }
  }

  //appendnew_flow_user_start

  async sd_t1h5e2TVPHz8VZ9L(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_sO6oXX9GdmxEGGIh(bh);
      //appendnew_next_sd_t1h5e2TVPHz8VZ9L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t1h5e2TVPHz8VZ9L');
    }
  }

  async sd_sO6oXX9GdmxEGGIh(bh) {
    try {
      bh.fetchUrl = `${bh.local.baseUrl}user_fetch`;
      console.log(bh.fetchUrl);

      console.log('im home service called');

      bh = await this.toFetchUserData(bh);
      //appendnew_next_sd_sO6oXX9GdmxEGGIh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sO6oXX9GdmxEGGIh');
    }
  }

  async toFetchUserData(bh) {
    try {
      let requestOptions = {
        url: bh.fetchUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_toFetchUserData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C4tIeQxvTYb6FrsN');
    }
  }

  async sd_cfISb6ERorSkKIOO(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_2xAhi4Fl7Yc7iKui(bh);
      //appendnew_next_sd_cfISb6ERorSkKIOO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cfISb6ERorSkKIOO');
    }
  }

  async sd_2xAhi4Fl7Yc7iKui(bh) {
    try {
      bh.messageUrl = `${bh.local.baseUrl}getMessages`;

      console.log(bh.input.fro, bh.input.to);

      bh.body = {
        from: bh.input.fro,
        to: bh.input.to,
      };

      bh = await this.httpRequestToGetMessages(bh);
      //appendnew_next_sd_2xAhi4Fl7Yc7iKui
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2xAhi4Fl7Yc7iKui');
    }
  }

  async httpRequestToGetMessages(bh) {
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

      bh = await this.sd_dLUv9kkvo5gB9RtA(bh);
      //appendnew_next_httpRequestToGetMessages
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kb4MDxYVWYlb8R84');
    }
  }

  async sd_dLUv9kkvo5gB9RtA(bh) {
    try {
      bh.local.messages = bh.local.result;

      //appendnew_next_sd_dLUv9kkvo5gB9RtA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dLUv9kkvo5gB9RtA');
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
  //appendnew_flow_user_Catch
}
