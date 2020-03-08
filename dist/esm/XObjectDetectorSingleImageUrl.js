import{_ as e,a as t}from"./_rollupPluginBabelHelpers-ed8cbb08.js";import{L as n,c as r,h as o}from"./lit-element-51727a0b.js";import"./index-85299b5e.js";import{store as a}from"./configureStore.js";import{getBasePathWithTrailingSlash as i,defineCustomElement as s}from"./utilities.js";import"./middleware.js";import"./types.js";import"./value.js";import"./initialState.js";import{n as c}from"./dispatchers-19a19022.js";import{c as l}from"./connect-mixin-144a42a2.js";import"./creators.js";import d from"./index.js";import"./class-map-d74af20d.js";import"./mwc-snackbar-b8a221fd.js";import"./form-element-300125b4.js";import"./mwc-button-e0830c8f.js";import"./mwc-dialog-3b5ca302.js";import"./XObjectDetector-6b71cbce.js";import"./mwc-textfield-971dc8f3.js";function h(){var e=t(['\n              <li style="list-style-type: none;">',"</li>\n            "]);return h=function(){return e},e}function m(){var e=t(['<mwc-button slot="action">View</mwc-button>']);return m=function(){return e},e}function b(){var e=t(['\n      <p class="helper-text">Navigate to an image by URL or try dragging and dropping an image from your computer onto the current one.</p>\n      <div class="location-container">\n        <mwc-textfield ?disabled='," @keypress=",' label="Image Url" icon="http" value="','"></mwc-textfield>\n        <mwc-button ?disabled='," @click=",' label="Go"></mwc-button>\n      </div>\n      <div class="cors-anywhere-container">\n        <span class="cors-anywhere-label">Try using cors-anywhere?</span>\n        <mwc-switch ?disabled='," @change="," ?checked=",'></mwc-switch>\n      </div>\n      <div id="x-object-detector-container">\n        <a href="','">\n          <x-object-detector\n            draw\n            label\n            strokeStyle="red"\n            labelTextColor="yellow"\n            labelBGColor="blue"\n            labelFontSize="16"\n            maxNumBoxes="8"\n            lineWidth="3"\n            @x-object-detector-image-drop=',"\n            @x-object-detector-image-drag-over=","\n            @x-object-detector-image-drag-leave=","\n            @x-object-detector-image-loading-failure=","\n            @x-object-detector-no-object-detected=","\n            @x-object-detector-object-detected=","\n            @x-object-detector-ready-to-predict=","\n            imgUrl=","\n            wasmPath=",'\n          >\n            <div class="svg-wrapper">\n              <h3>Loading...</h3>\n              <tfjs-component-playground-loading></tfjs-component-playground-loading>\n            </div>\n          </x-object-detector>\n        </a>\n      </div>\n      <mwc-snackbar\n        @MDCSnackbar:closing=','\n        labelText="','">\n        ','\n      </mwc-snackbar>\n      <mwc-dialog heading="Object',' detected">\n        <ul>\n          ','\n        </ul>\n        <mwc-button slot="primaryAction" dialogAction="discard">\n          OK\n        </mwc-button>\n      </mwc-dialog>\n    ']);return b=function(){return e},e}function p(){var e=t(["\n      :host {\n        text-align: var(--tfjs-component-playground-text-align, center);\n        width: 100%;\n      }\n\n      .cors-anywhere-container {\n        margin-bottom: 1rem;\n      }\n\n      .cors-anywhere-label {\n        margin-right: 1rem;\n      }\n\n      .helper-text {\n        margin: 0;\n        padding: 0 0.5rem;\n      }\n\n      .location-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1rem;\n      }\n\n      .svg-wrapper h3 {\n        position: absolute;\n        width: 100%;\n      }\n\n      img {\n        height: 100%;\n        width: 100%;\n      }\n\n      a {\n        color: var(--tfjs-component-playground-link-color, blue);\n        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);\n      }\n\n      a:hover {\n        color: var(--tfjs-component-playground-link-hover-color, darkblue);\n        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);\n      }\n\n      #player-container {\n        margin: auto;\n        width: 20rem;\n      }\n\n      #controls {\n        margin-bottom: 1rem;\n        display: inline-flex;\n        justify-content: space-between;\n        width: 100%;\n      }\n\n      mwc-snackbar {\n        text-align: center;\n      }\n\n      mwc-textfield {\n        max-width: 37.5rem;\n        width: 100%;\n      }\n\n      mwc-button {\n        background-color: var(--tfjs-component-playground-button-background-color, initial);\n        border-radius: var(--tfjs-component-playground-button-border-radius, 4px);\n        border: var(--tfjs-component-playground-button-border, 1px outset rgb(200, 200, 200));\n        display: inline-block;\n        font: var(--tfjs-component-playground-button-font, 400 13.3333px Arial);\n        height: var(--tfjs-component-playground-button-height, 100%);\n        margin: var(--tfjs-component-playground-button-margin, 0 0 0 1rem);\n        padding: var(--tfjs-component-playground-button-padding, initial);\n        width: var(--tfjs-component-playground-button-width, initial);\n      }\n    "]);return p=function(){return e},e}class g extends(l(a)(n)){stateChanged(e){this.routeParams=e.router.routes["".concat(this._path,"cocossd/single/:imgUrl/*")].params}static get styles(){return r(p())}static get properties(){return{maxId:{type:String},minId:{type:String},range:{type:String},userId:{type:String},imgUrl:{type:String},wasmPath:{type:String},snackLabel:{type:String,reflect:!1},isCorsAnywhereEnabled:{type:Boolean,reflect:!1}}}constructor(){super(),e(this,"_path",i()),this.userId=d.main.userId,this.wasmPath=d.main.wasmPath,this._isCorsAnywhereEnabled=this.isCorsAnywhereEnabled,this._areControlsDisabled=!0,this._objectList=[],this.snackLabel=""}set isCorsAnywhereEnabled(e){var t=this._isCorsAnywhereEnabled;if(e!==t){this._isCorsAnywhereEnabled=e;try{localStorage.setItem("isCorsAnywhereEnabled",e)}catch(e){}this.requestUpdate("isCorsAnywhereEnabled",t)}}get isCorsAnywhereEnabled(){var e=!1;try{e=localStorage.getItem("isCorsAnywhereEnabled")}catch(e){}return"true"===e}_corsAnywhereAppend(e){return"".concat(d.main.corsAnywhereUrl).concat(e)}_corsAnywhereReplace(e){return e.replace(RegExp(d.main.corsAnywhereUrl,"gi"),"")}_handleButtonPress(){var e=this.shadowRoot.querySelector("mwc-textfield").value,t=this._isCorsAnywhereEnabled?this._corsAnywhereAppend(this._corsAnywhereReplace(e)):this._corsAnywhereReplace(e),n="".concat(this._path+"cocossd/single/"+btoa(t));c(n)}_handleKeyPress(e){if("Enter"===e.key){var t=this._isCorsAnywhereEnabled?this._corsAnywhereAppend(this._corsAnywhereReplace(e.currentTarget.value)):this._corsAnywhereReplace(e.currentTarget.value),n="".concat(this._path+"cocossd/single/"+btoa(t));c(n)}}_handleSnackClose(e){var{detail:t}=e;"action"===t.reason&&(this.shadowRoot.querySelector("mwc-dialog").open=!0)}_handleSwitch(e){e.currentTarget.checked?this.isCorsAnywhereEnabled=!0:this.isCorsAnywhereEnabled=!1}_handleXObjectDetectorImageDragOver(e){this.shadowRoot.getElementById("x-object-detector-container").style.backgroundColor="rgba(128, 128, 128, 0.5)"}_handleXObjectDetectorImageDrop(e){this._objectList=[],this.shadowRoot.getElementById("x-object-detector-container").style.backgroundColor="rgba(0, 0, 0, 0)"}_handleXObjectDetectorImageDragLeave(e){this.shadowRoot.getElementById("x-object-detector-container").style.backgroundColor="rgba(0, 0, 0, 0)"}_handleXObjectDetectorImageLoadingFailure(e){this.snackLabel="Image failed to load",this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXObjectDetectorObjectDetected(e){var{detail:t}=e,n="".concat(Number(100*t.score).toString().substr(0,5),"%"),r="".concat(n," | ").concat(t.class);this._objectList.push(r),this.snackLabel=1===this._objectList.length?r:"Objects detected.",this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXObjectDetectorNoObjectDetected(e){this.snackLabel="No object detected.",this.shadowRoot.querySelector("mwc-snackbar").open()}_handleXObjectDetectorReadyToPredict(e){var t=e.detail;this._areControlsDisabled=!t,this.requestUpdate()}render(){var e=void 0;try{e=atob(this.imgUrl)}catch(t){e=d.main.imgUrl+this.userId}var t=this.routeParams?this.routeParams.wild:"",n="";try{n="?".concat(atob(t))}catch(e){}e="?"===n?e:e+n;var r=this._isCorsAnywhereEnabled||e.includes(d.main.corsAnywhereUrl)?this._corsAnywhereAppend(this._corsAnywhereReplace(e)):this._corsAnywhereReplace(e),a=r.replace(RegExp(d.main.corsAnywhereUrl,"gi"),"");return o(b(),this._areControlsDisabled,this._handleKeyPress,a,this._areControlsDisabled,this._handleButtonPress,this._areControlsDisabled,this._handleSwitch,this._isCorsAnywhereEnabled,a,this._handleXObjectDetectorImageDrop,this._handleXObjectDetectorImageDragOver,this._handleXObjectDetectorImageDragLeave,this._handleXObjectDetectorImageLoadingFailure,this._handleXObjectDetectorNoObjectDetected,this._handleXObjectDetectorObjectDetected,this._handleXObjectDetectorReadyToPredict,r,this.wasmPath,this._handleSnackClose,this.snackLabel,this._objectList.length>1?o(m()):"",this._objectList.length>1?"s":"",this._objectList.map(e=>o(h(),e)))}}s("x-object-detector-single-image-url",g);export{g as XObjectDetectorSingleImageUrl};