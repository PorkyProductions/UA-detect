let webdriverControlled = navigator.webdriver;
export const getBots = ({ webdriverControlled }) => {
    if (webdriverControlled) {
        return "ROBOT_controlled";
    }
    else {
        return "HUMAN_controlled";
    }
};
let robotStatus = getBots({ webdriverControlled });
export { robotStatus, webdriverControlled };
