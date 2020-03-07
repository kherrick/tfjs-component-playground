import { defineCustomElement } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import config from '../../config/index'

import '@material/mwc-snackbar'
import '@material/mwc-button'

import 'x-object-detector'

import { getBasePathWithTrailingSlash } from '../../utilities'

export class XObjectDetectorUserMediaVideo extends LitElement {
  _path = getBasePathWithTrailingSlash()

  static get styles() {
    return css`
      :host {
        text-align: var(--tfjs-component-playground-text-align, center);
        width: 100%;
      }

      img {
        height: 100%;
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
        display: inline-flex;
        justify-content: center;
        margin-bottom: 1rem;
        width: 100%;
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

      mwc-snackbar {
        text-align: center;
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
      snackLabel: { type: String, reflect: false }
    }
  }

  constructor() {
    super()

    this.userId = config.main.userId
    this.wasmPath = config.main.wasmPath
    this.snackLabel = ''

    this._isVideoEnabled = false
    this._isDetectionEnabled = false

    this._isOnButtonDisabled = true
  }

  _handleXObjectDetectorImageDragOver(e) {
    this.shadowRoot.getElementById('x-object-detector-container').style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
  }

  _handleXObjectDetectorImageDrop(e) {
    this.shadowRoot.getElementById('x-object-detector-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXObjectDetectorImageDragLeave(e) {
    this.shadowRoot.getElementById('x-object-detector-container').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }

  _handleXObjectDetectorImageLoadingFailure(e) {
    this.snackLabel = 'Image failed to load'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXObjectDetectorVideoLoadingFailure(e) {
    this.snackLabel = 'Video failed to load'
    this.shadowRoot.querySelector('mwc-snackbar').open()

    this._isVideoEnabled = false
    this._isDetectionEnabled = false

    // @todo - handle this differently
    this.shadowRoot.querySelector('x-object-detector')._loadingElement.style.display = 'none'
    this.shadowRoot.getElementById('btn_on').disabled = false
  }

  _handleXObjectDetectorObjectDetected({ detail }) {
    const percentage = `${Number(detail.score * 100).toString().substr(0, 5)}%`

    this.snackLabel = `${percentage} | ${detail.class}`
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXObjectDetectorNoObjectDetected(e) {
    this.snackLabel = 'No object detected.'
    this.shadowRoot.querySelector('mwc-snackbar').open()
  }

  _handleXObjectDetectorReadyToPredict(e) {
    const isReadyToPredict = e.detail
    this._isOnButtonDisabled = !isReadyToPredict

    this.requestUpdate()
  }

  _handleOnButton(e) {
    e.currentTarget.disabled = true

    const xObjectDetector = this.shadowRoot.querySelector('x-object-detector')

    return xObjectDetector.startVideo().then(isVideoEnabled => {
      this._isVideoEnabled = isVideoEnabled
      this._isDetectionEnabled = isVideoEnabled

      xObjectDetector.startPredictions()

      this.requestUpdate()
    })
  }

  _handleOffButton() {
    const xObjectDetector = this.shadowRoot.querySelector('x-object-detector')

    xObjectDetector.stopPredictions()

    return xObjectDetector.stopVideo()
      .then(isVideoEnabled => {
        this._isVideoEnabled = isVideoEnabled
        this._isDetectionEnabled = isVideoEnabled

        this.requestUpdate()
      })
      .then(() => {
        // @todo - handle this differently
        xObjectDetector._handleImageUrlPrediction(
          xObjectDetector.shadowRoot.getElementById('canvas'),
          xObjectDetector.imgUrl
        )
      })
  }

  render() {
    let url = config.main.imgUrl

    return html`
      <p class="helper-text">Use the buttons below to enable the camera and start object detection.</p>
      <div id="player-container">
        <div id="controls">
          <mwc-button id="btn_off" ?disabled=${!this._isDetectionEnabled && !this._isVideoEnabled} @click=${this._handleOffButton}>Off</mwc-button>
          <mwc-button id="btn_on" ?disabled=${this._isOnButtonDisabled || this._isDetectionEnabled && this._isVideoEnabled} @click=${this._handleOnButton}>On</mwc-button>
        </div>
      </div>
      <div id="x-object-detector-container">
        <x-object-detector
          @x-object-detector-image-drag-over=${this._handleXObjectDetectorImageDragOver}
          @x-object-detector-image-drop=${this._handleXObjectDetectorImageDrop}
          @x-object-detector-image-drag-leave=${this._handleXObjectDetectorImageDragLeave}
          @x-object-detector-object-detected=${this._handleXObjectDetectorObjectDetected}
          @x-object-detector-image-loading-failure=${this._handleXObjectDetectorImageLoadingFailure}
          @x-object-detector-video-loading-failure=${this._handleXObjectDetectorVideoLoadingFailure}
          @x-object-detector-no-object-detected=${this._handleXObjectDetectorNoObjectDetected}
          @x-object-detector-ready-to-predict=${this._handleXObjectDetectorReadyToPredict}
          imgUrl=${url + this.userId}
          wasmPath=${this.wasmPath}
        >
          <div class="svg-wrapper">
            <h3>Loading...</h3>
            <tfjs-component-playground-loading></tfjs-component-playground-loading>
          </div>
        </x-object-detector>
      </div>
      <mwc-snackbar labelText="${this.snackLabel}"></mwc-snackbar>
    `
  }
}

defineCustomElement('x-object-detector-user-media-video', XObjectDetectorUserMediaVideo)
