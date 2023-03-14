/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { login } from 'app/sd-services/login'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_R7VyefE7z8HizVgV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_R7VyefE7z8HizVgV(bh) {
    try {
      bh = this.sd_I0iEjBtNCcHiE2yx(bh);
      //appendnew_next_sd_R7VyefE7z8HizVgV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R7VyefE7z8HizVgV');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ItbJu2uqoJCqFe0j(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_So4AYCJI72VRjKYv');
    }
  }

  sendRequestToBackendLogin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_tXdBThF0QkZFB5Cm(bh);
      //appendnew_next_sendRequestToBackendLogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_esFaMrOVo9QVSmfw');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_I0iEjBtNCcHiE2yx(bh) {
    try {
      const page = this.page;
      this.page.authSubscribe = bh.system.oauthService
        .authState()
        .subscribe((state) => {
          // Perform user friendly action when session becomes invalid
          this.page.authState = state;
          alert(JSON.stringify(state));
          console.log(this.page.authState);
        });

      bh = this.sd_xj5WYg5cIXcPlGV3(bh);
      //appendnew_next_sd_I0iEjBtNCcHiE2yx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I0iEjBtNCcHiE2yx');
    }
  }

  sd_xj5WYg5cIXcPlGV3(bh) {
    try {
      this.page.inputEmail = '';
      this.page.isTyped = false;
      this.page.inputPassword = '';

      //appendnew_next_sd_xj5WYg5cIXcPlGV3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xj5WYg5cIXcPlGV3');
    }
  }

  sd_ItbJu2uqoJCqFe0j(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.login('home');

      bh = this.sd_b0mR9TD2ivsS4zpy(bh);
      //appendnew_next_sd_ItbJu2uqoJCqFe0j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ItbJu2uqoJCqFe0j');
    }
  }

  async sd_b0mR9TD2ivsS4zpy(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_b0mR9TD2ivsS4zpy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b0mR9TD2ivsS4zpy');
    }
  }

  sd_tXdBThF0QkZFB5Cm(bh) {
    try {
      const page = this.page;
      console.log(page.inputEmail, typeof page.passwordInput);

      if (page.passwordInput == undefined || page.inputEmail == undefined) {
        bh.local.valid = false;
      } else if (page.passwordInput.length > 0 || page.inputEmail > 0) {
        bh.local.valid = true;
      } else {
        bh.local.valid = false;
      }

      bh = this.sd_Wh0L4GgqWpavYv33(bh);
      //appendnew_next_sd_tXdBThF0QkZFB5Cm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tXdBThF0QkZFB5Cm');
    }
  }

  sd_Wh0L4GgqWpavYv33(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Ambds9vMriOUinmk(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_HM5OaipCNrpHp7C4(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wh0L4GgqWpavYv33');
    }
  }

  async sd_Ambds9vMriOUinmk(bh) {
    try {
      const loginInstance: login = this.__page_injector__.get(login);

      let outputVariables = await loginInstance.loginRequestToBackend(
        this.page.inputEmail,
        this.page.passwordInput
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_aTyZIVFLm6VH07Nu(bh);
      //appendnew_next_sd_Ambds9vMriOUinmk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ambds9vMriOUinmk');
    }
  }

  sd_aTyZIVFLm6VH07Nu(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, '+++++++++++++++++++++++');

      bh = this.sd_IPJzIN7Yoiwqay4V(bh);
      //appendnew_next_sd_aTyZIVFLm6VH07Nu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aTyZIVFLm6VH07Nu');
    }
  }

  sd_IPJzIN7Yoiwqay4V(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.local.result.message,
          'email already present',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_N1S2lwaB2h1BG6Ut(bh);
      } else if (
        this.sdService.operators['se'](
          bh.local.result.message,
          'succesfully logged In',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8MoGMOsre17Laapi(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IPJzIN7Yoiwqay4V');
    }
  }

  sd_N1S2lwaB2h1BG6Ut(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Email already present', '', {
          duration: 1000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_N1S2lwaB2h1BG6Ut
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N1S2lwaB2h1BG6Ut');
    }
  }

  async sd_8MoGMOsre17Laapi(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_8MoGMOsre17Laapi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8MoGMOsre17Laapi');
    }
  }

  sd_HM5OaipCNrpHp7C4(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password or Email is required', '', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_HM5OaipCNrpHp7C4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HM5OaipCNrpHp7C4');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_loginComponent_Catch
}
