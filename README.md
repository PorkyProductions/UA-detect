# UADetect

- [UADetect](#uadetect)
  - [Description](#description)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [via `npm`](#via-npm)
  - [Usage](#usage)


## Description

✨The dead-simple way of detecting a device's user agent.✨

## Technologies Used
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1920px-Npm-logo.svg.png" width="30px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="30px">
<img src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" width="30px">
<img alt="TypeScript" width="30px" src="https://blog.jeremylikness.com/blog/2019-03-05_typescript-for-javascript-developers-by-refactoring-part-1-of-2/images/1.jpeg"/>
<img alt="jQuery" width="30px" src="https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico">

## Installation
### via `npm`

Install the `uadetect` package

```bash
npm i -d uadetect
```

In a JavaScript (or TypeScript) file, import the `uadetect` module:

```javascript
import { DetectScreenOrientation, DetectDeviceType, finiteMobileDeviceType, ORIENTATION_isLandscape, DEVICE_type, DEVICE_finiteType, getCurrentUA, currentUA } from 'uadetect';
```
All done.👍 Now you can use the `ORIENTATION_isLandscape`, `DEVICE_finiteType`, `currentUA` and `DEVICE_type` constraints in your code.

## Usage

```javascript
// An example hide element on mobile devices function
function hideOnMobile(element) {
    if (DEVICE_type == "mobile") {
        element.style.display = "none";
    }
}
```
```javascript
// An example show element on different operating systems function
function showOnOS(element, element2) {
    if (DEVICE_finiteType == "iOS") {
        element.style.display = "block";
    }
    else if (DEVICE_finiteType == "Android") {
        element2.style.display = "block";
    }
    else {
        element.style.display = "none";
        element2.style.display = "none";
    }
}
```