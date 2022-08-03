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
  ORIENTATION_isLandscape as orientationIsLandscape,
  DEVICE_type as deviceType,
  DEVICE_finiteType as deviceFiniteType,
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

interface UADetect {
  getDeviceType: Function,
  getScreenOrientation: Function,
  getFiniteMobileDeviceType: Function,
  getCurrentUA: Function,
  getCookieStatus: Function,
  getDoNotTrackStatus: Function
  getBrowser: Function,
  getProcessorCores: Function,
  getMaxTouchPoints: Function,
  getNavigatorObject: Function,
  getBrowserOnlineStatus: Function,
  getPDFviewerStatus: Function,
  getRobotStatus: Function,
  getOS: Function,
  getGeo: Function,
  getCodeName: Function,
  getEngine: Function,
  getVersion: Function,
  orientationIsLandscape: boolean,
  deviceType: "tablet" | "mobile" | "desktop",
  deviceFiniteType: "Android" | "iOS" | "Unknown" | Error | "BlackBerry" | "Windows Phone" | "webOS",
  currentUA: string,
  cookieStatus: "cookiesEnabled" | "cookiesNotEnables" | "ERROR",
  doNotTrackStatus: "trackingAllowed" | "trackingNotAllowed" | "trackingUnspecified" | "ERROR"
  browser: "Opera" | "Chrome" | "Firefox" | "Safari" | "IE" | "Edge" | "unknown" | undefined,
  processorCores: number | undefined,
  maxTouchPoints: number,
  navigatorObject: object,
  browserOnlineStatus: "browserOnline" | "browserOffline",
  PDFviewerStatus: "PDFviewerEnabled" | "PDFviewerDisabled",
  robotStatus: "robotControlled" | "humanControlled" | "ERROR",
  OS: "Windows" | "Mac" | "Linux" | "Android" | "iOS" | "Unknown",
  geo: any,
  codeName: string | Error,
  engine: string | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Other' | Error,
  version: string | number | Error
}

// Create the UADetect Object

export const UADetect: UADetect = {
  getDeviceType() {
    return DetectDeviceType()
  },
  getScreenOrientation() {
    return DetectScreenOrientation()
  },
  getFiniteMobileDeviceType() {
    return finiteMobileDeviceType() 
  },
  getCurrentUA() {
    return getCurrentUA()
  },
  getCookieStatus(cookies: boolean) {
    return getCookies(cookies)
  },
  getDoNotTrackStatus(browserDoNotTrack: string | number | null) {
    return getDoNotTrack(browserDoNotTrack)
  },
  getBrowser({ ua }: { ua: string; }) {
    return getBrowser({ ua })
  },
  getProcessorCores() {
    return browserSpecificSupportCores()
  },
  getMaxTouchPoints() {
    return getMaxTouchPoints()
  },
  getNavigatorObject(navigatorObjectDev: Navigator) {
    return getterForNavigator(navigatorObjectDev)
  },
  getBrowserOnlineStatus({ browserIsOnline }: { browserIsOnline: boolean; }) {
    return getBrowserIsOnline({ browserIsOnline });
  },
  getPDFviewerStatus({ pdf }: { pdf: boolean; }) {
    return getPDF({ pdf });
  },
  getRobotStatus({ webdriverControlled }: { webdriverControlled: boolean; }) {
    return getBots({ webdriverControlled })
  },
  getOS({ ua }: { ua: string; }) {
    return getOS({ ua: navigator.userAgent })
  },
  getGeo() {
    return console.error("Geolocation API must be called on it's own. Try calling it independent of the \'UADetect\' object")
  },
  getCodeName(appCodeName: string) {
    return getCodeName(appCodeName)
  },
  getEngine(productID: string) {
    return getProductID(productID)
  },
  getVersion(appVersion: string) {
    return getAppVersion(appVersion)
  }
  // From here, we can then begin to call the returns on those functions here
  
}