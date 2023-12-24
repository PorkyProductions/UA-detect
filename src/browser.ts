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

/**
 * The user agent string of the current browser.
 */
const ua = getterForNavigator().userAgent;

/**
 * Represents the possible values for the browser.
 */
export type Browser = 'Opera' | 'Chrome' | 'Brave' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined;

/**
 * Gets the current browser based on the user agent string.
 * @returns The current browser.
 */
const getBrowser = (): Browser => {
	if (ua.indexOf('Opera') > -1) {
		return 'Opera';
	} else if (ua.indexOf('Chrome') > -1) {
		return 'Chrome';
	} else if (ua.indexOf('Brave') > -1) {
		return 'Brave';
	} else if (ua.indexOf('Firefox') > -1) {
		return 'Firefox';
	} else if (ua.indexOf('Safari') > -1) {
		return 'Safari';
	} else if (ua.indexOf('MSIE') > -1) {
		return 'IE';
	} else if (ua.indexOf('Trident') > -1) {
		return 'IE';
	} else if (ua.indexOf('Edge' || 'Chrome') > -1) {
		return 'Edge';
	}

	// If the browser cannot be determined, log an error and return 'Unknown'.
	console.error(`Browser cannot be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

/**
 * The current browser determined based on the user agent string.
 */
const browser = getBrowser();

export { browser, getBrowser };
