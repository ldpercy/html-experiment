Form elements
=============



Textarea
--------


Trying to nail this down.
Sometimes textareas get display block, sometimes inline-block.
In cases where it gets inline-block the rendering in chr gets extra space after, looks like box space.
(Similar to the svg extra pixel thing.)
Fix by setting back to block.

```css
	textarea {
		display: block;		/* chr and ff both set this to inline block, but chr renders it with extra space after	*/
	}
```
