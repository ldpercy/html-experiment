/*
**	simple-tree
*/

import * as tree from './tree-type.js';

/** @typedef {Array<ArrayNode>}		NodeArray	*/


/**
 * @implements {tree.ChildInterface}
 * @implements {tree.ParentReference}
 * @implements {tree.RootReference}
 */
export class ArrayNode {

	/** @type NodeArray			*/	#child		= [];
	/** @type tree.NodeOption	*/	#parent		= undefined;
	/** @type number			*/	#depth		= 0;
	/** @type ArrayNode	*/	#root		= this;
	/** @type number			*/	#counter	= 0;
	/** @type number			*/	#id			= 0;

	constructor() {
		this.#id = Date.now();	// Temporal.Now.instant().epochMilliseconds;
	}

	//
	//	queries
	//

	/** @returns number */
	get id()		{	return this.#id		}

	/** @returns NodeOption */
	get parent()	{	return this.#parent;	}

	/** @returns NodeArray */
	get child()		{	return this.#child;	}

	/** @returns number */
	get depth()		{	return this.#depth;	}

	/** @returns NodeInterface */
	get root()		{	return this.#root;	}


	//
	//	mutators
	//


	/** appendChild
	 * @argument {ArrayNode} node
	 * @returns {void}
	 **/
	appendChild(node) {
		this.#child.push(node);
	}

	/** removeChild
	 * @argument {ArrayNode} node
	 * @returns {ArrayNode}
	 **/
	removeChild(node) {
		//
		//let result = this.#child.splice(id, 1)[0];

		// in this case we'd need to know which item in the child array the node was,
		// so the child node might need to keep a note of it's array index?

		return node;
	}


}/* ArrayNode */



/*
Todo:
* node insertion + cycle prevention?
* some sort of node identifier / position indicator
	A position indicator would be dynamic, whereas id should be static

* graft?



### Node position

Little bit of thought needed here as the node itself isn't aware of its array index, or even that it's in an array.
Might not be a quick&easy soln for this.
use a proxy?


*/