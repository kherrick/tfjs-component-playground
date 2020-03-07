import { html, css, LitElement } from 'lit-element'

import { defineCustomElement, getBasePathWithTrailingSlash } from '../../utilities'
import { TFJS_COMPONENT_PLAYGROUND_SEQUENTIAL_IMAGE_ID_CHANGE } from '../../events/events'

import { navigateByPath } from '../../dispatchers/dispatchers'
import { store } from '../../store/configureStore'
import { connect } from 'pwa-helpers/connect-mixin'

import '@material/mwc-button'
import '@material/mwc-icon/mwc-icon-font'

export class TFJSComponentPlaygroundNavigationSubtitle extends connect(store)(LitElement) {
  _path = getBasePathWithTrailingSlash()
  _models = [
    {
      title: 'Face Detection',
      path: 'blazeface'
    },
    {
      title: 'Image Classification',
      path: 'mobilenet'
    },
    {
      title: 'Object Detection',
      path: 'cocossd'
    },

  ]

  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      a {
        color: var(--tfjs-component-playground-link-color, blue);
        font-size: 70%;
        text-decoration: var(--tfjs-component-playground-link-text-decoration, underline);
      }

      a:hover {
        color: var(--tfjs-component-playground-link-hover-color, darkblue);
        text-decoration: var(--tfjs-component-playground-link-hover-text-decoration, underline);
      }

      a:first-of-type {
        margin-right: 1rem;
      }

      a:last-child {
        margin-left: 1rem;
      }

      h2 {
        font-size: 100%;
      }
    `
  }

  static get properties() {
    return {
      type: {
        reflect: false,
        type: String
      }
    }
  }

  stateChanged(state) {
    this.activeRoute = state.router.activeRoute
    const singleComponentNavigationRoute = state.router.routes[`${this._path}:type/:method/*`]

    if (singleComponentNavigationRoute && singleComponentNavigationRoute.active) {
      this.type = singleComponentNavigationRoute.params.type
    }
  }

  _getTypeTitle() {
    return this.type
      ? this._models.filter(models => models.path === this.type)[0].title
      : ''
  }

  _getLinks() {
    const hasLinks = `${this.activeRoute}/`.replace(/\/+\//g, '/') !== this._path

    if (!hasLinks) {
      return []
    }

    const links = this._models.filter(models => models.path !== this.type)
    const pieces = this.activeRoute.split(this.type)

    return links.map(link => ({
      title: link.title,
      href: `${pieces[0]}${link.path}${pieces[1]}`
    }))
  }

  _handleIdChange(element) {
    return ({ detail }) => {
      const id = detail
      const activeRoute = this.activeRoute
      const routePieces = activeRoute.split('/')
      const oldId = routePieces.pop()
      const newRoute = routePieces.join('/') + `/${id}`
      this.activeRoute = newRoute

      element.requestUpdate()
    }
  }

  firstUpdated(e) {
    document.body.addEventListener(
      TFJS_COMPONENT_PLAYGROUND_SEQUENTIAL_IMAGE_ID_CHANGE,
      this._handleIdChange(this)
    )
  }

  render() {
    const links = this._getLinks()

    return links.length === 0
      ? html`
        <h2>${this._getTypeTitle()}</h2>
      `
      : html`
        <h2>
          <a href="${links[0].href}">${links[0].title}</a>
          ${this._getTypeTitle()}
          <a href="${links[1].href}">${links[1].title}</a>
        </h2>
      `
  }
}

defineCustomElement('tfjs-component-playground-navigation-subtitle', TFJSComponentPlaygroundNavigationSubtitle)
