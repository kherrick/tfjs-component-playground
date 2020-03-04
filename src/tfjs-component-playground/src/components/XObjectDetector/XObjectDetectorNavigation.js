import { html, css, LitElement } from 'lit-element'

import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { navigateByPath } from '../../dispatchers/dispatchers'

import '@material/mwc-button'
import '@material/mwc-icon/mwc-icon-font'

export class XObjectDetectorNavigation extends LitElement {
  _path = getBasePathWithTrailingSlash()

  static get styles() {
    return css`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #subtitle {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    #controls {
      display:flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      min-width: 360px;
    }

      #controls > mwc-button:first-of-type {
        margin-right: 0.5rem;
      }

      #controls > mwc-button:not(:first-child) {
        margin-left: 0.5rem;
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

  render() {
    return html`
      <div id="subtitle">
        <h2>Object Detection</h2>
      </div>
      <div id="controls">
        <mwc-button
          id="camera"
          icon="camera_alt"
          @click=${() => navigateByPath(this._path + 'cocossd/userMediaVideo')}
        >
          Camera
        </mwc-button>
        <mwc-button
          id="github-avatars"
          icon="face"
          @click=${() => navigateByPath(this._path + 'cocossd/range/0x9999999/domain/github-avatars/3065761')}
        >
          Github Avatars
        </mwc-button>
        <mwc-button
          id="image-urls"
          icon="http"
          @click=${() => navigateByPath(this._path + 'cocossd/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx')}
        >
          Image Urls
        </mwc-button>
      </div>
    `
  }
}

defineCustomElement('x-object-detector-navigation', XObjectDetectorNavigation)
