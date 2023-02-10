---
title: "deviceType"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `deviceType` Componet

## Description

Shows whether the client is using a mobile, desktop, or tablet device.

## Possible Returns

- `mobile`  
- `tablet`
- `desktop`

## Usage Example

### #1

```js
import { deviceType } from 'uadetect';

if (deviceType === 'mobile') {
  element.style.display = 'none';
}
```

### #2

```js
import { deviceType } from 'uadetect';

if (deviceType === 'desktop') {
  element.style.display = 'block';
}
```