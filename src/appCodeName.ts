let appCodeName = window.navigator.appCodeName

const getCodeName = (appCodeName) => {
    if (appCodeName === 'Mozilla') {
        return 'mozilla'
    }
    else if (appCodeName === 'Microsoft') {
        return 'Microsoft'
    }
    else if (appCodeName === 'Apple Computer, Inc.') {
        return 'Apple'
    }
    else if (appCodeName === 'Google Inc.') {
        return 'Google'
    }
    else {
        throw new Error("Unknown appCodeName")  // throw error;
        
    }
}