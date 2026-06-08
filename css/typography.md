Typography
==========




vertical alignment
------------------

```
	vertical-align: baseline;
		alignment-baseline: baseline;
		baseline-shift: 0px;
		baseline-source: auto;
```

### alignment-baseline
https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline

Supported in some browsers, and thought i saw it coming soon in ff (verify), but can't get it to work yet.
Something wrong I must be doing.




Font sizes
----------

Both firefox and chrome use a default font-size of `16px`.

Heading `h4` coincides with this size at 16px, the default h5 and h6 heading are actually *smaller* than the default font size.



https://stackoverflow.com/questions/25520410/when-setting-a-font-size-in-css-what-is-the-real-height-of-the-letters

> In css the font-size determines the height of the "em-box". The em-box is a bounding box which can contain all letters of the font including ascenders and descenders. Informally you can think of font-size as the "j"-height, since a lower case j has both ascender and descender and therefore (in most fonts) uses the full em-box height.