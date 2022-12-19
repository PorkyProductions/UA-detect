function DetectDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet';
    } if (
        /(iPhone|iPod|iPad)/i.test(ua)
        || /(android)/i.test(ua)
        || /(windows phone)/i.test(ua)
        || /(blackberry)/i.test(ua)
        || /(bb10)/i.test(ua)
        || /(opera mini)/i.test(ua)
        || /(opera mobi)/i.test(ua)
        || /(iemobile)/i.test(ua)
        || /(symbian)/i.test(ua)
        || /(maemo)/i.test(ua)
        || /(webos)/i.test(ua)
        || /(mobile)/i.test(ua)
        || /(tablet)/i.test(ua)
        || /(symbianos)/i.test(ua)
        || /(up.browser)/i.test(ua)
        || /(up.link)/i.test(ua)
        || /(mmp)/i.test(ua)
        || /(symbianos)/i.test(ua)
        || /(midp)/i.test(ua)
        || /(wap)/i.test(ua)
        || /(phone)/i.test(ua)
        || /(pocket)/i.test(ua)
        || /(mobile)/i.test(ua)
        || /(pda)/i.test(ua)
        || /(avantgo)/i.test(ua)
        || /(eudoraweb)/i.test(ua)
        || /(brew)|(bada)/i.test(ua)
        || /(blackberry)/i.test(ua)
        || /(hpwos)/i.test(ua)
        || /(kindle)/i.test(ua)
        || /(lge.netcast)/i.test(ua)
        || /(lg;lx)|(lg;lx)/i.test(ua)
        || /(lge.netcast)/i.test(ua)
        || /(nintendo.3ds)/i.test(ua)
        || /(nintendo.ds)/i.test(ua)
        || /(nintendo.wiiu)/i.test(ua)
        || /(nintendo.wii)/i.test(ua)
        || /(playstation.3ds)/i.test(ua)
        || /(playstation.ds)/i.test(ua)
        || /(playstation.wiiu)/i.test(ua)
        || /(playstation.wii)/i.test(ua)
        || /(webos)/i.test(ua)
    ) {
        return 'mobile';
        // add "| /(firefox)/i.test(ua) |" if you want to detect Firefox (not tested for mobile)
    }
    return 'desktop';
}
const DEVICE_type = DetectDeviceType();
describe('DetectDeviceType', () => {
    let mockNavigator;

    beforeEach(() => {
        mockNavigator = {};
        jest.spyOn(navigator, 'userAgent', 'get').mockImplementation(() => mockNavigator.userAgent);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('detects tablet devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';
        expect(DetectDeviceType()).toBe('tablet');
    });

    test('detects mobile devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
        expect(DetectDeviceType()).toBe('mobile');
    });

    test('detects desktop devices', () => {
        mockNavigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
        expect(DetectDeviceType()).toBe('desktop');
    });

    test('is case-insensitive', () => {
        mockNavigator.userAgent = 'mozilla/5.0 (iphone; cpu iphone os 14_0 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/14.0 mobile/15e148 safari/604.1';
        expect(DetectDeviceType()).toBe('mobile');
    });
});

