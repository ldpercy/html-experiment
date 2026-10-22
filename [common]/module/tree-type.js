/*
**	Tree type
Setting up some basic types and interfaces.

*/


/** @typedef {any}	TreeNode	*/
/** @typedef {TreeNode|undefined}	NodeOption	*/




/** ChildInterface
 * @interface
 *
 * Even this probably isn't practical to be universal for trees - b-trees often use something like left/right for the children.
 * might need to rename to ChildInterface or something.
 *
 */
export class ChildInterface {

	constructor() { }

	//	queries
	//


	//	mutators
	//

	/** appendChild
	 * @argument {ChildInterface} node
	 * @returns {void}
	 **/
	appendChild(node) {
		// add the new node to this node's child collection
		// update the child's parent reference to this node
	}

	/** removeChild
	 * @argument {ChildInterface} node
	 * @returns {ChildInterface}
	 **/
	removeChild(node) {
		return node;
	}

}/* ChildInterface */



/** ParentReference
 * @interface
 */
export class ParentReference {

	constructor() { }

	//	queries
	//

	/** @returns {ParentReference|undefined} */
	get parent()	{	return undefined	}


}/* ParentReference */


/** RootReference
 * @interface
 */
export class RootReference {

	constructor() { }

	//	queries
	//

	/** @returns {RootReference|undefined} */
	get root()	{	return undefined	}


}/* RootReference */


/** NodeId
 * @interface
 */
export class NodeId {

	constructor() { }

	//	queries
	//

	/** @returns {number|string} */
	get id()		{	return 0	}

}/* NodeId */

