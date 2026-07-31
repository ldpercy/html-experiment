Permutations
============

Getting a bunch of ideas coming in, need to get them out of my head and start triaging them.

* Allow for duplicates - currently using sets which removes them
* Group by first element
* Don't calculate/expand large subsets automatically but calculate them as requested
* Return the the permutations in a structured way, or allow for flexible flattening of the permutations
* Try out with different kinds of objects, eg functions



	/Permutation
	/Combinatorics
	/Combination
	/Factorial



Keyed structures
----------------

So far have been using a recursive method to generate the structures.

It's occurred to me that for some uses I might want to name the permutations, and in js they could get names like:

	0123
	2031
	3210

Which is just the order of array elements.

So for pretty much any structure that could get a numbering of it's elements a named permutation could be generated.

So eg you could have a function like:

	getPermutation(string name, any indexable)

And generating the permutation names is maybe easier than the permutation itself?
Actually it's kind of the same problem. Hmm.

The idea of generating some kind of ordered sequence of elements is kind of at the root all of this though.

So more generally we could have a function that just does this:

	getElementSequence(<array of keys>, <keyed structure>) <array of elements>

Then it just becomes a problem of keying the structure, and generating the key arrays.


Array permutations
------------------

I think then I want to concentrate on array permutations, as I think most of the other things will follow from it.

And the get element sequence function.
I feel like this could lead to something like a more abstract/structured version of method chaining that I've always wondered about.


