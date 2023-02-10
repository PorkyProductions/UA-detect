---
title: "orientation"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `orientation` Componet

::alert{type="info"}
Did you know this component has a sister component called **`orientationIsPortrait`**?
::

## Description

Tell's whether the client is in landscape mode.

## Possible Returns

- `true`
- `false`

## Usage Example

### #1

```js
import { orientationIsLandscape } from 'uadetect';

if (orientationIsLandscape) {
  element.style.display = 'block';
}
```

### #2

```js
import { orientationIsLandscape } from 'uadetect';

if (!orientationIsLandscape) {
  element.style.display = 'none';
}
```