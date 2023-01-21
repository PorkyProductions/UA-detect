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
import { browser } from './browser';

export type VibrateResult = 'success' | 'failure'

/**
 * vibrate
 * @param {(number[] | number | VibratePattern)} pattern
 * @returns {('success' | 'failure')}
 */
export const vibrate = (pattern: number[] | number | VibratePattern): VibrateResult => {
	if (browser === 'Safari') {
		console.error(`Vibration API not supported on Safari. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return 'failure';
	} else {
		const result: boolean = navigator.vibrate(pattern);
		if (result == true) {
			return 'success';
		} else {
			return 'failure';
		}
	}
};