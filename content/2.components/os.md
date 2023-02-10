---
title: "OS"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `OS` Componet

## Description

Get's the name of the Operating System that the client is using.

## Possible Returns

- `Windows`
- `Mac`
- `Linux`
- `Android`
- `iOS`
- `unknown`

## Usage Example

### #1

```js
import { OS } from 'uadetect';

if (OS === 'Windows') {
  element.innerHTML = 'Download on the Microsoft Store!';
}
```

### #2

```js
import { OS } from 'uadetect';

if (OS === 'Mac') {
  element.innerHTML = 'Download on the Mac App Store!'
}
```