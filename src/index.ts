/**
* @license
* Copyright 2023, PorkyProductions, and contributors
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

if (typeof window === 'undefined') {
	throw new Error(`
		Fatal Error: UADetect is not meant to be used in node or server environments.
		Please only run UADetect in browser windows
		Read more at https://porkyproductions.github.io/UA-detect/
	`);
}


// Browser


import { type Browser, browser, getBrowser } from './browser';

// CanShare

import { canShareData } from './canShare';

// Cookies

import { cookieStatus, getCookies } from './cookies';
import type { CookieStatus } from './cookies';

// Clipboard

import {
	getClipboardAdvanced,
	getClipboardText,
	setClipboardAdvanced,
	setClipboardText
} from './clipboard';

// Device Memory

import {
	browserSpecificGetMemory, deviceMemory
} from './deviceMemory';
import type { DeviceMemory } from './deviceMemory';

// Device Type

import { type DeviceType, deviceType, getDeviceType } from './deviceType';

// Exact Mobile Device Type

import getExactMobileDeviceType, {
	type ExactMobileDeviceType,
	exactMobileDeviceType
} from './exactMobileDeviceType';

// Geolocation

import {
	lat,
	lon
} from './geolocation';

// Language

import {
	type Language, getLang, language
} from './language';

// Logical Processors

import {
	type ProcessorCores, browserSpecificSupportCores, processorCores
} from './logicalProcessors';

// Max Touch Points

import { getMaxTouchPoints, maxTouchPoints } from './maxTouchPoints';

// Camera, Audio, Media

import {
	type MediaConstraints,
	type MediaStreamResult, audio, audioAndCamera, camera, getMedia
} from './media';

// Navigator Object

import { type NavigatorSub, getterForNavigator, navigatorObject } from './navigator';

// Online Status

import { type BrowserOnlineStatus, browserOnlineStatus, getBrowserIsOnline } from './online';

// standard UA

import { currentUA, getCurrentUA } from './getCurrentUA';

// Operating System

import { OS, type OperatingSystem, getOS } from './operatingSystem';

//SCREEN ORIENTATION

import {
	getScreenOrientation,
	orientationIsLandscape,
	orientationIsPortrait
} from './orientation';

// PDF Viewer

import { type PDFStatus, PDFviewerStatus, getPDF } from './pdf';

// Permissions

import {
	permissionGranted
} from './permissions';

// Service Worker

import { registerServiceWorker } from './sw';

// Vibrate

import { type VibrateResult, vibrate } from './vibrate';

// Webdriver

import { type RobotStatus, getBots, robotStatus } from './webdriver';

// Exports

// Make the unknowns accessible

export {
	getScreenOrientation as getScreenOrientation,
	getDeviceType as getDeviceType,
	getExactMobileDeviceType as getExactMobileDeviceType,
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
	registerServiceWorker,
	getClipboardText,
	getClipboardAdvanced,
	setClipboardAdvanced,
	setClipboardText
};
// As well as the returns on those unknowns
export {
	orientationIsLandscape,
	orientationIsPortrait,
	deviceType as deviceType,
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
	deviceMemory,
	permissionGranted
};
export interface __UADetect {
	readonly getDeviceType: () => DeviceType,
	readonly getScreenOrientation: () => void,
	readonly getExactMobileDeviceType: () => ExactMobileDeviceType,
	readonly getCurrentUA: () => string,
	readonly getCookieStatus: () => CookieStatus,
	readonly getBrowser: () => Browser,
	readonly getProcessorCores: () => ProcessorCores,
	readonly getMaxTouchPoints: () => number,
	readonly getNavigatorObject: () => NavigatorSub[],
	readonly getBrowserOnlineStatus: () => BrowserOnlineStatus,
	readonly getPDFviewerStatus: () => PDFStatus,
	readonly getRobotStatus: () => RobotStatus,
	readonly getOS: () => OperatingSystem,
	readonly registerServiceWorker: (path: string | URL, options?: RegistrationOptions) => void,
	readonly getLang: () => Language;
	readonly getMemory: () => DeviceMemory,
	readonly vibrate: (pattern: number | number[] | VibratePattern) => VibrateResult,
	readonly canShareData: (data?: ShareData) => boolean,
	readonly getMedia: (constraints: MediaConstraints) => MediaStreamResult
	readonly getClipboardText: () => Promise<string | void>
	readonly setClipboardText: (text: string) => Promise<void>
	readonly getClipboardAdvanced: () => Promise<ClipboardItems | void>
	readonly setClipboardAdvanced: (items: ClipboardItems) => Promise<void>
	readonly permissionGranted: (name: PermissionName) => Promise<boolean>
	readonly orientationIsLandscape: boolean,
	readonly orientationIsPortrait: boolean,
	readonly deviceType: DeviceType,
	readonly exactMobileDeviceType: ExactMobileDeviceType,
	readonly currentUA: string,
	readonly cookieStatus: CookieStatus,
	readonly browser: Browser
	readonly maxTouchPoints: number,
	readonly navigatorObject: object,
	readonly browserOnlineStatus: BrowserOnlineStatus,
	readonly PDFviewerStatus: PDFStatus,
	readonly robotStatus: RobotStatus,
	readonly OS: OperatingSystem,
	readonly lat: number,
	readonly lon: number,
	readonly language: Language
	readonly deviceMemory: DeviceMemory,
	readonly camera: MediaStreamResult,
	readonly audio: MediaStreamResult,
	readonly audioAndCamera: MediaStreamResult
}

// Create the UADetect Object

const UADetect: __UADetect = {
	getDeviceType() {
		return getDeviceType();
	},
	getScreenOrientation() {
		return getScreenOrientation();
	},
	getExactMobileDeviceType() {
		return getExactMobileDeviceType();
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
	getMedia: async (constraints: MediaConstraints) => {
		return await getMedia(constraints);
	},
	getClipboardText: async () => {
		return await getClipboardText();
	},
	getClipboardAdvanced: async () => {
		return await getClipboardAdvanced();
	},
	setClipboardText: async (text: string) => {
		return await setClipboardText(text);
	},
	setClipboardAdvanced: async (items: ClipboardItems) => {
		return await setClipboardAdvanced(items);
	},
	permissionGranted: async function (name: PermissionName): Promise<boolean> {
		return await permissionGranted(name);
	},
	// From here, we can then begin to call the returns on those unknowns here
	// Most of them are just transferring the name over
	orientationIsLandscape: orientationIsLandscape,
	orientationIsPortrait: orientationIsPortrait,
	deviceType: deviceType,
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
	audioAndCamera: audioAndCamera,
};
export default UADetect;

export class uaDetect implements __UADetect {
	orientationIsLandscape: boolean = orientationIsLandscape;
	orientationIsPortrait: boolean = orientationIsPortrait;
	deviceType: DeviceType = deviceType;
	exactMobileDeviceType: ExactMobileDeviceType = exactMobileDeviceType;
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
	private refresh(): __UADetect {
		return new uaDetect() as __UADetect;
	}
	public getDeviceType(): DeviceType {
		this.refresh();
		return getDeviceType() as DeviceType;
	}
	public getScreenOrientation(): void {
		this.refresh();
		return getScreenOrientation() as void;
	}
	public getExactMobileDeviceType(): ExactMobileDeviceType {
		this.refresh();
		return getExactMobileDeviceType() as ExactMobileDeviceType;
	}
	public getCurrentUA(): string {
		this.refresh();
		return getCurrentUA() as string;
	}
	public getCookieStatus(): CookieStatus {
		this.refresh();
		return getCookies() as CookieStatus;
	}
	public getBrowser(): Browser {
		this.refresh();
		return getBrowser() as Browser;
	}
	public getProcessorCores(): ProcessorCores {
		this.refresh();
		return browserSpecificSupportCores() as ProcessorCores;
	}
	public getMaxTouchPoints(): number {
		this.refresh();
		return getMaxTouchPoints() as number;
	}
	public getNavigatorObject(): NavigatorSub[] {
		this.refresh();
		return getterForNavigator() as NavigatorSub[];
	}
	public getBrowserOnlineStatus(): BrowserOnlineStatus {
		this.refresh();
		return getBrowserIsOnline() as BrowserOnlineStatus;
	}
	public getPDFviewerStatus(): PDFStatus {
		this.refresh();
		return getPDF() as PDFStatus;
	}
	public getRobotStatus(): RobotStatus {
		this.refresh();
		return getBots() as RobotStatus;
	}
	public getOS(): OperatingSystem {
		this.refresh();
		return getOS() as OperatingSystem;
	}
	public getLang(): Language {
		this.refresh();
		return getLang() as Language;
	}
	public getMemory(): DeviceMemory {
		this.refresh();
		return browserSpecificGetMemory() as DeviceMemory;
	}
	public vibrate(pattern: VibratePattern): VibrateResult {
		this.refresh();
		return vibrate(pattern) as VibrateResult;
	}
	public canShareData(data?: ShareData): boolean {
		this.refresh();
		return canShareData(data) as boolean;
	}
	public registerServiceWorker(path: string | URL, options?: RegistrationOptions): void {
		this.refresh();
		return registerServiceWorker(path, options);
	}
	public async getMedia(constraints: MediaConstraints): MediaStreamResult {
		this.refresh();
		return await getMedia(constraints) as MediaStreamResult;
	}
	public async getClipboardText(): Promise<string> {
		this.refresh();
		return await getClipboardText() as string;
	}
	public async getClipboardAdvanced(): Promise<ClipboardItems> {
		return await getClipboardAdvanced() as ClipboardItems;
	}
	public async setClipboardText(text: string): Promise<void> {
		return await setClipboardText(text);
	}
	public async setClipboardAdvanced(items: ClipboardItems): Promise<void> {
		return await setClipboardAdvanced(items);
	}
	public async permissionGranted(name: PermissionName): Promise<boolean> {
		return await permissionGranted(name);
	}
}