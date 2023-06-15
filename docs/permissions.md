# UADetect `permissionGranted` Method

- [UADetect `permissionGranted` Method](#uadetect-permissiongranted-method)
	- [Description](#description)
	- [Possible Returns](#possible-returns)
	- [Usage Example](#usage-example)
		- [#1](#1)
		- [#2](#2)

## Description

Returns if permissions are granted for a set of permissions in the navigator.

## Possible Returns

`boolean`

## Usage Example

### #1

```js
import { permissionGranted } from 'uadetect';

if (permissionGranted('clipboard-read')) {
  // You now have permission to read the clipboard;
}
```

### #2

```js
import { permissionGranted } from 'uadetect';

if (!permissionGranted('clipboard-write')) {
  // Nope, can't write to the clipboard
}
```