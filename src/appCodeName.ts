let appCodeName = window.navigator.appCodeName

const getCodeName = (appCodeName): String | 'mozilla' | 'Microsoft' | 'Apple' | 'Google' | Error => {
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
        console.error("Unknown appCodeName \(UAD_1601\)");
        return "Unknown"
    }
}

let codeName = getCodeName(appCodeName);


export { codeName }