/*
**	json.module.js

This is a possible alternative for json for when i want to validate the data structure, but dont want something like json schema.

*/


/** myConfig
 * @typedef {Object} MyConfig
 * @property {string}	myNumber
 * @property {string}	myString
 * @property {string}	[desc]
 */



/** @type {MyConfig} */
const foo = {
	"myString" : "foo",
	"myNumber" : 4
};





/** @type {MyConfig} */
export default {
	"myString" : "foo",
	"myNumber" : 4
};


