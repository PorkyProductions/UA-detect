const cookies: boolean = navigator.cookieEnabled;

const getCookies = (): 'cookiesEnabled' | 'cookiesNotEnabled' | 'Unknown' => {
	if (cookies === true) {
		return 'cookiesEnabled';
	} else if (cookies === false) {
		return 'cookiesNotEnabled';
	} else {
		console.error(`Cookie status can not be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return 'Unknown';
	}
};

const cookieStatus = getCookies();

export { cookieStatus };
export { getCookies };