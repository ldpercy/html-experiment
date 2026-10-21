/*
**	simple-tree
*/


/** @typedef {NodeInterface|undefined}	NodeOption	*/
/** @typedef {Array<NodeInterface>}		NodeArray	*/



/** NodeInterface
 * @interface
 */
export class NodeInterface {

	constructor() { }

	//
	//	queries
	//

	/** @returns NodeOption */
	get parent()	{	return undefined	}


	//
	//	mutators
	//

	/** appendChild
	 * @argument {NodeInterface} node
	 * @returns {void}
	 **/
	appendChild(node) {	}

	/** removeChild
	 * @argument {any} id
	 * @returns {NodeOption}
	 **/
	removeChild(id) { return null; }

}/* NodeInterface */






/**
 * @implements {NodeInterface}
 */
export class ArrayNode {

	/** @type NodeArray		*/	#child		= [];
	/** @type NodeOption	*/	#parent		= undefined;
	/** @type number		*/	#depth		= 0;
	/** @type NodeInterface	*/	#root		= this;
	/** @type number		*/	#counter	= 0;
	/** @type number		*/	#id			= 0;

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


	/**
	 * @argument {NodeInterface} node
	 * @returns {void}
	 **/
	appendChild(node) {
		this.#child.push(node);
	}

	/**
	 * @argument {number} id
	 * @returns {NodeOption}
	 */
	removeChild(id) {
		let result = this.#child.splice(id, 1)[0];
		return result;
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