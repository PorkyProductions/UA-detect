# UADetect `PDFviewerStatus` Componet

- [UADetect `PDFviewerStatus` Componet](#uadetect-pdfviewerstatus-componet)
  - [Description](#description)
  - [Possible Returns](#possible-returns)
  - [Usage Example](#usage-example)
    - [#1](#1)
    - [#2](#2)

## Description

Tells whether the clients browser is able to view PDF files.

## Possible Returns

- `PDFviewerEnabled`
- `PDFviewerDisabled`

## Usage Example

### #1

```js
import { PDFviewerStatus } from 'uadetect';

if (PDFviewerStatus === 'PDFviewerEnabled') {
  element.innerHTML = 'Show PDF';
}
```

### #2

```js
import { PDFviewerStatus } from 'uadetect';

if (PDFviewerStatus === 'PDFviewerDisabled') {
  element.innerHTML = 'Download PDF';
}
```