import { css, html, LitElement } from 'lit-element'
import { defineCustomElement } from '../utilities'

import './DecrementButton'
import './IncrementButton'
import '../containers/TFJSComponentPlaygroundStore'

export class TFJSComponentPlaygroundCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
      }

      [buttons] {
        margin: 1.5rem 0 1rem 0;
      }
    `
  }
  render() {
    return html`
      <div buttons>
        <decrement-button>
          decrement
        </decrement-button>
        <increment-button>
          increment
        </increment-button>
      </div>
      <div count>
        <tfjs-component-playground-store>
          The count:
        </tfjs-component-playground-store>
      </div>
    `
  }
}

defineCustomElement('tfjs-component-playground-counter', TFJSComponentPlaygroundCounter)
