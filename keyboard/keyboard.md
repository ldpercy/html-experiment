Keyboard
========


https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API



Silent keys
-----------
Presumably depends a bit on what the keyboard/os exposes to the browser.

On my laptop:
	* printscreen
	* The function modifier key
	* unmodified F keys, ie media keys





Filter out os/browser ctrl key shortcuts
----------------------------------------

There are a few properties in the keydown event that should help:
```js
	documentKeydownListener = {
		altKey: false				// !!!
		bubbles: true
		cancelBubble: false
		cancelable: true
		charCode: 0
		code: "KeyC"
		composed: true				// !!!
		ctrlKey: true				// !!!
		currentTarget: null
		defaultPrevented: false
		isComposing: false
		isTrusted: true
		key: "c"
		keyCode: 67
		metaKey: false				// !!!
		rangeOffset: 0
		rangeParent: null
		repeat: false
		returnValue: true
		shiftKey: false				// !!!
		type: "keydown"
		which: 67
	}
```

Adding something like this to keyboard event listeners will filter out keyboard combos that you probably don't want to be messing with:

```js
	if (!event.altKey && !event.ctrlKey && !event.metaKey) {
		...
	}
```

Will try to simplify and move to html-common.


