import { browser } from "./browser";


const getProcessors = (): number => {
    return navigator.hardwareConcurrency;
}

let processorCores = getProcessors();

const browserSpecificSupportCores = () => {
    if (browser === "Edge") {
        processorCores = 1;
    }
}