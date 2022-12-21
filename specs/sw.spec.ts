const registerServiceWorker = (path, options) => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(path, options);
        return;
    }
    else {
        console.error(`Could not register a service worker. Check the URL or path provided. This also might be becuase the browser does not support it. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
        return;
    }
};

describe('registerServiceWorker', () => {
    test('registers a service worker if the browser supports it', () => {
        // Mock the navigator.serviceWorker object and its register method
        // @ts-ignore
        navigator.serviceWorker = {
            register: jest.fn()
        };

        registerServiceWorker('/sw.js', { scope: '/' });

        expect(navigator.serviceWorker.register).toHaveBeenCalledWith('/sw.js', { scope: '/' });
    });

    test('logs an error if the browser does not support service workers', () => {
      // Delete the navigator.serviceWorker object to simulate an unsupported browser
      // @ts-ignore
      delete navigator.serviceWorker;

      // Mock the console.error method
      console.error = jest.fn();

      registerServiceWorker("/sw.js", { scope: "/" });

      expect(console.error).toHaveBeenCalled();
    });
});
