import{a as t}from"./_rollupPluginBabelHelpers-ed8cbb08.js";import{L as r,c as e,h as n}from"./lit-element-51727a0b.js";import"./index-85299b5e.js";import{store as o}from"./configureStore.js";import{defineCustomElement as s}from"./utilities.js";import"./middleware.js";import"./types.js";import"./value.js";import"./initialState.js";import{c as i}from"./connect-mixin-144a42a2.js";function a(){var r=t(["\n      <slot></slot>\n      <span>","</span>\n    "]);return a=function(){return r},r}function u(){var r=t([""]);return u=function(){return r},r}class p extends(i(o)(r)){static get styles(){return e(u())}static get properties(){return{counter:{type:Number}}}stateChanged(t){this.counter=t.count.value}render(){return n(a(),this.counter)}}s("tfjs-component-playground-store",p);export{p as TFJSComponentPlaygroundStore};