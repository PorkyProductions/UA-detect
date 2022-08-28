let appCodeName = window.navigator.appCodeName;
export const getCodeName = (appCodeName) => {
    if (appCodeName === 'Mozilla') {
        return 'mozilla';
    }
    else if (appCodeName === 'Microsoft') {
        return 'Microsoft';
    }
    else if (appCodeName === 'Apple Computer, Inc.') {
        return 'Apple';
    }
    else if (appCodeName === 'Google Inc.') {
        return 'Google';
    }
    else {
        console.error("Unknown appCodeName \(UAD_1601\)");
        return "Unknown";
    }
};
let codeName = getCodeName(appCodeName);
export { codeName };
