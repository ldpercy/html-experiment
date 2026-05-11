Space mapping
=============

> [!NOTE]
> Work on this task has been moved to [html-common - 🪓⮁ - axis inversion](<../../html-common/[task]/🪓⮁ - axis inversion.md>)




This problem has been lurking in the code in various places for ages.
Anywhere I've gone from regular cartesian to SVG coords I've usually just put a negative in front of the Y val and vowed to sort it out later.
Pretty awkward and later is kinda now-ish.

I'm just going to brain dump for a while to try to lay out the problem.

* Spaces have inherent shapes or topologies - eg planar, curved, 3d, toroidal, hyperbolic etc
* Spaces can also have sizes (metrics?) - physical extents or limits such as lengths, radii, circumferences etc
* Spaces can have multiple coordinate systems - eg cartesian, polar, lat-long, spherical etc, as relevant to the shape and size of the space
* Coordinate systems are kind of arbitrary i think - the origin just gets chosen to be *somewhere* in relation to something
* In the case of a purely abstract space you probably need at least one 'base' coordinate system to begin with, and any others are defined in relation to that
* Coordinate systems have inherent orientations - eg regular cartesian Y is 'up'; polar directions go certain ways etc


So for the really simple example of what I'm doing, you *could* add a separate 'svg' coordinate system to the planar space, and read output coordinates through it.
Not quite sure it's the best or only approach though.
And how to code it???


Adding coordinate systems to spaces
-----------------------------------

As I say, not the only approach, but I reckon there are probably are cases where this would be useful.
So for interests sake how would you do it in code?

* Start by defining the 'base' coordinate for the space, eg cartesian - this would be done at construction time
* Other 'core' coordinate  systems could perhaps also be specified at construction time - sort of doing this for polar at the moment, but not very well


NB: Currently my PlanarSpace module treats both cartesian and polar as 'core' - they're both pretty embedded in the code.
This could maybe be changed in some future version.

Secondary or ancillary coordinate systems could be dynamically added/removed to the space after construction.

Currently points in my PlanarSpace implement both cartesian and polar interfaces, so those coords can be directly read via getters at any time:

	let s = new PlanarSpace.Space('example-space',{});
	let p = s.newPoint('p');
	p.setCartesian(15,20);

	p.x				// 15
	p.y				// 20
	p.angle			// Object { #degrees: -126.86989764584402 }
	p.radius		// 25


Aaaand that doesn't look right. Ill have to take a diversion here to see what's going on with that angle.
Be back soon.




