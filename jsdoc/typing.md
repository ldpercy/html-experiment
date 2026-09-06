Typing
======

Notes about type rules in general.

https://www.typescriptlang.org/docs/handbook/basic-types.html
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html


### Todo:
* Revisit class typing


Dynamically instantiating classes
---------------------------------
There's something funny going on here....
At first I thought it was an issue with imports/exports because I was trying to instantiate a class from another module, but I can generate this error in entirely self-contained js code.

```js
/** createInstanceOf
 * {any}, {object}		- fine
 * {unknown}			- This expression is not constructable. Type '{}' has no construct signatures.ts(2351)
 * {function}			- This expression is not constructable. Type 'Function' has no construct signatures.ts(2351)
 * {SomeClass}			- This expression is not constructable. Type 'SomeClass' has no construct signatures.ts(2351)
 *
 * @param {any} c
 */
function createInstanceOf(c) {
	let result = new c;			// The errors are here on `c`: This expression is not constructable. Type '....' has no construct signatures.ts(2351)
	return result;
}
```

These all run okay, it's *just* an issue with typechecking & red squigglies.



https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures



Allow a function to accept derived classes
------------------------------------------

You'd think this would be straightforward, but maybe not.
Plus my brain is mushing out right now.
Interfaces, LSP... ?
Back to basics.

```js
	/**
	 * @param {BaseClass} instance // want this to accept subclass instances as well...
	 */
	function funcAcceptsInstance( instance ) {
		console.log('instance:', instance);
	}/* funcAcceptsInstance */
```



Spreading the arguments object
------------------------------

Very cranky about this.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#arguments_is_an_array-like_object

The last example using the spread operator does *not* pass typechecking:
```js
	const args = [...arguments];			// Type 'IArguments' is not an array type.ts(2461)
```
Until you try the first two...
```js
	const args = Array.prototype.slice.call(arguments);	// Does work
	// or
	const args = Array.from(arguments);			// Property 'from' does not exist on type 'ArrayConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2550)
```
And notice that you've been using the __wrong compiler settings__... sigh.

Now I've got to go back and re-run a bunch of trials.

Just to be clear, spreading the arguments object into an array *does* work, but only passes typechecks with recent compiler targets.
This allows for a handy way of calling similarly signatured functions, eg calling `super` in a subclass constructor:
```js
	super([...arguments]);		// This is fine with a recent compiler target
```



Compatible & Incompatible Types
-------------------------------
Sometimes I'm seeing things work that are a bit unexpected.
For instance `number` being compatible with `object`.
Looks like `{object}` will take just about anything - pretty obvious now that i think about it.

For testing purposes I sometimes need to force a type incompatibility so looking for notable examples of each.
Some might only work in one direction also.

See: [type-compatibility.js](type-compatibility.js)







Class Extension
---------------

Something about this that I don't properly get yet...
Not sure done I've this kind of thing recently - might need to brush up a bit.


* You can change the type signature of an extended class's constructor, but not the signature of methods


Actually still experimenting - like everything, I think it *depends*.


I'm not sure there's any kind of strict relationship between the constructor signatures of base & derived classes.



Note this example in the TS docs:
https://www.typescriptlang.org/docs/handbook/2/classes.html#overriding-methods

> It’s important that a derived class follow its base class contract.
> What if Derived didn’t follow Base’s contract?
> // Make this parameter required
> If we compiled this code despite the error, this sample would then crash:
> // Crashes because "name" will be undefined

So looks like you *can* change the signature in a method override, but only in a type-compatible way.



