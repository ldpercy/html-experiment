Font
====


* The default font-size in many browsers is `16px`
* This probably *isn't* the case for mobile browsers


> [!WARNING]
> Looks like the default font-size for monospace fonts is **smaller**, eg. 12/13px
> This could have been messing everything up...
> Need to investigate further as this could vary *a lot* based on platform/browser etc


On my desktop machine for eg:
* Chromium:				regular 16px; monospace 13px
* Firefox:				regular 13px; monospace 12px
* Firefox dev edition:	regular 16px; monospace 12px
* Falkon:				regular 15px; monospace 14px

Will try figure out where these are coming from & compare with other installs.


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
