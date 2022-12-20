describe('cookies are detected', () => {
	const nav = navigator;
	const cookies = navigator.cookieEnabled;
	const getCookies = (cookies) => {
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
	test('calls the navigator object', () => {
		expect(nav).toEqual(window.navigator);
	}),
	test('checks for cookies', () => {
		expect(cookies).toBe(true || false);
	}),
	test('makes sure the correct returns are created by the functions', () => {
		expect(cookieStatus).toEqual('cookiesEnabled' || 'cookiesNotEnabled' || 'ERROR');
	});
});