const webdriverControlled: boolean = navigator.webdriver;

export const getBots = (): 'robotControlled' | 'humanControlled' | 'Unknown' => {
	if (webdriverControlled) { 
		return 'robotControlled';
	} else {
		return 'humanControlled';
	}
};

const robotStatus: 'robotControlled' | 'humanControlled' | 'Unknown' = getBots();

export { robotStatus, webdriverControlled };