# UADetect `ORIENTATION_isLandscape` Componet

- [UADetect `ORIENTATION_isLandscape` Componet](#uadetect-orientation_islandscape-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

## Description

Tell's whether the client is in landscape mode.

## Possible Returns

- `true`
- `false`

## Usage Example

### #1

```js
import { ORIENTATION_isLandscape } from 'uadetect';

if (ORIENTATION_isLandscape === true) {
  element.style.display = 'block';
}
```

### #2

```js
import { ORIENTATION_isLandscape } from 'uadetect';

if (ORIENTATION_isLandscape === false) {
  element.style.display = 'none';
}
```