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
//append_imports_end

@Component({
  selector: 'bh-messages',
  templateUrl: './messages.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class messagesComponent {
  @Input('messages')
  public messages: any = [];
  @Input('currentUser')
  public currentUser: any = '';
  @Input('user')
  public user: any = undefined;
  @Output('changeEvent')
  public changeEvent: any = new EventEmitter<any>();
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
      this.sd_am2mPnj1YU6KMylQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_am2mPnj1YU6KMylQ(bh) {
    try {
      bh = this.sd_KnMX3A08hekEj7Ge(bh);
      //appendnew_next_sd_am2mPnj1YU6KMylQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_am2mPnj1YU6KMylQ');
    }
  }

  func(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_7EslN2Ltrp0hEHeE(bh);
      //appendnew_next_func
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eWKA8uSMnYvHxC7e');
    }
  }

  //appendnew_flow_messagesComponent_start

  sd_KnMX3A08hekEj7Ge(bh) {
    try {
      //appendnew_next_sd_KnMX3A08hekEj7Ge
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KnMX3A08hekEj7Ge');
    }
  }

  sd_7EslN2Ltrp0hEHeE(bh) {
    try {
      const page = this.page;
      this.changeEvent.emit(bh.input.event);

      //appendnew_next_sd_7EslN2Ltrp0hEHeE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7EslN2Ltrp0hEHeE');
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
  //appendnew_flow_messagesComponent_Catch
}
