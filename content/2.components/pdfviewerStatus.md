---
title: "PDFviewerStatus"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `PDFviewerStatus` Componet

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