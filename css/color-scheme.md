Color scheme
============




* https://medium.com/@cerutti.alexander/a-mostly-complete-guide-to-theme-switching-in-css-and-js-c4992d5fd357
* https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme



Browser widgets
---------------
.dark {
	color-scheme: dark;
}


.light {
	color-scheme: light;
}




Media Queries
-------------

```css
	@media (prefers-color-scheme: dark) {
	/* Dark theme styles go here */
	}

	@media (prefers-color-scheme: light) {
	/* Light theme styles go here */
	}
```

Enable dark/light mode
----------------------

<meta name="color-scheme" content="dark light">




Dynamic scheme changing
-----------------------

I've tried a few things so far, like setting classes on html/body and settings custom css properties, but they're both a little bit awkward.
Scheme classes like this work:
```html
	<html class="colourScheme-dark">
	...
```
but they're fiddly to set and replace.

Css custom properties like `--colourScheme: 'dark'` seem like they might be an improvement, but I haven't been able to target them (yet) with selectors.

So far it's looking like html data attributes might be the best option, eg:
```html
	<html data-colourscheme="dark">
	...
```
They can easily be set and updated, and they're selectable in css so custom properties can be added if needed.





