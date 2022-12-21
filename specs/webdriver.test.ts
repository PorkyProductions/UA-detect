const webdriverControlled = navigator.webdriver;
const getBots = () => {
  if (webdriverControlled) {
    return "robotControlled";
  }
  return "humanControlled";
};
const robotStatus = getBots();
describe("getBots", () => {
  let navigatorProxy;
  beforeEach(() => {
    navigatorProxy = new Proxy(navigator, {
      get: (target, prop) => (prop === "webdriver" ? true : target[prop]),
      set: () => true,
    });
  });

  test("returns humanControlled when webdriver is not controlled", () => {
    navigatorProxy.webdriver = false;
    expect(getBots()).toBe("humanControlled");
  });

  test("returns humanControlled when webdriver is not defined", () => {
    delete navigatorProxy.webdriver;
    expect(getBots()).toBe("humanControlled");
  });
});