Polygon
=======


https://en.wikipedia.org/wiki/Star_polygon
https://en.wikipedia.org/wiki/Winding_number#Turning_number
https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol




Relative coordinates
--------------------

I think I'll need this sometimes, so going to try a version that uses all(mostly) lower case (relative) path directives.
Might be a bit tricker.


Angles/lengths
--------------

It would be handy if there was an easy way of figuring out things like angles and lengths...

https://en.wikipedia.org/wiki/Internal_and_external_angles




Download / save
---------------

Just trying this out as an experiment to see how the event works, and what about it can be controlled.

Not working yet, current try:
```js
	const url = new URL(`data:text/plain;utf8,${polygonSvg}`);
	this.element.saveLink.href = url.toString();
```
Trying this sort out url escaping, but still failing.
I might be running into URL length limits or something - not sure yet.
Time for some research.




Ant-crawl animation
-------------------

Added this for fun.

For some reason it's really cpu-expensive in firefox (on my desktop at least).
Not too bad in Chromium though.

Have added a switch to turn it off.

