/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/


// The Declaration of the Library Itsself
declare module 'uadetect';

// ORIENTATION
declare type ORIENTATION_isLandscape = boolean;

// DEVICE TYPES

declare type DEVICE_type = string;
declare type DEVICE_finiteType = string;

// COOKIES

declare type cookieStatus = boolean;

// Do Not Track

declare type doNotTrackStatus = boolean;
    browser: string;
    browserRam: number;
    buildNumber: number;
    processorCores: number;
    maxTouchPoints: number;
    browserOnlineStatus: boolean;
    PDFviewerStatus: boolean;
    robotStatus: boolean;
    OS: string;
