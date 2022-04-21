﻿import { browser } from "./browser";

const getRam = (): number => {
    let RAM: number = navigator.deviceMemory;
    return RAM
};

const browserSpecificChanges = (getRam) => {
    if (browser == "Chrome") {
        getRam();
    }
    if (browser == "Firefox") {
        return "RAM API not availible in Firefox";
    }
    if (browser == "Safari") {
        return "RAM API not availible in Safari";
    }
    if (browser == "IE") {
        return "RAM API not availible in IE";
    }
    if (browser == "Opera") {
        getRam();
    }
};

let browserRam = browserSpecificChanges(getRam);


export { browserRam, getRam, browserSpecificChanges };