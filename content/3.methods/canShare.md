---
title: "canShareData"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `canShareData` Method

## Description

Tests if the data that you specify can be shared via the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)

## Arguments

Takes one optional argument. This is the data to be tested if it can be shared. If no data is specified, the method will still run, but generically. The data to be shared must be in this interface

```ts
interface ShareData {
    files?: File[];
    text?: string;
    title?: string;
    url?: string;
}

```

## Possible Returns

A boolean value of
- `true`
- `false`

## Usage Example

```js
import { canShareData } from 'uadetect'
const testData = canShareData({
    url: "https://example.com",
    title: "Example",
    text: "Example Website"
})

if (testData == true) {
    navigator.shareData()
} else {
    // Not supported
    // do something else
}
```

## Note:
## Note: 
::list{type="warning"}
- `vibrate` does not work on Firefox for desktop or android. 
- It also does not work of Android WebView
- It will `console.error()` if you try to use it in those environments.
::
