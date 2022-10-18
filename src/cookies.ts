const cookies: boolean = navigator.cookieEnabled;

const getCookies = (): 'cookiesEnabled' | 'cookiesNotEnabled' | 'ERROR' => {
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

const cookieStatus = getCookies();

export { cookieStatus };
export { getCookies };