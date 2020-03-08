import{q as t,p as e,h as o,c as i,a as n}from"./lit-element-51727a0b.js";import{_ as s,a,M as d,b as r,m as c,e as l,c as h,d as m}from"./class-map-d74af20d.js";import{o as u,B as g,a as _}from"./mwc-snackbar-b8a221fd.js";
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var t,e,o;const i=Symbol(),n=Symbol(),s=Symbol(),a=Symbol(),d=Symbol(),r=Symbol(),c=Symbol(),l=Symbol(),h=Symbol(),m=Symbol(),u=Symbol(),g=Symbol(),_=Symbol();document.$blockingElements=new class{constructor(){this[t]=[],this[e]=[],this[o]=new Set}destructor(){this[h](this[s]);this[i]=null,this[s]=null,this[n]=null}get top(){const t=this[i];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[r](t),this[i].push(t))}remove(t){const e=this[i].indexOf(t);return-1!==e&&(this[i].splice(e,1),e===this[i].length&&this[r](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[i].indexOf(t)}[(t=i,e=s,o=n,r)](t){const e=this[n],o=this[s];if(!t)return this[h](o),e.clear(),void(this[s]=[]);const i=this[m](t);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const a=this[u](t);if(!o.length)return void this[l](i,a,e);let d=o.length-1,r=i.length-1;for(;d>0&&r>0&&o[d]===i[r];)d--,r--;o[d]!==i[r]&&this[c](o[d],i[r]),d>0&&this[h](o.slice(0,d)),r>0&&this[l](i.slice(0,r),a,null)}[c](t,e){const o=t[a];this[g](t)&&!t.inert&&(t.inert=!0,o.add(t)),o.has(e)&&(e.inert=!1,o.delete(e)),e[d]=t[d],e[a]=o,t[d]=void 0,t[a]=void 0}[h](t){for(const e of t){e[d].disconnect(),e[d]=void 0;const t=e[a];for(const e of t)e.inert=!1;e[a]=void 0}}[l](t,e,o){for(const i of t){const t=i.parentNode,n=t.children,s=new Set;for(let t=0;t<n.length;t++){const a=n[t];a===i||!this[g](a)||e&&e.has(a)||(o&&a.inert?o.add(a):(a.inert=!0,s.add(a)))}i[a]=s;const r=new MutationObserver(this[_].bind(this));i[d]=r;let c=t;const l=c;l.__shady&&l.host&&(c=l.host),r.observe(c,{childList:!0})}}[_](t){const e=this[s],o=this[n];for(const i of t){const t=i.target.host||i.target,n=t===document.body?e.length:e.indexOf(t),s=e[n-1],d=s[a];for(let t=0;t<i.removedNodes.length;t++){const e=i.removedNodes[t];if(e===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();d.has(e)&&(e.inert=!1,d.delete(e))}for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];this[g](e)&&(o&&e.inert?o.add(e):(e.inert=!0,d.add(e)))}}}[g](t){return!1===/^(style|template|script)$/.test(t.localName)}[m](t){const e=[];let o=t;for(;o&&o!==document.body;)if(o.nodeType===Node.ELEMENT_NODE&&e.push(o),o.assignedSlot){for(;o=o.assignedSlot;)e.push(o);o=e.pop()}else o=o.parentNode||o.host;return e}[u](t){const e=t.shadowRoot;if(!e)return null;const o=new Set;let i,n,s;const a=e.querySelectorAll("slot");if(a.length&&a[0].assignedNodes)for(i=0;i<a.length;i++)for(s=a[i].assignedNodes({flatten:!0}),n=0;n<s.length;n++)s[n].nodeType===Node.ELEMENT_NODE&&o.add(s[n]);return o}}})();const p=Array.prototype.slice,f=Element.prototype.matches||Element.prototype.msMatchesSelector,b=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class y{constructor(t,e){this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(t){this._savedAriaHidden=t}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(t){v(t,t=>this._visitNode(t));let e=document.activeElement;if(!document.body.contains(t)){let o=t,i=void 0;for(;o;){if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i=o;break}o=o.parentNode}i&&(e=i.activeElement)}t.contains(e)&&(e.blur(),e===document.activeElement&&document.body.focus())}_visitNode(t){if(t.nodeType!==Node.ELEMENT_NODE)return;const e=t;e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(f.call(e,b)||e.hasAttribute("tabindex"))&&this._manageNode(e)}_manageNode(t){const e=this._inertManager.register(t,this);this._managedNodes.add(e)}_unmanageNode(t){const e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}_unmanageSubtree(t){v(t,t=>this._unmanageNode(t))}_adoptInertRoot(t){let e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}_onMutation(t,e){t.forEach((function(t){const e=t.target;if("childList"===t.type)p.call(t.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this),p.call(t.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(e);else if(e!==this._rootElement&&"inert"===t.attributeName&&e.hasAttribute("inert")){this._adoptInertRoot(e);const t=this._inertManager.getInertRoot(e);this._managedNodes.forEach((function(o){e.contains(o.node)&&t._manageNode(o.node)}))}}),this)}}class E{constructor(t,e){this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(t){this._throwIfDestroyed(),this._savedTabIndex=t}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const t=this.node;if(f.call(t,b)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}addInertRoot(t){this._throwIfDestroyed(),this._inertRoots.add(t)}removeInertRoot(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}}function v(t,e,o){if(t.nodeType==Node.ELEMENT_NODE){const o=t;e&&e(o);const i=o.shadowRoot;if(i)return void v(i,e);if("content"==o.localName){const t=o,i=t.getDistributedNodes?t.getDistributedNodes():[];for(let t=0;t<i.length;t++)v(i[t],e);return}if("slot"==o.localName){const t=o,i=t.assignedNodes?t.assignedNodes({flatten:!0}):[];for(let t=0;t<i.length;t++)v(i[t],e);return}}let i=t.firstChild;for(;null!=i;)v(i,e),i=i.nextSibling}function x(t){if(t.querySelector("style#inert-style"))return;const e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",t.appendChild(e)}const A=new class{constructor(t){if(!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),x(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(t,e){if(e){if(this._inertRoots.has(t))return;const e=new y(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,e),!this._document.body.contains(t)){let e=t.parentNode;for(;e;)11===e.nodeType&&x(e),e=e.parentNode}}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}getInertRoot(t){return this._inertRoots.get(t)}register(t,e){let o=this._managedNodes.get(t);return void 0!==o?o.addInertRoot(e):o=new E(t,e),this._managedNodes.set(t,o),o}deregister(t,e){const o=this._managedNodes.get(t);return o?(o.removeInertRoot(e),o.destroyed&&this._managedNodes.delete(t),o):null}_onDocumentLoaded(){p.call(this._document.querySelectorAll("[inert]")).forEach((function(t){this.setInert(t,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(t,e){const o=this;t.forEach((function(t){switch(t.type){case"childList":p.call(t.addedNodes).forEach((function(t){if(t.nodeType!==Node.ELEMENT_NODE)return;const e=p.call(t.querySelectorAll("[inert]"));f.call(t,"[inert]")&&e.unshift(t),e.forEach((function(t){this.setInert(t,!0)}),o)}),o);break;case"attributes":if("inert"!==t.attributeName)return;const e=t.target,i=e.hasAttribute("inert");o.setInert(e,i)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){A.setInert(this,t)}})
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var N={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},S={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},T={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},C=function(t){function e(o){var i=t.call(this,a({},e.defaultAdapter,o))||this;return i.isOpen_=!1,i.animationFrame_=0,i.animationTimer_=0,i.layoutFrame_=0,i.escapeKeyAction_=S.CLOSE_ACTION,i.scrimClickAction_=S.CLOSE_ACTION,i.autoStackButtons_=!0,i.areButtonsStacked_=!1,i}return s(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return N},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return S},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.hasClass(N.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(S.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(N.OPENING),this.runNextAnimationFrame_((function(){t.adapter_.addClass(N.OPEN),t.adapter_.addBodyClass(N.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),t.adapter_.notifyOpened()}),T.DIALOG_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(N.CLOSING),this.adapter_.removeClass(N.OPEN),this.adapter_.removeBodyClass(N.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)}),T.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.handleClick=function(t){if(this.adapter_.eventTargetMatches(t.target,S.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var e=this.adapter_.getActionFromEvent(t);e&&this.close(e)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter_.getActionFromEvent(t)){var o=!this.adapter_.eventTargetMatches(t.target,S.SUPPRESS_DEFAULT_PRESS_SELECTOR);e&&o&&this.adapter_.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(N.OPENING),this.adapter_.removeClass(N.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(N.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(N.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(N.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(N.SCROLLABLE)},e}(d);const w=document.$blockingElements;class O extends g{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.mdcFoundationClass=C,this.boundLayout=null,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter(t=>t instanceof HTMLElement);const e=t[0];return e||null}emitNotification(t,e){const o=new CustomEvent(t,{detail:e?{action:e}:{}});this.dispatchEvent(o)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);if(e)return e;const o=this.primarySlot.assignedNodes({flatten:!0}),i=this.searchNodeTreesForAttribute(o,this.initialFocusAttribute);if(i)return i;const n=this.secondarySlot.assignedNodes({flatten:!0}),s=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(s)return s;const a=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(a,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,e){for(const o of t)if(o instanceof HTMLElement){if(o.hasAttribute(e))return o;{const t=o.querySelector(`[${e}]`);if(t)return t}}return null}createAdapter(){return Object.assign(Object.assign({},_(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,e)=>!!t&&c(t,e),getActionFromEvent:t=>{if(!t.target)return"";const e=l(t.target,`[${this.actionAttribute}]`);return e&&e.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return!!t&&t.scrollHeight>t.offsetHeight},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{w.remove(this)},trapFocus:t=>{w.push(this),t&&t.focus()}})}render(){const t={[N.STACKED]:this.stacked};let e=o``;this.heading&&(e=o`
        <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`);const i={"mdc-dialog__actions":!this.hideActions};return o`
    <div class="mdc-dialog ${h(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${h(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,w.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const t=this.getRootNode(),e=t instanceof Document?t.activeElement:null;e instanceof HTMLElement&&e.blur()}}setEventListeners(){this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundLayout=()=>{this.open&&this.mdcFoundation.layout.bind(this.mdcFoundation)},this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation),this.mdcRoot.addEventListener("click",this.boundHandleClick),window.addEventListener("resize",this.boundLayout,m()),window.addEventListener("orientationchange",this.boundLayout,m()),this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,m()),document.addEventListener("keydown",this.boundHandleDocumentKeydown,m())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundLayout&&(window.removeEventListener("resize",this.boundLayout),window.removeEventListener("orientationchange",this.boundLayout)),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}r([t(".mdc-dialog")],O.prototype,"mdcRoot",void 0),r([t('slot[name="primaryAction"]')],O.prototype,"primarySlot",void 0),r([t('slot[name="secondaryAction"]')],O.prototype,"secondarySlot",void 0),r([t("#contentSlot")],O.prototype,"contentSlot",void 0),r([t(".mdc-dialog__content")],O.prototype,"contentElement",void 0),r([t(".mdc-container")],O.prototype,"conatinerElement",void 0),r([e({type:Boolean})],O.prototype,"hideActions",void 0),r([e({type:Boolean}),u((function(){this.forceLayout()}))],O.prototype,"stacked",void 0),r([e({type:String})],O.prototype,"heading",void 0),r([e({type:String}),u((function(t){this.mdcFoundation.setScrimClickAction(t)}))],O.prototype,"scrimClickAction",void 0),r([e({type:String}),u((function(t){this.mdcFoundation.setEscapeKeyAction(t)}))],O.prototype,"escapeKeyAction",void 0),r([e({type:Boolean,reflect:!0}),u((function(t){this.mdcFoundation&&this.isConnected&&(t?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],O.prototype,"open",void 0),r([e()],O.prototype,"defaultAction",void 0),r([e()],O.prototype,"actionAttribute",void 0),r([e()],O.prototype,"initialFocusAttribute",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const I=i`.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px));border-radius:4px;border-radius:var(--mdc-dialog-shape-radius, 4px)}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;let L=class extends O{};L.styles=I,L=r([n("mwc-dialog")],L);
