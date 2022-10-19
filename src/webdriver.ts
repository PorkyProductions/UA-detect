const webdriverControlled: boolean = navigator.webdriver;

export const getBots = (): 'robotControlled' | 'humanControlled' | 'ERROR' => {
	if (webdriverControlled) { 
		return 'robotControlled';
	}
	else {
		return 'humanControlled';
	}
};

const robotStatus: 'robotControlled' | 'humanControlled' | 'ERROR' = getBots();

export { robotStatus, webdriverControlled };