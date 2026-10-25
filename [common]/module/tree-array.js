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
	 * @argument {Node} node
	 * @returns {void}
	 **/
	appendChild(node) {
		this.#child.push(node);
	}

	/** removeChild
	 * @argument {Node} node
	 * @returns {Node}
	 **/
	removeChild(node) {
		let childIndex = this.#child.indexOf(node);

		let result = this.#child.splice(childIndex, 1)[0];

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
		${arrayNode.id}
		${renderer.render(arrayNode.child)}
	`;
	return result;
}