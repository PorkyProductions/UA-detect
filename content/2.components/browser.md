---
title: "browser"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---

# UADetect `browser` component

## Description

Get's the name of the browser that the client is using.

## Possible Returns

- `Opera`
- `Chrome`
- `Firefox`
- `Safari`
- `IE`
- `Edge`
- `Unknown`

## Usage Example

### #1

```js
import { browser } from 'uadetect';

if (browser === 'IE') {
  element.innerHTML = 'Sorry, IE is not supported';
}
```

### #2

```js
import { browser } from 'uadetect';

if (browser === 'Chrome') {
  element.innerHTML = 'You are using Chrome';
  // Do Something
}
```