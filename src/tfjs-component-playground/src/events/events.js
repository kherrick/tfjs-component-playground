export const TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE = 'tfjs-component-playground-drawer-toggle'
export const TFJS_COMPONENT_PLAYGROUND_SEQUENTIAL_IMAGE_ID_CHANGE = 'tfjs-component-playground-sequential-image-id-change'

export const TFJSComponentPlaygroundDrawerToggle = (close = false) =>
  new CustomEvent(TFJS_COMPONENT_PLAYGROUND_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true,
    detail: close
  })

export const TFJSComponentPlaygroundSequentialImageIdChange = (id = null) =>
  new CustomEvent(TFJS_COMPONENT_PLAYGROUND_SEQUENTIAL_IMAGE_ID_CHANGE, {
    bubbles: true,
    composed: true,
    detail: id
  })
