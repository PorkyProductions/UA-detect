let appVersion = window.navigator.appVersion;
const getAppVersion = (appVersion) => {
    if (appVersion in navigator) {
        return appVersion;
    }
    else {
        throw new Error("No app version detected. \(UAD_1801\)");
    }
};
let version = getAppVersion(appVersion);
export { version };
