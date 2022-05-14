import { DEVICE_type, OS } from "uadetect";

const downloadButtonHeader: HTMLElement = document.querySelector("download");

if (DEVICE_type === "mobile") {
    downloadButtonHeader.style.display = "none";
}

if (DEVICE_type === "mobile") {
    document.getElementById("snippet").style.display = "none";
}

if (OS === "iOS") {
    document.getElementById("snippet").style.display = "none";
}

if (OS === "Android") {
    document.getElementById("snippet").style.display = "none";
}

