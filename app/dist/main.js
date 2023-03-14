"use strict";
(self["webpackChunksample"] = self["webpackChunksample"] || []).push([["main"],{

/***/ 7677:
/*!***************************************!*\
  !*** ./baseClasses/localesService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localesService": () => (/* binding */ localesService)
/* harmony export */ });
/* harmony import */ var _src_app_n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/app/n-services/n-localeResources.service */ 48515);

class localesService {
    //This method is only to be called during app bootstrap.
    static init() {
        localesService.localesInstance = new _src_app_n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_0__.NLocaleResource();
        return Promise.all([
            localesService.localesInstance.getLang(),
            localesService.localesInstance.getLocales(),
        ]);
    }
    static getLocalesInstance() {
        return localesService.localesInstance;
    }
}


/***/ }),

/***/ 76717:
/*!*****************************************!*\
  !*** ./baseClasses/nDataModel.class.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NDataModel": () => (/* binding */ NDataModel)
/* harmony export */ });
//IMPORT NEW DATAMODEL
class NDataModel {
    //DECLARE NEW VARIABLE
    constructor() {
        //CREATE NEW DM INSTANCE
    }
}


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_declarations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/declarations */ 70897);
/* harmony import */ var _config_import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/import-modules */ 75398);




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [..._config_declarations__WEBPACK_IMPORTED_MODULE_0__.appDeclarations],
        imports: [..._config_import_modules__WEBPACK_IMPORTED_MODULE_1__.appImportModules],
        providers: [..._config_declarations__WEBPACK_IMPORTED_MODULE_0__.appProviders],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [..._config_declarations__WEBPACK_IMPORTED_MODULE_0__.appBootstrap]
    })
], AppModule);



/***/ }),

/***/ 12613:
/*!*********************************************************!*\
  !*** ./src/app/components/Heading/heading.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headingComponent": () => (/* binding */ headingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _heading_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.template.html?ngResource */ 18944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let headingComponent = class headingComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.heading = undefined;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_WnMhsrIHXlb6W7gj(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_WnMhsrIHXlb6W7gj(bh) {
        try {
            bh = this.sd_zSp86wHv346a5Du0(bh);
            //appendnew_next_sd_WnMhsrIHXlb6W7gj
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_WnMhsrIHXlb6W7gj');
        }
    }
    //appendnew_flow_headingComponent_start
    sd_zSp86wHv346a5Du0(bh) {
        try {
            this.page.header = '';
            //appendnew_next_sd_zSp86wHv346a5Du0
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_zSp86wHv346a5Du0');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
headingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
headingComponent.propDecorators = {
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['heading',] }]
};
headingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-heading',
        template: _heading_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], headingComponent);



/***/ }),

/***/ 61354:
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonComponent": () => (/* binding */ buttonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.template.html?ngResource */ 11523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let buttonComponent = class buttonComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.buttonName = undefined;
        this.isDisabled = undefined;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_Yq7qdszHuQ87R7FQ(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_Yq7qdszHuQ87R7FQ(bh) {
        try {
            bh = this.sd_YXJs1dTcfK2WQTNS(bh);
            //appendnew_next_sd_Yq7qdszHuQ87R7FQ
            return bh;
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_YXJs1dTcfK2WQTNS');
        }
    }
    sd_Fs5ZkzLtx6TObN9r(bh) {
        try {
            const page = this.page;
            console.log(this.buttonName);
            //appendnew_next_sd_Fs5ZkzLtx6TObN9r
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_Fs5ZkzLtx6TObN9r');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
buttonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
buttonComponent.propDecorators = {
    buttonName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['buttonName',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['isDisabled',] }]
};
buttonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-button',
        template: _button_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], buttonComponent);



/***/ }),

/***/ 78208:
/*!********************************************************!*\
  !*** ./src/app/components/chat ui/chatui.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatuiComponent": () => (/* binding */ chatuiComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chatui_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatui.template.html?ngResource */ 77619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var app_sd_services_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/login */ 7815);
/* harmony import */ var app_sd_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sd-services/user */ 31461);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let chatuiComponent = class chatuiComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.email = undefined;
        this.currentUser = undefined;
        this.socket = undefined;
        this.messages = undefined;
        this.showContacts = undefined;
        this.showContactsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_kirisANk1V71r8yE(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        Object.assign(this.page, { isTyping: false, isRecording: true });
        //append_listeners
    }
    sd_kirisANk1V71r8yE(bh) {
        try {
            bh = this.sd_o5tY7h4tkmXjbzY6(bh);
            //appendnew_next_sd_kirisANk1V71r8yE
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_kirisANk1V71r8yE');
        }
    }
    sendMessgeToBackend(msg = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { msg: msg };
            bh.local = {};
            bh = this.sd_80z4HMnaxyumELJl(bh);
            //appendnew_next_sendMessgeToBackend
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_0B8a4lbozurNPPOB');
        }
    }
    messsage(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_zKE9esnUbRJqPdqd(bh);
            //appendnew_next_messsage
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_OBqG0WKQjed87EY5');
        }
    }
    evt(event = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { event: event };
            bh.local = {};
            bh = this.sd_2MMrfqOTpgetKSMr(bh);
            //appendnew_next_evt
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_K5PyPYlhV8Q7i3c4');
        }
    }
    getMessages(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_DHY7h2O8Fq0xKTeO(bh);
            //appendnew_next_getMessages
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_hZzKYPqmwLS9CfSy');
        }
    }
    toGoBack(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_cQiA7YIOeDwYdXMt(bh);
            //appendnew_next_toGoBack
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_l0ge4wGAqHKqH7uu');
        }
    }
    startRecording(audioBlob = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { audioBlob: audioBlob };
            bh.local = {};
            bh = this.sd_k3Cu7gIf1cTrXnLh(bh);
            //appendnew_next_startRecording
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_3d5ZuDpqBUuYXpLg');
        }
    }
    getTyping(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_G8WWeXV2ndP6DjcW(bh);
            //appendnew_next_getTyping
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_o5tY7h4tkmXjbzY6');
        }
    }
    sd_CmQ6lgOSxzwlSsXX(bh) {
        try {
            this.page.sanitize = this.__page_injector__.get(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer);
            bh = this.sd_qr7qrYN89cwZ31NZ(bh);
            //appendnew_next_sd_CmQ6lgOSxzwlSsXX
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_CmQ6lgOSxzwlSsXX');
        }
    }
    sd_qr7qrYN89cwZ31NZ(bh) {
        try {
            //appendnew_next_sd_qr7qrYN89cwZ31NZ
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_qr7qrYN89cwZ31NZ');
        }
    }
    sd_80z4HMnaxyumELJl(bh) {
        try {
            const page = this.page;
            console.log(page.msg);
            //appendnew_next_sd_80z4HMnaxyumELJl
            return bh;
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_zKE9esnUbRJqPdqd');
        }
    }
    sd_XEnkHakQxJh2FgAW(bh) {
        try {
            if (this.sdService.operators['eq'](this.page.msg, undefined, undefined, undefined)) {
                bh = this.sd_bPHMWbnlRdguHDNA(bh);
            }
            else if (this.sdService.operators['nempty'](this.page.msg, undefined, undefined, undefined)) {
                bh = this.socketEmitingScript(bh);
            }
            return bh;
        }
        catch (e) {
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
        }
        catch (e) {
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
            }
            else {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_9RgcjZECdctzEa77');
        }
    }
    saveMessageToBackend(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const loginInstance = this.__page_injector__.get(app_sd_services_login__WEBPACK_IMPORTED_MODULE_4__.login);
                let outputVariables = yield loginInstance.savingMessagsToTheDb(this.page.currentUser, this.page.email, this.page.msg);
                bh = this.sd_n9FllMMYVgDOKyeR(bh);
                //appendnew_next_saveMessageToBackend
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_PrqzeWg7SE5dPhb8');
            }
        });
    }
    sd_n9FllMMYVgDOKyeR(bh) {
        try {
            const page = this.page;
            page.msg = '';
            page.isTyping = false;
            page.isRecording = true;
            //appendnew_next_sd_n9FllMMYVgDOKyeR
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_n9FllMMYVgDOKyeR');
        }
    }
    sd_2MMrfqOTpgetKSMr(bh) {
        try {
            const page = this.page;
            console.log(bh.input.event);
            //appendnew_next_sd_2MMrfqOTpgetKSMr
            return bh;
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_DHY7h2O8Fq0xKTeO');
        }
    }
    sd_efbgGLcZqmoUHGig(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userInstance = this.__page_injector__.get(app_sd_services_user__WEBPACK_IMPORTED_MODULE_5__.user);
                let outputVariables = yield userInstance.getMessagesFromTheBackend(this.page.fro, this.page.to);
                //appendnew_next_sd_efbgGLcZqmoUHGig
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_efbgGLcZqmoUHGig');
            }
        });
    }
    sd_cQiA7YIOeDwYdXMt(bh) {
        try {
            const page = this.page;
            this.messages = [];
            this.showContactsChange.emit();
            //appendnew_next_sd_cQiA7YIOeDwYdXMt
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_cQiA7YIOeDwYdXMt');
        }
    }
    sd_k3Cu7gIf1cTrXnLh(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const page = this.page;
                const startRecording = () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        audio: true,
                    });
                    page.recorder = new MediaRecorder(stream);
                    page.recorder.start();
                    page.isTyping = true;
                    page.isRecording = false;
                });
                startRecording();
                //appendnew_next_sd_k3Cu7gIf1cTrXnLh
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_k3Cu7gIf1cTrXnLh');
            }
        });
    }
    sd_G8WWeXV2ndP6DjcW(bh) {
        try {
            const page = this.page;
            if (page.msg == '') {
                page.isTyping = false;
                page.isRecording = true;
            }
            else {
                page.isTyping = true;
                page.isRecording = false;
            }
            //appendnew_next_sd_G8WWeXV2ndP6DjcW
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_G8WWeXV2ndP6DjcW');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
chatuiComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
chatuiComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['email',] }],
    currentUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['currentUser',] }],
    socket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['socket',] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['messages',] }],
    showContacts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['showContacts',] }],
    showContactsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output, args: ['showContactsChange',] }]
};
chatuiComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'bh-chatui',
        template: _chatui_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], chatuiComponent);



