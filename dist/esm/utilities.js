var e=(e,t)=>function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return!0===t.hasOwnProperty(a.type)?t[a.type](r,a):r},t=()=>{try{var e=localStorage.getItem("tfjs-component-playground-store-state");if(null===e)return;return JSON.parse(e)}catch(e){return}},r=e=>{try{var t=JSON.stringify(e);localStorage.setItem("tfjs-component-playground-store-state",t)}catch(e){}},a=(e,t)=>{customElements.get(e)||customElements.define(e,t)},n=()=>"".concat(new URL(document.querySelector("base").href).pathname,"/").replace(/\/+\//g,"/"),o=()=>new URL(document.querySelector("base").href).pathname.replace(/\/+$/,""),c=()=>{var e=window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/);return e?e[0].replace(/\//g,""):""};export{e as createReducer,a as defineCustomElement,n as getBasePathWithTrailingSlash,o as getBasePathWithoutTrailingSlash,c as getLastPathSegment,t as loadState,r as saveState};
