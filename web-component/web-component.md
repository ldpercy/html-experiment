Components
==========

https://developer.mozilla.org/en-US/docs/Web/API/Web_components


https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements



Open / closed mode
-----------------

Most examples use open, and seems to be the most straightforward so far, so will focus on this first.
Closed looks a bit trickier, will come back to.



Inner/Outer HTML
----------------

One thing I'm curious about, but suspect probably can't be done, is whether it's possible to access the generated html.

For example in the yearclock I'm currently using template strings for *everything*, which means that a complete svg document gets produced that can stand alone.
I use this to save the output for static readme examples for instance.
With web components the custom elements wouldn't have very much meaning in a nonscripted environment, so I would no longer be able to do that afaik.

Something to look into.


### Just tried it
The html returned by inner/outer HTML is only that which appears in the regular dom, and any html internal to the component is lost.

There might be ways around this, but I imagine they're non-trivial, and probably not really in the spirit of things.




Template
--------

* https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement


### Content

Specific to HTMLTemplateElement

> *content* Read only
> A read-only DocumentFragment which contains the DOM subtree representing the <template> element's template contents.

Eg:
```js
	let template = document.getElementById("custom-paragraph");
	let templateContent = template.content;
	document.body.appendChild(templateContent);
```



Slots
-----

The way that slots work seems a bit funky.

In the component instance in html you can put the slotted items in any order, and appear that way in the inspector for the non-shadow html.
But they always get rendered according to the sequence specified in the component definition.

Not sure yet if this will have any unusual effects for things like css sibling or nth selectors, will have to try.



Styling
-------


* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts
* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/exportparts