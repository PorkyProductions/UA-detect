# UADetect `buildNumber` Componet

- [UADetect `buildNumber` Componet](#uadetect-buildnumber-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)

## Description

Returns the build number of the browser, as a floating point number. Only on firefox

## Possible Returns

A floating point number representing the build number of the Firefox browser.

## Usage Example

### #1

```js
import { buildNumber } from 'uadetect';

console.log(buildNumber);
```