/***/ }),

/***/ 92418:
/*!***********************************************************!*\
  !*** ./src/app/components/inputs/emailInput.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailInputComponent": () => (/* binding */ emailInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _emailInput_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailInput.template.html?ngResource */ 49899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let emailInputComponent = class emailInputComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_W28aOTR4DwnPsf4c(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_W28aOTR4DwnPsf4c(bh) {
        try {
            bh = this.sd_JPH0bsh8BThtqROx(bh);
            //appendnew_next_sd_W28aOTR4DwnPsf4c
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_W28aOTR4DwnPsf4c');
        }
    }
    //appendnew_flow_emailInputComponent_start
    sd_JPH0bsh8BThtqROx(bh) {
        try {
            //appendnew_next_sd_JPH0bsh8BThtqROx
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_JPH0bsh8BThtqROx');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
emailInputComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
emailInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-emailInput',
        template: _emailInput_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], emailInputComponent);



/***/ }),

/***/ 85995:
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesComponent": () => (/* binding */ messagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.template.html?ngResource */ 75288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let messagesComponent = class messagesComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.messages = [];
        this.currentUser = '';
        this.user = undefined;
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_am2mPnj1YU6KMylQ(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_am2mPnj1YU6KMylQ(bh) {
        try {
            bh = this.sd_KnMX3A08hekEj7Ge(bh);
            //appendnew_next_sd_am2mPnj1YU6KMylQ
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_am2mPnj1YU6KMylQ');
        }
    }
    func(event = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { event: event };
            bh.local = {};
            bh = this.sd_7EslN2Ltrp0hEHeE(bh);
            //appendnew_next_func
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_eWKA8uSMnYvHxC7e');
        }
    }
    //appendnew_flow_messagesComponent_start
    sd_KnMX3A08hekEj7Ge(bh) {
        try {
            //appendnew_next_sd_KnMX3A08hekEj7Ge
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_KnMX3A08hekEj7Ge');
        }
    }
    sd_7EslN2Ltrp0hEHeE(bh) {
        try {
            const page = this.page;
            this.changeEvent.emit(bh.input.event);
            //appendnew_next_sd_7EslN2Ltrp0hEHeE
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_7EslN2Ltrp0hEHeE');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
messagesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
messagesComponent.propDecorators = {
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['messages',] }],
    currentUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['currentUser',] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['user',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output, args: ['changeEvent',] }]
};
messagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-messages',
        template: _messages_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], messagesComponent);



/***/ }),

/***/ 33252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarComponent": () => (/* binding */ navbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _navbar_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.template.html?ngResource */ 90910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let navbarComponent = class navbarComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_XE8RQ8DggPbmaA1K(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_XE8RQ8DggPbmaA1K(bh) {
        try {
            bh = this.sd_u8QSkNeQ8NllYzx9(bh);
            //appendnew_next_sd_XE8RQ8DggPbmaA1K
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_XE8RQ8DggPbmaA1K');
        }
    }
    //appendnew_flow_navbarComponent_start
    sd_u8QSkNeQ8NllYzx9(bh) {
        try {
            //appendnew_next_sd_u8QSkNeQ8NllYzx9
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_u8QSkNeQ8NllYzx9');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
navbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
navbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-navbar',
        template: _navbar_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], navbarComponent);



/***/ }),

/***/ 46564:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/audioTest.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioTestComponent": () => (/* binding */ audioTestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _audioTest_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audioTest.template.html?ngResource */ 30979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wavesurfer.js */ 11733);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let audioTestComponent = class audioTestComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.recorder = null;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_c8KsLHt410oTzFis(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        Object.assign(this.page, { url: undefined });
        //append_listeners
    }
    sd_c8KsLHt410oTzFis(bh) {
        try {
            bh = this.sd_EDg7rxum0Lwa7SK3(bh);
            //appendnew_next_sd_c8KsLHt410oTzFis
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_c8KsLHt410oTzFis');
        }
    }
    sd_khO7p3skDabsNXJ4(audioBlob = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { audioBlob: audioBlob };
            bh.local = {};
            bh = this.sd_oAZhZXgFr8EMWJeT(bh);
            //appendnew_next_sd_khO7p3skDabsNXJ4
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_khO7p3skDabsNXJ4');
        }
    }
    stopRecording(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_1aH9s3a2BzqpQFyc(bh);
            //appendnew_next_stopRecording
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_9hZUfNVTPIpsZW8k');
        }
    }
    //appendnew_flow_audioTestComponent_start
    sd_EDg7rxum0Lwa7SK3(bh) {
        try {
            this.page.WaveSurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__;
            bh = this.wavsuferInital(bh);
            //appendnew_next_sd_EDg7rxum0Lwa7SK3
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_EDg7rxum0Lwa7SK3');
        }
    }
    wavsuferInital(bh) {
        try {
            const page = this.page;
            page.wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_4__.create({
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple',
            });
            bh = this.sd_o3YoXae8yR8O7A8J(bh);
            //appendnew_next_wavsuferInital
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_Fs82pct0Waa0M6Fi');
        }
    }
    sd_o3YoXae8yR8O7A8J(bh) {
        try {
            this.page.sanitizer = this.__page_injector__.get(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer);
            bh = this.sd_NR7gqqi3gbjohLwm(bh);
            //appendnew_next_sd_o3YoXae8yR8O7A8J
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_o3YoXae8yR8O7A8J');
        }
    }
    sd_NR7gqqi3gbjohLwm(bh) {
        try {
            //appendnew_next_sd_NR7gqqi3gbjohLwm
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_NR7gqqi3gbjohLwm');
        }
    }
    sd_oAZhZXgFr8EMWJeT(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const page = this.page;
                const startRecording = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        audio: true,
                    });
                    page.recorder = new MediaRecorder(stream);
                    page.recorder.start();
                });
                startRecording();
                //appendnew_next_sd_oAZhZXgFr8EMWJeT
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_oAZhZXgFr8EMWJeT');
            }
        });
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
                console.log(page.sanitizer);
                page.audio = page.sanitizer.bypassSecurityTrustUrl(audioUrl);
                chunks = [];
                console.log(page.audio);
                page.wavesurfer.load(' https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');
            };
            //appendnew_next_sd_1aH9s3a2BzqpQFyc
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_1aH9s3a2BzqpQFyc');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
audioTestComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
audioTestComponent.propDecorators = {
    recorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['recorder',] }]
};
audioTestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'bh-audioTest',
        template: _audioTest_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], audioTestComponent);



/***/ }),

/***/ 78897:
/*!****************************************************!*\
  !*** ./src/app/components/pages/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeComponent": () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.template.html?ngResource */ 71209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var app_sd_services_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sd-services/login */ 7815);
