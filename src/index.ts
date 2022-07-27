/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/

// Browser

import { browser, getBrowser } from "./browser";

// Code Name

import { codeName, getCodeName } from "./appCodeName";

// Cookies

import { getCookies, cookieStatus } from "./cookies";

// Device Type

import { DEVICE_type, DetectDeviceType } from "./DetectDeviceType";

// Do Not Track

import { doNotTrackStatus, getDoNotTrack } from "./doNotTrack";

// Finite Mobile Device Type

import {
  DEVICE_finiteType,
  finiteMobileDeviceType,
} from "./finiteMobileDeviceType";

// Geolocation

import {
  geo
} from "./geolocation";

// Logical Processors

import {
  browserSpecificSupportCores,
  processorCores,
} from "./logicalProcessors";

// Max Touch Points

import { maxTouchPoints, getMaxTouchPoints } from "./maxTouchPoints";

// Navigator Object

import { navigatorObject, getterForNavigator } from './navigator';

// Online Status

import { browserOnlineStatus, getBrowserIsOnline } from "./online";

// standard UA

import { getCurrentUA, currentUA } from "./getCurrentUA";

// Operating System

import { OS, getOS } from "./operatingSystem";

//SCREEN ORIENTATION

import {
  DetectScreenOrientation,
  ORIENTATION_isLandscape,
} from "./orientation";

// PDF Viewer

import { PDFviewerStatus, getPDF } from "./pdf";

// Product

import {engine, getProductID} from './product';

// Version

import {version, getAppVersion} from './appVersion'

// Webdriver

import { robotStatus, getBots } from "./webdriver";

// Exports

// Make the functions accessible

export {
  DetectScreenOrientation,
  DetectDeviceType,
  finiteMobileDeviceType,
  getCurrentUA,
  getCookies,
  getDoNotTrack,
  getBrowser,
  browserSpecificSupportCores,
  getMaxTouchPoints,
  getOS,
  getCodeName,
  getterForNavigator,
  getBrowserIsOnline,
  getPDF,
  getAppVersion,
  getBots,
  getProductID,
};

// As well as the returns on those functions

export {
  ORIENTATION_isLandscape,
  DEVICE_type,
  DEVICE_finiteType,
  currentUA,
  cookieStatus,
  doNotTrackStatus,
  browser,
  processorCores,
  maxTouchPoints,
  navigatorObject,
  browserOnlineStatus,
  PDFviewerStatus,
  robotStatus,
  OS,
  geo,
  codeName,
  engine,
  version
};

// Create the UADetect Object

export const UADetect = {
  detectDeviceType() {
    return DetectDeviceType()
  }
  
}