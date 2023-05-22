const esbuild = require('esbuild');
var year = new Date().getFullYear();

esbuild
    .build({
        entryPoints: [
            './src/index.ts',
            "./src/browser.ts",
            "./src/canShare.ts",
            "./src/clipboard.ts",
            "./src/cookies.ts",
            "./src/deviceMemory.ts",
            "./src/deviceType.ts",
            "./src/exactMobileDeviceType.ts",
            "./src/geolocation.ts",
            "./src/getCurrentUA.ts",
            "./src/language.ts",
            "./src/logicalProcessors.ts",
            "./src/maxTouchPoints.ts",
            "./src/media.ts",
            "./src/navigator.ts",
            "./src/orientation.ts",
            "./src/pdf.ts",
            "./src/permissions.ts",
            "./src/sw.ts",
            "./src/vibrate.ts",
            "./src/webdriver.ts"
        ],
        outdir: './dist/small/',
        bundle: true,
        sourcemap: true,
        splitting: true,
        format: 'esm',
        target: ['es2020'],
        banner: {
            js: `
/*
    UADetect: Copyright (c) ${year}, PorkyProductions, and Contributors
    Licensed under the Apache-2.0 License
*/
            `
        }
    })
    .catch(() => process.exit(1));