Tree
====


* https://en.wikipedia.org/wiki/Tree_(graph_theory)#Rooted_tree



Want to sketch a few tree ADTs so I can solve some problems a bit more generally.


Tree/node types & properties
----------------------------

Probably the main thing is that it's an acyclic graph, with some notion of a root.
Beyond that a lot of things could be up for grabs.

* Datatype for node - object, map, class instance?
* Datatype for child collection - object, map, set, array, direct properties of the node etc
* Number of children? Eg binary tree, ternary tree, unlimited etc
* Do nodes have a parent ref?
* Do nodes have identifiers?
* Do nodes know their position in the child collection/tree?
* Do nodes have associated payloads/data (apart from children), and if so what type is the data?


A lot of the above could be varied depending on requirements, language of implementation etc.
It's probably also why you don't really see any sort of general 'Tree' data structures in standard libraries - too many options.


### Mixed node types

I was wondering if you could have a sort of really generic tree where the child nodes were comprised of different kinds of TreeNode implementations.
Eg some ArrayNode, some binary nodes, some with/without parent refs?
You maybe could, but you couldn't really rely on it for very much.
Most actually useful trees are likely to be all of the same nodetype (i think).



Array as underlying collection
------------------------------

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





Graft / appendChild
-------------------

Trying to figure out a good way to add nodes to a tree.
For existing nodes, it'll probably have to be a graft, but trying to figure out how to safely handle the parent node.

The parent property of a node should be mostly read-only I think.

That is you should use 'proper' techniques for prune/graft so other things can be kept in order. [citation needed - should clarify what operations here]

	-> A counterexample would be if the child collection (eg array) was exposed and operations were done directly on it.
	The client coder could add/remove things easily, but also easily break the tree by not updating children's parent references.
	So we probably need to enforce api use to keep things in order & useful.
	Something like that could be used as a v.simple tree variant though - it might have a use case somewhere.

Problem is, graft/appendChild are usually done from the parent's perspective, and it doesn't have access to the child's parent property (I think).
So how to 'correctly' solve?

There are few different sort of 'maybe' avenues here:
* See if the parent can bypass the child nodes privacy restrictions - feels wrong
* Use a different kind of privacy for the parent property? eg https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#writable
* Append from the child node's perspective?

### Append as a mutator method of the child node?

I'm leaning towards this initially, but it seems unusual - don't think i've seen it done like this before.

You'd end up with a method that looked something like:

	node.appendTo(parentNode) {
		this.#parent = parentNode
		parentNode.append ....waita a second

Hang on that doesn't seem right either - you need to call a mutator on both nodes, so...
Lemme think a bit more.
Maybe I just need a separate parent Setter on the node?
Feel like modifiers are going to go round in circles...



Prune/graft scenarios
---------------------

prune:
* remove the node from the child array
* set the node's parent to null

graft:
* add the node to the child array
* update the node's parent

