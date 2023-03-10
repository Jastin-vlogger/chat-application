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
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
import { login } from 'app/sd-services/login'; //_splitter_
import { user } from 'app/sd-services/user'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-chatui',
  templateUrl: './chatui.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class chatuiComponent {
  @Input('email')
  public email: any = undefined;
  @Input('currentUser')
  public currentUser: any = undefined;
  @Input('socket')
  public socket: any = undefined;
  @Input('messages')
  public messages: any = undefined;
  @Input('showContacts')
  public showContacts: any = undefined;
  @Output('showContactsChange')
  public showContactsChange: any = new EventEmitter<any>();
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
      this.sd_kirisANk1V71r8yE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { isTyping: false, isRecording: true });

    //append_listeners
  }

  sd_kirisANk1V71r8yE(bh) {
    try {
      bh = this.sd_o5tY7h4tkmXjbzY6(bh);
      //appendnew_next_sd_kirisANk1V71r8yE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kirisANk1V71r8yE');
    }
  }

  sendMessgeToBackend(msg: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { msg: msg };
      bh.local = {};

      bh = this.sd_80z4HMnaxyumELJl(bh);
      //appendnew_next_sendMessgeToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0B8a4lbozurNPPOB');
    }
  }

  messsage(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_zKE9esnUbRJqPdqd(bh);
      //appendnew_next_messsage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OBqG0WKQjed87EY5');
    }
  }

  evt(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_2MMrfqOTpgetKSMr(bh);
      //appendnew_next_evt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5PyPYlhV8Q7i3c4');
    }
  }

  getMessages(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_DHY7h2O8Fq0xKTeO(bh);
      //appendnew_next_getMessages
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hZzKYPqmwLS9CfSy');
    }
  }

  toGoBack(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_cQiA7YIOeDwYdXMt(bh);
      //appendnew_next_toGoBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0ge4wGAqHKqH7uu');
    }
  }

  startRecording(audioBlob: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { audioBlob: audioBlob };
      bh.local = {};

      bh = this.sd_k3Cu7gIf1cTrXnLh(bh);
      //appendnew_next_startRecording
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3d5ZuDpqBUuYXpLg');
    }
  }

  getTyping(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_G8WWeXV2ndP6DjcW(bh);
      //appendnew_next_getTyping
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W8wUIJWLiNvCwnHm');
    }
  }

  //appendnew_flow_chatuiComponent_start

  sd_o5tY7h4tkmXjbzY6(bh) {
    try {
      const page = this.page;
      console.log(window);
      page.messages = this.messages;
      page.socket = this.socket;

      page.fro = this.currentUser;
      page.to = this.email;

      page.socket.current.on('msg-recieve', (msg) => {
        this.messages.push({
          message: { text: msg },
          sender: this.email,
          users: [this.currentUser, this.email],
        });
      });

      bh = this.sd_CmQ6lgOSxzwlSsXX(bh);
      //appendnew_next_sd_o5tY7h4tkmXjbzY6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o5tY7h4tkmXjbzY6');
    }
  }

  sd_CmQ6lgOSxzwlSsXX(bh) {
    try {
      this.page.sanitize = this.__page_injector__.get(DomSanitizer);

      bh = this.sd_qr7qrYN89cwZ31NZ(bh);
      //appendnew_next_sd_CmQ6lgOSxzwlSsXX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CmQ6lgOSxzwlSsXX');
    }
  }

  sd_qr7qrYN89cwZ31NZ(bh) {
    try {
      //appendnew_next_sd_qr7qrYN89cwZ31NZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qr7qrYN89cwZ31NZ');
    }
  }

  sd_80z4HMnaxyumELJl(bh) {
    try {
      const page = this.page;
      console.log(page.msg);

      //appendnew_next_sd_80z4HMnaxyumELJl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_80z4HMnaxyumELJl');
    }
  }

  sd_zKE9esnUbRJqPdqd(bh) {
    try {
      const page = this.page;
      console.log(page.msg);

      bh = this.sd_XEnkHakQxJh2FgAW(bh);
      //appendnew_next_sd_zKE9esnUbRJqPdqd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zKE9esnUbRJqPdqd');
    }
  }

  sd_XEnkHakQxJh2FgAW(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.msg,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_bPHMWbnlRdguHDNA(bh);
      } else if (
        this.sdService.operators['nempty'](
          this.page.msg,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.socketEmitingScript(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XEnkHakQxJh2FgAW');
    }
  }

  sd_bPHMWbnlRdguHDNA(bh) {
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
        console.log('Blob created');
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log('URL created');

        console.log(page.sanitize);
        page.audio = page.sanitize.bypassSecurityTrustUrl(audioUrl);
        chunks = [];
        console.log(page.audio);
        bh.message = {
          message: { audio: page.audio },
          sender: this.currentUser,
          users: [this.currentUser, this.email],
        };
        let temp = this.messages;
        this.messages = null;
        this.messages = [...temp, bh.message];
        // this.messages.push(bh.message);
        console.log(this.messages);
      };

      page.isTyping = false;
      page.isRecording = true;

      //appendnew_next_sd_bPHMWbnlRdguHDNA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bPHMWbnlRdguHDNA');
    }
  }

  socketEmitingScript(bh) {
    try {
      const page = this.page;
      console.log(page.msg);

      if (!page.msg) {
        console.log('im herereerererererererererererererer');
        return;
      } else {
        page.email = this.email;
        page.currentUser = this.currentUser;

        page.socket.current.emit('send-msg', {
          to: this.email,
          from: this.currentUser,
          message: page.msg,
        });

        bh.message = {
          message: { text: page.msg },
          sender: this.currentUser,
          users: [this.currentUser, this.email],
        };

        this.messages.push(bh.message);
      }

      bh = this.saveMessageToBackend(bh);
      //appendnew_next_socketEmitingScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9RgcjZECdctzEa77');
    }
  }

  async saveMessageToBackend(bh) {
    try {
      const loginInstance: login = this.__page_injector__.get(login);

      let outputVariables = await loginInstance.savingMessagsToTheDb(
        this.page.currentUser,
        this.page.email,
        this.page.msg
      );

      bh = this.sd_n9FllMMYVgDOKyeR(bh);
      //appendnew_next_saveMessageToBackend
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PrqzeWg7SE5dPhb8');
    }
  }

  sd_n9FllMMYVgDOKyeR(bh) {
    try {
      const page = this.page;
      page.msg = '';
      page.isTyping = false;
      page.isRecording = true;

      //appendnew_next_sd_n9FllMMYVgDOKyeR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n9FllMMYVgDOKyeR');
    }
  }

  sd_2MMrfqOTpgetKSMr(bh) {
    try {
      const page = this.page;
      console.log(bh.input.event);

      //appendnew_next_sd_2MMrfqOTpgetKSMr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2MMrfqOTpgetKSMr');
    }
  }

  sd_DHY7h2O8Fq0xKTeO(bh) {
    try {
      const page = this.page;
      page.messages = [];

      bh = this.sd_efbgGLcZqmoUHGig(bh);
      //appendnew_next_sd_DHY7h2O8Fq0xKTeO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DHY7h2O8Fq0xKTeO');
    }
  }

  async sd_efbgGLcZqmoUHGig(bh) {
    try {
      const userInstance: user = this.__page_injector__.get(user);

      let outputVariables = await userInstance.getMessagesFromTheBackend(
        this.page.fro,
        this.page.to
      );

      //appendnew_next_sd_efbgGLcZqmoUHGig
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_efbgGLcZqmoUHGig');
    }
  }

  sd_cQiA7YIOeDwYdXMt(bh) {
    try {
      const page = this.page;
      this.messages = [];
      this.showContactsChange.emit();

      //appendnew_next_sd_cQiA7YIOeDwYdXMt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cQiA7YIOeDwYdXMt');
    }
  }

  async sd_k3Cu7gIf1cTrXnLh(bh) {
    try {
      const page = this.page;

      const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        page.recorder = new MediaRecorder(stream);
        page.recorder.start();
        page.isTyping = true;
        page.isRecording = false;
      };

      startRecording();

      //appendnew_next_sd_k3Cu7gIf1cTrXnLh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k3Cu7gIf1cTrXnLh');
    }
  }

  sd_G8WWeXV2ndP6DjcW(bh) {
    try {
      const page = this.page;
      if (page.msg == '') {
        page.isTyping = false;
        page.isRecording = true;
      } else {
        page.isTyping = true;
        page.isRecording = false;
      }

      //appendnew_next_sd_G8WWeXV2ndP6DjcW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G8WWeXV2ndP6DjcW');
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
  //appendnew_flow_chatuiComponent_Catch
}
