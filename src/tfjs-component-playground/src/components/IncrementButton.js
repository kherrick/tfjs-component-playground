import { html, LitElement } from 'lit-element'
import { incrementCount } from '../dispatchers/dispatchers'
import { defineCustomElement } from '../utilities'

export class IncrementButton extends LitElement {
  render() {
    return html`
      <button @click=${incrementCount}>
        <slot></slot>
      </button>
    `
  }
}

defineCustomElement('increment-button', IncrementButton)
