---
title: "browserOnlineStatus"
navigation: true
aside: true
toc: true
header: true
bottom: true
layout: default
---
# UADetect `browserOnlineStatus` component

## Description

Tell's if the client's browser is online or offline.

## Possible Returns

- `browserOnline`
- `browserOffline`

## Usage Example

### #1

```js
import { browserOnlineStatus } from 'uadetect';

if (browserOnlineStatus === 'browserOnline') {
  // Load the webpage from server
}
```

### #2

```js
import { browserOnlineStatus } from 'uadetect';

if (browserOnlineStatus === 'browserOffline') {
  // Load the webpage from cache
}
```