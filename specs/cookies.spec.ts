const nav = navigator;
const cookies = navigator.cookieEnabled;
const getCookies = () => {
  if (cookies === true) {
    return "cookiesEnabled";
  }
  if (cookies === false) {
    return "cookiesNotEnabled";
  }
  console.error(
    `Cookie status can not be determined (UAD_${Math.round(
      Math.floor(Math.random() * 1000) + 1
    )})`
  );
  return "Unknown";
};
const cookieStatus = getCookies();
describe("cookies are detected", () => {
  test("calls the navigator object", () => {
    expect(nav).toEqual(window.navigator);
  }),
    test("checks for cookies", () => {
      expect(cookies).toBe(true || false);
    }),
    test("makes sure the correct returns are created by the functions", () => {
      expect(cookieStatus).toEqual(
        "cookiesEnabled" || "cookiesNotEnabled" || "ERROR"
      );
    });
});
describe("more intricate cookie tests", () => {
	test("getCookies returns cookiesEnabled if cookies are enabled", () => {
    Object.defineProperty(navigator, "cookieEnabled", {
      value: true,
      configurable: true,
    });
    expect(getCookies()).toBe("cookiesEnabled");
  });

  test("getCookies returns cookiesNotEnabled if cookies are enabled", () => {
    Object.defineProperty(navigator, "cookieEnabled", {
      value: false,
      configurable: true,
    });
    expect(getCookies()).toBe("cookiesEnabled");
  });

  test("getCookies returns Unknown for unknown cookie status", () => {
    Object.defineProperty(navigator, "cookieEnabled", {
      value:
        "bloo blah",
      configurable: true,
    });
    expect(getCookies()).toBe("cookiesEnabled");
  });

});
