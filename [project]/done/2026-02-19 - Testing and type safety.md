Testing and type safety
=======================

Trying to get a little testing library off the ground.


```
2026-02-19		Wrapped & done
```



Prologue meta/aside
-------------------
So far most of the experiments in here have been pretty small and self-contained, and I've left markdown docs around the place to summarise findings.
Sometimes though while I'm figuring things out I've also added trains of thought, however not usually not very long.
This job though is the first one where I've felt like I'm really crossing over a bunch of different topics, and maybe going a bit deeper than just 'experimenting'.
So I'm going to bust this one out into a task like I've done in other projects.

I'm not going to go into full branch-merge-release mode here though - this project will stay all trunk development - so the tasks might just end up getting dumped into a date grouped 'done' folder or something like that.
I might change my mind, will see.
To be honest the actual place where this should be branched and released is in html-common, but this is all still so half-arsed and embryonic at the moment that it doesn't deserve that kind importance yet.
On top of that html-common hasn't even reached `0.1` yet, partly on account of this job, so everything is a bit on hold.

Anyways I'm going to drag some of the more 'huh?' comments into here to try to reconstruct some of the sequence...

.
.
.
.
.
.
.


Testing
-------


This **really** isn't the sort of thing I should be attempting, but there's basically nothing built into core js or the apis that I can see save for the lonely `console.assert()` function.

So I'm going to whip together a little module to help with some things.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


A single test will be:

* one or more values/expressions
* a predicate to be said about those values/expressions, eg allEqual


### Test categories

* equality
* equivalence - to some specified level
* greater/less than a specified comparator
* typeof
* instanceof
* exceptions
* ???



Predicate typing in jsdoc
-------------------------

I want to be able to declare a predicate function type, eg only specifying it's return type (for now).
Not sure how to partially type a function like this (or similar) in jsdoc, or if it's even possible.
(The `partial` utility type isn't what I want here.)


Testing for code that should except
-----------------------------------
Can this be done in a not-too-complicated way?
Not sure, but I don't think evaluation of expressions can be delayed until we're inside the predicate function...?
Might have to wrap the declarations in this case.
Have to try some things.


'Partial' function types?
-------------------------

Not sure of the correct terminology for this yet, might end up being an interface instead.

What I want it to be able to *partly* type a set of functions according to their return type only.

For instance I have a bunch of testing-type functions that I all want to return booleans, but dont' want to constrain their input args at all (initially at least).

I could just add `@returns {boolean}` to them all, but in this case i want the semantics of declaring the function to be of, or implement, a particular type.

Not sure how to do this yet, or even if this a good approach.

One possibility I thought of would be to say that the arguments object is an array of `any`, but don't know if there's any way of typing the *whole* arguments object, rather than individual items.
If there's a way to type rest parameters then maybe...?



It might end up easier from a typing perspective to write the predicates as small classes instead.



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


I still want to get to the bottom of this; I feel like I'm on the cusp of something about type safety in general.

But for the particular case of dynamic class instantiation (and the case where I wanted to use it) I think the better alternative will be to concretely instantiate the class outside the function and pass in the instance instead.
Dynamic class instantiation could have some non-trivial typing issues that need to be solved with generics or similar.



Aside into typing and safety
----------------------------
... Okay have had an interesting diversion going into more detail about jsdoc & typing in general.
I still haven't figured out if it's possible to partly type a function yet - starting to feel like it might be a pretty weak form type of type safety (if any at all).
So have gone further with the predicate as classes thing - though there are quirks there too.

Still not sure if I'm thinking about *any* of this correctly though...
The way I've currently got the predicate classes, they could maybe just go back to being written as functions?
Nah not sure about that either. Need to write some more, and look at again.


More tests
----------

Rightyo then lets just write some more first and see where we stand.

### Exceptions

As best I can tell so far testing expressions for exceptions *have* to be tested as functions, otherwise they except immediately before theey can be caught by the testing setup.

### Greater than / less than

Might change my mind, but for now I'll do them similar to 'Equals' in that they're tested against the zeroth.

Actually that won't work (elegantly) - if they're all tested against [0] then that will include [0] which will be false, so the whole thing will be.
Will need a comparator.
And should add a comparator to `Equal` as well - there might be weird js coercion cases where things could end up equal in some comparisons but not others.
Much more likely to occur in '==' than '===' though.
Better to make it clear what we're testing against.

### Add Comparator

Works.
Okay this is getting a little bit somewhere now.

Will start looking to rationalising and building out.



Tests and results
-----------------

```js
test {
	[desc]
	predicate = AllTrue;

	test = IndividualTrial || Test[]

	// if the



	TrialSet = {
		predicate,
		ExpressionArray
	}


	{
		predicate
		expression[	],
		value[]
	}

	result[] {
		expression
		pass
	}

	pass = result.every((element) => { element.pass === true })
}
```

If the expression array or whatever it ends up being called can itself contain other tests, then I can use the same predicate arrangement to test whether the tests themselves pass by predicating that they all come back true.

Not sure though yet if this idea is really elegant or too clever.
Will have to try getting some of this going first, then see if it could work.
It might be easier to predicate that separately.
The default predicate for testing could be 'AllTrue'.
Brain currently knotted up trying to figure out how best to nest/recurse this - need to clear my head and return to.

Lets get the non-recursive one in shape first.



Some thoughts while I'm hacking on this:
* Not sure yet whether the predicates still need to be classes - need to stare at them again
* Should I merge the predicates into the one module to sidestep 'predicate' var/bind naming issues?
* Having the predicates run the tests still looks awkward (at least the way I have it now) - that might need to be rejigged
* Should an empty test pass or fail?? I think the criterion should be 'all true' rather than 'no false', and an empty test can't be 'all true'


### Empty tests, `every` & vacuous truths

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

> true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.

> every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)

Herm. Okay, unusual, not what I was expecting.
It's "none false" - something in the array *has* to be false otherwise `every` returns true.
Don't feel like boxing with set theorists so I'll go with their findings.
An empty test passes.

https://en.wikipedia.org/wiki/Vacuous_truth#In_computer_programming

I wonder though, if there's an established term or condition for "all true" - feel like it has reason to exist as well as a stronger assertion.

**Also note to self:**
The predicates are also currently using `every` so the same "none false" is applying there as well.
Again, have a stare at and see if this sufficient, or needs to be made stronger into "all true".


Try out for planar space tests
------------------------------

I reckon a few back-and-forth rounds of revisions will be needed here while I work more stuff out.

So I'm going to take the asserts I had written for planar space and convert to tests and see what they look like.

Some things are starting to work now.

Probably can move development of this over to html-common pretty soon.


Wrapup
======

I'm going to wrap this as an experiment here and the testing code over to html-common where it can be developed with a release cycle.
Further typing work can get new tasks.

* Have a tiny little testing library going - not out of the nest yet, but needs to be in html-common
* Have the following predicates so far:	NoneFalse, AllTrue, AllEqual, EqualTo, GreaterThan, LessThan, Excepts
* Still working out some typing rules, particularly for classes
* Dynamically instantiating classes type-safely isn't all that simple
* Discovery: empty tests should pass

Future work:
* More typing experiments, esp for classes
* `html-common` Get nested tests going

