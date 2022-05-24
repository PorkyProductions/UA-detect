let appCodeName = window.navigator.appCodeName

const getCodeName = (appCodeName) => {
    if (appCodeName === 'Mozilla') {
        return 'Firefox'
    }
    else if (appCodeName === 'Microsoft') {
        return 'Edge'
    }
    else if (appCodeName === 'Apple Computer, Inc.') {
        return 'Safari'
    }
    else if (appCodeName === 'Google Inc.') {
        return 'Chrome'
    }
    else {
        throw new Error("Unknown appCodeName")  // throw error;
        
    }
}