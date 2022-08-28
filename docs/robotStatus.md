# UADetect `robotStatus` Componet

- [UADetect `robotStatus` Componet](#uadetect-robotstatus-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

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