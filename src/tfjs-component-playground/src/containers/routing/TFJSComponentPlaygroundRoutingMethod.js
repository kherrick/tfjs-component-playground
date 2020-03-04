import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import { store } from '../../store/configureStore'
import { connect } from 'pwa-helpers/connect-mixin'

import config from '../../config/index'

export class TFJSComponentPlaygroundRoutingMethod extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()

  static get properties() {
    return {
      method: { type: String },
    }
  }

  stateChanged(state) {
    this.activeRoute = state.router.activeRoute
  }

  render() {
    return html`
      <!-- x-face-detector -->
      <lit-route
        .resolve="${() => import('../XFaceDetector/XFaceDetectorSingleImageUrl')}"
        component="x-face-detector-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}blazeface/single/:imgUrl/*"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../XFaceDetector/XFaceDetectorSingleImageUrl')}"
        component="x-face-detector-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}blazeface/single/:imgUrl"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XFaceDetector/XFaceDetectorSequentialImageIds')}"
        component="x-face-detector-sequential-image-ids"
        loading="tfjs-component-playground-loading"
        path="${this._path}blazeface/range/:range/domain/:imgUrl/:userId"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XFaceDetector/XFaceDetectorUserMediaVideo')}"
        component="x-face-detector-user-media-video"
        loading="tfjs-component-playground-loading"
        path="${this._path}blazeface/userMediaVideo"
      ></lit-route>

      <!-- x-object-detector -->
      <lit-route
        .resolve="${() => import('../XObjectDetector/XObjectDetectorSingleImageUrl')}"
        component="x-object-detector-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}cocossd/single/:imgUrl/*"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../XObjectDetector/XObjectDetectorSingleImageUrl')}"
        component="x-object-detector-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}cocossd/single/:imgUrl"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XObjectDetector/XObjectDetectorSequentialImageIds')}"
        component="x-object-detector-sequential-image-ids"
        loading="tfjs-component-playground-loading"
        path="${this._path}cocossd/range/:range/domain/:imgUrl/:userId"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XObjectDetector/XObjectDetectorUserMediaVideo')}"
        component="x-object-detector-user-media-video"
        loading="tfjs-component-playground-loading"
        path="${this._path}cocossd/userMediaVideo"
      ></lit-route>

      <!-- x-image-classifier -->
      <lit-route
        .resolve="${() => import('../XImageClassifier/XImageClassifierSingleImageUrl')}"
        component="x-image-classifier-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}mobilenet/single/:imgUrl/*"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../XImageClassifier/XImageClassifierSingleImageUrl')}"
        component="x-image-classifier-single-image-url"
        loading="tfjs-component-playground-loading"
        path="${this._path}mobilenet/single/:imgUrl"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XImageClassifier/XImageClassifierSequentialImageIds')}"
        component="x-image-classifier-sequential-image-ids"
        loading="tfjs-component-playground-loading"
        path="${this._path}mobilenet/range/:range/domain/:imgUrl/:userId"
      ></lit-route>
      <lit-route
        .resolve="${() => import('../../components/XImageClassifier/XImageClassifierUserMediaVideo')}"
        component="x-image-classifier-user-media-video"
        loading="tfjs-component-playground-loading"
        path="${this._path}mobilenet/userMediaVideo"
      ></lit-route>
    `
  }
}

defineCustomElement('tfjs-component-playground-routing-method', TFJSComponentPlaygroundRoutingMethod)
