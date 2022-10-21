const ua = navigator.userAgent;


const getBrowser = (): 'Opera' | 'Chrome' | 'Firefox' | 'Safari' | 'IE' | 'Edge' | 'Unknown' | undefined => {
	if (ua.indexOf('Opera') > -1) {
		return 'Opera';
	} else if (ua.indexOf('Chrome') > -1) {
		return 'Chrome';
	} else if (ua.indexOf('Firefox') > -1) {
		return 'Firefox';
	} else if (ua.indexOf('Safari') > -1) {
		return 'Safari';
	} else if (ua.indexOf('MSIE') > -1) {
		return 'IE';
	} else if (ua.indexOf('Trident') > -1) {
		return 'IE';
	} else if (ua.indexOf('Edge') > -1) {
		return 'Edge';
	}
	else {
		console.error(`Browser can not be determined (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`); 
		'Unknown';
	}
	return;
};

const browser = getBrowser();

export { browser, getBrowser };