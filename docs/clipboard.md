# UADetect `clipboard` Methods

- [UADetect `clipboard` Methods](#uadetect-clipboard-methods)
	- [Description](#description)
	- [Usage Example](#usage-example)

## Description

Gets/Sets the clipboard of the user

## Usage Example

```ts
import { getClipboardText, setClipbaordText, getClipboardAdvanced, setClipbaordAdvanced } from 'uadetect'


const currentClipboard = await getClipboardText();

// I don't like the current clipboard...

await setClipboardText("This is better")


```