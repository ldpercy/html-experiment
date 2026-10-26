/*
**	tree-array
**
**	Simple tree using arrays for children
*/

import * as tree from './tree-type.js';
import { ObjectRenderer }  from './object-render.js';

/** @typedef {Node|undefined}	NodeOption	*/
/** @typedef {Array<Node>}		NodeArray	*/


/**
 * @implements {tree.ChildInterface}
 * @implements {tree.ParentReference}
 * @implements {tree.RootReference}
 * @implements {tree.NodeId}
 */
export class Node {

	/** @type NodeArray		*/	#child		= [];
	/** @type NodeOption	*/	#parent		= undefined;
	/** @type number		*/	#depth		= 0;
	/** @type Node			*/	#root		= this;
	/** @type number		*/	#counter	= 0;
	/** @type string		*/	#id			= '0';


	constructor() {
		//this.#id = Date.now();	// Temporal.Now.instant().epochMilliseconds;
		this.#id = globalThis.crypto.randomUUID();
	}

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


	//	mutators
	//


	/** appendChild
	 * @argument {Node} childNode
	 * @returns {void}
	 **/
	appendChild(childNode) {

		// trialling a safety check here - can only append the child if it's parent is already set to this, ie is called from 'appendToParent'
		// if its parent is set to something else, it can't be appended
		// there could be a dozen different ways to do this, this is a first try

		if (childNode.parent === this) {
			this.#child.push(childNode);
		}

	}/* appendChild */

	/** removeChild
	 * @argument {Node} childNode
	 * @returns {Node}
	 **/
	removeChild(childNode) {
		let childIndex = this.#child.indexOf(childNode);

		let result = this.#child.splice(childIndex, 1)[0];

		// in this case we'd need to know which item in the child array the node was,
		// so the child node might need to keep a note of it's array index?

		return result;
	}

	/** appendToParent
	 * @argument {Node} parentNode
	 * @returns {void}
	 **/
	appendToParent(parentNode) {

		if (this.#parent) {
			this.#parent.removeChild(this);
		}

		this.#parent = parentNode;
		parentNode.appendChild(this);
		// trialling this as a 'safe' way to append the node that doesn't violate #parent privacy
		// set the parent first, then use it as a safety check
		// this works okay for new nodes, but it's going to get more complicated for things like node moves / graft & prune

	}/* appendToParent */


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


/**
 * @param {any} thing
 * @return {boolean}
 */
export function isArrayNode(thing) {
	console.log('isArrayNode', thing.constructor);
	return (thing.constructor.name === 'Node');
}


/**
 * @param {Node} arrayNode
 * @param {ObjectRenderer} renderer
 * @return {string}
 */
export function renderArrayNode(arrayNode, renderer) {
	console.log('renderArrayNode',arguments);
	console.log('mainRenderFn', renderer);

	let result = `
		<div>
			id: ${arrayNode.id}
		</div>
		<div>
			parent id: ${arrayNode.parent?.id}
		</div>
		<div>
			children: ${renderer.render(arrayNode.child)}
		</div>
	`;
	return result;
}