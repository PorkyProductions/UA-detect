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
import { browser } from './browser';

export const canShareData = (data?: ShareData): boolean => {
	if (browser === 'Firefox') {
		console.error(`canShareData API not supported on Firefox. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return false;
	} else {
		const result = getterForNavigator().canShare(data);
		if (result === true) {
			return true;
		} else {
			return false;
		}
	}
};