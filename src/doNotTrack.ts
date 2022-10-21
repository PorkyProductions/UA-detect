const browserDoNotTrack: number | string | unknown = navigator.doNotTrack;

const getDoNotTrack = (): 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified' | 'Unknown' => {
	if (browserDoNotTrack == 0) {
		return 'trackingAllowed';
	} if (browserDoNotTrack == 1) {
		return 'trackingNotAllowed';
	} if (browserDoNotTrack == 'unspecified') {
		return 'trackingUnspecified';
	} if (browserDoNotTrack == 'null') {
		return 'trackingUnspecified';
	}
	console.error(`Unknown doNotTrack value (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const doNotTrackStatus = getDoNotTrack();

export { doNotTrackStatus, getDoNotTrack };
