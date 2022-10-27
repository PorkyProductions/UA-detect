import { browser } from './browser'

export const canShareData = (data?: ShareData): boolean => {
    if (browser === 'Firefox') {
        console.error(`canShareData API not supported on Firefox. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
        return false;
    } else {
        const result = window.navigator.canShare(data)
        if (result === true) {
            return true;
        } else {
            return false;
        }
    }
}