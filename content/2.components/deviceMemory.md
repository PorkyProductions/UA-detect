---
title: "deviceMemory"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `deviceMemory` Componet

## Description

The deviceMemory component returns the approximate amount of device memory in gigabytes.

The reported value is imprecise to curtail fingerprinting. It's approximated by rounding down to the nearest power of 2, then dividing that number by 1024. It is then clamped within lower and upper bounds to protect the privacy of owners of very low- or high-memory devices. 

## Possible Returns

A floating point number; one of 
- 0.25
- 0.5
- 1
- 2
- 4
- 8 

## Usage Example

### #1

```js
// An example to prevent underpowered users from using the app
import { deviceMemory } from 'uadetect';

if (deviceMemory <= 2) {
    alert("Your potato computer is too slow to run this webapp. Please upgrade ASAP")
}

```
## Note: 
::list{type="warning"}
- This component does **not** work on Firefox and Safari, and will `console.error` if you try to call it inside those enviornments
::