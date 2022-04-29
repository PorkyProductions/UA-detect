import { browser } from "./browser";
const getProcessors = () => {
    return navigator.hardwareConcurrency;
};
const browserSpecificSupportCores = () => {
    if (browser === "Chrome") {
        return getProcessors();
    }
    ;
    if (browser === "Edge") {
        return getProcessors();
    }
    if (browser === "Firefox") {
        return getProcessors();
    }
    if (browser === "IE") {
        throw new Error("Not supported on this browser\(UAD_1301\)");
    }
    if (browser === "Opera") {
        return getProcessors();
    }
    if (browser === "Safari") {
        return getProcessors();
    }
    else {
        throw new Error("Not supported on this browser\(UAD_1301\)");
    }
};
let processorCores = browserSpecificSupportCores();
export { processorCores, browserSpecificSupportCores };
