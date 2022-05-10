declare module 'uadetect';

namespace uadetect {
    export interface UserAgent {
        browser: string;
        buildNumber: number;
        cookies: boolean;
        doNotTrack: boolean;
        finiteMobileDeviceType: string;