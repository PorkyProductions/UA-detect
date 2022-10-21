const browserIsOnline: boolean = navigator.onLine;

export const getBrowserIsOnline = (): 'browserOnline' | 'browserOffline' => {
	if (browserIsOnline) {
		return 'browserOnline';
	} else {
		return 'browserOffline';
	}
};

const browserOnlineStatus = getBrowserIsOnline();


export { browserOnlineStatus };