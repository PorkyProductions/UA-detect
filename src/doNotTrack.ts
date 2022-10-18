const browserDoNotTrack: number | string | any = navigator.doNotTrack;

const getDoNotTrack = (): 'trackingAllowed' | 'trackingNotAllowed' | 'trackingUnspecified' | 'ERROR' => {
	if (browserDoNotTrack == 0) {
		return 'trackingAllowed';
	}
	if (browserDoNotTrack == 1) {
		return 'trackingNotAllowed';
	}
	if (browserDoNotTrack == 'unspecified') {
		return 'trackingUnspecified';
	}
	if (browserDoNotTrack == 'null') {
		return 'trackingUnspecified';
	}
	else {
		console.error('Unknown doNotTrack value (UAD_801)');
		return 'ERROR';
	}
};

const doNotTrackStatus = getDoNotTrack();

export { doNotTrackStatus, getDoNotTrack };