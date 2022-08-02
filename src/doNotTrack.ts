let browserDoNotTrack = navigator.doNotTrack

const getDoNotTrack = (browserDoNotTrack: any): "trackingAllowed" | "trackingNotAllowed" | "trackingUnspecified" | "ERROR" => {
    if (browserDoNotTrack == 0) {
        return "trackingAllowed"
    };
    if (browserDoNotTrack == 1) {
        return "trackingNotAllowed"
    }
    if (browserDoNotTrack == "unspecified") {
        return "trackingUnspecified"
    }
    if (browserDoNotTrack == "null") {
        return "trackingUnspecified"
    }
    else {
        console.error("Unknown doNotTrack value\(UAD_801\)");
        return "ERROR"
    }
}

let doNotTrackStatus = getDoNotTrack(browserDoNotTrack);

export { doNotTrackStatus, getDoNotTrack }