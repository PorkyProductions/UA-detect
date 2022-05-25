# UADetect `navigatorObject` Componet

- [UADetect `navigatorObject` Componet](#uadetect-navigatorobject-componet)
  - [Description](#description)
  - [Usage Example](#usage-example)
    - [#1](#1)

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