# UADetect Componets

- [UADetect Componets](#uadetect-componets)
  - [Overview](#overview)
    - [Components](#components)
    - [Methods](#methods)
  - [Alternate](#alternate)
  - [Components](#components-1)
    - [NOTE:](#note)
  - [Methods](#methods-1)

## Overview

 ### Components

You can think of a componet as a function, each of which return an interaction with the `navigator`, in a more readable form. Each of the componets are self-contained, and can be used in any project. 

### Methods

You can think of a method as a way of 're-calling" the functions that return components. The method(s) that return componets are all named in the format `get(ComponentName)` and can be imported in the same way you would import a component.

Alternatively, you can create your own `psuedo-components` by writing variables to are equal to the returns on the methods. For example.

```js
import { getDeviceType } from 'uadetect'
const someCustomNameForAComponent = getDeviceType();

if (someCustomNameForAComponent === "mobile") {
  // do something
}
```

## Alternate

Alternatively, you can call the `UADetect` object, and (hopefully), your IDE will autocomplete the methods and components returned on them. Let's take a look at an example:

```js
// Import the object

import { UADetect } from 'uadetect'

// Example calling a method

UADetect.detectDeviceType()

// Example using a property

console.log(UADetect.deviceType);

```

As an alternate to that alternate, there is also a `uaDetect` class that you can instantiate, whhich has all the methods and properties on it as well. Let's take a look at another example.

```js
// Import the class

import { uaDetect } from 'uadetect'

// Create a new instantiation of the class

const UAD = new uaDetect()

// Example calling a method

UAD.detectDeviceType();

// Example using a property

console.log(UAD.deviceType)

```



## Components
### NOTE: 
Click any of them to go to their individual documentation.

- [`browser`](browser.md)
- [`browserOnlineStatus`](browserOnlineStatus.md)
- [`cookieStatus`](cookieStatus.md)
- [`currentUA`](currentUA.md)
- [`finiteDeviceType`](DEVICE_finiteType.md)
- [`deviceMemory`](deviceMemory.md)
- [`deviceType`](DEVICE_type.md)
- [`doNotTrackStatus`](doNotTrackStatus.md)
- [`engine`](engine.md)
- [`language`](language.md)
- [`maxTouchPoints`](maxTouchPoints.md)
- [`orientationIsLandscape`](orientation.md)
- [`OS`](os.md)
- [`PDFviewerStatus`](pdfviewerStatus.md)
- [`processorCores`](processorCores.md)
- [`robotStatus`](robotStatus.md)
- [`version`](version.md)

## Methods
- `getScreenOrientation`
- `getDeviceType`
- `getFiniteMobileDeviceType`
- `getCurrentUA`
	`getCookies`
- `getDoNotTrack`
- `getBrowser`
- `browserSpecificSupportCores`
- `getMaxTouchPoints`
- `getOS`
- `getterForNavigator`
- `getBrowserIsOnline`
- `getPDF`
- `getAppVersion`
- `getBots`
- `getProductID`
- `getLang`
- `getMemory`
