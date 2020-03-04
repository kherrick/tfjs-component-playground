import { connect } from 'pwa-helpers/connect-mixin'
import { defineCustomElement } from '../utilities'
import { html, css, LitElement } from 'lit-element'
import { store } from '../store/configureStore'

export class TFJSComponentPlaygroundStore extends connect(store)(LitElement) {
  static get styles() {
    return css``
  }

  static get properties() {
    return {
      counter: { type: Number }
    }
  }

  stateChanged(state) {
    this.counter = state.count.value
  }

  render() {
    return html`
      <slot></slot>
      <span>${this.counter}</span>
    `
  }
}

defineCustomElement('tfjs-component-playground-store', TFJSComponentPlaygroundStore)
