import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'

import { TFJSComponentPlaygroundDrawerToggle } from '../events/events'
import { navigateByPath } from '../dispatchers/dispatchers'

import { getBasePathWithTrailingSlash } from '../utilities'
import config from '../config'

const TFJSComponentPlaygroundDrawer = class extends LitElement {
  _path = getBasePathWithTrailingSlash()

  static get styles() {
    return css`
      .drawer-container {
        background-color: var(--primary-background-color, #000);
        color: var(--primary-foreground-color, #fff);
        height: 100%;

        /* scroll without scrollbars */
        overflow: auto;
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
      }

      /* scroll without scrollbars */
      .drawer-container::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      .drawer-header {
        background-color: var(--tfjs-component-playground-drawer-header-background-color, initial);
        color: var(--tfjs-component-playground-drawer-header-color, initial);
        font-size: 1.5rem;
        padding: 1rem;
      }

      .sidebar-link {
        margin-bottom: 0.5rem;
      }

      .sidebar-link:hover {
        cursor: pointer;
      }
    `
  }

  _enableTheme(newTheme = 'light', withTransition = false, persist = true) {
    const html = document.documentElement

    let otherTheme
    if (newTheme === 'light') {
      otherTheme = 'dark'
    } else {
      otherTheme = 'light'
    }

    html.classList.add(`theme-${newTheme}`)
    html.classList.remove(`theme-${otherTheme}`)

    let paperItem = this.shadowRoot.getElementById(`theme-${otherTheme}-paper-item`)

    paperItem.classList.add('enabled')
    paperItem.setAttribute('aria-pressed', false)

    paperItem = this.shadowRoot.getElementById(`theme-${newTheme}-paper-item`)
    paperItem.classList.remove('enabled')
    paperItem.setAttribute('aria-pressed', true)

    this.shadowRoot.dispatchEvent(TFJSComponentPlaygroundDrawerToggle(true))

    if (persist) {
      this._persistToStorage('preference-theme', newTheme)
    }
  }

  _getThemeFromBrowser() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQueryList.matches) {
      return 'dark'
    } else {
      mediaQueryList = window.matchMedia('(prefers-color-scheme: light)')

      if (mediaQueryList.matches) {
        return 'light'
      } else {
        return undefined
      }
    }
  }

  _getThemeFromStorage() {
    const pref = localStorage.getItem('preference-theme')
    const lastChanged = localStorage.getItem('preference-theme-last-change')

    let now = new Date()
    now = now.getTime()

    const minutesPassed = (now - lastChanged) / (1000 * 60)

    if (minutesPassed < 120 && pref === 'light') {
      return 'light'
    } else if (minutesPassed < 120 && pref === 'dark') {
      return 'dark'
    } else {
      return undefined
    }
  }

  _getThemeFromTime() {
    const date = new Date()
    const hour = date.getHours()

    if (hour > 20 || hour < 5) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  _keepInSync() {
    window.addEventListener('storage', event => {
      if (event.key === 'preference-theme') {
        if (event.newValue === 'light') {
          this._enableTheme('light', true, false)
        } else if (event.newValue === 'dark') {
          this._enableTheme('dark', true, false)
        }
      }
    })
  }

  _navigate(path) {
    navigateByPath(path)

    this.shadowRoot.dispatchEvent(TFJSComponentPlaygroundDrawerToggle(true))
  }

  _persistToStorage(key, value) {
    let now = new Date()
    now = now.getTime()

    localStorage.setItem(key, value)
    localStorage.setItem(`${key}-last-change`, now)
  }

  _watchPrefersColorScheme() {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener(event => {
      const root = document.documentElement

      if (event.matches !== true) {
        if (!root.classList.contains('theme-light')) {
          this._enableTheme('light', true)
        }
      } else {
        if (!root.classList.contains('theme-dark')) {
          this._enableTheme('dark', true)
        }
      }
    })
  }

  firstUpdated() {
    this._keepInSync()
    this._watchPrefersColorScheme()
    this._enableTheme(this._getThemeFromStorage() || this._getThemeFromBrowser() || this._getThemeFromTime(), false)
  }

  render() {
    return html`
      <div class="drawer-container" @click=${() => this.shadowRoot.dispatchEvent(TFJSComponentPlaygroundDrawerToggle(true))}>
        <div class="drawer-header">Theme</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item id="theme-light-paper-item" @click=${() => this._enableTheme('light', true)}>Light</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item id="theme-dark-paper-item" @click=${() => this._enableTheme('dark', true)}>Dark</paper-item>
          </div>
        </paper-listbox>
        <div class="drawer-header">Face Detection</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'blazeface/userMediaVideo')}>Camera</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'blazeface/range/0x9999999/domain/github-avatars/3065761')}>Github Avatars</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'blazeface/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzE=')}>Image Urls</paper-item>
          </div>
        </paper-listbox>
        <div class="drawer-header">Image Classification</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'mobilenet/userMediaVideo')}>Camera</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'mobilenet/range/0x9999999/domain/github-avatars/3065761')}>Github Avatars</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'mobilenet/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzc=')}>Image Urls</paper-item>
          </div>
        </paper-listbox>
        <div class="drawer-header">Object Detection</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'cocossd/userMediaVideo')}>Camera</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'cocossd/range/0x9999999/domain/github-avatars/3065761')}>Github Avatars</paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(this._path + 'cocossd/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzEw')}>Image Urls</paper-item>
          </div>
        </paper-listbox>

        <div class="drawer-header">Links</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item @click=${() => document.location.href='https://infinitym.ca/posts/'}>
              MCA Infinity Robotics - Posts
            </paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => document.location.href='https://kherrick.github.io/x-weather-app/'}>
              XWeather App
            </paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => document.location.href='https://kherrick.github.io/x-postpress-app/'}>
              XPostpress App
            </paper-item>
          </div>
          <div class="sidebar-link">
            <paper-item @click=${() => document.location.href='https://kherrick.github.io/pwgen/'}>
              pwgen
            </paper-item>
          </div>
        </paper-listbox>

        <div class="drawer-header">Testing</div>
        <paper-listbox>
          <div class="sidebar-link">
            <paper-item @click=${() => this._navigate(`${this._path}counter`)}>
              Counter
            </paper-item>
          </div>
        </paper-listbox>
      </div>
    `
  }
}

if (!customElements.get('tfjs-component-playground-drawer')) {
  customElements.define('tfjs-component-playground-drawer', TFJSComponentPlaygroundDrawer)
}

export default TFJSComponentPlaygroundDrawer
