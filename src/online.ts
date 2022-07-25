let browserIsOnline: boolean = navigator.onLine;

export const getBrowserIsOnline = ({ browserIsOnline }: { browserIsOnline: boolean; }): "BROWSER_online" | "BROWSER_offline" => {
    if (browserIsOnline) {
        return "BROWSER_online";
    }
    else {
        return "BROWSER_offline";
    }
}

let browserOnlineStatus = getBrowserIsOnline({ browserIsOnline });


export { browserOnlineStatus };