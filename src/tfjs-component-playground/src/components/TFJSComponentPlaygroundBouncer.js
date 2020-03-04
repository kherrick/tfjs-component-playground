import { LitElement } from 'lit-element'
import { defineCustomElement, getBasePathWithTrailingSlash, getLastPathSegment } from '../utilities'

export class TFJSComponentPlaygroundBouncer extends LitElement {
  constructor() {
    super()

    const origin = document.location.origin
    const redirect = `${origin}/${getLastPathSegment()}/`

    if (origin !== 'http://localhost:8000') {
      console.log('redirecting to: ', redirect)

      document.location.href = redirect
    } else {
      console.log('development - would have redirected to: ', redirect)
    }
  }
}

defineCustomElement('tfjs-component-playground-bouncer', TFJSComponentPlaygroundBouncer)
