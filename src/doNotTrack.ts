const browserDoNotTrack: number | string | unknown = navigator.doNotTrack;

const getDoNotTrack = (): 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified' | 'Unknown' => {
	if (browserDoNotTrack == 0) {
		return 'trackingAllowed';
	} else if (browserDoNotTrack == 1) {
		return 'trackingNotAllowed';
	} else if (browserDoNotTrack == 'unspecified') {
		return 'trackingUnspecified';
	} else if (browserDoNotTrack == 'null') {
		return 'trackingUnspecified';
	} else {
		console.error(`Unknown doNotTrack value (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return 'Unknown';
	}
};

const doNotTrackStatus = getDoNotTrack();

export { doNotTrackStatus, getDoNotTrack };