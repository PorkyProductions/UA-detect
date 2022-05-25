# UADetect `engine` Componet

- [UADetect `engine` Componet](#uadetect-engine-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

## Description

Get the name of the rendering engine the browser usues

## Possible Returns

- `Gecko`
- `Trident`
- `Webkit`
- `Presto`

## Usage Example

### #1

```js
import { engine } from 'uadetect';

if (engine === 'Trident') {
  element.innerHTML = 'Sorry, IE is not supported';
}
```

### #2

```js
import { engine } from 'uadetect';

if (engine === 'Gecko') {
  element.innerHTML = `Welcome ${engine} user!!`;
  // Do Something
}
```