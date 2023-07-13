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
/**
 * Register Service Worker
 * @param {(string | URL)} path
 * @param {?RegistrationOptions} [options]
 * @returns {void}
 */

export const registerServiceWorker = (path: string | URL, options?: RegistrationOptions): void => {
	if ('serviceWorker' in getterForNavigator()) {
		getterForNavigator().serviceWorker.register(path, options);
		return;
	} else {
		console.error(`Could not register a service worker. Check the URL or path provided. This also might be becuase the browser does not support it. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return;
	}
}; 