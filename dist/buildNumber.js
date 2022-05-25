import { browser } from "./browser";
let buildID = navigator.buildID;
const browserSpecificSupportBuildID = (buildID) => {
    if (browser === "Chrome") {
        throw new Error("Not supported on Chrome\(UAD_1501\)");
    }
    if (browser === "Edge") {
        throw new Error("Not supported on Edge\(UAD_1502\)");
    }
    if (browser === "Firefox") {
        return buildID;
    }
    if (browser === "IE") {
        throw new Error("Not supported on IE\(UAD_1503\)");
    }
    if (browser === "Opera") {
        throw new Error("Not supported on Opera\(UAD_1504\)");
    }
    if (browser === "Safari") {
        throw new Error("Not supported on Safari\(UAD_1505\)");
    }
};
let buildNumber = browserSpecificSupportBuildID(buildID);
export { buildNumber, browserSpecificSupportBuildID };
