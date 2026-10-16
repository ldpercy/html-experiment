/*
**	simple-tree
*/



/** @typedef {Node|null}	NodeOption	*/
/** @typedef {Array<Node>}	NodeArray	*/


//Temporal.Now.instant().epochMilliseconds;


export class Node {



	/** @type Array<Node> */	#child		= [];
	/** @type NodeOption */		#parent		= null;
	/** @type number */			#depth		= 0;
	/** @type Node */			#root		= this;
	/** @type number */			#counter	= 0;
	/** @type number */			#id			= 0;

	constructor() {
		this.#id = Date.now(); // Temporal.Now.instant().epochMilliseconds;
	}


	/** @returns number */
	get id()		{	return this.#id		}

	/** @returns NodeOption */
	get parent()	{	return this.#parent;	}

	/** @returns NodeArray */
	get child()		{	return this.#child;	}

	/** @returns number */
	get depth()		{	return this.#depth;	}

	/** @returns Node */
	get root()		{	return this.#root;	}

}/* Node */



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