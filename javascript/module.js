/*
**	module.js
*/





/** @param {number} number */
export function factorial(number) {
	const result = (number < 1) ? 1 : number * factorial(number-1);
	return result;
}



export function dostuff(arg) {
	console.log(`dostuff(${arg})`)
}