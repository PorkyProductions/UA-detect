const { appVersion } = window.navigator;

export const getAppVersion = (): string | number | Error | 'Unknown' => {
	if (appVersion in navigator) {
		return appVersion;
	}
	console.error(`No app version detected. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const version = getAppVersion();

export { version };
