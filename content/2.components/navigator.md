---
title: "navigatorObject"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `navigatorObject` Componet

## Description

Returns the `window.navigator` object in JSON format.

If a component is not avalible in the predefined set, you can get it from this object.

## Usage Example

### #1

```js
import { navigatorObject } from 'uadetect';

if (navigatorObject.appCodeName === 'Mozilla') {
    console.log('This is a Mozilla browser');
}
```