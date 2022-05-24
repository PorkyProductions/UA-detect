# UADetect Error Codes

- [UADetect Error Codes](#uadetect-error-codes)
  - [Error Code Series](#error-code-series)
    - [NOTE:](#note)
  - [Explanations](#explanations)

## Error Code Series

All error codes are prefixed with `UAD_`. This is to avoid conflicts with other libraries.
The codes are numbered semantically, and are grouped by the module they pretain to.

### NOTE:
The following series are just the numbers, but when used in development, they are prefixed with `UAD_`.

- 100 (browser)
- 200 (browserOnlineStatus)
- 300 (browserRam)
- 400 (cookieStatus)
- 500 (currentUA)
- 600 (DEVICE_finiteType)
- 700 (DEVICE_type)
- 800 (doNotTrackStatus)
- 900 (maxTouchPoints)
- 1000 (ORIENTATION_isLandscape)
- 1100 (OS)
- 1200 (PDFviewerStatus)
- 1300 (processorCores)
- 1400 (robotStatus)
- 1500 (buildNumber) 

## Explanations

- 100
  - 101: This means that UAD could not detect the browser, or, the browser is not mainstream enough to be supported.
- 200
  - 201: This means that the user has either prevented sharing their cookie preferences, or, the browser does not support this feature. Or the user has disabled the feature.
- 300
  - 301: The RAM API is not supported on Firefox
  - 302: The RAM API is not supported on Safari
  - 303: The RAM API is not supported on Internet Explorer
- 400
- 500
- 600
  - 601: This means that the device is not a mobile device.
- 700
- 800
  - 801: The `doNotTrack` value could not be determined from the user's browser.
- 900
- 1000
- 1100
  - 1101: This means that the user's OS cannot be determined.
- 1200
- 1300
  - 1301: This means that the browser refuses to report the logical processor count.
- 1400
- 1500
  - 1501: Build number is not supported on Chrome
  - 1502: Build number is not supported on Edge
  - 1503: Build number is not supported on IE
  - 1504: Build number is not supported on Opera
  - 1505: Build number is not supported on Safari
- 1600
  - 1601: This means that the browser has either hidden, or disabled, the `appCodeName` feature