/* harmony import */ var app_sd_services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/sd-services/user */ 31461);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let homeComponent = class homeComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.users = [];
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_zRTck52uytrTFqih(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        Object.assign(this.page, { showContacts: true });
        //append_listeners
    }
    sd_zRTck52uytrTFqih(bh) {
        try {
            bh = this.sd_20We0OQUJFrlSZdc(bh);
            //appendnew_next_sd_zRTck52uytrTFqih
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_zRTck52uytrTFqih');
        }
    }
    logout(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_qRAKL4uP36EP7iIG(bh);
            //appendnew_next_logout
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_QNd46CvtuUxPdzGC');
        }
    }
    sendUserInfo(email = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { email: email };
            bh.local = {};
            bh = this.sd_gCQOnuNWUkfyf8Zl(bh);
            //appendnew_next_sendUserInfo
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_1y9usV9ebaJyAYQx');
        }
    }
    toConsoleBackButton(event = undefined, ...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = { event: event };
            bh.local = {};
            bh = this.sd_u7viN3wdV7XLzzsx(bh);
            //appendnew_next_toConsoleBackButton
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_slZyrJgq24aaquss');
        }
    }
    //appendnew_flow_homeComponent_start
    sd_20We0OQUJFrlSZdc(bh) {
        try {
            this.page.io = socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io;
            bh = this.sd_fbtPsC0XB2GiVNJI(bh);
            //appendnew_next_sd_20We0OQUJFrlSZdc
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_20We0OQUJFrlSZdc');
        }
    }
    sd_fbtPsC0XB2GiVNJI(bh) {
        try {
            this.page.url = bh.system.environment.properties.socketUrl;
            bh = this.sd_tkDNX2QuSc92w5ZV(bh);
            //appendnew_next_sd_fbtPsC0XB2GiVNJI
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_fbtPsC0XB2GiVNJI');
        }
    }
    sd_tkDNX2QuSc92w5ZV(bh) {
        try {
            const page = this.page;
            console.log(page.system.oauthService, '+++++++++');
            page.socket = page.io(page.url);
            page.socket.on('connection', (data) => {
                console.log('Connected to server' + data);
            });
            page.socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)(page.url);
            page.socket.current.emit('add-user', bh.system.currentUser.username);
            bh = this.sd_qidpAg8ko6W9l4gm(bh);
            bh = this.fetchUser(bh);
            //appendnew_next_sd_tkDNX2QuSc92w5ZV
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_tkDNX2QuSc92w5ZV');
        }
    }
    sd_qidpAg8ko6W9l4gm(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const loginInstance = this.__page_injector__.get(app_sd_services_login__WEBPACK_IMPORTED_MODULE_5__.login);
                let outputVariables = yield loginInstance.loginCredentialsOfNeutrinos(this.page.system.oauthService.userInfo.username, this.page.system.oauthService.userInfo.firstName);
                bh = this.sd_ZEQvlTP0Pln8Ab10(bh);
                //appendnew_next_sd_qidpAg8ko6W9l4gm
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_qidpAg8ko6W9l4gm');
            }
        });
    }
    sd_ZEQvlTP0Pln8Ab10(bh) {
        try {
            //appendnew_next_sd_ZEQvlTP0Pln8Ab10
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_ZEQvlTP0Pln8Ab10');
        }
    }
    fetchUser(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userInstance = this.__page_injector__.get(app_sd_services_user__WEBPACK_IMPORTED_MODULE_6__.user);
                let outputVariables = yield userInstance.fetchUsersData();
                this.page.users = outputVariables.local.result;
                bh = this.sd_ztXQDxtwBdFMhFNl(bh);
                //appendnew_next_fetchUser
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_R4LJXvPOKDhfTHIx');
            }
        });
    }
    sd_ztXQDxtwBdFMhFNl(bh) {
        try {
            const page = this.page;
            console.log(page.users);
            //appendnew_next_sd_ztXQDxtwBdFMhFNl
            return bh;
        }
        catch (e) {
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
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_gCQOnuNWUkfyf8Zl');
        }
    }
    sd_iNEQnEMOCZQhPgRL(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userInstance = this.__page_injector__.get(app_sd_services_user__WEBPACK_IMPORTED_MODULE_6__.user);
                let outputVariables = yield userInstance.getMessagesFromTheBackend(this.page.system.currentUser.username, this.page.selected);
                bh.result = outputVariables.local.messages;
                bh = this.sd_vBvZpilpBjb1Iclv(bh);
                //appendnew_next_sd_iNEQnEMOCZQhPgRL
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_iNEQnEMOCZQhPgRL');
            }
        });
    }
    sd_vBvZpilpBjb1Iclv(bh) {
        try {
            const page = this.page;
            page.result = bh.result;
            console.log(page.result, 'lllll');
            //appendnew_next_sd_vBvZpilpBjb1Iclv
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_vBvZpilpBjb1Iclv');
        }
    }
    sd_u7viN3wdV7XLzzsx(bh) {
        try {
            const page = this.page;
            page.selected = null;
            //appendnew_next_sd_u7viN3wdV7XLzzsx
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_u7viN3wdV7XLzzsx');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
homeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
homeComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['users',] }]
};
homeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'bh-home',
        template: _home_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], homeComponent);



/***/ }),

/***/ 15978:
/*!*****************************************************!*\
  !*** ./src/app/components/pages/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginComponent": () => (/* binding */ loginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.template.html?ngResource */ 65725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_sd_services_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/login */ 7815);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let loginComponent = class loginComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        this.page.dep.FormBuilder = this.__page_injector__.get(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder); //FormBuilder
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_R7VyefE7z8HizVgV(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_R7VyefE7z8HizVgV(bh) {
        try {
            bh = this.sd_I0iEjBtNCcHiE2yx(bh);
            //appendnew_next_sd_R7VyefE7z8HizVgV
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_R7VyefE7z8HizVgV');
        }
    }
    login(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_ItbJu2uqoJCqFe0j(bh);
            //appendnew_next_login
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_So4AYCJI72VRjKYv');
        }
    }
    sendRequestToBackendLogin(...others) {
        try {
            var bh = this.__page_injector__
                .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
                .constructFlowObject(this);
            bh.input = {};
            bh.local = {};
            bh = this.sd_tXdBThF0QkZFB5Cm(bh);
            //appendnew_next_sendRequestToBackendLogin
        }
        catch (e) {
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
        }
        catch (e) {
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
        }
        catch (e) {
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
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_ItbJu2uqoJCqFe0j');
        }
    }
    sd_b0mR9TD2ivsS4zpy(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { paramObj: qprm, path: path } = this.sdService.getPathAndQParamsObj('/home');
                yield this.__page_injector__
                    .get(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)
                    .navigate([this.sdService.formatPathWithParams(path, undefined)], {
                    queryParams: Object.assign(qprm, ''),
                });
                //appendnew_next_sd_b0mR9TD2ivsS4zpy
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_b0mR9TD2ivsS4zpy');
            }
        });
    }
    sd_tXdBThF0QkZFB5Cm(bh) {
        try {
            const page = this.page;
            console.log(page.inputEmail, typeof page.passwordInput);
            if (page.passwordInput == undefined || page.inputEmail == undefined) {
                bh.local.valid = false;
            }
            else if (page.passwordInput.length > 0 || page.inputEmail > 0) {
                bh.local.valid = true;
            }
            else {
                bh.local.valid = false;
            }
            bh = this.sd_Wh0L4GgqWpavYv33(bh);
            //appendnew_next_sd_tXdBThF0QkZFB5Cm
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_tXdBThF0QkZFB5Cm');
        }
    }
    sd_Wh0L4GgqWpavYv33(bh) {
        try {
            if (this.sdService.operators['true'](bh.local.valid, undefined, undefined, undefined)) {
                bh = this.sd_Ambds9vMriOUinmk(bh);
            }
            else if (this.sdService.operators['false'](bh.local.valid, undefined, undefined, undefined)) {
                bh = this.sd_HM5OaipCNrpHp7C4(bh);
            }
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_Wh0L4GgqWpavYv33');
        }
    }
    sd_Ambds9vMriOUinmk(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const loginInstance = this.__page_injector__.get(app_sd_services_login__WEBPACK_IMPORTED_MODULE_4__.login);
                let outputVariables = yield loginInstance.loginRequestToBackend(this.page.inputEmail, this.page.passwordInput);
                bh.local.result = outputVariables.local.result;
                bh = this.sd_aTyZIVFLm6VH07Nu(bh);
                //appendnew_next_sd_Ambds9vMriOUinmk
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_Ambds9vMriOUinmk');
            }
        });
    }
    sd_aTyZIVFLm6VH07Nu(bh) {
        try {
            const page = this.page;
            console.log(bh.local.result, '+++++++++++++++++++++++');
            bh = this.sd_IPJzIN7Yoiwqay4V(bh);
            //appendnew_next_sd_aTyZIVFLm6VH07Nu
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_aTyZIVFLm6VH07Nu');
        }
    }
    sd_IPJzIN7Yoiwqay4V(bh) {
        try {
            if (this.sdService.operators['se'](bh.local.result.message, 'email already present', undefined, undefined)) {
                bh = this.sd_N1S2lwaB2h1BG6Ut(bh);
            }
            else if (this.sdService.operators['se'](bh.local.result.message, 'succesfully logged In', undefined, undefined)) {
                bh = this.sd_8MoGMOsre17Laapi(bh);
            }
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_IPJzIN7Yoiwqay4V');
        }
    }
    sd_N1S2lwaB2h1BG6Ut(bh) {
        try {
            this.__page_injector__
                .get(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)
                .open('Email already present', '', {
                duration: 1000,
                direction: 'ltr',
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            //appendnew_next_sd_N1S2lwaB2h1BG6Ut
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_N1S2lwaB2h1BG6Ut');
        }
    }
    sd_8MoGMOsre17Laapi(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { paramObj: qprm, path: path } = this.sdService.getPathAndQParamsObj('/home');
                yield this.__page_injector__
                    .get(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)
                    .navigate([this.sdService.formatPathWithParams(path, undefined)], {
                    queryParams: Object.assign(qprm, ''),
                });
                //appendnew_next_sd_8MoGMOsre17Laapi
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_8MoGMOsre17Laapi');
            }
        });
    }
    sd_HM5OaipCNrpHp7C4(bh) {
        try {
            this.__page_injector__
                .get(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)
                .open('Password or Email is required', '', {
                duration: 2000,
                direction: 'ltr',
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            //appendnew_next_sd_HM5OaipCNrpHp7C4
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_HM5OaipCNrpHp7C4');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
loginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
loginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'bh-login',
        template: _login_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], loginComponent);



/***/ }),

/***/ 63343:
/*!*************************************************************!*\
  !*** ./src/app/components/paragraph/paragraph.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paragraphComponent": () => (/* binding */ paragraphComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _paragraph_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph.template.html?ngResource */ 74155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/n-services/sd-page-common.service */ 25583);
