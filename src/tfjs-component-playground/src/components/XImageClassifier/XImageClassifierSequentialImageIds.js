import { defineCustomElement } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import { TFJSComponentPlaygroundSequentialImageIdChange } from '../../events/events'

import config from '../../config/index'

import '@material/mwc-slider'
import '@material/mwc-snackbar'
import '@material/mwc-button'

import 'x-image-classifier'

export class XImageClassifierSequentialImageIds extends LitElement {
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

      a {
        color: var(--tfjs-component-playground-link-color, blue);
        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);
      }

      a:hover {
        color: var(--tfjs-component-playground-link-hover-color, darkblue);
        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);
      }

      .helper-text {
        margin: 0;
        padding: 0 0.5rem;
      }

      .svg-wrapper h3 {
        position: absolute;
        width: 100%;
      }

      #player-container {
        margin: auto;
        max-width: 22.5rem;
      }

      #controls {
        margin-bottom: 1rem;
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
      }

      #link {
        margin-bottom: 1rem;
      }

      mwc-slider {
        width: 90%;
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
      snackLabel: { type: String, reflect: false }
    }
  }

  constructor() {
    super()

    this.userId = config.main.userId
    this.wasmPath = config.main.wasmPath

    this._areControlsDisabled = true

    this.snackLabel = ''
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

  _decrementId() {
    let index = this.userId--

    if (index === Number(this.minId)) {
      // wrap around to this.maxId
      this.userId = this.maxId
    }

    return this.userId
  }

  _incrementId() {
    let index = this.userId++

    if (index === Number(this.maxId)) {
      // wrap around to this.minId
      this.userId = this.minId
    }

    return this.userId
  }

  _getNewLocation(loc, id) {
    loc.shift()
    loc.pop()
    loc.push(id)

    return loc.join('/')
  }

  _handleSlideChange(e) {
    e.preventDefault()

    const { value } = e.target

    this._handleHistoryChange(value)

    this.userId = value
  }

  _handleXImageClassifierReadyToPredict(e) {
    const isReadyToPredict = e.detail
    this._areControlsDisabled = !isReadyToPredict

    this.requestUpdate()
  }

  _handlePlay() {
    this.interval = setInterval(() => {
      this._handleHistoryChange(this._incrementId())
    }, 1000)

    this.shadowRoot.querySelector('#play').disabled = true
  }

  _handleStop() {
    clearInterval(this.interval)

    this.shadowRoot.querySelector('#play').disabled = false
  }

  _handleHistoryChange(id) {
    this.shadowRoot.dispatchEvent(TFJSComponentPlaygroundSequentialImageIdChange(id))
    history.pushState({}, '', `/${this._getNewLocation(location.pathname.split('/'))}${id}`)
  }

  _handleNext() {
    this._handleHistoryChange(this._incrementId())
  }

  _handlePrevious() {
    this._handleHistoryChange(this._decrementId())
  }

  firstUpdated() {
    const range = this.range ? this.range : config.main.range

    const minRange = range.split('x')[0]
    const maxRange = range.split('x')[1]

    if (minRange && maxRange) {
      this.minId = minRange
      this.maxId = maxRange
    }
  }

  render() {
    let url = undefined

    try {
      url = atob(this.imgUrl)
    } catch(e) {
      url = config.main.imgUrl
    }

    return html`
      <p class="helper-text">Click the player buttons and use the scrollbar to browse images from ${url}.</p>
      <p class="helper-text">Or, drag and drop a file from your computer onto the current image.</p>
      <div id="player-container">
        <mwc-slider
          pin
          step="1"
          markers
          max="${this.maxId}"
          min="${this.minId}"
          value="${this.userId}"
          @change=${this._handleSlideChange}
          ?disabled=${this._areControlsDisabled}
        ></mwc-slider>
        <div id="controls">
          <mwc-button id="play" ?disabled=${this._areControlsDisabled} @click=${this._handlePlay}>play</mwc-button>
          <mwc-button id="previous" ?disabled=${this._areControlsDisabled} @click=${this._handlePrevious}>previous</mwc-button>
          <mwc-button id="stop" ?disabled=${this._areControlsDisabled} @click=${this._handleStop}>stop</mwc-button>
          <mwc-button id="next" ?disabled=${this._areControlsDisabled} @click=${this._handleNext}>next</mwc-button>
        </div>
      </div>
      <div id="link"><a href="${url + this.userId}">${this.userId}</a></div>
      <div id="x-image-classifier-container">
        <a href="${url + this.userId}">
          <x-image-classifier
            @x-image-classifier-image-drag-over=${this._handleXImageClassifierImageDragOver}
            @x-image-classifier-image-drop=${this._handleXImageClassifierImageDrop}
            @x-image-classifier-image-drag-leave=${this._handleXImageClassifierImageDragLeave}
            @x-image-classifier-image-classified=${this._handleXImageClassifierImageClassified}
            @x-image-classifier-image-loading-failure=${this._handleXImageClassifierImageLoadingFailure}
            @x-image-classifier-no-image-classified=${this._handleXImageClassifierNoImageClassified}
            @x-image-classifier-ready-to-predict=${this._handleXImageClassifierReadyToPredict}
            imgUrl=${url + this.userId}
            maxId=${this.maxId}
            minId=${this.minId}
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

defineCustomElement('x-image-classifier-sequential-image-ids', XImageClassifierSequentialImageIds)
