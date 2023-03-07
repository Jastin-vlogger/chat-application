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
  selector: 'bh-button',
  templateUrl: './button.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buttonComponent {
  @Input('buttonName')
  public buttonName: any = undefined;
  @Input('isDisabled')
  public isDisabled: any = undefined;
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
      this.sd_Yq7qdszHuQ87R7FQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Yq7qdszHuQ87R7FQ(bh) {
    try {
      bh = this.sd_YXJs1dTcfK2WQTNS(bh);
      //appendnew_next_sd_Yq7qdszHuQ87R7FQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yq7qdszHuQ87R7FQ');
    }
  }

  //appendnew_flow_buttonComponent_start

  sd_YXJs1dTcfK2WQTNS(bh) {
    try {
      this.page.name = 'backk';

      bh = this.sd_Fs5ZkzLtx6TObN9r(bh);
      //appendnew_next_sd_YXJs1dTcfK2WQTNS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YXJs1dTcfK2WQTNS');
    }
  }

  sd_Fs5ZkzLtx6TObN9r(bh) {
    try {
      const page = this.page;
      console.log(this.buttonName);

      //appendnew_next_sd_Fs5ZkzLtx6TObN9r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fs5ZkzLtx6TObN9r');
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
  //appendnew_flow_buttonComponent_Catch
}
