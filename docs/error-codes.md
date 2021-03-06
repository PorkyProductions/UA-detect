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
- 1600 (codeName)
- 1700 (engine)
- 1800 (version)

## Explanations

- 100
  - 101: This means that UAD could not detect the browser, or, the browser is not mainstream enough to be supported.
- 200
  - 201: This means that the user has either prevented sharing their cookie preferences, or, the browser does not support this feature. Or the user has disabled the feature.
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
- 1600
  - 1601: This means that the browser has either hidden, or disabled, the `appCodeName` feature
- 1700
  - 1701: This menas that the browser has either hidden, or disabled, the `engine` feature due to it being deprecated.
- 1800
  - 1801: This means that the browser does not report the verion that it is using