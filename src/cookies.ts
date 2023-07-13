
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
const cookies: boolean = getterForNavigator().cookieEnabled;

export type CookieStatus = 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown'

const getCookies = (): CookieStatus => {
	if (cookies === true) {
		return 'cookiesEnabled';
	} if (cookies === false) {
		return 'cookiesNotEnabled';
	}
	console.error(`Cookie status can not be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const cookieStatus = getCookies();

export { cookieStatus, getCookies };
