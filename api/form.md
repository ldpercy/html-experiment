Form
====



Checkbox
--------

### Off value
This might be an old trick, can't remember if I've used this variant before:

```html
	<input type="hidden" name="checkboxWithHidden" value="hidden value">
	<input type="checkbox" name="checkboxWithHidden" value="checkbox value">
```
It will submit as one or two values, but evaluates as one with this technique: (works in both ff and chrome)
```js
	formData = new FormData(document.forms.myform);
	formEntries = Object.fromEntries(formData);
	console.log(formEntries.checkboxWithHidden);
```

