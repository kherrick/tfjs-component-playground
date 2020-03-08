import{_ as e,a as n}from"./_rollupPluginBabelHelpers-ed8cbb08.js";import{L as a,c as r,h as t}from"./lit-element-51727a0b.js";import"./index-85299b5e.js";import{store as i}from"./configureStore.js";import{getBasePathWithTrailingSlash as s,defineCustomElement as o}from"./utilities.js";import"./middleware.js";import"./types.js";import"./value.js";import"./initialState.js";import{n as l}from"./dispatchers-19a19022.js";import{c}from"./connect-mixin-144a42a2.js";import"./creators.js";import d from"./index.js";import"./class-map-d74af20d.js";import"./mwc-snackbar-b8a221fd.js";import"./form-element-300125b4.js";import"./mwc-button-e0830c8f.js";import"./XImageClassifier-ac56385f.js";import"./mwc-textfield-971dc8f3.js";function h(){var e=n(['\n    <p class="helper-text">Navigate to an image by URL or try dragging and dropping an image from your computer onto the current one.</p>\n      <div class="location-container">\n        <mwc-textfield ?disabled='," @keypress=",' label="Image Url" icon="http" value="','"></mwc-textfield>\n        <mwc-button ?disabled='," @click=",' label="Go"></mwc-button>\n      </div>\n      <div class="cors-anywhere-container">\n        <span class="cors-anywhere-label">Try using cors-anywhere?</span>\n        <mwc-switch ?disabled='," @change="," ?checked=",'></mwc-switch>\n      </div>\n      <div id="x-image-classifier-container">\n        <a href="','">\n          <x-image-classifier\n            @x-image-classifier-image-drag-over=',"\n            @x-image-classifier-image-drop=","\n            @x-image-classifier-image-drag-leave=","\n            @x-image-classifier-image-classified=","\n            @x-image-classifier-image-loading-failure=","\n            @x-image-classifier-no-image-classified=","\n            @x-image-classifier-ready-to-predict=","\n            imgUrl=","\n            wasmPath=",'\n          >\n            <div class="svg-wrapper">\n              <h3>Loading...</h3>\n              <tfjs-component-playground-loading></tfjs-component-playground-loading>\n            </div>\n          </x-image-classifier>\n        </a>\n      </div>\n      <mwc-snackbar labelText="','"></mwc-snackbar>\n    ']);return h=function(){return e},e}function m(){var e=n(["\n      :host {\n        text-align: var(--tfjs-component-playground-text-align, center);\n        width: 100%;\n      }\n\n      .cors-anywhere-container {\n        margin-bottom: 1rem;\n      }\n\n      .cors-anywhere-label {\n        margin-right: 1rem;\n      }\n\n      .helper-text {\n        margin: 0;\n        padding: 0 0.5rem;\n      }\n\n      .location-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1rem;\n      }\n\n      .svg-wrapper h3 {\n        position: absolute;\n        width: 100%;\n      }\n\n      img {\n        height: 100%;\n        width: 100%;\n      }\n\n      a {\n        color: var(--tfjs-component-playground-link-color, blue);\n        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);\n      }\n\n      a:hover {\n        color: var(--tfjs-component-playground-link-hover-color, darkblue);\n        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);\n      }\n\n      #player-container {\n        margin: auto;\n        width: 20rem;\n      }\n\n      #controls {\n        margin-bottom: 1rem;\n        display: inline-flex;\n        justify-content: space-between;\n        width: 100%;\n      }\n\n      mwc-snackbar {\n        text-align: center;\n      }\n\n      mwc-textfield {\n        max-width: 37.5rem;\n        width: 100%;\n      }\n\n      mwc-button {\n        background-color: var(--tfjs-component-playground-button-background-color, initial);\n        border-radius: var(--tfjs-component-playground-button-border-radius, 4px);\n        border: var(--tfjs-component-playground-button-border, 1px outset rgb(200, 200, 200));\n        display: inline-block;\n        font: var(--tfjs-component-playground-button-font, 400 13.3333px Arial);\n        height: var(--tfjs-component-playground-button-height, 100%);\n        margin: var(--tfjs-component-playground-button-margin, 0 0 0 1rem);\n        padding: var(--tfjs-component-playground-button-padding, initial);\n        width: var(--tfjs-component-playground-button-width, initial);\n      }\n    "]);return m=function(){return e},e}class g extends(c(i)(a)){stateChanged(e){this.routeParams=e.router.routes["".concat(this._path,"mobilenet/single/:imgUrl/*")].params}static get styles(){return r(m())}static get properties(){return{maxId:{type:String},minId:{type:String},range:{type:String},userId:{type:String},imgUrl:{type:String},wasmPath:{type:String},snackLabel:{type:String,reflect:!1},isCorsAnywhereEnabled:{type:Boolean,reflect:!1}}}constructor(){super(),e(this,"_path",s()),this.userId=d.main.userId,this.wasmPath=d.main.wasmPath,this._isCorsAnywhereEnabled=this.isCorsAnywhereEnabled,this._areControlsDisabled=!0,this.snackLabel=""}set isCorsAnywhereEnabled(e){var n=this._isCorsAnywhereEnabled;if(e!==n){this._isCorsAnywhereEnabled=e;try{localStorage.setItem("isCorsAnywhereEnabled",e)}catch(e){}this.requestUpdate("isCorsAnywhereEnabled",n)}}get isCorsAnywhereEnabled(){var e=!1;try{e=localStorage.getItem("isCorsAnywhereEnabled")}catch(e){}return"true"===e}_handleXImageClassifierImageDragOver(e){this.shadowRoot.getElementById("x-image-classifier-container").style.backgroundColor="rgba(128, 128, 128, 0.5)"}_handleXImageClassifierImageDrop(e){this.shadowRoot.getElementById("x-image-classifier-container").style.backgroundColor="rgba(0, 0, 0, 0)"}_handleXImageClassifierImageDragLeave(e){this.shadowRoot.getElementById("x-image-classifier-container").style.backgroundColor="rgba(0, 0, 0, 0)"}_handleXImageClassifierImageLoadingFailure(e){this.snackLabel="Image failed to load",this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXImageClassifierImageClassified(e){var{className:n,probability:a}=e.detail,r="".concat(Number(100*a).toString().substr(0,5),"%");this.snackLabel="".concat(r," | ").concat(n),this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXImageClassifierNoImageClassified(e){this.snackLabel="No image classified.",this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXImageClassifierReadyToPredict(e){var n=e.detail;this._areControlsDisabled=!n,this.requestUpdate()}_handleButtonPress(){var e=this.shadowRoot.querySelector("mwc-textfield").value,n=this._isCorsAnywhereEnabled?this._corsAnywhereAppend(this._corsAnywhereReplace(e)):this._corsAnywhereReplace(e),a="".concat(this._path+"mobilenet/single/"+btoa(n));l(a)}_corsAnywhereAppend(e){return"".concat(d.main.corsAnywhereUrl).concat(e)}_corsAnywhereReplace(e){return e.replace(RegExp(d.main.corsAnywhereUrl,"gi"),"")}_handleKeyPress(e){if("Enter"===e.key){var n=this._isCorsAnywhereEnabled?this._corsAnywhereAppend(this._corsAnywhereReplace(e.currentTarget.value)):this._corsAnywhereReplace(e.currentTarget.value),a="".concat(this._path+"mobilenet/single/"+btoa(n));l(a)}}_handleSwitch(e){e.currentTarget.checked?this.isCorsAnywhereEnabled=!0:this.isCorsAnywhereEnabled=!1}render(){var e=void 0;try{e=atob(this.imgUrl)}catch(n){e=d.main.imgUrl+this.userId}var n=this.routeParams?this.routeParams.wild:"",a="";try{a="?".concat(atob(n))}catch(e){}e="?"===a?e:e+a;var r=this._isCorsAnywhereEnabled||e.includes(d.main.corsAnywhereUrl)?this._corsAnywhereAppend(this._corsAnywhereReplace(e)):this._corsAnywhereReplace(e),i=r.replace(RegExp(d.main.corsAnywhereUrl,"gi"),"");return t(h(),this._areControlsDisabled,this._handleKeyPress,i,this._areControlsDisabled,this._handleButtonPress,this._areControlsDisabled,this._handleSwitch,this._isCorsAnywhereEnabled,i,this._handleXImageClassifierImageDragOver,this._handleXImageClassifierImageDrop,this._handleXImageClassifierImageDragLeave,this._handleXImageClassifierImageClassified,this._handleXImageClassifierImageLoadingFailure,this._handleXImageClassifierNoImageClassified,this._handleXImageClassifierReadyToPredict,r,this.wasmPath,this.snackLabel)}}o("x-image-classifier-single-image-url",g);export{g as XImageClassifierSingleImageUrl};