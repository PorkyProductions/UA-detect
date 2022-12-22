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
const ua = navigator.userAgent;

const getBrowser = (): 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined => {
	if (ua.indexOf('Opera') > -1) {
		return 'Opera';
	} if (ua.indexOf('Chrome') > -1) {
		return 'Chrome';
	} if (ua.indexOf('Firefox') > -1) {
		return 'Firefox';
	} if (ua.indexOf('Safari') > -1) {
		return 'Safari';
	} if (ua.indexOf('MSIE') > -1) {
		return 'IE';
	} if (ua.indexOf('Trident') > -1) {
		return 'IE';
	} if (ua.indexOf('Edge' || 'Chrome') > -1) {
		return 'Edge';
	}

	console.error(`Browser can not be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const browser = getBrowser();

export { browser, getBrowser };
