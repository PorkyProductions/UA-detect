let navigatorObjectDev = window.navigator;
const getterForNavigator = (navigatorObjectDev) => {
    return [
        {
            name: 'appCodeName',
            value: navigatorObjectDev.appCodeName
        },
        {
            name: 'appName',
            value: navigatorObjectDev.appName
        },
        {
            name: 'appVersion',
            value: navigatorObjectDev.appVersion
        },
        {
            name: 'cookieEnabled',
            value: navigatorObjectDev.cookieEnabled
        },
        {
            name: 'doNotTrack',
            value: navigatorObjectDev.doNotTrack
        },
        {
            name: 'geolocation',
            value: navigatorObjectDev.geolocation
        },
        {
            name: 'language',
            value: navigatorObjectDev.language
        },
        {
            name: 'onLine',
            value: navigatorObjectDev.onLine
        },
        {
            name: 'platform',
            value: navigatorObjectDev.platform
        },
        {
            name: 'product',
            value: navigatorObjectDev.product
        },
        {
            name: 'userAgent',
            value: navigatorObjectDev.userAgent
        },
        {
            name: 'vendor',
            value: navigatorObjectDev.vendor
        },
        {
            name: 'vendorSub',
            value: navigatorObjectDev.vendorSub
        },
        {
            name: 'webdriver',
            value: navigatorObjectDev.webdriver
        },
    ];
};
let navigatorObject = getterForNavigator(navigatorObjectDev);
export { navigatorObject };
