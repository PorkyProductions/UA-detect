/*

Copyright © 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/

//SCREEN ORIENTATION
let ORIENTATION_isLandscape = true;
$(document).ready(function () {
    DetectScreenOrientation();
})
$(window).on("orientationchange", function (event) {
    //When screen orientation changes
    DetectScreenOrientation();

});
const DetectScreenOrientation = () => {
    //detects orientation of device
    ORIENTATION_isLandscape = (window.innerHeight <= window.innerWidth);
    return ORIENTATION_isLandscape;
}
//DEVICE TYPE
function DetectDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/(iPhone|iPod|iPad)/i.test(ua) || /(android)/i.test(ua) || /(windows phone)/i.test(ua) || /(blackberry)/i.test(ua) || /(bb10)/i.test(ua) || /(opera mini)/i.test(ua) || /(opera mobi)/i.test(ua) || /(iemobile)/i.test(ua) || /(symbian)/i.test(ua) || /(maemo)/i.test(ua) || /(webos)/i.test(ua) || /(mobile)/i.test(ua) || /(tablet)/i.test(ua) || /(symbianos)/i.test(ua) || /(up.browser)/i.test(ua) || /(up.link)/i.test(ua) || /(mmp)/i.test(ua) || /(symbianos)/i.test(ua) || /(midp)/i.test(ua) || /(wap)/i.test(ua) || /(phone)/i.test(ua) || /(pocket)/i.test(ua) || /(mobile)/i.test(ua) || /(pda)/i.test(ua) || /(avantgo)/i.test(ua) || /(eudoraweb)/i.test(ua) || /(brew)|(bada)/i.test(ua) || /(blackberry)/i.test(ua) || /(hpwos)/i.test(ua) || /(kindle)/i.test(ua) || /(lge.netcast)/i.test(ua) || /(lg;lx)|(lg;lx)/i.test(ua) || /(lge.netcast)/i.test(ua) || /(nintendo.3ds)/i.test(ua) || /(nintendo.ds)/i.test(ua) || /(nintendo.wiiu)/i.test(ua) || /(nintendo.wii)/i.test(ua) || /(playstation.3ds)/i.test(ua) || /(playstation.ds)/i.test(ua) || /(playstation.wiiu)/i.test(ua) || /(playstation.wii)/i.test(ua) || /(webos)/i.test(ua)) {
        return "mobile";
        // add "| /(firefox)/i.test(ua) |" if you want to detect Firefox (not tested for mobile)
    }
    else {
        return "desktop";
    }

}
let DEVICE_type = DetectDeviceType();

function finiteMobileDeviceType() {
    if (/(iPhone|iPod|iPad)/i.test(ua)) {
        console.log("iOS");
        return "iOS";
    }
    else if (/Android/i.test(ua)) {
        console.log("Android");
        return "Android";
    }
    else if (/BlackBerry/i.test(ua)) {
        console.log("BlackBerry");
        return "BlackBerry";
    }
    else if (/Windows Phone/i.test(ua)) {
        console.log("Windows Phone");
        return "Windows Phone";
    }
    else if (/webOS/i.test(ua)) {
        console.log("webOS");
        return "webOS";
    }
    else {
        console.log("ERR: Unknown Device");
        return "unknown";
    }
}

let DEVICE_finiteType = finiteMobileDeviceType();


// Exports


// Make the functions accessible

export { DetectScreenOrientation, DetectDeviceType, finiteMobileDeviceType };


// As well as the returns on those functions

export { ORIENTATION_isLandscape, DEVICE_type, DEVICE_finiteType };