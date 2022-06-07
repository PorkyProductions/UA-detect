let appVersion = window.navigator.appVersion;


const getAppVersion = (appVersion): number | Error | "Unknown" => {
    if (appVersion in navigator) {
        return appVersion
    }
    else {
        console.error("No app version detected. \(UAD_1801\)");
        return "Unknown";
    }
}

let version = getAppVersion(appVersion);

export {version};