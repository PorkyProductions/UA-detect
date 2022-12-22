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

// DEVICE TYPE
function DetectDeviceType(): 'tablet' | 'mobile' | 'desktop' {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return 'tablet';
	} if (
		/(iPhone|iPod|iPad)/i.test(ua)
    || /(android)/i.test(ua)
    || /(windows phone)/i.test(ua)
    || /(blackberry)/i.test(ua)
    || /(bb10)/i.test(ua)
    || /(opera mini)/i.test(ua)
    || /(opera mobi)/i.test(ua)
    || /(iemobile)/i.test(ua)
    || /(symbian)/i.test(ua)
    || /(maemo)/i.test(ua)
    || /(webos)/i.test(ua)
    || /(mobile)/i.test(ua)
    || /(tablet)/i.test(ua)
    || /(symbianos)/i.test(ua)
    || /(up.browser)/i.test(ua)
    || /(up.link)/i.test(ua)
    || /(mmp)/i.test(ua)
    || /(symbianos)/i.test(ua)
    || /(midp)/i.test(ua)
    || /(wap)/i.test(ua)
    || /(phone)/i.test(ua)
    || /(pocket)/i.test(ua)
    || /(mobile)/i.test(ua)
    || /(pda)/i.test(ua)
    || /(avantgo)/i.test(ua)
    || /(eudoraweb)/i.test(ua)
    || /(brew)|(bada)/i.test(ua)
    || /(blackberry)/i.test(ua)
    || /(hpwos)/i.test(ua)
    || /(kindle)/i.test(ua)
    || /(lge.netcast)/i.test(ua)
    || /(lg;lx)|(lg;lx)/i.test(ua)
    || /(lge.netcast)/i.test(ua)
    || /(nintendo.3ds)/i.test(ua)
    || /(nintendo.ds)/i.test(ua)
    || /(nintendo.wiiu)/i.test(ua)
    || /(nintendo.wii)/i.test(ua)
    || /(playstation.3ds)/i.test(ua)
    || /(playstation.ds)/i.test(ua)
    || /(playstation.wiiu)/i.test(ua)
    || /(playstation.wii)/i.test(ua)
    || /(webos)/i.test(ua)
	) {
		return 'mobile';
		// add "| /(firefox)/i.test(ua) |" if you want to detect Firefox (not tested for mobile)
	}
	return 'desktop';
}
const DEVICE_type = DetectDeviceType();

export { DEVICE_type, DetectDeviceType };
