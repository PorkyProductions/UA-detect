let browserDoNotTrack = navigator.doNotTrack

const getDoNotTrack = (browserDoNotTrack: any): "TRACKING_allowed" | "TRACKING_notAllowed" | "TRACKING_unspecified" => {
    if (browserDoNotTrack == 0) {
        return "TRACKING_allowed"
    };
    if (browserDoNotTrack == 1) {
        return "TRACKING_notAllowed"
    }
    if (browserDoNotTrack == "unspecified") {
        return "TRACKING_unspecified"
    }
    if (browserDoNotTrack == "null") {
        return "TRACKING_unspecified"
    }
}

let doNotTrackStatus = getDoNotTrack(browserDoNotTrack);

export { doNotTrackStatus, getDoNotTrack }