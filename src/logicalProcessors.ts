import { browser } from "./browser";

const getProcessors = (): number => {
    return navigator.hardwareConcurrency;
}

const browserSpecificSupportCores = () => {
    if (browser === "Chrome") {
        return getProcessors();
    };
    if (browser === "Edge") {
        return getProcessors();
    }
    if (browser === "Firefox") {
        return getProcessors();
    }
    if (browser === "IE") {
        console.error("Not supported on this browser\(UAD_1301\)");
    }
    if (browser === "Opera") {
        return getProcessors();
    }
    if (browser === "Safari") {
        return getProcessors();
    }
    else {
        console.error("Not supported on this browser\(UAD_1301\)");
        
    }

}

let processorCores: any = browserSpecificSupportCores();

export { processorCores, browserSpecificSupportCores };