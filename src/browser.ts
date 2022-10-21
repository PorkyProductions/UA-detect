const ua = navigator.userAgent;

const getBrowser = (): 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined => {
	if (ua.indexOf('Opera') > -1) {
		return 'Opera';
	} if (ua.indexOf('Chrome') > -1) {
		return 'Chrome';
	} if (ua.indexOf('Firefox') > -1) {
		return 'Firefox';
	} if (ua.indexOf('Safari') > -1) {
		return 'Safari';
	} if (ua.indexOf('MSIE') > -1) {
		return 'IE';
	} if (ua.indexOf('Trident') > -1) {
		return 'IE';
	} if (ua.indexOf('Edge') > -1) {
		return 'Edge';
	}

	console.error(`Browser can not be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	'Unknown';
};

const browser = getBrowser();

export { browser, getBrowser };
