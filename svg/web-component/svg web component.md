Web Components
==============

Try out the answer one this question:

https://stackoverflow.com/questions/77729448/how-to-use-svg-parameters




First quick experiment is a fail, the custom elements are completely ignored.
Doesn't look like the shadow dom is being attached either, so doing something incorrectly.



Hmmm

I can create we components that create `<svg/>` elements, but not yet svg frgments to go inside existing svg document.
Will keep looking.



Styling use elements
--------------------

Bit if a sidestep, but as use elements *do* generate shadow roots, a quick experiment seems to suggest potentially useful techniques:

```html
	<defs>

		<g id="def-widget">
			<!-- plain styles in here, even though they do get inserted into the shadow root of the use element, still take effect doc-wide -->
			<style>
				/* rect { fill:royalblue; }
				text { font-size: 100px; fill: tomato; }
				*/

				#def-widget {
					rect { fill:darkgreen; } 		/* specifying the id of the inserted element however seems to to work */
				}
			</style>
			<rect x="-100" y="-100" width="200" height="200"/>
			<slot name="my-text">My default text</slot>
		</g>
	</defs>

	<use href="#def-widget"/>

```
How broadly useful this is likely to be, not sure yet.
Eg writing all the styles inline would be painful for anything complex.
A linked stylesheet would be useful though.
Just tried it:
```css
	<style> /* this also works, making this potentially interesting */
		@import "widget.component.css"
	</style>
```

Being able to customise the styles for particular use instances is a bit trickier, depending on which side you're looking from.
As a component writer, no problem, just add the customisations to the component stylesheet.
As a component user, very little from the outside makes it into the shadow dom (I've run into these problems before).
One thing that does seem to work fairly reliably though is custom css vars, so if set up your component stylesheet like this:
```css
.def-widget {
	rect {
		/* fill:darkorange; */
		fill:var(--custom-fill, darkorange);
	}
}
```
You can override it from the outside.
This all will probably be true for html in general, so will need to port some of this discussion over.
