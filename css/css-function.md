CSS Functions
=============

* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
* https://css-tricks.com/complete-guide-to-css-functions/
* https://www.w3schools.com/CSSref/css_functions.php




attr()
------

Not very well supported yet, but potentially extremely useful for `calc`s from metadata.

Currently we need intermediate classes like this:
```
	<div class="value-1">1</div>
	<div class="value-2">2</div>
	<div class="value-3">3</div>
	...

	.value-1 { --value: 1; }
	.value-2 { --value: 2; }
	.value-3 { --value: 3; }
	...

	div {
		width: calc(var(--value) * 10px)
	}
```
Which is only practical for a smallish number of known values.

With better `attr` implementations the classes won't be needed, resulting in something like this:

```
	<div data-value="1">1</div>
	<div data-value="2">2</div>
	<div data-value="3">3</div>

	div {
		width: calc(attr(data-value <number>) * 10px)		/* NB a type cast/interpretation is needed */
	}

```
Allowing for fully arbitrary data and calcs.


Mozilla's tracking bug for `attr()`:
https://bugzilla.mozilla.org/show_bug.cgi?id=435426

https://stackoverflow.com/questions/20490704/combine-calc-with-attr-in-css
https://stackoverflow.com/questions/8769786/css3s-attr-doesnt-work-in-major-browsers
