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
const randomNumber = (): number => Math.round(Math.floor(Math.random() * 1000) + 1);
import { browser } from './browser';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getMemory = (): number => navigator.deviceMemory;

export const browserSpecificGetMemory = (): number | 'Unknown' | undefined => {
	if (browser === 'Chrome') {
		return getMemory();
	} if (browser === 'Edge') {
		return getMemory();
	} if (browser === 'Firefox') {
		console.error(`deviceMemory API not supported on Firefox (UAD_${randomNumber})`);
	} if (browser === 'Opera') {
		return getMemory();
	} if (browser === 'Safari') {
		console.error(`deviceMemory API not supported on Safari (UAD_${randomNumber})`);
	} else {
		return 'Unknown';
	}
	return;
};

export const deviceMemory = browserSpecificGetMemory();