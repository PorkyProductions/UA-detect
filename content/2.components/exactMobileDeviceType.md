---
title: "exactMobileDeviceType"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `exactMobileDeviceType` Componet

## Description

Get's the name of the **MOBILE** Operating System the client is using.

## Possible Returns

- `iOS`
- `Android`
- `BlackBerry`
- `Windows Phone`
- `webOS`
- `unknown`

## Usage Example

### #1

```js
import { exactMobileDeviceType } from 'uadetect';

if (exactMobileDeviceType === 'iOS') {
  downloadOniOS.innerHTML = 'Download on iOS!';
}
```

### #2

```js
import { exactMobileDeviceType } from 'uadetect';

if (exactMobileDeviceType === 'Android') {
  downloadOnAndroid.innerHTML = 'Download on Android!'; 
}
```

### #3

```js
if (exactMobileDeviceType === 'Windows Phone') {
  ew.innerHTML = 'Who uses windows phone???';
}
```