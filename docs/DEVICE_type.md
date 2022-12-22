# UADetect `deviceType` Componet

- [UADetect `deviceType` Componet](#uadetect-devicetype-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

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