/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/


// Browser

import { browser, getBrowser } from './browser'

// Cookies

import { getCookies, cookieStatus } from './cookies'

// Device Type

import { DEVICE_type, DetectDeviceType } from './DetectDeviceType'

// Do Not Track

import { doNotTrackStatus, getDoNotTrack } from './doNotTrack'

// Finite Mobile Device Type

import { DEVICE_finiteType, finiteMobileDeviceType } from './finiteMobileDeviceType'

// standard UA

import { getCurrentUA, currentUA } from './getCurrentUA'

//SCREEN ORIENTATION

import { DetectScreenOrientation, ORIENTATION_isLandscape } from './orientation'

// RAM

import { getRam, browserSpecificChanges, browserRam } from './ram'

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
    getRam,
    browserSpecificChanges
};


// As well as the returns on those functions

export { ORIENTATION_isLandscape, DEVICE_type, DEVICE_finiteType, currentUA, cookieStatus, doNotTrackStatus, browser, browserRam };