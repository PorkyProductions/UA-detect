const ua = navigator.userAgent;
const getOS = (): 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown' => {
	if (ua.indexOf('Windows') > -1) {
		return 'Windows';
	} if (ua.indexOf('Mac') > -1) {
		return 'Mac';
	} if (ua.indexOf('Linux') > -1) {
		return 'Linux';
	} if (ua.indexOf('Android') > -1) {
		return 'Android';
	} if (ua.indexOf('iPhone') > -1) {
		return 'iOS';
	} if (ua.indexOf('iPad') > -1) {
		return 'iOS';
	} if (ua.indexOf('iPod') > -1) {
		return 'iOS';
	}
	console.error(`Unknown Operating System (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const OS = getOS();

export { OS, getOS };
