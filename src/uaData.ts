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

import type { OperatingSystem } from './operatingSystem';
interface Brand {
	readonly brand: string;
	readonly version: string;
}
export interface UserAgentData {
    readonly userAgentData: Brand[];
	readonly mobile: boolean;
	readonly platform: OperatingSystem
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// API exists, not implemented in lib.dom.d.ts
const userAgentData: UserAgentData = navigator.userAgentData;
const getUserAgentData = () => userAgentData;
export { userAgentData, getUserAgentData };