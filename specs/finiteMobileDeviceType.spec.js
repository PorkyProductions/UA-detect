function finiteMobileDeviceType() {
    const ua = navigator.userAgent;
    if (/(iPhone|iPod|iPad)/i.test(ua)) {
        console.log('iOS');
        return 'iOS';
    }
    if (/Android/i.test(ua)) {
        console.log('Android');
        return 'Android';
    }
    if (/BlackBerry/i.test(ua)) {
        console.log('BlackBerry');
        return 'BlackBerry';
    }
    if (/Windows Phone/i.test(ua)) {
        console.log('Windows Phone');
        return 'Windows Phone';
    }
    if (/webOS/i.test(ua)) {
        console.log('webOS');
        return 'webOS';
    }

    console.error(`Unknown device type (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
    return 'Unknown';
}
const finiteDeviceType = finiteMobileDeviceType();
describe('finiteMobileDeviceType', () => {
    let mockNavigator;

    beforeEach(() => {
        mockNavigator = {};
        jest.spyOn(navigator, 'userAgent', 'get').mockImplementation(() => mockNavigator.userAgent);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('detects iOS devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
        expect(finiteMobileDeviceType()).toBe('iOS');
    });

    test('detects Android devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Mobile Safari/537.36';
        expect(finiteMobileDeviceType()).toBe('Android');
    });

    test('detects BlackBerry devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9320; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+';
        expect(finiteMobileDeviceType()).toBe('BlackBerry');
    });

    test('detects Windows Phone devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)';
        expect(finiteMobileDeviceType()).toBe('Windows Phone');
    });

    test('detects webOS devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (webOS/1.4.0; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.1';
        expect(finiteMobileDeviceType()).toBe('webOS');
    });

    test('detects unknown devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
        expect(finiteMobileDeviceType()).toBe('Unknown');
    });
});

