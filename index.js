/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/
//SCREEN ORIENTATION
import { DetectScreenOrientation, ORIENTATION_isLandscape } from './orientation';
// Device Type
import { DEVICE_type, DetectDeviceType } from './DetectDeviceType';
// Finite Mobile Device Type
import { DEVICE_finiteType, finiteMobileDeviceType } from './finiteMobileDeviceType';
// standard UA
import { getCurrentUA, currentUA } from './getCurrentUA';
// Exports
// Make the functions accessible
export { DetectScreenOrientation, DetectDeviceType, finiteMobileDeviceType, getCurrentUA, };
// As well as the returns on those functions
export { ORIENTATION_isLandscape, DEVICE_type, DEVICE_finiteType, currentUA };
