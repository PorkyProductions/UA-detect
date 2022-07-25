let webdriverControlled: boolean = navigator.webdriver

export const getBots = ({ webdriverControlled }: { webdriverControlled: boolean; }): "ROBOT_controlled" | "HUMAN_controlled" | "ERROR" => {
    if (webdriverControlled) { 
        return "ROBOT_controlled";
    }
    else {
        return "HUMAN_controlled";
    }
};

let robotStatus: "ROBOT_controlled" | "HUMAN_controlled" | "ERROR" = getBots({ webdriverControlled });

export { robotStatus, webdriverControlled };