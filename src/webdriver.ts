
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
const webdriverControlled: boolean = getterForNavigator().webdriver;

export type RobotStatus = 'robotControlled' | 'humanControlled' | 'Unknown'

export const getBots = (): RobotStatus => {
	if (webdriverControlled) {
		return 'robotControlled';
	}
	return 'humanControlled';
};

const robotStatus: RobotStatus = getBots();

export { robotStatus, webdriverControlled };
