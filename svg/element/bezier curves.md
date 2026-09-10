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


	C	absolute			(scp, ecp, xy)+
	c	relative			(scp, ecp, xy)+
	S	smooth absolute		(ecp, xy)+
	s	smooth relative		(ecp, xy)+


Note: Control points are first followed by end points.



Quadratic
---------

Quadratic Bézier curves are smooth curve definitions using **three** points:

* starting point (current point)
* control point
* end point


SVG path commands:

	Q	absolute					(cx,cy, x,y)+
	q	relative
	T	smooth absolute
	t	smooth relative