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
import { DEVICE_finiteType, finiteMobileDeviceType, } from "./finiteMobileDeviceType";
// Geolocation
import { lat, lon } from "./geolocation";
// Logical Processors
import { browserSpecificSupportCores, processorCores, } from "./logicalProcessors";
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
import { DetectScreenOrientation, ORIENTATION_isLandscape, } from "./orientation";
// PDF Viewer
import { PDFviewerStatus, getPDF } from "./pdf";
// Product
import { engine, getProductID } from './product';
// Version
import { version, getAppVersion } from './appVersion';
// Webdriver
import { robotStatus, getBots } from "./webdriver";
// Exports
// Make the functions accessible
export { DetectScreenOrientation, DetectDeviceType, finiteMobileDeviceType, getCurrentUA, getCookies, getDoNotTrack, getBrowser, browserSpecificSupportCores, getMaxTouchPoints, getOS, getCodeName, getterForNavigator, getBrowserIsOnline, getPDF, getAppVersion, getBots, getProductID, };
// As well as the returns on those functions
export { ORIENTATION_isLandscape as orientationIsLandscape, DEVICE_type as deviceType, DEVICE_finiteType as deviceFiniteType, currentUA, cookieStatus, doNotTrackStatus, browser, processorCores, maxTouchPoints, navigatorObject, browserOnlineStatus, PDFviewerStatus, robotStatus, OS, lat, lon, codeName, engine, version };
// Create the UADetect Object
export const UADetect = {
    getDeviceType() {
        return DetectDeviceType();
    },
    getScreenOrientation() {
        return DetectScreenOrientation();
    },
    getFiniteMobileDeviceType() {
        return finiteMobileDeviceType();
    },
    getCurrentUA() {
        return getCurrentUA();
    },
    getCookieStatus(cookies) {
        return getCookies(cookies);
    },
    getDoNotTrackStatus(browserDoNotTrack) {
        return getDoNotTrack(browserDoNotTrack);
    },
    getBrowser({ ua }) {
        return getBrowser({ ua });
    },
    getProcessorCores() {
        return browserSpecificSupportCores();
    },
    getMaxTouchPoints() {
        return getMaxTouchPoints();
    },
    getNavigatorObject(navigatorObjectDev) {
        return getterForNavigator(navigatorObjectDev);
    },
    getBrowserOnlineStatus({ browserIsOnline }) {
        return getBrowserIsOnline({ browserIsOnline });
    },
    getPDFviewerStatus({ pdf }) {
        return getPDF({ pdf });
    },
    getRobotStatus({ webdriverControlled }) {
        return getBots({ webdriverControlled });
    },
    getOS({ ua }) {
        return getOS({ ua: navigator.userAgent });
    },
    getCodeName(appCodeName) {
        return getCodeName(appCodeName);
    },
    getEngine(productID) {
        return getProductID(productID);
    },
    getVersion(appVersion) {
        return getAppVersion(appVersion);
    },
    // From here, we can then begin to call the returns on those functions here
    // Most of them are just transferring the name over
    orientationIsLandscape: ORIENTATION_isLandscape,
    deviceType: DEVICE_type,
    deviceFiniteType: DEVICE_finiteType,
    currentUA: currentUA,
    cookieStatus: cookieStatus,
    doNotTrackStatus: doNotTrackStatus,
    browser: browser,
    processorCores: processorCores,
    maxTouchPoints: maxTouchPoints,
    navigatorObject: navigatorObject,
    browserOnlineStatus: browserOnlineStatus,
    PDFviewerStatus: PDFviewerStatus,
    robotStatus: robotStatus,
    OS: OS,
    lat: lat,
    lon: lon,
    codeName: codeName,
    engine: engine,
    version: version
};
