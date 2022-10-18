const appVersion = window.navigator.appVersion;


export const getAppVersion = (): string | number | Error | 'Unknown' => {
	if (appVersion in navigator) {
		return appVersion;
	}
	else {
		console.error('No app version detected. (UAD_1801)');
		return 'Unknown';
	}
};

const version = getAppVersion();

export {version};