import { browser } from './browser';

const getProcessors = (): number => {
	return navigator.hardwareConcurrency;
};

const randomNumber = (): number => Math.round(Math.floor(Math.random() * 1000) + 1);

const browserSpecificSupportCores = (): number | undefined => {
	if (browser === 'Chrome') {
		return getProcessors();
	} else if (browser === 'Edge') {
		return getProcessors();
	} else if (browser === 'Firefox') {
		return getProcessors();
	} else if (browser === 'IE') {
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