/* harmony import */ var app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/n-services/service-caller.service */ 44346);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start


 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let paragraphComponent = class paragraphComponent {
    constructor(__page_injector__, sdService, __serviceInvoker__) {
        this.__page_injector__ = __page_injector__;
        this.sdService = sdService;
        this.__serviceInvoker__ = __serviceInvoker__;
        this.paragraph = undefined;
        this.page = { dep: {} };
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).addPageDefaults(this.page);
        this.registerListeners();
        //appendnew_element_inject
    }
    ngOnInit() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        {
            this.sd_c51aQfMrVHsQ5R9o(bh);
        }
    }
    registerListeners() {
        let bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        //append_listeners
    }
    sd_c51aQfMrVHsQ5R9o(bh) {
        try {
            bh = this.sd_YAHNZhW7XlVSXz2O(bh);
            //appendnew_next_sd_c51aQfMrVHsQ5R9o
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_c51aQfMrVHsQ5R9o');
        }
    }
    //appendnew_flow_paragraphComponent_start
    sd_YAHNZhW7XlVSXz2O(bh) {
        try {
            //appendnew_next_sd_YAHNZhW7XlVSXz2O
            return bh;
        }
        catch (e) {
            return this.errorHandler(bh, e, 'sd_YAHNZhW7XlVSXz2O');
        }
    }
    //appendnew_node
    ngOnDestroy() {
        const bh = this.__page_injector__
            .get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService)
            .constructFlowObject(this);
        this.__page_injector__.get(app_n_services_sd_page_common_service__WEBPACK_IMPORTED_MODULE_2__.SDPageCommonService).deletePageFromMap(this);
    }
    errorHandler(bh, e, src) {
        console.error(e);
        bh.error = e;
        bh.errorSource = src;
        if (false
        /*appendnew_next_Catch*/
        ) {}
        else {
            throw e;
        }
    }
};
paragraphComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_1__.SDBaseService },
    { type: app_n_services_service_caller_service__WEBPACK_IMPORTED_MODULE_3__.__NEU_ServiceInvokerService__ }
];
paragraphComponent.propDecorators = {
    paragraph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['paragraph',] }]
};
paragraphComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bh-paragraph',
        template: _paragraph_template_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
        //appendnew_element_providers
        ],
    })
], paragraphComponent);



/***/ }),

/***/ 70897:
/*!****************************************!*\
  !*** ./src/app/config/declarations.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appBootstrap": () => (/* binding */ appBootstrap),
/* harmony export */   "appDeclarations": () => (/* binding */ appDeclarations),
/* harmony export */   "appProviders": () => (/* binding */ appProviders),
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes),
/* harmony export */   "startupServiceFactory": () => (/* binding */ startupServiceFactory)
/* harmony export */ });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../not-found.component */ 16942);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout.component */ 36674);
/* harmony import */ var _directives_imgSrc_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/imgSrc.directive */ 31077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../n-services/n-dataSorce.service */ 42925);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../n-services/n-localeResources.service */ 48515);
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! neutrinos-seed-services */ 55007);
/* harmony import */ var _directives_artImgSrc_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/artImgSrc.directive */ 38636);
/* harmony import */ var _baseClasses_localesService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../baseClasses/localesService */ 7677);
/* harmony import */ var _components_pages_audioTest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pages/audioTest.component */ 46564);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/messages/messages.component */ 85995);
/* harmony import */ var _components_chat_ui_chatui_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/chat ui/chatui.component */ 78208);
/* harmony import */ var _sd_services_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sd-services/user */ 31461);
/* harmony import */ var _sd_services_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sd-services/login */ 7815);
/* harmony import */ var _components_pages_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/pages/home.component */ 78897);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/button/button.component */ 61354);
/* harmony import */ var _components_inputs_emailInput_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/inputs/emailInput.component */ 92418);
/* harmony import */ var _components_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/paragraph/paragraph.component */ 63343);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/navbar/navbar.component */ 33252);
/* harmony import */ var _components_pages_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/pages/login.component */ 15978);
/* harmony import */ var _components_Heading_heading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Heading/heading.component */ 12613);










window['neutrinos'] = {
    environments: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment,
};
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-audioTestComponent

//CORE_REFERENCE_IMPORT-messagesComponent

//CORE_REFERENCE_IMPORT-chatuiComponent

//CORE_REFERENCE_IMPORT-user

//CORE_REFERENCE_IMPORT-login

//CORE_REFERENCE_IMPORT-homeComponent

//CORE_REFERENCE_IMPORT-buttonComponent

//CORE_REFERENCE_IMPORT-emailInputComponent

//CORE_REFERENCE_IMPORT-paragraphComponent

//CORE_REFERENCE_IMPORT-navbarComponent

//CORE_REFERENCE_IMPORT-loginComponent

//CORE_REFERENCE_IMPORT-headingComponent

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
function startupServiceFactory(startupService) {
    return () => {
        return new Promise((resolve, reject) => {
            startupService.getDataSource().then(() => {
                _baseClasses_localesService__WEBPACK_IMPORTED_MODULE_7__.localesService.init().then(() => {
                    resolve(null);
                });
            });
        });
    };
}
/**
 *bootstrap for @NgModule
 */
const appBootstrap = [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent];
/**
 *declarations for @NgModule
 */
const appDeclarations = [
    _directives_imgSrc_directive__WEBPACK_IMPORTED_MODULE_2__.ImgSrcDirective,
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
    _not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent,
    _directives_artImgSrc_directive__WEBPACK_IMPORTED_MODULE_6__.ArtImgSrcDirective,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-audioTestComponent
    _components_pages_audioTest_component__WEBPACK_IMPORTED_MODULE_8__.audioTestComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-messagesComponent
    _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__.messagesComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-chatuiComponent
    _components_chat_ui_chatui_component__WEBPACK_IMPORTED_MODULE_10__.chatuiComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
    _components_pages_home_component__WEBPACK_IMPORTED_MODULE_13__.homeComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buttonComponent
    _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__.buttonComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailInputComponent
    _components_inputs_emailInput_component__WEBPACK_IMPORTED_MODULE_15__.emailInputComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-paragraphComponent
    _components_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_16__.paragraphComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navbarComponent
    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__.navbarComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
    _components_pages_login_component__WEBPACK_IMPORTED_MODULE_18__.loginComponent,
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headingComponent
    _components_Heading_heading_component__WEBPACK_IMPORTED_MODULE_19__.headingComponent,
];
/**
 * provider for @NgModule
 */
const appProviders = [
    _n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_3__.NDataSourceService,
    _n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_5__.NLocaleResource,
    {
        // Provider for APP_INITIALIZER
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_20__.APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [_n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_3__.NDataSourceService],
        multi: true,
    },
    neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_21__.NAuthGuardService,
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-user
    _sd_services_user__WEBPACK_IMPORTED_MODULE_11__.user,
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-login
    _sd_services_login__WEBPACK_IMPORTED_MODULE_12__.login,
];
/**
 * Routes available for bApp
 */
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
const appRoutes = [
    { path: 'test', component: _components_pages_login_component__WEBPACK_IMPORTED_MODULE_18__.loginComponent },
    { path: 'home', component: _components_pages_home_component__WEBPACK_IMPORTED_MODULE_13__.homeComponent },
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END


/***/ }),

/***/ 95748:
/*!***********************************************!*\
  !*** ./src/app/config/dependencies.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependenciesModule": () => (/* binding */ DependenciesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sd_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sd-providers */ 15776);

//__IMPORT_MODULES_HERE__


let DependenciesModule = class DependenciesModule {
};
DependenciesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
        //__CUSTOM_IMPORTS_MODULES__
        //__CUSTOM_IMPORTS_MODULES_END__
        //__IMPORTS_MODULES__
        //__IMPORTS_MODULES_END__
        ],
        providers: [..._sd_providers__WEBPACK_IMPORTED_MODULE_0__.sdProviders],
        exports: [
        //__EXPORTS_MODULES__
        //__EXPORTS_MODULES_END__
        ]
    })
], DependenciesModule);



/***/ }),

/***/ 75398:
/*!******************************************!*\
  !*** ./src/app/config/import-modules.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appImportModules": () => (/* binding */ appImportModules)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declarations */ 70897);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var neutrinos_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! neutrinos-module */ 8920);
/* harmony import */ var _dependencies_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependencies.module */ 95748);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! neutrinos-oauth-client */ 97786);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/accordion */ 43134);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/clipboard */ 91604);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/cdk/observers */ 35837);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/stepper */ 21780);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/cdk/table */ 33865);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/text-field */ 11307);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/tree */ 38205);




























































/**
 * adding the environments into the window object
*/
/**
*imports for @NgModule
*/
const appImportModules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(_declarations__WEBPACK_IMPORTED_MODULE_0__.appRoutes),
    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__.NgxChartsModule,
    ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule,
    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
    /**
     * Angular material components
     */
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__.MatSliderModule,
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__.MatProgressSpinnerModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBarModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule,
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__.MatGridListModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__.MatBadgeModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_42__.MatNativeDateModule,
    neutrinos_module__WEBPACK_IMPORTED_MODULE_43__.NeutrinosModule,
    _dependencies_module__WEBPACK_IMPORTED_MODULE_2__.DependenciesModule,
    neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_44__.NeutrinosOAuthClientModule,
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__.A11yModule,
    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_46__.CdkAccordionModule,
    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_47__.BidiModule,
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_48__.ClipboardModule,
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__.DragDropModule,
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_50__.LayoutModule,
    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_51__.ObserversModule,
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__.OverlayModule,
    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_53__.PlatformModule,
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_54__.PortalModule,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__.ScrollingModule,
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_56__.CdkStepperModule,
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_57__.CdkTableModule,
    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_58__.TextFieldModule,
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_59__.CdkTreeModule
];


/***/ }),

/***/ 15776:
/*!****************************************!*\
  !*** ./src/app/config/sd-providers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sdProviders": () => (/* binding */ sdProviders)
/* harmony export */ });
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);

//CORE_REFERENCE_IMPORTS
const sdProviders = [
    app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__.SDBaseService,
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY
];


/***/ }),

/***/ 38636:
/*!***************************************************!*\
  !*** ./src/app/directives/artImgSrc.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtImgSrcDirective": () => (/* binding */ ArtImgSrcDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! neutrinos-seed-services */ 55007);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);




