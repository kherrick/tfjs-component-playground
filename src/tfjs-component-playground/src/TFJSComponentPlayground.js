import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/TFJSComponentPlaygroundBranding'
import './components/TFJSComponentPlaygroundDrawer'
import './components/TFJSComponentPlaygroundHamburger'
import './components/TFJSComponentPlaygroundLoading'

import './containers/routing/TFJSComponentPlaygroundRouting'

import config from './config'

import { getBasePathWithoutTrailingSlash } from './utilities'

import { TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE } from './events/events'

import { store } from './store/configureStore'
import { connectRouter, navigate } from 'lit-redux-router'
connectRouter(store)

export class TFJSComponentPlayground extends LitElement {
  _path = getBasePathWithoutTrailingSlash()

  static get styles() {
    return css`
      app-header {
        background-color: var(--primary-background-color, #111);
        color: var(--primary-foreground-color, #eee);
      }

      app-toolbar {
        background-color: var(--tfjs-component-playground-toolbar-background-color, #111);
        font-size: 1.5rem;
      }

      app-drawer {
        --app-drawer-scrim-background: var(--drawer-scrim-background, rgba(0, 0, 0, 0.8));
        z-index: 1;
      }

      tfjs-component-playground-hamburger {
        pointer-events: unset;
      }
    `
  }

  static get properties() {
    return {
      siteTitle: {
        reflect: false,
        type: String
      },
      siteUrl: {
        reflect: false,
        type: String
      }
    }
  }

  _handleDrawerToggle(close = false) {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')
    const scrim = appDrawer.shadowRoot.getElementById('scrim')

    const activeRoute = this.shadowRoot.querySelector('lit-route[active]')

    scrim.addEventListener('click', () => {
      if (activeRoute) {
        activeRoute.style.zIndex = 1;
      }
    })

    if (appDrawer.getAttribute('opened') === '' || close === true) {
      appDrawer.removeAttribute('opened')

      if (activeRoute) {
        activeRoute.style.zIndex = 1;
      }

      return
    }

    appDrawer.setAttribute('opened', '')

    if (activeRoute) {
      activeRoute.style.zIndex = -1;
    }
  }

  firstUpdated() {
    this.addEventListener(TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE, ({ detail }) => {
      this._handleDrawerToggle(detail)
    })
  }

  render() {
    return html`
      <app-header reveals>
        <app-toolbar>
          <tfjs-component-playground-hamburger>Menu</tfjs-component-playground-hamburger>
          <tfjs-component-playground-branding
            siteTitle="${this.siteTitle}"
            siteUrl="${this.siteUrl}"
          >
          </tfjs-component-playground-branding>
        </app-toolbar>
      </app-header>

      <app-drawer swipe-open>
        <tfjs-component-playground-drawer></tfjs-component-playground-drawer>
      </app-drawer>

      <div class="app-content">
        <!-- start - legacy routing -- to be deprecated -->
        <lit-route
          class="navigation"
          .resolve="${() => import('./components/XFaceDetector/XFaceDetectorNavigation')}"
          component="x-face-detector-navigation" path="${this._path}/single/**"
        ></lit-route>
        <lit-route
          class="navigation"
          .resolve="${() => import('./components/XFaceDetector/XFaceDetectorNavigation')}"
          component="x-face-detector-navigation" path="${this._path}/range/**"
        ></lit-route>
        <lit-route
          class="navigation"
          .resolve="${() => import('./components/XFaceDetector/XFaceDetectorNavigation')}"
          component="x-face-detector-navigation" path="${this._path}/usermediaVideo"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./containers/XFaceDetector/XFaceDetectorSingleImageUrl')}"
          component="x-face-detector-single-image-url"
          loading="tfjs-component-playground-loading"
          path="${this._path}/single/:imgUrl/*"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./containers/XFaceDetector/XFaceDetectorSingleImageUrl')}"
          component="x-face-detector-single-image-url"
          loading="tfjs-component-playground-loading"
          path="${this._path}/single/:imgUrl"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./components/XFaceDetector/XFaceDetectorUserMediaVideo')}"
          component="x-face-detector-user-media-video"
          loading="tfjs-component-playground-loading"
          path="${this._path}/userMediaVideo"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./components/XFaceDetector/XFaceDetectorSequentialImageIds')}"
          component="x-face-detector-sequential-image-ids"
          loading="tfjs-component-playground-loading"
          path="${this._path}/range/:range/domain/:imgUrl/:userId"
        ></lit-route>
        <!-- stop - legacy routing -- to be deprecated -->

        <lit-route
          .resolve="${() => import('./components/TFJSComponentPlaygroundBouncer')}"
          component="tfjs-component-playground-bouncer"
          loading="tfjs-component-playground-loading"
          path="/${config.getBouncePath(0)}"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./components/TFJSComponentPlaygroundBouncer')}"
          component="tfjs-component-playground-bouncer"
          loading="tfjs-component-playground-loading"
          path="/${config.getBouncePath(1)}"
        ></lit-route>
        <lit-route component="tfjs-component-playground-routing" path="${this._path}.*"></lit-route>
      </div>
    `
  }
}
