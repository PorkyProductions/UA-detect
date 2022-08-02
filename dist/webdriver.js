let webdriverControlled = navigator.webdriver;
export const getBots = ({ webdriverControlled }) => {
    if (webdriverControlled) {
        return "robotControlled";
    }
    else {
        return "humanControlled";
    }
};
let robotStatus = getBots({ webdriverControlled });
export { robotStatus, webdriverControlled };
