# UADetect `version` Componet

- [UADetect `version` Componet](#uadetect-version-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)

## Description

Tells the verison of the browser the client is using. Useful for targeting certain versions of browsers with known bugs

## Possible Returns

A floating point number representing the version of the browser the client is using.

## Usage Example

### #1

```js
import { version } from 'uadetect';

if (version === 'some-version-of-a-browser-with-known-bugs') {
  alert('This app is not supported in your browser., please update to the latest version of your browser.');
}
```