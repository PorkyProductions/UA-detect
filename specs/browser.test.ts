const getBrowser = () => {
  if (navigator.userAgent.indexOf("Opera") > -1) {
    return "Opera";
  }
  if (navigator.userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  }
  if (navigator.userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  }
  if (navigator.userAgent.indexOf("Safari") > -1) {
    return "Safari";
  }
  if (navigator.userAgent.indexOf("MSIE") > -1) {
    return "IE";
  }
  if (navigator.userAgent.indexOf("Trident") > -1) {
    return "IE";
  }
  if (navigator.userAgent.indexOf("Edge" || "Chrome") > -1) {
    return "Edge";
  }

  console.error(
    `Browser can not be determined (navigator.userAgentD_${Math.round(
      Math.floor(Math.random() * 1000) + 1
    )})`
  );
  return "Unknown";
};
describe("browser component", () => {
  test("getBrowser returns Opera for Opera user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16",
      configurable: true,
    });
    expect(getBrowser()).toBe("Opera");
  });

  test("getBrowser returns Chrome for Chrome user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      configurable: true,
    });
    expect(getBrowser()).toBe("Chrome");
  });

  test("getBrowser returns Firefox for Firefox user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
      configurable: true,
    });
    expect(getBrowser()).toBe("Firefox");
  });

  test("getBrowser returns Safari for Safari user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4",
      configurable: true,
    });
    expect(getBrowser()).toBe("Safari");
  });

  test("getBrowser returns IE for Internet Explorer user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
      configurable: true,
    });
    expect(getBrowser()).toBe("IE");
  });
  test("getBrowser returns Unknown for unknown user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value: "foo bar",
      configurable: true,
    });
    expect(getBrowser()).toBe("Unknown");
  });
});
