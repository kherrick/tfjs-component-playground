# [\<tfjs-component-playground>](https://kherrick.github.io/tfjs-component-playground/)

<a href="https://bit.ly/blazefacecam">
  <img src="https://raw.githubusercontent.com/kherrick/tfjs-component-playground/master/assets/screencast.gif" />
</a>

## About

\<tfjs-component-playground> is made primarily using LitElement and the Web Components:

* [\<x-face-detector>](https://github.com/kherrick/x-face-detector)
* [\<x-image-classifier>](https://github.com/kherrick/x-image-classifier)
* [\<x-object-detector>](https://github.com/kherrick/x-object-detector)

It utilizes redux for routing and central state
management, as well as TensorFlow.js with [a WebAssembly backend](https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-wasm).
The [mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) model from Google is used for the
classification of images from [a camera](https://kherrick.github.io/tfjs-component-playground/mobilenet/userMediaVideo),
[images from the web](https://kherrick.github.io/tfjs-component-playground/mobilenet/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzc=),
or by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/mobilenet/range/0x9999999/domain/github-avatars/3065761).
The [blazeface](https://github.com/tensorflow/tfjs-models/tree/master/blazeface) model is used for face
identification with [a camera](https://kherrick.github.io/tfjs-component-playground/blazeface/userMediaVideo), using urls of
[images from the web](https://kherrick.github.io/tfjs-component-playground/blazeface/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzE=),
or by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/blazeface/range/0x9999999/domain/github-avatars/3065761).
Similarly, the [coco-ssd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) model is used for object
identification with [a camera](https://kherrick.github.io/tfjs-component-playground/cocossd/userMediaVideo), using urls of
[images from the web](https://kherrick.github.io/tfjs-component-playground/cocossd/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzEw),
and by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/cocossd/range/0x9999999/domain/github-avatars/3065761).

All image classification, object, and facial detection is completed client-side.

## Development

### Clone the project

```bash
git clone https://github.com/kherrick/tfjs-component-playground.git \
  && cd tfjs-component-playground \
  && npm i \
  && npm start
```

### Load the site in a browser @ localhost:8000/dev/
