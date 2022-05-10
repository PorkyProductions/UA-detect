declare module 'uadetect';

export interface uadetect {
    ORIENTATION_isLandscape: boolean;
    DEVICE_type: string;
    DEVICE_finiteType: string;
    cookieStatus: boolean;
    doNotTrackStatus: boolean;
    browser: string;
    browserRam: number;
    buildNumber: number;
    processorCores: number;
    maxTouchPoints: number;
    browserOnlineStatus: boolean;
    PDFviewerStatus: boolean;
    robotStatus: boolean;
    OS: string;
}
