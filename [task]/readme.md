Task
====


Meta
----
So far most of the experiments in here have been pretty small and self-contained, and I've left markdown docs around the place to summarise findings.
And sometimes while figuring things out I've also added brief-ish trains of thought.
Some experiments are starting to get more involved though and will need better tracking, so setting this folder up like I've done in other projects.

Won't do branch-merge-release here though - this project will stay all trunk development - so 'done' tasks will probably end up grouped by date.
When html-common gets into release cadence some tasks will be moved over to there.



Todo
----
* File API: save prompt & data - have done stuff like this yonks ago, have another look at
* Check github pages apps to see if their localStorage is shared - I expect it probably is
* Return to web-components and Temporal
* Refresher: document.querySelector vs getElementById - they return different types/interfaces i think & the former is easier to cast
* JS modules: a way to export "*" ?
* JS identifiers: unicode categories ID_Start & ID_Continue
* Correct typing for HTMLFormElement.elements / HTMLFormControlsCollection items
* Revisit test grouping/nesting
* CSS generated content: can any items be made conditional? Also see if there are any implementations for the "six yet-to-be implemented CSS functions including content(), string(), and leader(), and the three `target` functions"
* "Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content."
* "This expression is not constructable. Type '....' has no construct signatures.ts(2351)"
* Derived subclass as function parameter?
* JSDoc partial typing - see if there are ways to declare generic types that only specify certain items of a type signature, eg *just* the return type of a function - and be able to mix these partials together a bit like interfaces
	* See if there's a way to type the whole of a function's arguments object, not just individual parameters
	* See if @interface typing can be applied to non-class objects
	* Look for other duck/mixin typing options
	* Find out where the root/base context of jsconfig+checkJs typechecking is
* CSS: colour model/api etc
* dynamic/automatic/contextual colours for text
* CSS: Parent selector - 'has'
* See if there's a way to collapse the single extra spaces that sometimes get added just from formatting, eg `<h1>	<a ...`
* CSS grid: is there a simple way to make grid items go full-width without knowing the column count?
* CSS grid: dynamic grids in general - eg based on custom vars
* DOM: 3d transform experiments
* HTML: details/summary move the marker to the right



#### !important - Turn on jsdoc typechecking for inline `<script></script>` tags within html

Found some references to this and some open vscode issues that look related:

* https://stackoverflow.com/questions/79769526/is-there-a-way-for-jsdoc-comments-to-be-visible-in-html-files
* https://github.com/microsoft/vscode/issues/26338
* https://github.com/microsoft/vscode/issues/114115


Done (for now)
--------------
* SVG foreignObject - https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/foreignObject
* Keyboard: filter out browser/os `crtl` key combos
* CSS list counters, zero-based: can be done (though a little quirky); better to use array keys themselves when that's what's needed
* Testing - simple code testing eg equality, exceptions, typeof testing that code excepts - moved to `html-common`
* Function arguments can be omitted to accept defaults with `undefined`
* CSS `grey` is darker than `darkgrey` for historical reasons - websearch for the whole story



Experimental/tentative patterns
-------------------------------

### Custom setters that return `this` for chaining

	setCoord(x,y) { this.x = x; this.y = y; return this; }

> A 'set' accessor must have exactly one parameter.ts(1049)
> Setters cannot return a value.ts(2408)

Stock js setters can only have one param, and cannot return anything so they can't be chained.

In some places I'm writing custom setters that accept more parameters, and return `this` to allow for chaining.
I'm not sure if i want to go boots-and-all with this yet, but trying it out in a few spots; makes some testing code a bit easier for example.


