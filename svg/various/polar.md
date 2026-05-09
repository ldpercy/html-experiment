Polar coordinates
=================



[geometry](../[library]/geometry.js)



Offsets
-------

Need a way to figure out a polar point plus x and y offsets, for example something like:


	polarPointWithOffset = new PolarPoint(
		radian : 45,
		radius : 600,
		dx     : 10,
		dy     : 10,
	);


Where dx and dy are relative to the polar point's coordinate system, not the eventual cartesian coordinates.
Feels like it shouldn't be hard.

Also feel like there might a couple of different ways to interpret this which could affect the result.
* the offsets are expressed in pixels of a cartesian coordinate system
* the offsets are expressed in radians and radius

Assuming you can do them, they'll each produce different results.



Addition
--------

Related to above - need to decide how to add polar points - I currently have two competing versions that each make sense in a way of thinking.

Probably I want a version that will produce equivalent results through a round trip to cartesian coordinates and back.

I think some of my confusion stems from figuring out exactly what the polar point coordinates mean/represent.

I think i'm crossing wires here with something like vector addition, which while similar is also a bit different - I think I need to clear this up.
It also feels weirdly like I'm nearly reinventing turtle graphics :-)

For points:
* Addition should be commutative; ie a+b === b+a
* Addition should be invariant under coordinate transform; ie point1 + point2 === polarpoint1 + polarpoint2

That's the most straightforward and consistent approach for starters.

So how do I handle cases where I instead want to interpret things as headings+distances?

In those cases I want a delta of zero degrees to mean keep heading in the same direction.
I suppose that means it's somewhat stateful.

For simple cases you could add a relative direction to polar points by taking the radian coordinate as the initial direction - I think that was what I was intending to do originally.
That's only good for one step though - might be enough for what I need now, though might as well solve it generally to get turtle going.




