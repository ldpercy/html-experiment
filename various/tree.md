Tree
====


* https://en.wikipedia.org/wiki/Tree_(graph_theory)#Rooted_tree



Want to sketch a few tree ADTs so I can solve some problems a bit more generally.


To begin with I want children as either arrays or objects.
Also want to try describing nodes initially using pure types, but then also with small classes.
While I'm at it, do some exploring into typing of classes themselves.

### Interface?

There are a few other collection types in JS that could perhaps be used to create tree structures, that might have their own interesting properties and uses for certain circumstances.
If you needed to be able swap them in/out you'd prob want a simple std interface, otherwise each implementation is it's own I suppose.


### Data?
Need



Node position identifiers
-------------------------

The idea is that each node has a unique position identifier within the tree.

A few ways it could be done, sketching out ideas.

Locating a node in a tree by a position identifier would be trivial in for eg an array based tree:

	loc = '1,2,3'
	tree.getNodeByLocation(loc)

	// same as:
	tree.child[1].child[2].child[3]

So it probably doesn't need an implementation, unless you wanted error handling or something.

On the other hand, having an arbitrary node being able to report its position in a tree is probably a bit harder.
(There probably are some well known tricks for this though...)

A first approach might be to proxy or intercept any array mutators and update child nodes with their locs.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods

Seems a bit heavy handed?
If the node loc query recursed up the tree (rather than reading a static property) you'd probably only need to reindex the array being mutated though.





