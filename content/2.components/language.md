---
title: "language"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---
# UADetect `language` Componet

## Description

Returns a string with the specified prefered language of the browser the client is using.

## Possible Returns

- 'Amharic'
- 'Arabic'
- 'Basque'
- 'Bengali'
- 'British English'
- 'Brazillian Portuguese'
- 'Bulgarian'
- 'Catalan'
- 'Cherokee'
- 'Croatian'
- 'Czech'
- 'Danish'
- 'Dutch'
- 'American English'
- 'Estonian'
- 'Filipino'
- 'Finnish'
- 'French'
- 'German'
- 'Greek'
- 'Gujarati'
- 'Hebrew'
- 'Hindi'
- 'Hungarian'
- 'Icelandic'
- 'Indonesian'
- 'Italian'
- 'Japanese'
- 'Kannada'
- 'Korean'
- 'Latvian'
- 'Lithuanian'
- 'Malay'
- 'Malayalam'
- 'Marathi'
- 'Norwegian'
- 'Polish'
- 'Portugal Portuguese'
- 'Romanian'
- 'Russian'
- 'PRC Chinese'
- 'Serbian'
- 'Slovak'
- 'Slovenian'
- 'Spanish'
- 'Swahili'
- 'Swedish'
- 'Tamil'
- 'Telugu'
- 'Thai'
- 'Taiwan Chinese'
- 'Turkish'
- 'Urdu'
- 'Ukrainian'
- 'Vietnamese'
- 'Welsh'
- undefined

## Usage Example

### #1

```js
import { language } from 'uadetect';

if (language === 'English') {
  alert("Welcome to our site")
}
```

### #2

```js
import { language } from 'uadetect';

if (DEVICE_type === 'Spanish') {
  window.location.href="https://example.com/es"
}
```