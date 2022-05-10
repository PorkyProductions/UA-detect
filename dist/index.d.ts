declare module 'uadetect';

namespace uadetect {
    export interface UserAgent {
        ORIENTATION_isLandscape: boolean;
        DEVICE_type: string;
        DEVICE_finiteType: string;
    }
}
