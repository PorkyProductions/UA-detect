const browserIsOnline: boolean = navigator.onLine;

export const getBrowserIsOnline = (): 'browserOnline' | 'browserOffline' => {
	if (browserIsOnline) {
		return 'browserOnline';
	}
	return 'browserOffline';
};

const browserOnlineStatus = getBrowserIsOnline();

export { browserOnlineStatus };
