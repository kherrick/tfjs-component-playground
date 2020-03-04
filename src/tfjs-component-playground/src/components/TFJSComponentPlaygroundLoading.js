import { LitElement, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

defineCustomElement('tfjs-component-playground-loading', class TFJSComponentPlaygroundLoading extends LitElement {
  render() {
    return html`
      <img src="icons/TFJSComponentPlaygroundLoading.svg">
    `;
  }
})
