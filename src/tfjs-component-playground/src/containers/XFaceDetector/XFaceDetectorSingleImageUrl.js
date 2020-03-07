import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import config from '../../config/index'

import '@material/mwc-button'
import '@material/mwc-snackbar'
import '@material/mwc-switch'
import '@material/mwc-textfield'

import 'x-face-detector'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../../store/configureStore'
import { navigateByPath } from '../../dispatchers/dispatchers'

export class XFaceDetectorSingleImageUrl extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()

  stateChanged(state) {
    this.routeParams = state.router.routes[`${this._path}blazeface/single/:imgUrl/*`].params
  }

  static get styles() {
    return css`
      :host {
        text-align: var(--tfjs-component-playground-text-align, center);
        width: 100%;
      }

      .cors-anywhere-container {
        margin-bottom: 1rem;
      }

      .cors-anywhere-label {
        margin-right: 1rem;
      }

      .helper-text {
        margin: 0;
        padding: 0 0.5rem;
      }

      .location-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
      }

      .svg-wrapper h3 {
        position: absolute;
        width: 100%;
      }

      img {
        height: 100%;
        width: 100%;
      }

      a {
        color: var(--tfjs-component-playground-link-color, blue);
        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);
      }

      a:hover {
        color: var(--tfjs-component-playground-link-hover-color, darkblue);
        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);
      }

      #player-container {
        margin: auto;
        width: 20rem;
      }

      #controls {
        margin-bottom: 1rem;
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
      }

      mwc-snackbar {
        text-align: center;
      }

      mwc-textfield {
        max-width: 37.5rem;
        width: 100%;
      }

      mwc-button {
        background-color: var(--tfjs-component-playground-button-background-color, initial);
        border-radius: var(--tfjs-component-playground-button-border-radius, 4px);
        border: var(--tfjs-component-playground-button-border, 1px outset rgb(200, 200, 200));
        display: inline-block;
        font: var(--tfjs-component-playground-button-font, 400 13.3333px Arial);
        height: var(--tfjs-component-playground-button-height, 100%);
        margin: var(--tfjs-component-playground-button-margin, 0 0 0 1rem);
        padding: var(--tfjs-component-playground-button-padding, initial);
        width: var(--tfjs-component-playground-button-width, initial);
      }
    `
  }

  // properties getter
  static get properties() {
    return {
      maxId: { type: String },
      minId: { type: String },
      range: { type: String },
      userId: { type: String },
      imgUrl: { type: String },
      wasmPath: { type: String },
      snackLabel: { type: String, reflect: false },
      isCorsAnywhereEnabled: { type: Boolean, reflect: false }
    }
  }

  constructor() {
    super()

    this.userId = config.main.userId
    this.wasmPath = config.main.wasmPath

    this._isCorsAnywhereEnabled = this.isCorsAnywhereEnabled
    this._areControlsDisabled = true

    this.snackLabel = ''
  }

  set isCorsAnywhereEnabled(value) {
    const oldValue = this._isCorsAnywhereEnabled

    if (value !== oldValue) {
      this._isCorsAnywhereEnabled = value

      try {
        localStorage.setItem('isCorsAnywhereEnabled', value)
      } catch (e) {}

      this.requestUpdate('isCorsAnywhereEnabled', oldValue)
    }
  }

  get isCorsAnywhereEnabled() {
    let isCorsAnywhereEnabled = false

    try {
      isCorsAnywhereEnabled = localStorage.getItem('isCorsAnywhereEnabled')
    } catch (e) {}

    return isCorsAnywhereEnabled === 'true'
  }

  _handleXFaceDetectorImageDragOver(e) {
    this.shadowRoot.getElementById('x-face-detector-container').style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
  }

  _handleXFaceDetectorImageDrop(e) {
    this.shadowRoot.getElementById('x-face-detector-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXFaceDetectorImageDragLeave(e) {
    this.shadowRoot.getElementById('x-face-detector-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXFaceDetectorImageLoadingFailure(e) {
    this.snackLabel = 'Image failed to load'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXFaceDetectorFaceDetected(e) {
    this.snackLabel = 'Face Detected!'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXFaceDetectorNoFaceDetected(e) {
    this.snackLabel = 'No face detected.'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXFaceDetectorReadyToPredict(e) {
    const isReadyToPredict = e.detail
    this._areControlsDisabled = !isReadyToPredict

    this.requestUpdate()
  }

  _handleButtonPress() {
    const mwcTextFieldValue = this.shadowRoot.querySelector('mwc-textfield').value

    const url = this._isCorsAnywhereEnabled
      ? this._corsAnywhereAppend(this._corsAnywhereReplace(mwcTextFieldValue))
      : this._corsAnywhereReplace(mwcTextFieldValue)

    const path = `${this._path + 'blazeface/single/' + btoa(url)}`

    navigateByPath(path)
  }

  _corsAnywhereAppend(val) {
    return `${config.main.corsAnywhereUrl}${val}`
  }

  _corsAnywhereReplace(val) {
    return val.replace(RegExp(config.main.corsAnywhereUrl, 'gi'), '')
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      const url = this._isCorsAnywhereEnabled
        ? this._corsAnywhereAppend(this._corsAnywhereReplace(e.currentTarget.value))
        : this._corsAnywhereReplace(e.currentTarget.value)

      const path = `${this._path + 'blazeface/single/' + btoa(url)}`

      navigateByPath(path)
    }
  }

  _handleSwitch(e) {
    e.currentTarget.checked
      ? this.isCorsAnywhereEnabled = true
      : this.isCorsAnywhereEnabled = false
  }

  render() {
    let url = undefined

    try {
      url = atob(this.imgUrl)
    } catch(e) {
      url = config.main.imgUrl + this.userId
    }

    const wildParam = this.routeParams ? this.routeParams.wild : ''
    let wild = ''

    try {
      wild = `?${atob(wildParam)}`
    } catch(e) {}

    url = wild === '?' ? url : url + wild

    let isCorsAnywhereEnabledUrl = this._isCorsAnywhereEnabled || url.includes(config.main.corsAnywhereUrl)
      ? this._corsAnywhereAppend(this._corsAnywhereReplace(url))
      : this._corsAnywhereReplace(url)

    let imageUrl = isCorsAnywhereEnabledUrl.replace(RegExp(config.main.corsAnywhereUrl, 'gi'), '')

    return html`
    <p class="helper-text">Navigate to an image by URL or try dragging and dropping an image from your computer onto the current one.</p>
      <div class="location-container">
        <mwc-textfield ?disabled=${this._areControlsDisabled} @keypress=${this._handleKeyPress} label="Image Url" icon="http" value="${imageUrl}"></mwc-textfield>
        <mwc-button ?disabled=${this._areControlsDisabled} @click=${this._handleButtonPress} label="Go"></mwc-button>
      </div>
      <div class="cors-anywhere-container">
        <span class="cors-anywhere-label">Try using cors-anywhere?</span>
        <mwc-switch ?disabled=${this._areControlsDisabled} @change=${this._handleSwitch} ?checked=${this._isCorsAnywhereEnabled}></mwc-switch>
      </div>
      <div id="x-face-detector-container">
        <a href="${imageUrl}">
          <x-face-detector
            @x-face-detector-image-drop=${this._handleXFaceDetectorImageDrop}
            @x-face-detector-image-drag-over=${this._handleXFaceDetectorImageDragOver}
            @x-face-detector-image-drag-leave=${this._handleXFaceDetectorImageDragLeave}
            @x-face-detector-image-loading-failure=${this._handleXFaceDetectorImageLoadingFailure}
            @x-face-detector-no-face-detected=${this._handleXFaceDetectorNoFaceDetected}
            @x-face-detector-face-detected=${this._handleXFaceDetectorFaceDetected}
            @x-face-detector-ready-to-predict=${this._handleXFaceDetectorReadyToPredict}
            imgUrl=${isCorsAnywhereEnabledUrl}
            wasmPath=${this.wasmPath}
          >
            <div class="svg-wrapper">
              <h3>Loading...</h3>
              <tfjs-component-playground-loading></tfjs-component-playground-loading>
            </div>
          </x-face-detector>
        </a>
      </div>
      <mwc-snackbar labelText="${this.snackLabel}"></mwc-snackbar>
    `
  }
}

defineCustomElement('x-face-detector-single-image-url', XFaceDetectorSingleImageUrl)
