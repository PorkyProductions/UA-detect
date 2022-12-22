# UADetect `finiteDeviceType` Componet

- [UADetect `finiteDeviceType` Componet](#uadetect-finitedevicetype-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)
    - [#3](#3)

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
import { deviceFiniteType } from 'uadetect';

if (deviceFiniteType === 'iOS') {
  downloadOniOS.innerHTML = 'Download on iOS!';
}
```

### #2

```js
import { deviceFiniteType } from 'uadetect';

if (deviceFiniteType === 'Android') {
  downloadOnAndroid.innerHTML = 'Download on Android!'; 
}
```

### #3

```js
if (DEVICE_finiteType === 'Windows Phone') {
  ew.innerHTML = 'Who uses windows phone???';
}
```