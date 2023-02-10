---
title: "cookieStatus"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `cookieStatus` Componet

## Description

Tell's whether the client has cookies enabled or disabled.

## Possible Returns

- `cookiesEnables`
- `cookiesNotEnabled`
- `ERROR`

## Usage Example

### #1

```js
import { cookieStatus } from 'uadetect';

if (cookieStatus === 'COOKIES_enabled') {
  document.cookie = 'test=test';
}
```

### #2

```js
import { cookieStatus } from 'uadetect';

if (cookieStatus === 'COOKIES_notEnabled') {
  element.innerHTML = 'You should enable cookies to use this website';
}
```