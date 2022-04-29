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
        throw new Error("ERR: Cookie status can not be determined \(UAD_201\)");
    }
};
let cookieStatus = getCookies(cookies);
export { cookieStatus };
export { getCookies };
