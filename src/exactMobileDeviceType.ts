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

import { getCurrentUA } from './getCurrentUA';

/**
 * Represents the possible exact mobile device types.
 */
export type ExactMobileDeviceType = 'iOS' | 'Android' | 'BlackBerry' | 'Windows Phone' | 'webOS' | 'Unknown' | Error;

/**
 * Gets the exact mobile device type based on the user agent.
 * @returns The exact mobile device type.
 */
export default function getExactMobileDeviceType(): ExactMobileDeviceType {
	const ua = getCurrentUA();

	if (/(iPhone|iPod|iPad)/i.test(ua)) {
		return 'iOS';
	} else if (/Android/i.test(ua)) {
		return 'Android';
	} else if (/BlackBerry/i.test(ua)) {
		return 'BlackBerry';
	} else if (/Windows Phone/i.test(ua)) {
		return 'Windows Phone';
	} else if (/webOS/i.test(ua)) {
		return 'webOS';
	}

	// If the device type cannot be determined, log an error and return 'Unknown'.
	console.error(`Unknown device type (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
}

/**
 * The exact mobile device type determined based on the user agent.
 */
export const exactMobileDeviceType = getExactMobileDeviceType();
