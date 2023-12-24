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

import { getterForNavigator } from './navigator';
import { browser } from './browser';

/**
 * Generates a random number between 1 and 1000.
 * @returns A random number.
 */
const randomNumber = (): number => Math.round(Math.floor(Math.random() * 1000) + 1);

/**
 * Represents the device memory, which can be a number, 'Unknown', or undefined.
 */
export type DeviceMemory = number | 'Unknown' | undefined;

/**
 * Gets the device memory using the `deviceMemory` API.
 * @returns The device memory as a number.
 */
export const getMemory = (): number => getterForNavigator().deviceMemory;

/**
 * Gets the device memory based on the browser with handling for specific cases.
 * @returns The device memory or 'Unknown' if the API is not supported.
 */
export const browserSpecificGetMemory = (): DeviceMemory => {
	if (browser === 'Chrome' || browser === 'Edge' || browser === 'Opera') {
		return getMemory();
	} else if (browser === 'Firefox') {
		console.error(`deviceMemory API not supported on Firefox (UAD_${randomNumber()})`);
	} else if (browser === 'Safari') {
		console.error(`deviceMemory API not supported on Safari (UAD_${randomNumber()})`);
	}

	// If the browser is not recognized or the API is not supported, return 'Unknown'.
	return 'Unknown';
};

/**
 * The device memory determined based on the browser.
 */
export const deviceMemory = browserSpecificGetMemory();