let ArtImgSrcDirective = class ArtImgSrcDirective {
    constructor(el, _renderer, http) {
        this.el = el;
        this._renderer = _renderer;
        this.http = http;
        this.systemService = neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_0__.NSystemService.getInstance();
    }
    ngOnInit() {
        if (this.collectionName && typeof this.imageFilter === 'object') {
            this.imgSource = this.systemService.getFileIOUrl() + this.collectionName
                + '?metadataFilter=' + encodeURI(JSON.stringify(this.imageFilter));
            this._internalSubscription = this.http
                .get(this.imgSource, {
                responseType: 'blob'
            })
                .subscribe(m => {
                this._renderer.setAttribute(this.el.nativeElement, 'src', URL.createObjectURL(m));
            });
        }
    }
    ngOnDestroy() {
        if (this._internalSubscription) {
            this._internalSubscription.unsubscribe();
        }
    }
};
ArtImgSrcDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ArtImgSrcDirective.propDecorators = {
    collectionName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    imageFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
ArtImgSrcDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[artImgSrc]' })
], ArtImgSrcDirective);



/***/ }),

/***/ 31077:
/*!************************************************!*\
  !*** ./src/app/directives/imgSrc.directive.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgSrcDirective": () => (/* binding */ ImgSrcDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let ImgSrcDirective = class ImgSrcDirective {
    constructor(el, _renderer) {
        this.el = el;
        this._renderer = _renderer;
    }
    ngOnInit() {
        let relativePath = 'assets';
        if (this.imgSrc) {
            if (this.imgSrc.charAt(0) !== '/') {
                relativePath += '/';
            }
            this._renderer.setAttribute(this.el.nativeElement, 'src', relativePath + this.imgSrc);
        }
        else {
            this._renderer.setAttribute(this.el.nativeElement, 'src', '');
        }
    }
};
ImgSrcDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
ImgSrcDirective.propDecorators = {
    imgSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['imgSrc',] }]
};
ImgSrcDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({ selector: '[imgSrc]' })
], ImgSrcDirective);



/***/ }),

/***/ 36674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! neutrinos-seed-services */ 55007);



