import { LitElement, css, html } from 'lit-element'

const TFJSComponentPlaygroundBranding = class extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 75%;
        margin-left: var(--tfjs-component-playground-branding-margin-left, 0);
        text-align: var(--tfjs-component-playground-branding-text-align, center);
        width: 100%;
      }

      @media (min-width: 440px) {
        :host {
          font-size: 100%;
        }
      }

      a {
        text-decoration: none;
        color: var(--tfjs-component-playground-branding-text-color, #000);
      }
    `
  }

  static get properties() {
    return {
      siteTitle: {
        reflect: true,
        type: String
      },
      siteUrl: {
        reflect: true,
        type: String
      }
    }
  }

  render() {
    return html`
      <a href=${this.siteUrl}>${this.siteTitle}</a>
    `
  }
}

if (!customElements.get('tfjs-component-playground-branding')) {
  customElements.define('tfjs-component-playground-branding', TFJSComponentPlaygroundBranding)
}

export default TFJSComponentPlaygroundBranding
