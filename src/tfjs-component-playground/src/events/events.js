export const TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE = 'tfjs-component-playground-drawer-toggle'
export const TFJS_COMPONENT_PLAYGROUND_DRAWER_POST_SELECT = 'tfjs-component-playground-drawer-post-select'

export const TFJSComponentPlaygroundDrawerToggle = (close = false) =>
  new CustomEvent(TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true,
    detail: close
  })
