---
title: "media"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `media` Componet

## Description

Returns the camera, microphone, or camera and microphone

## Possible Returns

- `camera`,
- `audio`,
- `audioAndCamera`,
- `"Unknown"`

## Usage Example

It is **highly** reccomended that you call [`getMedia`](/UA-detect/methods/getMedia.md), so that you can customise more properties, however, we have provided 3 basic returns for you.

### #1

```js
import { camera } from 'uadetect';

async function load() {
    try {
        await camera
        if (camera) {
            element.innerHTML = camera
        }
    } catch (err) {
        // handle errors
    }
}
```

### #2

```js
import { audio } from 'uadetect';

async function load() {
    try {
        await audio
        if (audio) {
            audioElement.source = camera
        }
    } catch (err) {
        // handle errors
    }
}
```

### #3

```js
import { audioAndCamera } from 'uadetect';

async function load() {
    try {
        await audioAndCamera
        if (audioAndCamera) {
            // do something
        }
    } catch (err) {
        // handle errors
    }
}

```


## Note: 
::list{type="warning"}
- This component must only be run in secure envoirnments.
- This component **will** prompt the user for permission on every request.
- It will throw an error if any of these conditions are not met, which is why they also must be surrounded with a try/catch block, due to their high error rate
::
