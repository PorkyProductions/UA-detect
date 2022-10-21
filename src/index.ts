/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/


// Browser


import { browser, getBrowser } from './browser';

// Code Name

import { codeName, getCodeName } from './appCodeName';

// Cookies

import { getCookies, cookieStatus } from './cookies';

// Device Type

import { DEVICE_type, DetectDeviceType } from './deviceType';

// Do Not Track

import { doNotTrackStatus, getDoNotTrack } from './doNotTrack';

// Finite Mobile Device Type

import {
	DEVICE_finiteType,
	finiteMobileDeviceType,
} from './finiteMobileDeviceType';

// Geolocation

import {
	lat,
	lon
} from './geolocation';

// Logical Processors

import {
	browserSpecificSupportCores,
	processorCores,
} from './logicalProcessors';

// Max Touch Points

import { maxTouchPoints, getMaxTouchPoints } from './maxTouchPoints';

// Navigator Object

import { navigatorObject, getterForNavigator } from './navigator';

// Online Status

import { browserOnlineStatus, getBrowserIsOnline } from './online';

// standard UA

import { getCurrentUA, currentUA } from './getCurrentUA';

// Operating System

import { OS, getOS } from './operatingSystem';

//SCREEN ORIENTATION

import {
	DetectScreenOrientation,
	ORIENTATION_isLandscape,
} from './orientation';

// PDF Viewer

import { PDFviewerStatus, getPDF } from './pdf';

// Product

import {engine, getProductID} from './product';

// Version

import {version, getAppVersion} from './appVersion';

// Webdriver

import { robotStatus, getBots } from './webdriver';

// Exports

// Make the unknowns accessible

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

// As well as the returns on those unknowns

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
	lat,
	lon,
	codeName,
	engine,
	version
};

export interface _UADetect {
  getDeviceType: () => 'tablet' | 'mobile' | 'desktop',
  getScreenOrientation: () => boolean,
  getFiniteMobileDeviceType: () => 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS',
  getCurrentUA: () => string,
  getCookieStatus: () =>  'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown',
  getDoNotTrackStatus: () => 'Unknown' | 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified'
  getBrowser: () => 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined,
  getProcessorCores: () => number | undefined,
  getMaxTouchPoints: () => number,
  getNavigatorObject: () => object[],
  getBrowserOnlineStatus: () => 'browserOnline' | 'browserOffline',
  getPDFviewerStatus: () => 'PDFviewerEnabled' | 'PDFviewerDisabled',
  getRobotStatus: () => 'robotControlled' | 'humanControlled' | 'Unknown',
  getOS: () => 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown',
  getCodeName: () => string | Error,
  getEngine: () => string | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Other' | Error,
  getVersion: () => string | number | Error,
  orientationIsLandscape: boolean,
  deviceType: 'tablet' | 'mobile' | 'desktop',
  deviceFiniteType: 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS',
  currentUA: string,
  cookieStatus: 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown',
  doNotTrackStatus: 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified' | 'Unknown'
  browser: 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined,
  processorCores: number | undefined | unknown,
  maxTouchPoints: number,
  navigatorObject: object,
  browserOnlineStatus: 'browserOnline' | 'browserOffline',
  PDFviewerStatus: 'PDFviewerEnabled' | 'PDFviewerDisabled',
  robotStatus: 'robotControlled' | 'humanControlled' | 'Unknown',
  OS: 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown',
  lat: number,
  lon: number,
  codeName: string | Error,
  engine: string | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Unknown' | Error,
  version: string | number | Error
}

// Create the UADetect Object

