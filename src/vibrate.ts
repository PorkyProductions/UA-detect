import { browser } from './browser';
export const vibrate = (pattern: number[] | number | VibratePattern): 'success' | 'failure' => {
	if (browser === 'Safari') {
		console.error(`Vibration API not supported on Safari. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return 'failure';
	} else {
		const result: boolean = navigator.vibrate(pattern);
		if (result == true) {
			return 'success';
		} else {
			return 'failure';
		}
	}
};