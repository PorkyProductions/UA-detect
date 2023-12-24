/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { permissionGranted } from './permissions';

/**
 * Gets text content from the clipboard.
 * @returns A promise that resolves to the clipboard text or void if not available.
 */
export const getClipboardText = async (): Promise<string | void> => {
	/*
      If the browser is chromium based, we must check for permissions
  */
	if (
		browser === 'Brave' ||
    browser === 'Chrome' ||
    browser === 'Edge' ||
    browser === 'Opera'
	) {
		// @ts-ignore
		if (await permissionGranted('clipboard-read')) {
			return await getterForNavigator().clipboard.readText() as string;
		} else {
			console.error('Permission to read from the clipboard was denied by the user or is unavailable');
			return;
		}
		// If it's not, then we just perform the operation as normal
	} else {
		return await getterForNavigator().clipboard.readText() as string;
	}
};

/**
 * Sets text content to the clipboard.
 * @param text - The text to be set to the clipboard.
 * @returns A promise that resolves when the text is successfully set.
 */
export const setClipboardText = async (text: string): Promise<void> => {
	if (
		browser === 'Brave' ||
    browser === 'Chrome' ||
    browser === 'Edge' ||
    browser === 'Opera'
	) {
		// @ts-ignore
		if (await permissionGranted('clipboard-write')) {
			return await getterForNavigator().clipboard.writeText(text);
		} else {
			console.error('Permission to write to the clipboard was denied by the user or is unavailable');
			return;
		}
	} else {
		await getterForNavigator().clipboard.writeText(text);
	}
	return;
};

/**
 * Gets advanced content from the clipboard.
 * @returns A promise that resolves to the clipboard items or void if not available.
 */
export const getClipboardAdvanced = async (): Promise<ClipboardItems | void> => {
	if (
		browser === 'Brave' ||
    browser === 'Chrome' ||
    browser === 'Edge' ||
    browser === 'Opera'
	) {
		// @ts-ignore
		if (await permissionGranted('clipboard-read')) {
			return await getterForNavigator().clipboard.read() as ClipboardItems;
		} else {
			console.error('Permission to read from the clipboard was denied by the user or is unavailable');
			return;
		}
	} else {
		return await getterForNavigator().clipboard.read() as ClipboardItems;
	}
};

/**
 * Sets advanced content to the clipboard.
 * @param items - The items to be set to the clipboard.
 * @returns A promise that resolves when the items are successfully set.
 */
export const setClipboardAdvanced = async (items: ClipboardItems): Promise<void> => {
	if (
		browser === 'Brave' ||
    browser === 'Chrome' ||
    browser === 'Edge' ||
    browser === 'Opera'
	) {
		// @ts-ignore
		if (await permissionGranted('clipboard-write')) {
			await getterForNavigator().clipboard.write(items);
		} else {
			console.error('Permission to write to the clipboard was denied by the user or is unavailable');
			return;
		}
	} else {
		await getterForNavigator().clipboard.write(items);
	}
	return;
};
