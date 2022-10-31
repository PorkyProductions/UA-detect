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

const getProcessors = (): number => navigator.hardwareConcurrency;

const randomNumber = (): number => Math.round(Math.floor(Math.random() * 1000) + 1);

const browserSpecificSupportCores = (): number | undefined => {
	if (browser === 'Chrome') {
		return getProcessors();
	} if (browser === 'Edge') {
		return getProcessors();
	} if (browser === 'Firefox') {
		return getProcessors();
	} if (browser === 'IE') {
		console.error(`Not supported on this browser (UAD_${randomNumber()})`);
	} else if (browser === 'Opera') {
		return getProcessors();
	} else if (browser === 'Safari') {
		return getProcessors();
	} else {
		console.error(`Not supported on this browser (UAD_${randomNumber()})`);
	}
	return;
};

const processorCores: number | undefined | unknown = browserSpecificSupportCores();

export { processorCores, browserSpecificSupportCores };
