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
  selector: 'bh-audioTest',
  templateUrl: './audioTest.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class audioTestComponent {
  @Input('recorder')
  public recorder: any = null;
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
      this.sd_c8KsLHt410oTzFis(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { url: undefined });

    //append_listeners
  }

  sd_c8KsLHt410oTzFis(bh) {
    try {
      bh = this.sd_NR7gqqi3gbjohLwm(bh);
      //appendnew_next_sd_c8KsLHt410oTzFis
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c8KsLHt410oTzFis');
    }
  }

  sd_khO7p3skDabsNXJ4(audioBlob: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { audioBlob: audioBlob };
      bh.local = {};

      bh = this.sd_oAZhZXgFr8EMWJeT(bh);
      //appendnew_next_sd_khO7p3skDabsNXJ4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_khO7p3skDabsNXJ4');
    }
  }

  stopRecording(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_1aH9s3a2BzqpQFyc(bh);
      //appendnew_next_stopRecording
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9hZUfNVTPIpsZW8k');
    }
  }

  //appendnew_flow_audioTestComponent_start

  sd_NR7gqqi3gbjohLwm(bh) {
    try {
      //appendnew_next_sd_NR7gqqi3gbjohLwm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NR7gqqi3gbjohLwm');
    }
  }

  async sd_oAZhZXgFr8EMWJeT(bh) {
    try {
      const page = this.page;

      const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        page.recorder = new MediaRecorder(stream);
        page.recorder.start();
      };

      startRecording();

      //appendnew_next_sd_oAZhZXgFr8EMWJeT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oAZhZXgFr8EMWJeT');
    }
  }

  sd_1aH9s3a2BzqpQFyc(bh) {
    try {
      const page = this.page;
      let player = document.querySelector('.audio-player');
      console.log(player);
      let chunks = [];
      page.recorder.stop();
      page.recorder.ondataavailable = (event) => {
        console.log(event.data);
        chunks.push(event.data);
      };
      page.recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        page.audio = audioUrl;
        chunks = [];
      };

      //appendnew_next_sd_1aH9s3a2BzqpQFyc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1aH9s3a2BzqpQFyc');
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
  //appendnew_flow_audioTestComponent_Catch
}
