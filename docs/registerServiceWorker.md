# UADetect `registerServiceWorker` Method

- [UADetect `registerServiceWorker` Method](#uadetect-registerserviceworker-method)
  - [Description](#description)
  - [Arguments](#arguments)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)
  - [Note:](#note)

## Description

Registers a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) within the navigator. This is espcially useful if you are builidng a [PWA](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/)

## Arguments

Takes two arguments. The first is reauired, and it is the path to the service worker JavaScript file. This can be a absolute or relative string, or a URL using the `new URL()` method. The second option is optional, and si the options for the service worker. It follows the following interface:
```ts
interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}
```

## Possible Returns

- `void`
- console.error()

## Usage Example

### #1

```js
import { registerServiceWorker } from 'uadetect'


registerServiceWorker("./pwa/sw.js")
```

### #2

```js
import { registerServiceWorker } from 'uadetect'

const jq = new URL("https://code.jquery.com/jquery-3.6.2.min.js")
registerServiceWorker(jq, {
    scope: "local",
    type: "module",
    updateViaCache: "all"
})
```

## Note:

Must be run in secure enviornments.