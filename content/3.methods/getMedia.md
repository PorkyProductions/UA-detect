---
title: "getMedia"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `getMedia` Method

## Description

An async function that requests the audio/camera streams from the user, and if granted, returns.

## Arguments

Takes one mandatory argument. This is an object specifying what permissions to request from the user, and is in the following interface:

```ts
interface MediaConstraints {
    audio: boolean
    video: boolean | {
        width?: {
            min?: number,
            ideal?: number,
            max?: number
        }
        height?: {
            min?: number,
            ideal?: number,
            max?: number
        }
        facingMode?: string | {
            exact?: string
        }
        deviceId?: string | {
            exact?: string
        }
    }
}


```

## Possible Returns

`Promise<void | MediaStream | unknown | undefined>`

## Usage Example

```js
import { getMedia } from 'uadetect'

const load = async () => {
    const mySpecificRequest = await getMedia({
        audio: false,
        video: {
            width: {
                min: 2,
                ideal: 1080,
                max: 2160
            }
            height: {
                min: 2,
                ideal: 1920,
                max: 3840
            }
        }
    })
}

```
## Note: 
::list{type="warning"}
- This method must only be run in secure envoirnments.
- It **will** prompt the user for permission on every request. 
- It will return an error if any of these conditions are not met.
::
