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
 * Indicates whether cookies are enabled in the browser.
 */
const cookies: boolean = getterForNavigator().cookieEnabled;

/**
 * Represents the possible states of cookie status.
 */
export type CookieStatus = 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown';

/**
 * Gets the current status of cookies.
 * @returns The current cookie status.
 */
const getCookies = (): CookieStatus => {
	if (cookies === true) {
		return 'cookiesEnabled';
	} else if (cookies === false) {
		return 'cookiesNotEnabled';
	}

	// If the cookie status cannot be determined, log an error and return 'Unknown'.
	console.error(`Cookie status cannot be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

/**
 * The current status of cookies determined based on the browser.
 */
const cookieStatus = getCookies();

export { cookieStatus, getCookies };
