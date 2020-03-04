# [\<tfjs-component-playground>](https://kherrick.github.io/tfjs-component-playground/)

## About

\<tfjs-component-playground> is made primarily using LitElement and the Web Components
[\<x-face-detector>](https://github.com/kherrick/x-face-detector), [\<x-image-classifier>](https://github.com/kherrick/x-image-classifier),
and [\<x-object-detector>](https://github.com/kherrick/x-object-detector). It utilizes redux for routing and central state
management, as well as TensorFlow.js with [a WebAssembly backend](https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-wasm).
The [mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) model from Google is used for the
classification of images from [a camera](https://kherrick.github.io/tfjs-component-playground/mobilenet/userMediaVideo),
[images from the web](https://kherrick.github.io/tfjs-component-playground/mobilenet/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx),
or by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/mobilenet/range/0x9999999/domain/github-avatars/3065761).
The [blazeface](https://github.com/tensorflow/tfjs-models/tree/master/blazeface) model is used for face
identification with [a camera](https://kherrick.github.io/tfjs-component-playground/blazeface/userMediaVideo), using urls of
[images from the web](https://kherrick.github.io/tfjs-component-playground/blazeface/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx),
or by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/blazeface/range/0x9999999/domain/github-avatars/3065761).
Similarly, the [coco-ssd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) model is used for object
identification with [a camera](https://kherrick.github.io/tfjs-component-playground/cocossd/userMediaVideo), using urls of
[images from the web](https://kherrick.github.io/tfjs-component-playground/cocossd/single/aHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMDY1NzYx),
and by [dragging and dropping files into the drop zone](https://kherrick.github.io/tfjs-component-playground/cocossd/range/0x9999999/domain/github-avatars/3065761).

All image classification, object, and facial detection is completed client-side.

## Development

```bash
git clone https://github.com/kherrick/tfjs-component-playground.git \
  && cd tfjs-component-playground \
  && npm i \
  && npm start
```
