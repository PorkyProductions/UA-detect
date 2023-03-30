const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: [
            '../../src/index.ts',
            "../../src/browser.ts",
            "../../src/canShare.ts",
            "../../src/clipboard.ts",
            "../../src/cookies.ts",
            "../../src/deviceMemory.ts",
            "../../src/deviceType.ts",
            "../../src/exactMobileDeviceType.ts",
            "../../src/geolocation.ts",
            "../../src/getCurrentUA.ts",
            "../../src/language.ts",
            "../../src/logicalProcessors.ts",
            "../../src/maxTouchPoints.ts",
            "../../src/media.ts",
            "../../src/navigator.ts",
            "../../src/orientation.ts",
            "../../src/pdf.ts",
            "../../src/permissions.ts",
            "../../src/sw.ts",
            "../../src/vibrate.ts",
            "../../src/webdriver.ts"
        ],
        outdir: './dist/',
        bundle: true,
        sourcemap: true,
        splitting: true,
        format: 'esm',
        target: ['es2019']
    })
    .catch(() => process.exit(1));