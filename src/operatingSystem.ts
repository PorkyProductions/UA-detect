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

import { getterForNavigator } from "./navigator";

export type OperatingSystem = 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown'

const ua = getterForNavigator().userAgent;
const getOS = (): OperatingSystem => {
	if (ua.indexOf('Windows') > -1) {
		return 'Windows';
	} if (ua.indexOf('Mac') > -1) {
		return 'Mac';
	} if (ua.indexOf('Linux') > -1) {
		return 'Linux';
	} if (ua.indexOf('Android') > -1) {
		return 'Android';
	} if (ua.indexOf('iPhone') > -1) {
		return 'iOS';
	} if (ua.indexOf('iPad') > -1) {
		return 'iOS';
	} if (ua.indexOf('iPod') > -1) {
		return 'iOS';
	}
	console.error(`Unknown Operating System (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const OS = getOS();

export { OS, getOS };
