import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { LitElement, css, html } from 'lit-element'
import { render } from 'lit-html'

import { store } from '../../store/configureStore'
import { connect } from 'pwa-helpers/connect-mixin'

import '../../components/TFJSComponentPlaygroundContent'
import '../../components/TFJSComponentPlaygroundLandingNavigation'
import './TFJSComponentPlaygroundRoutingType'

import config from '../../config/index'

export class TFJSComponentPlaygroundRouting extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()

  _isExact() {
    const activeRouteWithTrailingSlash = `${this.activeRoute}/`.replace(/\/+$/, '/')

    return activeRouteWithTrailingSlash === this._path || activeRouteWithTrailingSlash === `${this._path}index.html`
  }

  stateChanged(state) {
    if (this.activeRoute !== state.router.activeRoute) {
      this.activeRoute = state.router.activeRoute

      this.requestUpdate()
    }
  }

  render() {
    return this._isExact()
      ? html`
        <lit-route class="navigation" component="tfjs-component-playground-landing-navigation" path="${this._path}"></lit-route>
        <lit-route class="navigation" component="tfjs-component-playground-landing-navigation" path="${this._path}index.html"></lit-route>
        <lit-route component="tfjs-component-playground-content" path="${this._path}"></lit-route>
        <lit-route component="tfjs-component-playground-content" path="${this._path}index.html"></lit-route>
      `
      : html`
        <lit-route component="tfjs-component-playground-routing-type" path="${this._path}:type"></lit-route>
        <lit-route component="tfjs-component-playground-routing-type" path="${this._path}:type/*"></lit-route>
      `
  }
}

defineCustomElement('tfjs-component-playground-routing', TFJSComponentPlaygroundRouting)
