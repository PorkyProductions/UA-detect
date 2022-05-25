import { browser } from "./browser";

const getRam = (): number => {
    let RAM: number = navigator.deviceMemory;
    return RAM
};

const browserSpecificSupportRAM = (getRam) => {
    if (browser == "Chrome") {
        getRam();
    }
    if (browser == "Firefox") {
        throw new Error("RAM API not supported on Firefox\(UAD_301\)");
        
    }
    if (browser == "Safari") {
        throw new Error("RAM API not supported on Safari\(UAD_302\)");
        
    }
    if (browser == "IE") {
        throw new Error("RAM API not supported on IE\(UAD_303\)");
        
    }
    if (browser == "Opera") {
        getRam();
    }
};

let browserRam = browserSpecificSupportRAM(getRam);


export { browserRam, getRam, browserSpecificSupportRAM };