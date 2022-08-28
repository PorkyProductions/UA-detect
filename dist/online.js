let browserIsOnline = navigator.onLine;
export const getBrowserIsOnline = ({ browserIsOnline }) => {
    if (browserIsOnline) {
        return "browserOnline";
    }
    else {
        return "browserOffline";
    }
};
let browserOnlineStatus = getBrowserIsOnline({ browserIsOnline });
export { browserOnlineStatus };
