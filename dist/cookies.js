let cookies = navigator.cookieEnabled;
const getCookies = (cookies) => {
    if (cookies === true) {
        return "cookiesEnabled";
    }
    ;
    if (cookies === false) {
        return "cookiesNotEnabled";
    }
    else {
        console.error("ERR: Cookie status can not be determined \(UAD_201\)");
        return "ERROR";
    }
};
let cookieStatus = getCookies(cookies);
export { cookieStatus };
export { getCookies };
