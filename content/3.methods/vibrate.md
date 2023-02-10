---
title: "vibrate"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `vibrate` Method

## Description

Does two things:
- Vibrates the device, if compatible hardware is available. This returns `success`, and if not
- Returns `failure`, if the function fails for any reason

## Arguments

Takes one mandatory argument. This is the pattern to vibrate for (in miliseconds per vibration) and has to be the type `number | number[]`

## Possible Returns

- `success`
- `failure`

## Usage Example

```js
import { vibrate } from 'uadetect'
// Vibrate SOS in morse code
vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])

if (vibrate === 'success') {
    // Operation was a success
    // Do something...
} else {
    // Operation was a failure
    // Maybe send a notification?
}
```

## Note:
## Note: 
::list{type="warning"}
- `vibrate` does not work on Safari on any platform.
- It also has some compatibility issues on Firefox for Android. 
- It will only `console.error` if it is used on Safari.
::