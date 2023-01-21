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


import { browser, getBrowser, type Browser } from './browser';

// CanShare

import { canShareData } from './canShare';

// Cookies

import { cookieStatus, getCookies, type CookieStatus } from './cookies';

// Device Memory

import {
	browserSpecificGetMemory,
	type DeviceMemory,
	deviceMemory
} from './deviceMemory';

// Device Type

import { DetectDeviceType, DEVICE_type, type DeviceType } from './deviceType';

// Exact Mobile Device Type

import ExactMobileDeviceType,
{
	exactMobileDeviceType,
	type __ExactMobileDeviceType
} from './exactMobileDeviceType';

// Geolocation

import {
	lat,
	lon
} from './geolocation';

// Language

import {
	getLang, language, type Language
} from './language';

// Logical Processors

import {
	browserSpecificSupportCores,
	type ProcessorCores,
	processorCores
} from './logicalProcessors';

// Max Touch Points

import { getMaxTouchPoints, maxTouchPoints } from './maxTouchPoints';

// Camera, Audio, Media

import {
	type MediaConstraints,
	camera,
	audio,
	audioAndCamera,
	getMedia,
    type MediaStreamResult
} from './media';

// Navigator Object

import { getterForNavigator, navigatorObject, type NavigatorSub } from './navigator';

// Online Status

import { type BrowserOnlineStatus, browserOnlineStatus, getBrowserIsOnline } from './online';

// standard UA

import { currentUA, getCurrentUA } from './getCurrentUA';

// Operating System

import { getOS, type OperatingSystem, OS } from './operatingSystem';

//SCREEN ORIENTATION

import {
	DetectScreenOrientation,
	ORIENTATION_isLandscape
} from './orientation';

// PDF Viewer

import { getPDF, type PDFStatus, PDFviewerStatus } from './pdf';

// Service Worker

import { registerServiceWorker } from './sw';

// Vibrate

import { vibrate, type VibrateResult } from './vibrate';

// Webdriver

import { getBots, type RobotStatus, robotStatus } from './webdriver';

// Exports

// Make the unknowns accessible

