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
import { io } from 'socket.io-client'; //_splitter_
import { login } from 'app/sd-services/login'; //_splitter_
import { user } from 'app/sd-services/user'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  @Input('users')
  public users: any = [];
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_zRTck52uytrTFqih(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { showContacts: true });

    //append_listeners
  }

  sd_zRTck52uytrTFqih(bh) {
    try {
      bh = this.sd_20We0OQUJFrlSZdc(bh);
      //appendnew_next_sd_zRTck52uytrTFqih
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zRTck52uytrTFqih');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_qRAKL4uP36EP7iIG(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QNd46CvtuUxPdzGC');
    }
  }

  sendUserInfo(email: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { email: email };
      bh.local = {};

      bh = this.sd_gCQOnuNWUkfyf8Zl(bh);
      //appendnew_next_sendUserInfo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1y9usV9ebaJyAYQx');
    }
  }

  toConsoleBackButton(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_u7viN3wdV7XLzzsx(bh);
      //appendnew_next_toConsoleBackButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_slZyrJgq24aaquss');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_20We0OQUJFrlSZdc(bh) {
    try {
      this.page.io = io;

      bh = this.sd_tkDNX2QuSc92w5ZV(bh);
      //appendnew_next_sd_20We0OQUJFrlSZdc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_20We0OQUJFrlSZdc');
    }
  }

  sd_tkDNX2QuSc92w5ZV(bh) {
    try {
      const page = this.page;
      console.log(page.showContacts);

      page.socket = page.io('https://chatwithme-1c2d.onrender.com');
      page.socket.on('connection', (data) => {
        console.log('Connected to server' + data);
      });
      page.socket.current = io('https://chatwithme-1c2d.onrender.com');
      page.socket.current.emit('add-user', bh.system.currentUser.username);

      bh = this.sd_qidpAg8ko6W9l4gm(bh);
      bh = this.fetchUser(bh);
      //appendnew_next_sd_tkDNX2QuSc92w5ZV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tkDNX2QuSc92w5ZV');
    }
  }

  async sd_qidpAg8ko6W9l4gm(bh) {
    try {
      const loginInstance: login = this.__page_injector__.get(login);

      let outputVariables = await loginInstance.loginCredentialsOfNeutrinos(
        this.page.system.oauthService.userInfo.username,
        this.page.system.oauthService.userInfo.firstName
      );

      bh = this.sd_ZEQvlTP0Pln8Ab10(bh);
      //appendnew_next_sd_qidpAg8ko6W9l4gm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qidpAg8ko6W9l4gm');
    }
  }

  sd_ZEQvlTP0Pln8Ab10(bh) {
    try {
      //appendnew_next_sd_ZEQvlTP0Pln8Ab10
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZEQvlTP0Pln8Ab10');
    }
  }

  async fetchUser(bh) {
    try {
      const userInstance: user = this.__page_injector__.get(user);

      let outputVariables = await userInstance.fetchUsersData();
      this.page.users = outputVariables.local.result;

      bh = this.sd_ztXQDxtwBdFMhFNl(bh);
      //appendnew_next_fetchUser
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R4LJXvPOKDhfTHIx');
    }
  }

  sd_ztXQDxtwBdFMhFNl(bh) {
    try {
      const page = this.page;
      console.log(page.users);

      //appendnew_next_sd_ztXQDxtwBdFMhFNl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ztXQDxtwBdFMhFNl');
    }
  }

  sd_qRAKL4uP36EP7iIG(bh) {
    try {
      const page = this.page;
      bh.system.oauthService
        .logout('test')
        .then((logout) => {
          console.log(logout);
        })
        .catch((err) => {
          console.error(err);
        });

      //appendnew_next_sd_qRAKL4uP36EP7iIG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qRAKL4uP36EP7iIG');
    }
  }

  sd_gCQOnuNWUkfyf8Zl(bh) {
    try {
      const page = this.page;
      page.selected = bh.input.email;

      bh = this.sd_iNEQnEMOCZQhPgRL(bh);
      //appendnew_next_sd_gCQOnuNWUkfyf8Zl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gCQOnuNWUkfyf8Zl');
    }
  }

  async sd_iNEQnEMOCZQhPgRL(bh) {
    try {
      const userInstance: user = this.__page_injector__.get(user);

      let outputVariables = await userInstance.getMessagesFromTheBackend(
        this.page.system.currentUser.username,
        this.page.selected
      );
      bh.result = outputVariables.local.messages;

      bh = this.sd_vBvZpilpBjb1Iclv(bh);
      //appendnew_next_sd_iNEQnEMOCZQhPgRL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iNEQnEMOCZQhPgRL');
    }
  }

  sd_vBvZpilpBjb1Iclv(bh) {
    try {
      const page = this.page;
      page.result = bh.result;

      console.log(page.result, 'lllll');

      //appendnew_next_sd_vBvZpilpBjb1Iclv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vBvZpilpBjb1Iclv');
    }
  }

  sd_u7viN3wdV7XLzzsx(bh) {
    try {
      const page = this.page;
      page.selected = null;

      //appendnew_next_sd_u7viN3wdV7XLzzsx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u7viN3wdV7XLzzsx');
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
  //appendnew_flow_homeComponent_Catch
}
