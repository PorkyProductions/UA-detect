# UADetect `codeName` Componet

- [UADetect `codeName` Componet](#uadetect-codename-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)

## Description

Get's the name of the vendor of the browser that the user is using.

## Possible Returns

- `mozilla`
- `Microsoft`
- `Apple`
- `Google`

## Usage Example

### #1

```js
// An example to target ads for the user's browser.
import { codeName } from 'uadetect';

if (codeName === 'mozilla') {
  element.innerHTML = 'Switch to Google Chrome today!';
}
```