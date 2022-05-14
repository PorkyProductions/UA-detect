import {
    DEVICE_type,
    OS,
    browser,
    cookieStatus,
    doNotTrackStatus,
    robotStatus
} from 'uadetect'


const example = document.getElementById('example')


example.innerHTML = `We think you are using a ${DEVICE_type} device on a ${OS} operating system. <br> Your browser is ${browser} and your cookie status is ${cookieStatus}. <br> Your do not track status is ${doNotTrackStatus}. <br> Your robot status is ${robotStatus}.`