# UADetect `doNotTrackStatus` Componet

- [UADetect `doNotTrackStatus` Componet](#uadetect-donottrackstatus-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

## Description

Returns whether the client has enabled Do Not Track.

## Possible Returns

- `trackingAllowed`
- `trackingNotAllowed`
- `trackingUnspecified`
- `ERROR` 

## Usage Example

### #1

```js
import { doNotTrackStatus } from 'uadetect';

if (doNotTrackStatus === 'trackingAllowed') {
  // Run Google Analytics
}
```

### #2

```js
import { doNotTrackStatus } from 'uadetect';

if (doNotTrackStatus === 'trackingNotAllowed') {
  alert('You have Do Not Track enabled');
  alert('PLS let us track you for that $$$');
}
```