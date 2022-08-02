let browserIsOnline: boolean = navigator.onLine;

export const getBrowserIsOnline = ({ browserIsOnline }: { browserIsOnline: boolean; }): "BROWSER_online" | "BROWSER_offline" => {
    if (browserIsOnline) {
        return "browserOnline";
    }
    else {
        return "browserOffline";
    }
}

let browserOnlineStatus = getBrowserIsOnline({ browserIsOnline });


export { browserOnlineStatus };