JSDoc
=====

https://jsdoc.app/

https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html


> [!IMPORTANT]
> Make sure compilerOptions in jsconfig are set to something modern or you can get really confusing and outdated errors


VSCode
------
I'm running this straight in VSCode with no other tooling, so I presume whatever is working is built-in somewhat.
Should try to find out what and how...

But for now, JSDoc is being parsed and I can apply and check types.

https://stackoverflow.com/questions/78478711/jsdoc-intellisense-when-using-script-tags



Type resolution
---------------

Until I can find more info, one thing I curious about is how types are resolved - do they have namespaces, belong to modules etc.

From some quick tests right now it seems like it's aware of types in the same folder, and worked when I pushed the type to a subfolder.
Over in yearclock though, didn't find the subfolder type.
Have to figure out what it's doing.


See: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import


### Root context???
Also, type checking sometimes appears to include files that aren't imported or included in any way.
I'll get duplicate type warnings across files that don't yet seem to be implicated with one another.
Not sure from where the compiler/checker sets it root context to start building the type catalog.
Might be from the nearest `jsconfig` file?

Certainly seem to be able to turn it off at folder level with a `"checkJs": false`.
Will keep experimenting.


### Identifier collisions, modules and namespacing
Eg:
```
	Duplicate identifier 'Base0'.ts(2300)
	subclass-constructor-super.js(14, 7): 'Base0' was also declared here.
```

If the compiler interprets files as modules then the namespaces are separated - a single `export` in a file will do this and prevent the name collision warnings.
For example you can just add this to a file:
```js
	export {}
```

There's probably a JSDoc way of doing this too - should be `@module` you'd think, but not working for me:
```js
	/**
	* @module foo
	*/
```






HTML Element Typing
-------------------

This produces the type error `Property 'content' does not exist on type 'HTMLElement'.ts(2339)`:
```js
	let template = document.getElementById("template0");
	let templateContent = template.content;
```

This resolves it:
```js
	/** @type {HTMLTemplateElement} */
	let template = document.querySelector("#template0");
	let templateContent = template.content;
```

Can't seem to cast `document.getElementById` in the same way.






Function typing
---------------

This doesn't do what I'd have wanted it to do:
```js
	/** foo1
	 * @type {function}
	 */
	function foo1() {
		const result = `foo`;
		return result;
	}
```
I think it wants to type the return instead.







### 'Partial' function types?

Not sure of the correct terminology for this yet, might end up being an interface instead.

What I want it to be able to *partly* type a set of functions according to their return type only.

For instance I have a bunch of testing-type functions that I all want to return booleans, but dont' want to constrain their input args at all (initially at least).

I could just add `@returns {boolean}` to them all, but in this case i want the semantics of declaring the function to be of, or implement, a particular type.

Not sure how to do this yet, or even if this a good approach.

One possibility I thought of would be to say that the arguments object is an array of `any`, but don't know if there's any way of typing the *whole* arguments object, rather than individual items.
If there's a way to type rest parameters then maybe...?



TypeChecking in HTML files
--------------------------

Eg within `<script> </script>` tags.

This is something I'd like, but mainly only for my experiment code where I normally use it.

Can't find anything solid yet.

Appears like you can configure file names, but I think only for generating documentation:
https://jsdoc.app/about-configuring-jsdoc.html#specifying-input-files


If it turns out it flat-out can't be done, I'll move anything important into script files for checking.
This will probably be more critical in html-common.

* See: [jsdoc typechecking for inline scripts](<../[task]/jsdoc typechecking for inline scripts.md>)