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

## Explanations

- 100
  - 101: This means that UAD could not detect the browser, or, the browser is not mainstream enough to be supported.