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
import * as RecordRTC from 'recordrtc'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-audioTest',
  templateUrl: './audioTest.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class audioTestComponent {
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

      bh = this.sd_Adkw7ibAwwDzFMOO(bh);
      //appendnew_next_sd_khO7p3skDabsNXJ4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_khO7p3skDabsNXJ4');
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

  sd_Adkw7ibAwwDzFMOO(bh) {
    try {
      bh.RecordRTC = RecordRTC;

      bh = this.sd_oAZhZXgFr8EMWJeT(bh);
      //appendnew_next_sd_Adkw7ibAwwDzFMOO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Adkw7ibAwwDzFMOO');
    }
  }

  sd_oAZhZXgFr8EMWJeT(bh) {
    try {
      const page = this.page;
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then((stream) => {
          let options = {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 128000,
          };
          let recorder = new RecordRTC.StereoAudioRecorder(stream, {
            type: 'audio',
            mimeType: 'audio/mp3',
          });
          recorder.record();
          setTimeout(() => {
            recorder.stop(() => {
              let blob = recorder.blob;
              page.audio = {
                type: blob.type,
                url: URL.createObjectURL(blob),
              };
            });
          }, 5000); // Stop recording after 5 seconds
        })
        .catch((err) => {
          console.log(err);
        });

      //appendnew_next_sd_oAZhZXgFr8EMWJeT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oAZhZXgFr8EMWJeT');
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
