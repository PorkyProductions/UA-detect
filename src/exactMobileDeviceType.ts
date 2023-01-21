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

export type __ExactMobileDeviceType = 'iOS' | 'Android' | 'BlackBerry' | 'Windows Phone' | 'webOS' | 'Unknown' | Error


export default function ExactMobileDeviceType(): __ExactMobileDeviceType {
	const ua = navigator.userAgent;
	if (/(iPhone|iPod|iPad)/i.test(ua)) {
		console.log('iOS');
		return 'iOS';
	}
	if (/Android/i.test(ua)) {
		console.log('Android');
		return 'Android';
	}
	if (/BlackBerry/i.test(ua)) {
		console.log('BlackBerry');
		return 'BlackBerry';
	}
	if (/Windows Phone/i.test(ua)) {
		console.log('Windows Phone');
		return 'Windows Phone';
	}
	if (/webOS/i.test(ua)) {
		console.log('webOS');
		return 'webOS';
	}

	console.error(`Unknown device type (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
}
export const exactMobileDeviceType = ExactMobileDeviceType();