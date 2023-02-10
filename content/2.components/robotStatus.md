---
title: "robotStatus"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `robotStatus` Componet

## Description

Tells whether the client is being operated by a webdriver (robot) or not.

## Possible Returns

- `robotControlled`
- `humanControlled`
- `ERROR`

## Usage Example

### #1

```js
import { robotStatus } from 'uadetect';

if (robotStatus === 'robotControlled') {
  alert('🤖')
}
```

### #2

```js
import { robotStatus } from 'uadetect';

if (robotStatus === 'humanControlled') {
  alert('👤')
}
```