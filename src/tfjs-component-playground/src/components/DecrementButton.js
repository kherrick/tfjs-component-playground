import { html, LitElement } from 'lit-element'
import { decrementCount } from '../dispatchers/dispatchers'
import { defineCustomElement } from '../utilities'

export class DecrementButton extends LitElement {
  render() {
    return html`
      <button @click=${decrementCount}>
        <slot></slot>
      </button>
    `
  }
}

defineCustomElement('decrement-button', DecrementButton)
