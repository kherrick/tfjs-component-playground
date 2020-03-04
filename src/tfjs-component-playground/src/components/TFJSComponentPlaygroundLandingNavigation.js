import { html, css, LitElement } from 'lit-element'

import { defineCustomElement, getBasePathWithTrailingSlash } from '../utilities'
import { navigateByPath } from '../dispatchers/dispatchers'

import '@material/mwc-button'
import '@material/mwc-icon/mwc-icon-font'

import './XFaceDetector/XFaceDetectorNavigation'
import './XImageClassifier/XImageClassifierNavigation'
import './XObjectDetector/XObjectDetectorNavigation'

export class TFJSComponentPlaygroundLandingNavigation extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
    `
  }

  render() {
    return html`
      <x-face-detector-navigation></x-face-detector-navigation>
      <x-image-classifier-navigation></x-image-classifier-navigation>
      <x-object-detector-navigation></x-object-detector-navigation>
    `
  }
}

defineCustomElement('tfjs-component-playground-landing-navigation', TFJSComponentPlaygroundLandingNavigation)
