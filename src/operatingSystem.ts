const getOS = ({ ua }: { ua; }): "Windows" | "Mac" | "Linux" | "Android" | "iOS" | "Unknown" => {
    if (ua.indexOf('Windows') > -1) {
        return 'Windows';
    }
    else if (ua.indexOf('Mac') > -1) {
        return 'Mac';
    }
    else if (ua.indexOf('Linux') > -1) {
        return 'Linux';
    }
    else if (ua.indexOf('Android') > -1) {
        return 'Android';
    }
    else if (ua.indexOf('iPhone') > -1) {
        return 'iOS';
    }
    else if (ua.indexOf('iPad') > -1) {
        return 'iOS';
    }
    else if (ua.indexOf('iPod') > -1) {
        return 'iOS';
    }
    else {
        console.error("Unknown Operating System\(UAD_1101\)");
        return "Unknown";
        
    }
}

let OS = getOS({ ua: navigator.userAgent });

export { OS, getOS }