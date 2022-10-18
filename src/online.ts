const browserIsOnline: boolean = navigator.onLine;

export const getBrowserIsOnline = ({ browserIsOnline }: { browserIsOnline: boolean; }): 'browserOnline' | 'browserOffline' => {
	if (browserIsOnline) {
		return 'browserOnline';
	}
	else {
		return 'browserOffline';
	}
};

const browserOnlineStatus = getBrowserIsOnline({ browserIsOnline });


export { browserOnlineStatus };