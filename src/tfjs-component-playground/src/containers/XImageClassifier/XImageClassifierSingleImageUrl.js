import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import config from '../../config/index'

import '@material/mwc-button'
import '@material/mwc-snackbar'
import '@material/mwc-switch'
import '@material/mwc-textfield'

import 'x-image-classifier'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../../store/configureStore'
import { navigateByPath } from '../../dispatchers/dispatchers'

export class XImageClassifierSingleImageUrl extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()

  stateChanged(state) {
    // connected to the store to access the route params -- there
    this.routeParams = state.router.routes[`${this._path}mobilenet/single/:imgUrl/*`].params
  }

  static get styles() {
    return css`
      :host {
        text-align: var(--x-face-detector-text-align, center);
        width: 100%;
      }

      .helper-text {
        margin: 0;
        padding: 0 0.5rem;
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

      mwc-button {
        background-color: var(--tfjs-component-playground-button-background-color, initial);
        border-radius: var(--tfjs-component-playground-button-border-radius, 4px);
        border: var(--tfjs-component-playground-button-border, 1px outset rgb(200, 200, 200));
        display: block;
        font: var(--tfjs-component-playground-button-font, 400 13.3333px Arial);
        height: var(--tfjs-component-playground-button-height, initial);
        margin: var(--tfjs-component-playground-button-margin, initial);
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

  _handleXImageClassifierImageDragOver(e) {
    this.shadowRoot.getElementById('x-image-classifier-container').style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
  }

  _handleXImageClassifierImageDrop(e) {
    this.shadowRoot.getElementById('x-image-classifier-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXImageClassifierImageDragLeave(e) {
    this.shadowRoot.getElementById('x-image-classifier-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXImageClassifierImageLoadingFailure(e) {
    this.snackLabel = 'Image failed to load'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXImageClassifierImageClassified(e) {
    const { className, probability } = e.detail
    const percentage = `${Number(probability * 100).toString().substr(0, 5)}%`

    this.snackLabel = `${percentage} | ${className}`
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXImageClassifierNoImageClassified(e) {
    this.snackLabel = 'No image classified.'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXImageClassifierReadyToPredict(e) {
    const isReadyToPredict = e.detail
    this._areControlsDisabled = !isReadyToPredict

    this.requestUpdate()
  }

  _handleButtonPress() {
    const mwcTextFieldValue = this.shadowRoot.querySelector('mwc-textfield').value

    const url = this._isCorsAnywhereEnabled
      ? this._corsAnywhereAppend(this._corsAnywhereReplace(mwcTextFieldValue))
      : this._corsAnywhereReplace(mwcTextFieldValue)

    const path = `${this._path + 'mobilenet/single/' + btoa(url)}`

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

      const path = `${this._path + 'mobilenet/single/' + btoa(url)}`

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
      <div style="display: flex; align-items: center; justify-content: center; margin: 1rem;">
        <mwc-textfield ?disabled=${this._areControlsDisabled} @keypress=${this._handleKeyPress} label="Image Url" icon="http" value="${imageUrl}"></mwc-textfield>
        <mwc-button ?disabled=${this._areControlsDisabled} style="margin-left: 1rem; height: 100%; display: inline-block;" @click=${this._handleButtonPress} label="Go"></mwc-button>
      </div>
      <div style="margin-bottom: 1rem;">
        <span style="margin-right: 1rem;">Try using cors-anywhere?</span>
        <mwc-switch ?disabled=${this._areControlsDisabled} @change=${this._handleSwitch} ?checked=${this._isCorsAnywhereEnabled}></mwc-switch>
      </div>
      <div id="x-image-classifier-container">
        <a href="${imageUrl}">
          <x-image-classifier
            @x-image-classifier-image-drag-over=${this._handleXImageClassifierImageDragOver}
            @x-image-classifier-image-drop=${this._handleXImageClassifierImageDrop}
            @x-image-classifier-image-drag-leave=${this._handleXImageClassifierImageDragLeave}
            @x-image-classifier-image-classified=${this._handleXImageClassifierImageClassified}
            @x-image-classifier-image-loading-failure=${this._handleXImageClassifierImageLoadingFailure}
            @x-image-classifier-no-image-classified=${this._handleXImageClassifierNoImageClassified}
            @x-image-classifier-ready-to-predict=${this._handleXImageClassifierReadyToPredict}
            imgUrl=${isCorsAnywhereEnabledUrl}
            wasmPath=${this.wasmPath}
          >
            <div class="svg-wrapper">
              <h3>Loading...</h3>
              <tfjs-component-playground-loading></tfjs-component-playground-loading>
            </div>
          </x-image-classifier>
        </a>
      </div>
      <mwc-snackbar labelText="${this.snackLabel}"></mwc-snackbar>
    `
  }
}

defineCustomElement('x-image-classifier-single-image-url', XImageClassifierSingleImageUrl)
