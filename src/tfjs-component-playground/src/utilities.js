export const createReducer = (initialState, handlers) => (state = initialState, action) =>
  handlers.hasOwnProperty(action.type) === true ? handlers[action.type](state, action) : state

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tfjs-component-playground-store-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('tfjs-component-playground-store-state', serializedState)
  } catch (err) {
    // Ignore write errors...
  }
}

export const defineCustomElement = (tagName, element) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, element)
  }
}

export const getBasePathWithTrailingSlash = () =>
  `${new URL(document.querySelector('base').href).pathname}/`.replace(/\/+\//g, '/')

export const getBasePathWithoutTrailingSlash = () =>
  new URL(document.querySelector('base').href).pathname.replace(/\/+$/, '')

export const getLastPathSegment = () => {
  const match = window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/)

  return match ? match[0].replace(/\//g, '') : ''
}
