UI panels
=========

Work out parameters for generic ui panels

```
2026-05-06		🖽🎛		new task
```


Have been tying myself in knots trying to get the generic ui panels to work for current app use-cases.

But it occurs that some of the issues will become clearer with a more general view.


For instance at the moment I'm trying to get the chain from project-colour to panel bg to work, whereas it would be simpler to just work out each step alone.

Also having other thoughts like having custom colours for certain kinds of panels, could use custom colours in thought cloud for instance.

So step back, and have a calm think.


Panel colours
-------------

This is the main thing tripping me up right now.

* Accent colour & focus colour:
	Accent colour will nearly always be inherited from the application & colour scheme, so it's not a big issue right now.
	Similarly the focus colour is usually the same as the accent colour, so again no biggie.

* Border colour & label hover colours:
	These aren't necessarily the same, but can be for this stage of the discussion.
	The colour is just some flavour or version of the panel colour, probably the actual specified panel-colour

### Background colour
This is the tricky one.

I want something like this:

* A semi-transparent (~0.5) version of the panel colour
* Clamped at the far ends of lightness so a black panel ends up darkgrey, a white panel lightgrey
* By default use a palette based on the scheme colour, but overridable

So I've just tried it and you can't define a css var self-referentially (or I'm not doing it correctly).
So I can't do something like this:
```css
	--panel-colour: var(--panel-colour, --default-panel-colour);	/* use a predefined panel colour preferentially */
```
When `if()` becomes baseline there will be another option for this, but for now I need something like:

```css
	--default-panel-colour: foo		/* defined up at the app or scheme level */
	--custom-panel-colour: bar		/* defined as an override for particular panels */

	.ui-panel {
		--panel-colour: var(--custom-panel-colour, var(--default-panel-colour));
		...
	}
```