export const UADetect: _UADetect = {
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
	getCookieStatus() {
		return getCookies();
	},
	getDoNotTrackStatus() {
		return getDoNotTrack();
	},
	getBrowser() {
		return getBrowser();
	},
	getProcessorCores() {
		return browserSpecificSupportCores();
	},
	getMaxTouchPoints() {
		return getMaxTouchPoints();
	},
	getNavigatorObject() {
		return getterForNavigator();
	},
	getBrowserOnlineStatus() {
		return getBrowserIsOnline();
	},
	getPDFviewerStatus() {
		return getPDF();
	},
	getRobotStatus() {
		return getBots();
	},
	getOS() {
		return getOS();
	},
	getCodeName() {
		return getCodeName();
	},
	getEngine() {
		return getProductID();
	},
	getVersion() {
		return getAppVersion();
	},
	// From here, we can then begin to call the returns on those unknowns here
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

export class uaDetect implements _UADetect {
	getDeviceType!: () => 'tablet' | 'mobile' | 'desktop';
	getScreenOrientation!: () => boolean;
	getFiniteMobileDeviceType!: () => 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS';
	getCurrentUA!: () => string;
	getCookieStatus!: () => 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown';
	getDoNotTrackStatus!: () => 'Unknown' | 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified';
	getBrowser!: () => 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined;
	getProcessorCores!: () => number | undefined;
	getMaxTouchPoints!: () => number;
	getNavigatorObject!: () => object[];
	getBrowserOnlineStatus!: () => 'browserOnline' | 'browserOffline';
	getPDFviewerStatus!: () => 'PDFviewerEnabled' | 'PDFviewerDisabled';
	getRobotStatus!: () => 'Unknown' | 'robotControlled' | 'humanControlled';
	getOS!: () => 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown';
	getCodeName!: () => string | Error;
	getEngine!: () => string | Error;
	getVersion!: () => string | number | Error;
	orientationIsLandscape!: boolean;
	deviceType!: 'tablet' | 'mobile' | 'desktop';
	deviceFiniteType!: 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS';
	currentUA!: string;
	cookieStatus!: 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown';
	doNotTrackStatus!: 'Unknown' | 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified';
	browser: 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined;
	processorCores: unknown;
	maxTouchPoints!: number;
	navigatorObject!: object;
	browserOnlineStatus!: 'browserOnline' | 'browserOffline';
	PDFviewerStatus!: 'PDFviewerEnabled' | 'PDFviewerDisabled';
	robotStatus!: 'Unknown' | 'robotControlled' | 'humanControlled';
	OS!: 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown';
	lat!: number;
	lon!: number;
	codeName!: string | Error;
	engine!: string | Error;
	version!: string | number | Error;
	constructor() {
		this.getDeviceType = () => {
			return DetectDeviceType();
		};
		this.getScreenOrientation = () => {
			return DetectScreenOrientation();
		};
		this.getFiniteMobileDeviceType = () => {
			return finiteMobileDeviceType();
		};
		this.getCurrentUA =() => {
			return getCurrentUA();
		};
		this.getCookieStatus = () => {
			return getCookies();
		};
		this.getDoNotTrackStatus = () => {
			return getDoNotTrack();
		};
		this.getBrowser = () => {
			return getBrowser();
		};
		this.getProcessorCores = () => {
			return browserSpecificSupportCores();
		};
		this.getMaxTouchPoints = () => {
			return getMaxTouchPoints();
		};
		this.getNavigatorObject = () => {
			return getterForNavigator();
		};
		this.getBrowserOnlineStatus = () => {
			return getBrowserIsOnline();
		};
		this.getPDFviewerStatus = () => {
			return getPDF();
		};
		this.getRobotStatus = () => {
			return getBots();
		};
		this.getOS = () => {
			return getOS();
		};
		this.getCodeName = () => {
			return getCodeName();
		};
		this.getEngine = () => {
			return getProductID();
		};
		this.getVersion = () => {
			return getAppVersion();
		};
		this.orientationIsLandscape = ORIENTATION_isLandscape;
		this.deviceType = DEVICE_type;
		this.deviceFiniteType = DEVICE_finiteType;
		this.currentUA = currentUA;
		this.cookieStatus = cookieStatus;
		this.doNotTrackStatus = doNotTrackStatus;
		this.browser = browser;
		this.processorCores = processorCores;
		this.maxTouchPoints = maxTouchPoints;
		this.navigatorObject = navigatorObject;
		this.browserOnlineStatus = browserOnlineStatus;
		this.PDFviewerStatus = PDFviewerStatus;
		this.robotStatus = robotStatus;
		this.OS = OS;
		this.lat = lat;
		this.lon = lon;
		this.codeName = codeName;
		this.engine = engine;
		this.version = version;
	}
}