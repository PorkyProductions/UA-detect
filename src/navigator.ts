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
const navigatorObjectDev: Navigator = window.navigator;

export const getterForNavigator = (): object[] => [
	{
		name: 'appCodeName',
		value: navigatorObjectDev.appCodeName,
	},
	{
		name: 'appName',
		value: navigatorObjectDev.appName,
	},
	{
		name: 'appVersion',
		value: navigatorObjectDev.appVersion,
	},
	{
		name: 'cookieEnabled',
		value: navigatorObjectDev.cookieEnabled,
	},
	{
		name: 'doNotTrack',
		value: navigatorObjectDev.doNotTrack,
	},
	{
		name: 'geolocation',
		value: navigatorObjectDev.geolocation,
	},
	{
		name: 'language',
		value: navigatorObjectDev.language,
	},
	{
		name: 'onLine',
		value: navigatorObjectDev.onLine,
	},
	{
		name: 'platform',
		value: navigatorObjectDev.platform,
	},
	{
		name: 'product',
		value: navigatorObjectDev.product,
	},
	{
		name: 'userAgent',
		value: navigatorObjectDev.userAgent,
	},
	{
		name: 'vendor',
		value: navigatorObjectDev.vendor,
	},
	{
		name: 'vendorSub',
		value: navigatorObjectDev.vendorSub,
	},
	{
		name: 'webdriver',
		value: navigatorObjectDev.webdriver,
	},
];
const navigatorObject = getterForNavigator();

export { navigatorObject };
