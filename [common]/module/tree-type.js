/*
**	Tree type
Setting up some basic types and interfaces
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
	 * @argument {TreeNode} node
	 * @returns {void}
	 **/
	appendChild(node) {
		// add the new node to this node's child collection
		// update the child's parent reference to this node
	}

	/** removeChild
	 * @argument {TreeNode} node
	 * @returns {TreeNode}
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

	/** @returns NodeOption */
	get parent()	{	return undefined	}


}/* ParentReference */


/** RootReference
 * @interface
 */
export class RootReference {

	constructor() { }

	//	queries
	//

	/** @returns NodeOption */
	get root()	{	return undefined	}


}/* RootReference */

