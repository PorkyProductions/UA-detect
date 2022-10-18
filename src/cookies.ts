const cookies: boolean = navigator.cookieEnabled;

const getCookies = (cookies: boolean): 'cookiesEnabled' | 'cookiesNotEnabled' | 'ERROR' => {
	if (cookies === true) {
		return 'cookiesEnabled';
	}
	if (cookies === false) {
		return 'cookiesNotEnabled';
	}
	else {
		console.error('ERR: Cookie status can not be determined (UAD_201)');
		return 'ERROR';
	}
};

const cookieStatus = getCookies(cookies);

export { cookieStatus };
export { getCookies };