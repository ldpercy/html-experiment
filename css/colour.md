Colour
======



Polar hues
----------

Polar hue angles can be different in different colour spaces.

https://developer.mozilla.org/en-US/docs/Web/CSS/hue




CSS named colours 'grey' and 'darkgrey'
---------------------------------------

> [!WARNING]
> CSS `darkgrey` is *lighter* than `grey` for historical reasons

```css
	--rgb-grey				: rgb(128, 128, 128);
	--rgb-darkgrey			: rgb(169, 169, 169);

	--hex-grey				: #808080;
	--hex-darkgrey			: #a9a9a9;
```


Colour Model
------------

I can't (yet) find anything like a queryable colour model in the web apis.
Eg something where you can create a colour object and read out its values in a particular colour system.

https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API
https://developer.mozilla.org/en-US/docs/Web/API/Houdini_APIs





Dynamic text colour
-------------------

Trying to get something to automatically set text colour based on the element, scheme and transparency.

This works pretty well for solid backgrounds for generating black or white text:

```css
	selector {
		color: hsl(from var(--element-colour) h s calc(sign(l - 51) * -100));
	}
```

That one is pretty simple, it's really just a function of one input, the element lightness.

But it doesn't work for elements with alpha transparent backgrounds that show the light/dark scheme colour though - which is what what I want.

I think I've been overcomplicating it.
As the background becomes more transparent you just need to revert to the colour scheme's text colour.

Yeah this much better, especially for strong/weak transparencies eg .25 & .75.
At mid transparencies of around 0.5 still a bit up in the air.
So basically use the formula above for relatively opaque backgrounds, and revert to theme text colour for relatively transparent backgrounds.
With some crossover threshold tbd.


Think I can probably replace the original colour-calc with colour-calc2 as well.



Ahh... the HSL version doesn't work well for some lighter colours like yellow, cyan and lime.
This version using the Lab colour model is better:

```css
	selector {
		color: 	lab( from var(--element-colour)    calc(sign(l - 70) * -100) 0 0 / 1);
	}
```
The exact threshold of Lab lightness I'm not sure about yet.

