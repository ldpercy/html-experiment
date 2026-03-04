Popover & dialog
================


* https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog




backdrop-filter & background-image
----------------------------------

Can't seem to have both at the same time - when background-image is present it "turns off" the backdrop-filter.


```css
	#dialog2::backdrop {
		backdrop-filter: blur(2px) invert(70%);
		background-image: repeating-linear-gradient(		/* this cancels the `backdrop-filter` */
			0deg,
			dodgerblue 0px,
			dodgerblue 10px,
			green 10px,
			green 20px
		);
		background-color: hotpink;							/* so does this */
		background-image: url(../favicon.svg);				/* this works okay though */
		opacity: 0.5;
	}
```

Looks like it's okay to use imgs (eg svg) for the background-image instead, and retain the filter effects.

The problem seems to be related to background-color - there must be some specific layer that's used for both, and only one can be applied at a time.
Will keep experimenting.


