foreignObject
=============


Namespace requirement
---------------------

The namespace is required:

```html
	<foreignObject x="-900" y="-700" width="700" height="500">
		<!--
			In the context of SVG embedded in an HTML document, the XHTML
			namespace could be omitted, but it is mandatory in the
			context of an SVG document
		-->
		<div xmlns="http://www.w3.org/1999/xhtml"> <!-- doesn't work without the 'xmlns' attr -->
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
			mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
			imperdiet eros. Aliquam erat volutpat.

			<p>this is a paragraph</p> <!-- doesn't need namespace -->

		</div>
	</foreignObject>
```

But doesn't seem to need it on further children - just the root element seems okay.



