let cookies = navigator.cookieEnabled;
const getCookies = (cookies) => {
    if (cookies === true) {
        return "COOKIES_enabled";
    }
    ;
    if (cookies === false) {
        return "COOKIES_notEnabled";
    }
    else {
        console.error("ERR: Cookie status can not be determined \(UAD_201\)");
        return "ERROR";
    }
};
let cookieStatus = getCookies(cookies);
export { cookieStatus };
export { getCookies };
