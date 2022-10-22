const randomNumber = (): number => Math.round(Math.floor(Math.random() * 1000) + 1);
import {browser} from './browser';
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