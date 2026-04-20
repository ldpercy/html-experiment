Bezier curves
=============

https://en.wikipedia.org/wiki/Bézier_curve






Cubic
-----

Cubic Bézier curves are smooth curve definitions using **four** points:
* starting point (current point)
* start control point
* end control point
* end point




SVG path commands:


	C	abs				(scp, ecp, xy)+
	c	rel				(scp, ecp, xy)+
	S	abs,smooth		(ecp, xy)+
	s	rel,smooth		(ecp, xy)+


Note: Control points are first followed by end points.



Quadratic
---------

Quadratic Bézier curves are smooth curve definitions using **three** points:

* starting point (current point)
* control point
* end point


SVG path commands:

	Q	abs					(cx,cy, x,y)+
	q	rel
	T	abs, smooth
	t	rel, smooth