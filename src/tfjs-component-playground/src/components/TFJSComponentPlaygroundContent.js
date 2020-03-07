import { defineCustomElement } from '../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'
import { getBasePathWithTrailingSlash } from '../utilities'

import config from '../config/index'

import '@material/mwc-slider'
import '@material/mwc-snackbar'

export class TFJSComponentPlaygroundContent extends LitElement {
  _path = getBasePathWithTrailingSlash()

  static get styles() {
    return css`
      :host {
        text-align: var(--tfjs-component-playground-text-align, center);
      }

      a {
        color: var(--tfjs-component-playground-link-color, blue);
        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);
      }

      a:hover {
        color: var(--tfjs-component-playground-link-hover-color, darkblue);
        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);
      }

      p {
        margin: auto;
        max-width: 360px;
        padding: 0 1rem;
      }

      p:first-of-type {
        margin-bottom: 2rem;
      }

      p:not(:first-child) {

      }
    `
  }

  // properties getter
  static get properties() {
    return {
      imgUrl: { type: String },
    }
  }

  constructor() {
    super()

    this.snackLabel = ''
  }

  render() {
    return html`
      <p>Try one of the buttons above.</p>
      <p><strong>&lt;tfjs-component-playground&gt;</strong> is made primarily using LitElement and the Web Components
      <a href="https://github.com/kherrick/x-face-detector">&lt;x-face-detector&gt;</a>,
      <a href="https://github.com/kherrick/x-image-classifier">&lt;x-image-classifier&gt;</a>, and
      <a href="https://github.com/kherrick/x-object-detector">&lt;x-object-detector&gt;</a>. It utilizes redux for
      routing and central state management, as well as TensorFlow.js with
      <a href="https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-wasm">a WebAssembly backend</a>. The
      <a href="https://github.com/tensorflow/tfjs-models/tree/master/mobilenet">mobilenet</a> model from Google is used
      for the classification of images from <a href=${this._path + 'mobilenet/userMediaVideo'}>a camera</a>,
      <a href=${this._path + 'mobilenet/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx'}>images
      from the web</a>, or by <a href=${this._path + 'mobilenet/range/0x9999999/domain/github-avatars/3065761'}>dragging
      and dropping files into the drop zone</a>. The <a href="https://github.com/tensorflow/tfjs-models/tree/master/blazeface">blazeface</a>
      model is used for face identification with <a href=${this._path + 'blazeface/userMediaVideo'}>a camera</a>, using
      urls of <a href=${this._path + 'blazeface/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx'}>
      images from the web</a>, or by <a href=${this._path + 'blazeface/range/0x9999999/domain/github-avatars/3065761'}>
      dragging and dropping files into the drop zone</a>. Similarly, the
      <a href="https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd">coco-ssd</a> model is used for object
      identification with <a href=${this._path + 'cocossd/userMediaVideo'}>a camera</a>, using urls of
      <a href=${this._path + 'cocossd/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx'}> images
      from the web</a>, or by <a href=${this._path + 'cocossd/range/0x9999999/domain/github-avatars/3065761'}>dragging
      and dropping files into the drop zone</a>. All image classification, object, and facial detection is completed
      client-side.</p>
    `
  }
}

defineCustomElement('tfjs-component-playground-content', TFJSComponentPlaygroundContent)
