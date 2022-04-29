import { DEVICE_type } from "uadetect";

const downloadButtonHeader: HTMLElement = document.querySelector("download");

if (DEVICE_type === "mobile") {
    downloadButtonHeader.style.display = "none";
}

