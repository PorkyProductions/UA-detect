/**
* @license
* Copyright 2022, PorkyProductions, and contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


// Browser


import { browser, getBrowser } from './browser';

// CanShare

import { canShareData } from './canShare';

// Cookies

import { cookieStatus, getCookies } from './cookies';

// Device Memory

import {
	browserSpecificGetMemory,
	deviceMemory
} from './deviceMemory';

// Device Type

import { DetectDeviceType, DEVICE_type } from './deviceType';

// Finite Mobile Device Type

import {
	DEVICE_finiteType,
	finiteMobileDeviceType
} from './finiteMobileDeviceType';

// Geolocation

import {
	lat,
	lon
} from './geolocation';

// Language

import {
	getLang, language, Language
} from './language';

// Logical Processors

import {
	browserSpecificSupportCores,
	processorCores
} from './logicalProcessors';

// Max Touch Points

import { getMaxTouchPoints, maxTouchPoints } from './maxTouchPoints';

// Camera, Audio, Media

import {
	MediaConstraints,
	camera,
	audio,
	audioAndCamera,
	getMedia
} from './media';

// Navigator Object

import { getterForNavigator, navigatorObject, NavigatorSub } from './navigator';

// Online Status

import { browserOnlineStatus, getBrowserIsOnline } from './online';

// standard UA

import { currentUA, getCurrentUA } from './getCurrentUA';

// Operating System

import { getOS, OS } from './operatingSystem';

//SCREEN ORIENTATION

import {
	DetectScreenOrientation,
	ORIENTATION_isLandscape
} from './orientation';

// PDF Viewer

import { getPDF, PDFviewerStatus } from './pdf';

// Service Worker

import { registerServiceWorker } from './sw';

// Vibrate

import { vibrate } from './vibrate';

// Webdriver

import { getBots, robotStatus } from './webdriver';

// Exports

// Make the unknowns accessible

export {
	DetectScreenOrientation as getScreenOrientation,
	DetectDeviceType as getDeviceType,
	finiteMobileDeviceType as getFiniteMobileDeviceType,
	getCurrentUA,
	getCookies,
	getBrowser,
	browserSpecificSupportCores,
	getMaxTouchPoints,
	getOS,
	getterForNavigator,
	getBrowserIsOnline,
	getPDF,
	getBots,
	getLang,
	browserSpecificGetMemory as getMemory,
	vibrate,
	canShareData,
	registerServiceWorker
};
// As well as the returns on those unknowns
export {
	ORIENTATION_isLandscape as orientationIsLandscape,
	DEVICE_type as deviceType,
	DEVICE_finiteType as deviceFiniteType,
	currentUA,
	cookieStatus,
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
	language,
	deviceMemory
};


export interface _UADetect {
	getDeviceType: () => 'tablet' | 'mobile' | 'desktop',
	getScreenOrientation: () => boolean,
	getFiniteMobileDeviceType: () => 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS',
	getCurrentUA: () => string,
	getCookieStatus: () =>  'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown',
	getBrowser: () => 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined,
	getProcessorCores: () => number | undefined,
	getMaxTouchPoints: () => number,
	getNavigatorObject: () => NavigatorSub[],
	getBrowserOnlineStatus: () => 'browserOnline' | 'browserOffline',
	getPDFviewerStatus: () => 'PDFviewerEnabled' | 'PDFviewerDisabled',
	getRobotStatus: () => 'robotControlled' | 'humanControlled' | 'Unknown',
	getOS: () => 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown',
	registerServiceWorker: (path: string | URL, options?: RegistrationOptions) => void,
	getLang: () => Language;
	getMemory: () => number | 'Unknown' | undefined,
	vibrate: (pattern: number | number[] | VibratePattern) => 'success' | 'failure',
	canShareData: (data?: ShareData) => boolean,
	getMedia: (constraints: MediaConstraints) => Promise<void | unknown | MediaStream | undefined>
	orientationIsLandscape: boolean,
	deviceType: 'tablet' | 'mobile' | 'desktop',
	deviceFiniteType: 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS',
	currentUA: string,
	cookieStatus: 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown',
	browser: 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined,
	maxTouchPoints: number,
	navigatorObject: object,
	browserOnlineStatus: 'browserOnline' | 'browserOffline',
	PDFviewerStatus: 'PDFviewerEnabled' | 'PDFviewerDisabled',
	robotStatus: 'robotControlled' | 'humanControlled' | 'Unknown',
	OS: 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown',
	lat: number,
	lon: number,
	language: Language
	deviceMemory: number | 'Unknown' | undefined,
	camera: Promise<unknown | MediaStream | undefined>,
	audio: Promise<unknown | MediaStream | undefined>,
	audioAndCamera: Promise<unknown | MediaStream | undefined>
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
	getLang() {
		return getLang();
	},
	getMemory() {
		return browserSpecificGetMemory();
	},
	registerServiceWorker(path: string | URL, options?: RegistrationOptions) {
		return registerServiceWorker(path, options);
	},
	vibrate: (pattern: VibratePattern) => {
		return vibrate(pattern);
	},
	canShareData: (data?: ShareData) => {
		return canShareData(data);
	},
	getMedia: (constraints: MediaConstraints) => {
		return getMedia(constraints);
	},
	// From here, we can then begin to call the returns on those unknowns here
	// Most of them are just transferring the name over
	orientationIsLandscape: ORIENTATION_isLandscape,
	deviceType: DEVICE_type,
	deviceFiniteType: DEVICE_finiteType,
	currentUA: currentUA,
	cookieStatus: cookieStatus,
	browser: browser,
	maxTouchPoints: maxTouchPoints,
	navigatorObject: navigatorObject,
	browserOnlineStatus: browserOnlineStatus,
	PDFviewerStatus: PDFviewerStatus,
	robotStatus: robotStatus,
	OS: OS,
	lat: lat,
	lon: lon,
	language: language,
	deviceMemory: deviceMemory,
	camera: camera,
	audio: audio,
	audioAndCamera: audioAndCamera
};

export class uaDetect implements _UADetect {
	getCookieStatus!: () => 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown';
	getDoNotTrackStatus!: () => 'Unknown' | 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified';
	getBrowser!: () => 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined;
	getProcessorCores!: () => number | undefined;
	getMaxTouchPoints!: () => number;
	getNavigatorObject!: () => NavigatorSub[];
	getBrowserOnlineStatus!: () => 'browserOnline' | 'browserOffline';
	getPDFviewerStatus!: () => 'PDFviewerEnabled' | 'PDFviewerDisabled';
	getRobotStatus!: () => 'Unknown' | 'robotControlled' | 'humanControlled';
	getOS!: () => 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown';
	getEngine!: () => string | Error;
	getVersion!: () => string | number | Error;
	getLang!: () => Language;
	getMemory!: () => number | 'Unknown' | undefined;
	registerServiceWorker!: (path: string | URL, options?: RegistrationOptions) => void;
	vibrate!: (pattern: VibratePattern) => 'success' | 'failure';
	canShareData!: (data?: ShareData) => boolean;
	getMedia!: (constraints: MediaConstraints) => Promise<void | unknown | MediaStream | undefined>;
	orientationIsLandscape: boolean = ORIENTATION_isLandscape;
	deviceType: 'tablet' | 'mobile' | 'desktop' = DEVICE_type;
	deviceFiniteType: 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS' = DEVICE_finiteType;
	currentUA: string = currentUA;
	cookieStatus: 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown' = cookieStatus;
	browser: 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined = browser;
	maxTouchPoints: number = maxTouchPoints;
	navigatorObject: object = navigator;
	browserOnlineStatus: 'browserOnline' | 'browserOffline' = browserOnlineStatus;
	PDFviewerStatus: 'PDFviewerEnabled' | 'PDFviewerDisabled' = PDFviewerStatus;
	robotStatus: 'Unknown' | 'robotControlled' | 'humanControlled' = robotStatus;
	OS: 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown' = OS;
	lat: number = lat;
	lon: number = lon;
	language: Language = language;
	deviceMemory: number | 'Unknown' | undefined = deviceMemory;
	camera: Promise<unknown | MediaStream | undefined> = camera;
	audio: Promise<unknown | MediaStream | undefined> = audio;
	audioAndCamera: Promise<unknown | MediaStream | undefined> = audioAndCamera;
	constructor() {
		this.getCookieStatus = () => {
			return getCookies();
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
		this.getLang = () => {
			return getLang();
		};
		this.getMemory = () => {
			return browserSpecificGetMemory();
		};
		this.vibrate = (pattern: VibratePattern) => {
			return vibrate(pattern);
		};
		this.canShareData = (data?: ShareData) => {
			return canShareData(data);
		};
		this.getMedia = (constraints: MediaConstraints) => {
			return getMedia(constraints);
		};
		this.registerServiceWorker = (path: string | URL, options?: RegistrationOptions) => {
			return registerServiceWorker(path, options);
		};
	}
	private refresh(): void {
		new uaDetect();
		return;
	}
	public getDeviceType(): 'tablet' | 'mobile' | 'desktop' {
		this.refresh()
		return DetectDeviceType() as 'tablet' | 'mobile' | 'desktop';
	}
	public getScreenOrientation(): boolean {
		this.refresh();
		return DetectScreenOrientation() as boolean;
	}
	public getFiniteMobileDeviceType(): 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS' {
		this.refresh();
		return finiteMobileDeviceType() as 'Android' | 'iOS' | 'Unknown' | Error | 'BlackBerry' | 'Windows Phone' | 'webOS';
	}
	public getCurrentUA(): string {
		this.refresh();
		return getCurrentUA() as string;
	}
}