
import { browser } from './browser';
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
		const result = await navigator.permissions.query({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			name: 'clipboard-read',
		});
		if (result.state === 'granted' || result.state === 'prompt') {
			const clipText = await navigator.clipboard.readText();
			return clipText as string;
		} else {
			return console.error('Permission to read from the clipboard was denied by the user or is unavilable');
		}
		// If it's not then we just perform the operation as normal
	} else {
		const clipText = await navigator.clipboard.readText();
		return clipText as string;
	}
};

export const setClipboardText = async (text: string): Promise<void> => {
	if (
		browser === 'Brave' || 
            browser === 'Chrome' || 
            browser === 'Edge' || 
            browser === 'Opera'
	) {
		const result = await navigator.permissions.query({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			name: 'clipboard-write',
		});
		if (result.state === 'granted' || result.state === 'prompt') {
			await navigator.clipboard.writeText(text);
		} else {
			return console.error(
				'Permission to write to the clipboard was denied by the user or is unavilable'
			);
		}
	} else {
		await navigator.clipboard.writeText(text);
	}
	return;
};

export const getClipboardAdvanced = async (): Promise<ClipboardItems | void> => {
	if (
		browser === 'Brave' ||
        browser === 'Chrome' ||
        browser === 'Edge' ||
        browser === 'Opera'
	) {
		const result = await navigator.permissions.query({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			name: 'clipboard-read',
		});
		if (result.state === 'granted' || result.state === 'prompt') {
			const clipText = await navigator.clipboard.read();
			return clipText as ClipboardItems;
		} else {
			return console.error(
				'Permission to read from the clipboard was denied by the user or is unavilable'
			);
		}
	} else {
		const clipText = await navigator.clipboard.read();
		return clipText as ClipboardItems;
	}
};

export const setClipboardAdvanced = async (items: ClipboardItems): Promise<void> => {
	if (
		browser === 'Brave' ||
    browser === 'Chrome' ||
    browser === 'Edge' ||
    browser === 'Opera'
	) {
		const result = await navigator.permissions.query({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			name: 'clipboard-write',
		});
		if (result.state === 'granted' || result.state === 'prompt') {
			await navigator.clipboard.write(items);
		} else {
			return console.error(
				'Permission to write to the clipboard was denied by the user or is unavilable'
			);
		}
	} else {
		await navigator.clipboard.write(items);
	}
	return;
};