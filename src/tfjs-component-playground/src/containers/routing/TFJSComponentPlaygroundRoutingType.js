import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import { store } from '../../store/configureStore'
import { connect } from 'pwa-helpers/connect-mixin'

import config from '../../config/index'

import '../../components/TFJSComponentPlaygroundCounter'
import '../../components/XFaceDetector/XFaceDetectorNavigation'
import '../../components/XImageClassifier/XImageClassifierNavigation'
import '../../components/XObjectDetector/XObjectDetectorNavigation'
import './TFJSComponentPlaygroundRoutingMethod'

export class TFJSComponentPlaygroundRoutingType extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()

  static get properties() {
    return {
      type: { type: String },
    }
  }

  stateChanged(state) {
    this.activeRoute = state.router.activeRoute
  }

  _getNavigation(type) {
    if (type === 'blazeface') {
      return html`<x-face-detector-navigation></x-face-detector-navigation>`
    }

    if (type === 'mobilenet') {
      return html`<x-image-classifier-navigation></x-image-classifier-navigation>`
    }

    if (type === 'cocossd') {
      return html`<x-object-detector-navigation></x-object-detector-navigation>`
    }

    if (type === 'counter') {
      return ''
    }
  }

  render() {
    return html`
      ${this._getNavigation(this.type)}

      <lit-route component="tfjs-component-playground-counter" path="${this._path}counter"></lit-route>
      <lit-route component="tfjs-component-playground-routing-method" path="${this._path}:type/:method"></lit-route>
      <lit-route component="tfjs-component-playground-routing-method" path="${this._path}:type/:method/*"></lit-route>
    `
  }
}

defineCustomElement('tfjs-component-playground-routing-type', TFJSComponentPlaygroundRoutingType)
