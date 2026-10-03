Font
====


* The default font-size in many browsers is `16px`
* This probably *isn't* the case for mobile browsers


Monospace fonts
---------------

> [!WARNING]
> The browser default font-size for monospace is often **smaller** than those for serif or sans-serif, eg. 12 or 13px (cf. 16px)


Need to investigate further as this could vary *a lot* based on platform/browser etc.

For example on my desktop machine:
* Chromium:				regular 16px; monospace 13px
* Firefox:				regular 13px; monospace 12px
* Firefox dev edition:	regular 16px; monospace 12px
* Falkon:				regular 15px; monospace 14px

Will try figure out where these are coming from & compare with other installs.
This seems to be a browser-vendor decision based upon the observation that at *equal* font-sizes, monospace text *appears* larger -- it's mostly just wider.


Font size
---------

* https://developer.mozilla.org/en-US/docs/Web/CSS/font-size


I want to revisit this as I've been tinkering with setting everything in terms of a project base length unit, for eg 8px.
But it's not working yet and I need to figure out why.

> One important fact to keep in mind: em values compound.

I think em compounding might be part of the problem, but not sure yet.





> Defining font sizes in px is not accessible, because the user cannot change the font size in some browsers.
> For example, users with limited vision may wish to set the font size much larger than the size chosen by a web designer.
> Avoid using them for font sizes if you wish to create an inclusive design.

I want a citation/reference/more info for this - which browsers?
Common browsers have had full-page zoom features for ages, as have OSs.




### Solution...?

I've found the problem now, how best to solve??

```css
	--project-base-length: 8px;
```

In circumstances where I'm trying to exert total control over sizing/spacing etc with a var like the above, it will be on me to make sure all fonts are set terms of that value somehow.

I've been somewhat mistakenly relying on the browser defaults so far, so for places where i've used monospace *and* want the fonts smaller again, I'll need to shrink them back down again manually.

First try will work something like this:

```css
:root {
	--project-base-length: 8px;
	--gap: var(--project-base-length);
}

html {
	font-size: calc(2 * var(--project-base-length));
}

.particular-monospace-thing1,
.particular-monospace-thing2	/* etc */
{
	font-size: 0.75em; 			/* or 0.8 or whatever seems appropriate */
}
```

But otherwise, by default, monospace text will have the *same* font-size as regular text.



