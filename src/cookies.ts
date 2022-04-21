let cookies: boolean = navigator.cookieEnabled

const detectCookies = (cookies: boolean): "COOKIES_enabled" | "COOKIES_notEnabled" | "ERROR" => {
    if (cookies == true) {
        return "COOKIES_enabled"
    };
    if (cookies == false) {
        return "COOKIES_notEnabled"
    }
    else {
        return "ERROR"
    }
}

let browserCookiesStatus = detectCookies(cookies);

export { browserCookiesStatus }
export { detectCookies }