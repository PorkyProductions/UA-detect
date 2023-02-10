---
title: "maxTouchPoints"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `maxTouchPoints` Componet

## Description

Returns the total number of touch points on a touch screen device (if the client is using a touch screen).

## Possible Returns

Any Number

## Usage Example

### #1

```js
import { maxTouchPoints } from 'uadetect';

if (maxTouchPoints >= 1 ) {
  console.log("You have " + maxTouchPoints + " touch points");
}
```

### #2

```js
import { maxTouchPoints } from 'uadetect';

if (maxTouchPoints < 1) {
  console.log("You are not using a touchscreen");
}
```