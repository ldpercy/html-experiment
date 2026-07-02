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

Slot order matters...?



Styling
-------


* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts
* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/exportparts