export {
	DetectScreenOrientation as getScreenOrientation,
	DetectDeviceType as getDeviceType,
	ExactMobileDeviceType as getExactMobileDeviceType,
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
	exactMobileDeviceType,
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

// TODO: write custom types for all of the compound returns like DeviceType
export interface __UADetect {
	getDeviceType: () => DeviceType,
	getScreenOrientation: () => boolean,
	getExactMobileDeviceType: () => __ExactMobileDeviceType,
	getCurrentUA: () => string,
	getCookieStatus: () => CookieStatus,
	getBrowser: () => Browser,
	getProcessorCores: () => ProcessorCores,
	getMaxTouchPoints: () => number,
	getNavigatorObject: () => NavigatorSub[],
	getBrowserOnlineStatus: () => BrowserOnlineStatus,
	getPDFviewerStatus: () => PDFStatus,
	getRobotStatus: () => RobotStatus,
	getOS: () => OperatingSystem,
	registerServiceWorker: (path: string | URL, options?: RegistrationOptions) => void,
	getLang: () => Language;
	getMemory: () => DeviceMemory,
	vibrate: (pattern: number | number[] | VibratePattern) => VibrateResult,
	canShareData: (data?: ShareData) => boolean,
	getMedia: (constraints: MediaConstraints) => MediaStreamResult
	orientationIsLandscape: boolean,
	deviceType: DeviceType,
	exactMobileDeviceType: __ExactMobileDeviceType,
	currentUA: string,
	cookieStatus: CookieStatus,
	browser: Browser
	maxTouchPoints: number,
	navigatorObject: object,
	browserOnlineStatus: BrowserOnlineStatus,
	PDFviewerStatus: PDFStatus,
	robotStatus: RobotStatus,
	OS: OperatingSystem,
	lat: number,
	lon: number,
	language: Language
	deviceMemory: DeviceMemory,
	camera: MediaStreamResult,
	audio: MediaStreamResult,
	audioAndCamera: MediaStreamResult
}

// Create the UADetect Object

export const UADetect: __UADetect = {
	getDeviceType() {
		return DetectDeviceType();
	},
	getScreenOrientation() {
		return DetectScreenOrientation();
	},
	getExactMobileDeviceType() {
		return ExactMobileDeviceType();
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
	exactMobileDeviceType: exactMobileDeviceType,
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

export class uaDetect implements __UADetect {
	orientationIsLandscape: boolean = ORIENTATION_isLandscape;
	deviceType: DeviceType = DEVICE_type;
	exactMobileDeviceType: __ExactMobileDeviceType = exactMobileDeviceType;
	currentUA: string = currentUA;
	cookieStatus: CookieStatus = cookieStatus;
	browser: Browser = browser;
	maxTouchPoints: number = maxTouchPoints;
	navigatorObject: object = navigator;
	browserOnlineStatus: BrowserOnlineStatus = browserOnlineStatus;
	PDFviewerStatus: PDFStatus = PDFviewerStatus;
	robotStatus: RobotStatus = robotStatus;
	OS: OperatingSystem = OS;
	lat: number = lat;
	lon: number = lon;
	language: Language = language;
	deviceMemory: DeviceMemory = deviceMemory;
	camera: MediaStreamResult = camera;
	audio: MediaStreamResult = audio;
	audioAndCamera: MediaStreamResult = audioAndCamera;
	constructor() {}
	private refresh(): __UADetect {
		return new uaDetect() as __UADetect;
	}
	public getDeviceType(): DeviceType {
		this.refresh();
		return DetectDeviceType() as DeviceType;
	}
	public getScreenOrientation(): boolean {
		this.refresh();
		return DetectScreenOrientation() as boolean;
	}
	public getExactMobileDeviceType(): __ExactMobileDeviceType {
		this.refresh();
		return ExactMobileDeviceType() as __ExactMobileDeviceType;
	}
	public getCurrentUA(): string {
		this.refresh();
		return getCurrentUA() as string;
	}
	public getCookieStatus(): CookieStatus {
		this.refresh()
		return getCookies() as CookieStatus;
	}
	public getBrowser(): Browser {
		this.refresh()
		return getBrowser() as Browser;
	}
	public getProcessorCores(): ProcessorCores {
		this.refresh();
		return browserSpecificSupportCores() as ProcessorCores
	}
	public getMaxTouchPoints(): number {
		this.refresh()
		return getMaxTouchPoints() as number
	}
	public getNavigatorObject(): NavigatorSub[] {
		this.refresh()
		return getterForNavigator() as NavigatorSub[]
	}
	public getBrowserOnlineStatus(): BrowserOnlineStatus {
		this.refresh();
		return getBrowserIsOnline() as BrowserOnlineStatus
	}
	public getPDFviewerStatus(): PDFStatus {
		this.refresh()
		return getPDF() as PDFStatus
	}
	public getRobotStatus(): RobotStatus {
		this.refresh()
		return getBots() as RobotStatus
	}
	public getOS(): OperatingSystem {
		this.refresh();
		return getOS() as OperatingSystem;
	}
	public getLang(): Language {
		this.refresh();
		return getLang() as Language
	}
	public getMemory(): DeviceMemory {
		this.refresh();
		return browserSpecificGetMemory() as DeviceMemory
	}
	public vibrate(pattern: VibratePattern): VibrateResult {
		this.refresh();
		return vibrate(pattern) as VibrateResult
	}
	public canShareData(data?: ShareData): boolean {
		this.refresh();
		return canShareData(data) as boolean;
	}
	public async getMedia(constraints: MediaConstraints): MediaStreamResult {
		this.refresh()
		return getMedia(constraints) as MediaStreamResult
	}
	public registerServiceWorker(path: string | URL, options?: RegistrationOptions): void {
		this.refresh()
		return registerServiceWorker(path, options);
	}
}