let LayoutComponent = class LayoutComponent {
    constructor(nLocalstorage, nTokenService) {
        this.nLocalstorage = nLocalstorage;
        this.nTokenService = nTokenService;
    }
    ngOnInit() {
        if (this.nLocalstorage.getValue('accessToken')) {
            this.nTokenService.updateSessionStorage();
        }
    }
};
LayoutComponent.ctorParameters = () => [
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_0__.NLocalStorageService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_0__.NTokenService }
];
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>
             <n-snackbar></n-snackbar>`
    })
], LayoutComponent);



/***/ }),

/***/ 25961:
/*!*********************************************!*\
  !*** ./src/app/n-services/SDBaseService.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDBaseService": () => (/* binding */ SDBaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var neutrinos_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! neutrinos-module */ 8920);
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! neutrinos-seed-services */ 55007);
/* harmony import */ var neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! neutrinos-oauth-client */ 97786);

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/






let SDBaseService = class SDBaseService {
    constructor(http, sessionStorage, tokenService, httpLoaderService, dataModelService, loginService, authGuardService, localStorageService, logoutService, notificationService, pubsubService, snackbarService, alertService, fileIOService, OauthService) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        this.tokenService = tokenService;
        this.httpLoaderService = httpLoaderService;
        this.dataModelService = dataModelService;
        this.loginService = loginService;
        this.authGuardService = authGuardService;
        this.localStorageService = localStorageService;
        this.logoutService = logoutService;
        this.notificationService = notificationService;
        this.pubsubService = pubsubService;
        this.snackbarService = snackbarService;
        this.alertService = alertService;
        this.fileIOService = fileIOService;
        this.OauthService = OauthService;
        this.systemService = neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NSystemService.getInstance();
        this.operators = {
            eq(a, b, c, d) { return a == b; },
            se(a, b, c, d) { return a === b; },
            neq(a, b, c, d) { return a != b; },
            sne(a, b, c, d) { return a !== b; },
            lt(a, b, c, d) { return a < b; },
            lte(a, b, c, d) { return a <= b; },
            gt(a, b, c, d) { return a > b; },
            gte(a, b, c, d) { return a >= b; },
            btwn(a, b, c, d) { return a >= b && a <= c; },
            cont(a, b, c, d) { return (a + "").indexOf(b) !== -1; },
            regex(a, b, c, d) { return (a + "").match(new RegExp(b, d ? 'i' : '')); },
            true(a, b, c, d) { return a === true; },
            false(a, b, c, d) { return a === false; },
            null(a, b, c, d) { return (typeof a === "undefined" || a === null); },
            nnull(a, b, c, d) { return (typeof a !== "undefined" && a !== null); },
            empty(a, b, c, d) {
                if (typeof a === 'string' || Array.isArray(a)) {
                    return a.length === 0;
                }
                else if (typeof a === 'object' && a !== null) {
                    return Object.keys(a).length === 0;
                }
                return false;
            },
            nempty(a, b, c, d) {
                if (typeof a === 'string' || Array.isArray(a)) {
                    return a.length !== 0;
                }
                else if (typeof a === 'object' && a !== null) {
                    return Object.keys(a).length !== 0;
                }
                return false;
            },
            istype(a, b, c, d) {
                if (b === "array") {
                    return Array.isArray(a);
                }
                else if (b === "json") {
                    try {
                        JSON.parse(a);
                        return true;
                    } // or maybe ??? a !== null; }
                    catch (e) {
                        return false;
                    }
                }
                else if (b === "null") {
                    return a === null;
                }
                else {
                    return typeof a === b && !Array.isArray(a) && a !== null;
                }
            },
            else(a, b, c, d) { return a === true; }
        };
    }
    getPathAndQParamsObj(urlWithSearchParams) {
        const paramsObj = {};
        const qparams = urlWithSearchParams.split('?')[1];
        if (qparams) {
            const qkv = qparams.split('&');
            if (qkv) {
                qkv.map((qparamsPair) => qparamsPair.split('=')).forEach(v => paramsObj[v[0]] = v[1]);
            }
        }
        return { paramObj: paramsObj, path: urlWithSearchParams.split('?')[0] };
    }
    formatPathWithParams(path, pathparams) {
        Object.keys(pathparams || {}).forEach((pathparamKey) => {
            let value = pathparams[pathparamKey];
            value = value ? ((typeof value === 'object') ? JSON.stringify(value) : value) : `:${pathparamKey}`;
            path = path.replace(`:${pathparamKey}`, value);
        });
        return path;
    }
    __formatHeaders(headersObj) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        if (typeof headersObj === 'object') {
            Object.entries(headersObj).forEach((p) => {
                let value = p[1];
                if (typeof value === 'object') {
                    value = JSON.stringify(value);
                }
                headers = headers.set(p[0], value);
            });
        }
        return headers;
    }
    __formatParams(paramsObj) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (typeof paramsObj === 'object') {
            Object.entries(paramsObj).forEach((p) => {
                let value = p[1];
                if (typeof value === 'object') {
                    value = JSON.stringify(value);
                }
                params = params.set(p[0], value);
            });
        }
        return params;
    }
    nHttpRequest(requestOptions) {
        const responseType = requestOptions.responseType || undefined;
        const reportProgress = requestOptions.reportProgress || false;
        const headers = this.__formatHeaders(requestOptions.headers);
        const params = this.__formatParams(requestOptions.params);
        const options = { headers, params, responseType, reportProgress };
        if (requestOptions.withCredentials) {
            options['withCredentials'] = true;
        }
        if (requestOptions.observe) {
            options['observe'] = requestOptions.observe;
        }
        const httpReqObj = this.http.request(requestOptions.method, requestOptions.url, Object.assign({ body: requestOptions.body }, options));
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.observe) {
            return httpReqObj;
        }
        else {
            return httpReqObj.toPromise();
        }
    }
    __constructDefault(bh) {
        const system = {};
        try {
            system.oauthService = this.OauthService;
            system.currentUser = system.oauthService.userInfo;
            system.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
            system.tokenService = this.tokenService;
            system.deviceService = this.systemService;
            system.httpLoaderService = this.httpLoaderService;
            system.dataModelService = this.dataModelService;
            system.loginService = this.loginService;
            system.authGuardService = this.authGuardService;
            system.localStorageService = this.localStorageService;
            system.logoutService = this.logoutService;
            system.notificationService = this.notificationService;
            system.pubsubService = this.pubsubService;
            system.snackbarService = this.snackbarService;
            system.alertService = this.alertService;
            system.fileIOService = this.fileIOService;
            Object.defineProperty(bh, 'system', {
                value: system,
                writable: false
            });
            if (!bh.input) {
                bh.input = {};
            }
            if (!bh.local) {
                bh.local = {};
            }
            return bh;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
};
SDBaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NSessionStorageService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NTokenService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NHTTPLoaderService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NDataModelService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NLoginService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NAuthGuardService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NLocalStorageService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NLogoutService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NNotificationService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NPubSubService },
    { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_1__.NSnackbarService },
    { type: neutrinos_module__WEBPACK_IMPORTED_MODULE_3__.NAlertService },
    { type: neutrinos_module__WEBPACK_IMPORTED_MODULE_3__.NFileIOService },
    { type: neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_4__.NeutrinosOAuthClientService }
];
SDBaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], SDBaseService);



/***/ }),

/***/ 42925:
/*!***************************************************!*\
  !*** ./src/app/n-services/n-dataSorce.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NDataSourceService": () => (/* binding */ NDataSourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);



let NDataSourceService = class NDataSourceService {
    constructor(http) {
        this.http = http;
    }
    getDataSource() {
        return new Promise((resolve, reject) => {
            this.http.get('constants/app.const.json').subscribe(result => {
                window['neutrinos']['dataSource'] = result['dataSource'];
                return resolve(result);
            }, error => {
                return reject(error);
            });
        });
    }
};
NDataSourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
NDataSourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], NDataSourceService);



/***/ }),

/***/ 48515:
/*!*********************************************************!*\
  !*** ./src/app/n-services/n-localeResources.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NLocaleResource": () => (/* binding */ NLocaleResource)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);


class NLocaleResource {
    constructor() {
        this.locale = {};
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpXhrBackend({ build: () => new XMLHttpRequest() }));
        this.languages = null;
        if (!this.defaultLcid) {
            this.defaultLcid = 'en';
        }
    }
    getLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let result;
            result = yield this.getlanguageResource(this.defaultLcid);
            return result;
        });
    }
    /**
     *
     * @param lcid
     * Reads resource object based on lcid and
     */
    getlanguageResource(lcid) {
        return new Promise((resolve, reject) => {
            this.getLangResObj(lcid)
                .then((resObj) => {
                this.locale = resObj['properties'];
                return resolve(this.locale);
            })
                .catch((error) => {
                return reject(error);
            });
        });
    }
    /**
     *
     * @param lang
     * @param key
     *
     * Returns value based on lcid and key
     */
    getVal(lcid, key) {
        return this.getLangResObj(lcid).then((resObj) => {
            return resObj[key];
        });
    }
    /**
     *
     * @param lcid
     * @param callback
     *
     * Reads and returns the resource object based on the lcid
     */
    getLangResObj(lcid) {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`locales/locale_${lcid}.json`).subscribe((res) => {
                return resolve(res);
            }, (error) => {
                if (error && error.status === 404) {
                    console.error(` locale file for language ${lcid} not found`);
                }
                else {
                    console.error(error.error);
                }
                return reject(error);
            });
        });
    }
    /**
     * returns user selected language
     */
    get language() {
        return this.defaultLcid;
    }
    /**
     * set the user selected language and updates the resource object based on user selected language
     */
    set language(lcid) {
        this.getLocales().then((localesObj) => {
            if (localesObj[lcid]) {
                this.defaultLcid = lcid;
                this.getlanguageResource(lcid);
            }
            else {
                this.locale = {};
                console.error(` locale ${lcid} is not valid`);
            }
        });
    }
    /**
     * return locales list created by developer
     */
    getLocales() {
        return new Promise((resolve, reject) => {
            if (this.languages) {
                return resolve(this.languages);
            }
            return this.httpClient.get('locales/locales.json').subscribe((res) => {
                this.languages = res;
                return resolve(this.languages);
            }, (error) => {
                console.error(error.error);
                return reject(error);
            });
        });
    }
}


/***/ }),

/***/ 25583:
/*!******************************************************!*\
  !*** ./src/app/n-services/sd-page-common.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDPageCommonService": () => (/* binding */ SDPageCommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/* harmony import */ var _baseClasses_localesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../baseClasses/localesService */ 7677);
/* harmony import */ var _baseClasses_nDataModel_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../baseClasses/nDataModel.class */ 76717);





let SDPageCommonService = class SDPageCommonService {
    constructor(sdService, componentFactoryResolver) {
        this.sdService = sdService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.componentRefPropertiesMap = new Map();
    }
    constructFlowObject(componentInstance) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(componentInstance.constructor);
        const inputProperties = factory.inputs.map(i => i.propName);
        const outputProperties = factory.outputs.map(i => i.propName);
        const bh = {
            sdService: this.sdService,
        };
        Object.defineProperty(bh, 'pageInput', {
            value: Object.defineProperties({}, this.definePropertiesGetter(componentInstance, inputProperties, 'Input')),
        });
        Object.defineProperty(bh, 'pageOutput', {
            value: Object.defineProperties({}, this.definePropertiesGetter(componentInstance, outputProperties, 'Output')),
        });
        this.sdService.__constructDefault(bh);
        return bh;
    }
    definePropertiesGetter(componentInstance, properties, type) {
        const mappedVal = this.componentRefPropertiesMap.get(componentInstance);
        if (!mappedVal) {
            this.componentRefPropertiesMap.set(componentInstance, {});
        }
        if (!this.componentRefPropertiesMap.get(componentInstance)[type]) {
            const propertiesAccessDescriptors = {};
            for (const property of properties) {
                propertiesAccessDescriptors[property] = {
                    get() {
                        return componentInstance[property];
                    },
                };
            }
            this.componentRefPropertiesMap.get(componentInstance)[type] =
                propertiesAccessDescriptors;
        }
        return this.componentRefPropertiesMap.get(componentInstance)[type];
    }
    addPageDefaults(page) {
        Object.defineProperties(page, {
            locales: {
                value: {},
            },
            dm: {
                value: new _baseClasses_nDataModel_class__WEBPACK_IMPORTED_MODULE_2__.NDataModel(),
            },
        });
        const localesInst = _baseClasses_localesService__WEBPACK_IMPORTED_MODULE_1__.localesService.getLocalesInstance();
        Object.defineProperties(page.locales, {
            keys: {
                get: () => localesInst['locale'] || {},
            },
            language: {
                get: () => localesInst['language'],
                set: l => (localesInst['language'] = l),
            },
            languages: {
                get: () => localesInst['languages'] || {},
            },
        });
        this.sdService.__constructDefault(page);
    }
    deletePageFromMap(compInstance) {
        this.componentRefPropertiesMap.delete(compInstance);
    }
};
SDPageCommonService.ctorParameters = () => [
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__.SDBaseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver }
];
SDPageCommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], SDPageCommonService);



/***/ }),

/***/ 44346:
/*!******************************************************!*\
  !*** ./src/app/n-services/service-caller.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__NEU_ServiceInvokerService__": () => (/* binding */ __NEU_ServiceInvokerService__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var app_sd_services_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sd-services/login */ 7815);
/* harmony import */ var app_sd_services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sd-services/user */ 31461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
//append_imports_start

 //_splitter_
 //_splitter_
 //_splitter_
//append_imports_end
let __NEU_ServiceInvokerService__ = class __NEU_ServiceInvokerService__ {
    constructor(sd_sUtmd8S9OYDet9MQ, sd_Lkf463mDLx7SmOus) {
        this.sd_sUtmd8S9OYDet9MQ = sd_sUtmd8S9OYDet9MQ;
        this.sd_Lkf463mDLx7SmOus = sd_Lkf463mDLx7SmOus;
    }
    invoke(injectedServiceId, methodName, ...methodArguments) {
        return this[injectedServiceId][methodName](...methodArguments);
    }
};
__NEU_ServiceInvokerService__.ctorParameters = () => [
    { type: app_sd_services_login__WEBPACK_IMPORTED_MODULE_0__.login },
    { type: app_sd_services_user__WEBPACK_IMPORTED_MODULE_1__.user }
];
__NEU_ServiceInvokerService__ = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], __NEU_ServiceInvokerService__);



/***/ }),

/***/ 16942:
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);



/***/ }),

/***/ 7815:
/*!**************************************!*\
  !*** ./src/app/sd-services/login.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
let login = class login {
    constructor(sdService, router, matSnackBar, __service_injector__) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.__service_injector__ = __service_injector__;
        this.registerListeners();
    }
    registerListeners() {
        let bh = this.sdService.__constructDefault({});
        //append_listeners
    }
    //   service flows_login
    loginRequestToBackend(email = '', password = '', ...others) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var bh = {
                    input: {
                        email: email,
                        password: password,
                    },
                    local: {
                        result: undefined,
                    },
                };
                bh = this.sdService.__constructDefault(bh);
                bh = yield this.sd_plC6Fr6ZPtMOSpK4(bh);
                //appendnew_next_loginRequestToBackend
                return (
                // formatting output variables
                {
                    input: {},
                    local: {
                        result: bh.local.result,
                    },
                });
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_sRvYkQD67xElzhSw');
            }
        });
    }
    loginCredentialsOfNeutrinos(email = '', displayName = '', ...others) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var bh = {
                    input: {
                        email: email,
                        displayName: displayName,
                    },
                    local: {
                        result: undefined,
                    },
                };
                bh = this.sdService.__constructDefault(bh);
                bh = yield this.sd_nNWSrfJGcgY6E1mV(bh);
                //appendnew_next_loginCredentialsOfNeutrinos
                return (
                // formatting output variables
                {
                    input: {},
                    local: {},
                });
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_ItHrLslBoKmvSFdj');
            }
        });
    }
    savingMessagsToTheDb(fro = undefined, to = undefined, msg = undefined, ...others) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var bh = {
                    input: {
                        fro: fro,
                        to: to,
                        msg: msg,
                    },
                    local: {},
                };
                bh = this.sdService.__constructDefault(bh);
                bh = yield this.sd_3SB1hVLRTYoOj3eo(bh);
                //appendnew_next_savingMessagsToTheDb
                return (
                // formatting output variables
                {
                    input: {},
                    local: {},
                });
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_oL5a3tB1VWkpCby6');
            }
        });
    }
    //appendnew_flow_login_start
    sd_plC6Fr6ZPtMOSpK4(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.baseUrl = bh.system.environment.properties.ssdURL;
                bh = yield this.sd_PYJSRp3Emai5CkWb(bh);
                //appendnew_next_sd_plC6Fr6ZPtMOSpK4
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_plC6Fr6ZPtMOSpK4');
            }
        });
    }
    sd_PYJSRp3Emai5CkWb(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.loginUrl = `${bh.local.baseUrl}login`;
                console.log(bh.input.email, bh.input.password);
                bh.body = {
                    email: bh.input.email,
                    password: bh.input.password,
                };
                bh = yield this.sd_WOSKh6aKJCKMMSuY(bh);
                //appendnew_next_sd_PYJSRp3Emai5CkWb
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_PYJSRp3Emai5CkWb');
            }
        });
    }
    sd_WOSKh6aKJCKMMSuY(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let requestOptions = {
                    url: bh.loginUrl,
                    method: 'post',
                    responseType: 'json',
                    headers: {},
                    params: {},
                    body: bh.body,
                };
                bh.local.result = yield this.sdService.nHttpRequest(requestOptions);
                //appendnew_next_sd_WOSKh6aKJCKMMSuY
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_WOSKh6aKJCKMMSuY');
            }
        });
    }
    sd_nNWSrfJGcgY6E1mV(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.baseUrl = bh.system.environment.properties.ssdURL;
                bh = yield this.sd_ON07BgiR8lTn2fHh(bh);
                //appendnew_next_sd_nNWSrfJGcgY6E1mV
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_nNWSrfJGcgY6E1mV');
            }
        });
    }
    sd_ON07BgiR8lTn2fHh(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.loginUrl = `${bh.local.baseUrl}login`;
                console.log(bh.input.email, bh.input.password);
                bh.body = {
                    email: bh.input.email,
                    name: bh.input.displayName,
                };
                bh = yield this.sd_MjcjAgCelZFWTdrE(bh);
                //appendnew_next_sd_ON07BgiR8lTn2fHh
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_ON07BgiR8lTn2fHh');
            }
        });
    }
    sd_MjcjAgCelZFWTdrE(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let requestOptions = {
                    url: bh.loginUrl,
                    method: 'post',
                    responseType: 'json',
                    headers: {},
                    params: {},
                    body: bh.body,
                };
                bh.local.result = yield this.sdService.nHttpRequest(requestOptions);
                bh = yield this.sd_C53ofSyhC2TEuyX1(bh);
                //appendnew_next_sd_MjcjAgCelZFWTdrE
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_MjcjAgCelZFWTdrE');
            }
        });
    }
    sd_C53ofSyhC2TEuyX1(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log(bh.local.result);
                //appendnew_next_sd_C53ofSyhC2TEuyX1
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_C53ofSyhC2TEuyX1');
            }
        });
    }
    sd_3SB1hVLRTYoOj3eo(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.baseUrl = bh.system.environment.properties.ssdURL;
                bh = yield this.sd_8EU641ieLf5pVk9Z(bh);
                //appendnew_next_sd_3SB1hVLRTYoOj3eo
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_3SB1hVLRTYoOj3eo');
            }
        });
    }
    sd_8EU641ieLf5pVk9Z(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.messageUrl = `${bh.local.baseUrl}messages`;
                console.log(bh.input.fro, bh.input.to, bh.input.msg);
                bh.body = {
                    from: bh.input.fro,
                    to: bh.input.to,
                    message: bh.input.msg,
                };
                bh = yield this.httpRequestToAddMessage(bh);
                //appendnew_next_sd_8EU641ieLf5pVk9Z
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_8EU641ieLf5pVk9Z');
            }
        });
    }
    httpRequestToAddMessage(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let requestOptions = {
                    url: bh.messageUrl,
                    method: 'post',
                    responseType: 'json',
                    headers: {},
                    params: {},
                    body: bh.body,
                };
                bh.local.result = yield this.sdService.nHttpRequest(requestOptions);
                bh = yield this.sd_6Mdj2fEXppO96yOp(bh);
                //appendnew_next_httpRequestToAddMessage
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_W1fn3gjNDl3uquUl');
            }
        });
    }
    sd_6Mdj2fEXppO96yOp(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log(bh.local.result);
                //appendnew_next_sd_6Mdj2fEXppO96yOp
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_6Mdj2fEXppO96yOp');
            }
        });
    }
    //appendnew_node
    errorHandler(bh, e, src) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.error(e);
            bh.error = e;
            bh.errorSource = src;
            if (false
            /*appendnew_next_Catch*/
            ) {}
            else {
                throw e;
            }
        });
    }
};
login.ctorParameters = () => [
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__.SDBaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
login = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], login);



/***/ }),

/***/ 31461:
/*!*************************************!*\
  !*** ./src/app/sd-services/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/n-services/SDBaseService */ 25961);
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

 //_splitter_
 //_splitter_
 //_splitter_
 //_splitter_
let user = class user {
    constructor(sdService, router, matSnackBar, __service_injector__) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.__service_injector__ = __service_injector__;
        this.registerListeners();
    }
    registerListeners() {
        let bh = this.sdService.__constructDefault({});
        //append_listeners
    }
    //   service flows_user
    fetchUsersData(...others) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var bh = {
                    input: {},
                    local: {
                        result: undefined,
                    },
                };
                bh = this.sdService.__constructDefault(bh);
                bh = yield this.sd_t1h5e2TVPHz8VZ9L(bh);
                //appendnew_next_fetchUsersData
                return (
                // formatting output variables
                {
                    input: {},
                    local: {
                        result: bh.local.result,
                    },
                });
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_s1cpBW880vJr4stE');
            }
        });
    }
    getMessagesFromTheBackend(fro = undefined, to = undefined, ...others) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var bh = {
                    input: {
                        fro: fro,
                        to: to,
                    },
                    local: {
                        messages: undefined,
                    },
                };
                bh = this.sdService.__constructDefault(bh);
                bh = yield this.sd_cfISb6ERorSkKIOO(bh);
                //appendnew_next_getMessagesFromTheBackend
                return (
                // formatting output variables
                {
                    input: {},
                    local: {
                        messages: bh.local.messages,
                    },
                });
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_q4PPgEXaWxGWUJIh');
            }
        });
    }
    //appendnew_flow_user_start
    sd_t1h5e2TVPHz8VZ9L(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.baseUrl = bh.system.environment.properties.ssdURL;
                bh = yield this.sd_sO6oXX9GdmxEGGIh(bh);
                //appendnew_next_sd_t1h5e2TVPHz8VZ9L
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_t1h5e2TVPHz8VZ9L');
            }
        });
    }
    sd_sO6oXX9GdmxEGGIh(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.fetchUrl = `${bh.local.baseUrl}user_fetch`;
                console.log(bh.fetchUrl);
                console.log('im home service called');
                bh = yield this.toFetchUserData(bh);
                //appendnew_next_sd_sO6oXX9GdmxEGGIh
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_sO6oXX9GdmxEGGIh');
            }
        });
    }
    toFetchUserData(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let requestOptions = {
                    url: bh.fetchUrl,
                    method: 'get',
                    responseType: 'json',
                    headers: {},
                    params: {},
                    body: undefined,
                };
                bh.local.result = yield this.sdService.nHttpRequest(requestOptions);
                //appendnew_next_toFetchUserData
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_C4tIeQxvTYb6FrsN');
            }
        });
    }
    sd_cfISb6ERorSkKIOO(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.baseUrl = bh.system.environment.properties.ssdURL;
                bh = yield this.sd_2xAhi4Fl7Yc7iKui(bh);
                //appendnew_next_sd_cfISb6ERorSkKIOO
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_cfISb6ERorSkKIOO');
            }
        });
    }
    sd_2xAhi4Fl7Yc7iKui(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.messageUrl = `${bh.local.baseUrl}getMessages`;
                console.log(bh.input.fro, bh.input.to);
                bh.body = {
                    from: bh.input.fro,
                    to: bh.input.to,
                };
                bh = yield this.httpRequestToGetMessages(bh);
                //appendnew_next_sd_2xAhi4Fl7Yc7iKui
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_2xAhi4Fl7Yc7iKui');
            }
        });
    }
    httpRequestToGetMessages(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let requestOptions = {
                    url: bh.messageUrl,
                    method: 'post',
                    responseType: 'json',
                    headers: {},
                    params: {},
                    body: bh.body,
                };
                bh.local.result = yield this.sdService.nHttpRequest(requestOptions);
                bh = yield this.sd_dLUv9kkvo5gB9RtA(bh);
                //appendnew_next_httpRequestToGetMessages
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_kb4MDxYVWYlb8R84');
            }
        });
    }
    sd_dLUv9kkvo5gB9RtA(bh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                bh.local.messages = bh.local.result;
                //appendnew_next_sd_dLUv9kkvo5gB9RtA
                return bh;
            }
            catch (e) {
                return yield this.errorHandler(bh, e, 'sd_dLUv9kkvo5gB9RtA');
            }
        });
    }
    //appendnew_node
    errorHandler(bh, e, src) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.error(e);
            bh.error = e;
            bh.errorSource = src;
            if (false
            /*appendnew_next_Catch*/
            ) {}
            else {
                throw e;
            }
        });
    }
};
user.ctorParameters = () => [
    { type: app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__.SDBaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
user = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], user);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    "name": "dev",
    "properties": {
        "production": false,
        "ssdURL": "https://chatwithme-1c2d.onrender.com/api/",
        "tenantName": "neutrinos",
        "appName": "sample",
        "namespace": "com.neutrinos.sample",
        "useDefaultExceptionUI": true,
        "isIDSEnabled": "true",
        "webAppMountpoint": "web",
        "NGFORAGE_MOBILE_DRIVER": "INDEXED_DB",
        "ip": "10.10.11.149",
        "socketUrl": "https://chatwithme-1c2d.onrender.com/"
    }
};


/***/ }),

/***/ 5747:
/*!*******************************************************!*\
  !*** ./src/libConfig/firebaseInitForServiceWorker.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseInitForServiceWorker": () => (/* binding */ firebaseInitForServiceWorker)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 8427);


function firebaseInitForServiceWorker() {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp({
        'apiKey': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.firebaseAuthKey,
        'authDomain': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.authDomain,
        'databaseURL': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.databaseURL,
        'storageBucket': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.storageBucket,
        'messagingSenderId': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.firebaseSenderId
    });
    const open = indexedDB.open('neutrinos_firebase_db', 1);
    open.onupgradeneeded = function () {
        const db = open.result;
        const store = db.createObjectStore('neutrinos_firebase_db_store');
        console.log(store);
    };
    open.onsuccess = function () {
        // Start a new transaction
        const db = open.result;
        const tx = db.transaction('neutrinos_firebase_db_store', 'readwrite');
        const store = tx.objectStore('neutrinos_firebase_db_store');
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.firebaseSenderId) {
            store.add(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.properties.firebaseSenderId, 'firebaseSenderId');
        }
        tx.oncomplete = function () {
            db.close();
        };
    };
}


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _libConfig_firebaseInitForServiceWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libConfig/firebaseInitForServiceWorker */ 5747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! neutrinos-seed-services */ 55007);







if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
function bootstrapNow() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        try {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties.console_runtime === 'true') {
                const URL = `${window.location.origin}/api/environments`;
                const data = yield (yield fetch(URL)).json();
                Object.assign(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties, data.properties);
                window['neutrinos'] = {
                    environments: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment,
                };
            }
            yield (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule);
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_6__.NSystemService.getInstance();
            if (window['navigator'] && window['navigator']['splashscreen'])
                window['navigator']['splashscreen'].hide(); // hide splash screen
            const pushType = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties.pushType
                ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties.pushType
                : 'FCM';
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.properties.isNotificationEnabled &&
                pushType.toUpperCase() === 'FCM')
                (0,_libConfig_firebaseInitForServiceWorker__WEBPACK_IMPORTED_MODULE_0__.firebaseInitForServiceWorker)();
        }
        catch (error) {
            console.error('FetchError: ', error);
            if (confirm('Could not fetch the environment, Please reload'))
                window.location.reload();
        }
    });
}
function checkDeviceLocal() {
    if (window['cordova']) {
        return 'mobile';
    }
    else {
        return 'browser';
    }
}
const deviceTypeLocal = checkDeviceLocal();
if (deviceTypeLocal === 'browser') {
    bootstrapNow();
}
/**
 * deviceready will only be triggered by a cordova app
 * and since we are not using cordova browser to server files.
 * However, if cordova browser would be used then the app will
 * get bootstrapped
 */
document.addEventListener('deviceready', function () {
    bootstrapNow();
});


/***/ }),

/***/ 18944:
/*!*********************************************************************!*\
  !*** ./src/app/components/Heading/heading.template.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n  <h3>\n    {{heading.header}}\n  </h3>\n</div>";

/***/ }),

/***/ 11523:
/*!*******************************************************************!*\
  !*** ./src/app/components/button/button.template.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\"><button mat-button style=\"padding: 3px 90px;\">{{buttonName.name}}</button></div>";

/***/ }),

/***/ 77619:
/*!********************************************************************!*\
  !*** ./src/app/components/chat ui/chatui.template.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"column \" style=\"height: calc( 100vh - 56px );background-image: url(&apos;https://i.pinimg.com/564x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg&apos;)\" class=\"chat-container\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n  <div fxLayout=\"row wrap\" style=\"height:50px;padding:10px;\" class=\"accent-color\" fxLayoutGap=\"1em\" fxLayoutAlign=\"start center\" [fxShow]=\"true\"><mat-icon style=\"cursor:pointer;\" (click)=\"toGoBack()\">keyboard_arrow_left</mat-icon><mat-icon style=\"font-size:30px\">account_circle</mat-icon>\n    <div style=\"color: black;\">\n      {{email}}\n    </div>\n  </div><bh-messages style=\"flex:2; overflow:auto;\" [messages]=\"this.messages\" [currentUser]=\"this.currentUser\"></bh-messages>\n  <div fxLayout=\"row wrap\" style=\"background-color:whitesmoke;padding:10px;\" fxLayoutGap=\"1em\" fxLayoutAlign=\"start center\" [fxShow]=\"true\"><input [(ngModel)]=\"page.msg\" (keyup.enter)=\"messsage()\" (input)=\"getTyping()\" style=\"width: calc( 100% - 25px - 4em );border: none;     height: 15px;border-radius: 20px;outline: none;font-size: large;\" class=\"padding-1\">\n    <mat-icon style=\"cursor:pointer;\" (click)=\"messsage()\" *ngIf=\"page.isTyping\">send</mat-icon><mat-icon class=\"cursor\" *ngIf=\"page.isRecording\" (click)=\"startRecording()\">settings_voice</mat-icon>\n  </div>\n</div>";

/***/ }),

/***/ 49899:
/*!***********************************************************************!*\
  !*** ./src/app/components/inputs/emailInput.template.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"angularRoot\"></div>";

/***/ }),

/***/ 75288:
/*!***********************************************************************!*\
  !*** ./src/app/components/messages/messages.template.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"column wrap\" class=\"padding-1\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n  <div *ngFor=\"let message of messages\" class=\"chat-box\">\n    <div (click)=\"func($event)\" [ngClass]=\"{ &apos;sent&apos; : message.sender == currentUser , &apos;received&apos; : message.sender.email != this.currentUser }\" class=\"chat-box\">\n      <div>\n        {{message.message.text}}\n      </div><audio controls *ngIf=\"message.message.audio\" [src]=\"message.message.audio\">\n\n      </audio>\n      <div *ngIf=\"!message.message.audio\" class=\"time\">\n        10:00am </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 90910:
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar/navbar.template.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"row wrap\" class=\"padding-2\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\"><mat-icon>keyboard_arrow_left</mat-icon></div>";

/***/ }),

/***/ 30979:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/audioTest.template.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"waveform\">\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\"><audio controls [autoplay]=\"false\" [loop]=\"false\" id=\"audio-player\" *ngIf=\"page.audio\" [src]=\"page.audio\">\n    <source src=\"{{page.audio}}\" type=\"audio/audio/wav\">\n  </audio><mat-icon (click)=\"sd_khO7p3skDabsNXJ4()\">settings_voice</mat-icon><mat-icon (click)=\"stopRecording()\">send</mat-icon></div>";

/***/ }),

/***/ 71209:
/*!****************************************************************!*\
  !*** ./src/app/components/pages/home.template.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"column wrap\" style=\"background-color:white;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n  <div fxLayout=\"row wrap\" class=\"header padding-1\" fxLayoutAlign=\"space-between center\" [fxShow]=\"true\">\n    <div class=\"textColor\">\n      Home</div><mat-icon style=\"cursor:pointer;\" (click)=\"logout()\">power_settings_new</mat-icon>\n  </div>\n  <div style=\"background:#white; height:100%;\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n      <div fxLayout=\"column wrap\" style=\"overflow-y: scroll;scrollbar-width: thin;scrollbar-color: #ddd #999;\" class=\"chat-ui contact\" fxLayoutGap=\"6px\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [ngClass]=\"{ &apos;showContacts&apos; : page.selected }\" *ngIf=\"page.showContacts\">\n        <div fxLayout=\"column wrap\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\">\n          <div fxLayout=\"row \" class=\"user\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" *ngFor=\"let user of page.users\" (click)=\"sendUserInfo(user.email)\" [ngClass]=\"{ &apos;showContacts&apos; : page.selected , &apos;selected&apos; : page.selected === user.email  }\"><img [src]=\"&apos;https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_cardigan_contact_profile-512.png&apos;\" style=\"width:35px;height:35px;\">\n            <div style=\"color: black;\" class=\"padding-1\">\n              {{user.email}}\n            </div>\n          </div>\n        </div>\n      </div><bh-chatui style=\"flex:2;\" [email]=\"page.selected\" *ngIf=\"page.selected\" [currentUser]=\"page.system.currentUser.username\" [socket]=\"page.socket\" [messages]=\"page.result\" [ngClass]=\"{ &apos;showContacts&apos; :  !page.selected }\" [showContacts]=\"page.showContacts\" (showContactsChange)=\"toConsoleBackButton($event)\"></bh-chatui>\n      <div fxLayout=\"column wrap\" class=\"welcome chat_container\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" *ngIf=\"!page.selected\" fxHide.lt-sm=\"true\">\n        <div class=\"font-4\">\n          Welcome</div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 65725:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/login.template.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<bh-navbar></bh-navbar>\n<div fxLayout=\"column wrap\" class=\"padding-2\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\"><bh-heading [heading]=\"{header:&apos;LOGIN TO THE CHATBOX&apos;}\"></bh-heading><bh-paragraph [paragraph]=\"{para:&apos;Welcome back! Sign in using your social account or email to continue us&apos;}\"></bh-paragraph>\n  <mat-form-field [appearance]=\"&apos;outline&apos;\" [floatLabel]=\"&apos;never&apos;\" [hideRequiredMarker]=\"false\">\n    <input matInput [(ngModel)]=\"page.inputEmail\" placeholder=\"Email\" [required]=\"false\" pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n\n  </mat-form-field>\n  <mat-form-field [appearance]=\"&apos;outline&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n    <input matInput [(ngModel)]=\"page.passwordInput\" placeholder=\"password\" [required]=\"false\">\n\n  </mat-form-field>\n  <div fxLayout=\"column wrap\" fxLayoutGap=\"1em\" fxLayoutAlign=\"center center\" [fxShow]=\"true\"><mat-divider>\n    </mat-divider><bh-button [buttonName]=\"{name:&apos;LOGIN&apos;}\" (click)=\"sendRequestToBackendLogin()\"></bh-button>\n    <p>\n      Login with Neutrinos</p><img imgSrc=\"/Web/Icons/favicon.png\" style=\"width:100px;height:100px;cursor:pointer;\" (click)=\"login()\">\n  </div>\n</div>";

/***/ }),

/***/ 74155:
/*!*************************************************************************!*\
  !*** ./src/app/components/paragraph/paragraph.template.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  {{paragraph.para}}\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map