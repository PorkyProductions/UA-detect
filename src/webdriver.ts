let webdriverControlled: boolean = navigator.webdriver

export const getBots = ({ webdriverControlled }: { webdriverControlled: boolean; }): "robotControlled" | "humanControlled" | "ERROR" => {
    if (webdriverControlled) { 
        return "robotControlled";
    }
    else {
        return "humanControlled";
    }
};

let robotStatus: "robotControlled" | "humanControlled" | "ERROR" = getBots({ webdriverControlled });

export { robotStatus, webdriverControlled };