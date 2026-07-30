


/* permutations needs be a recursive function i think


	input is a set of elements, order unimportant

	output is set (order unimportant i think) of ordered sequences of the elements


	eg

		permutations(new Set({})) ===
		{
		}


		permutations(new Set({a})) ===
		{
			[a]
		}

		permutations(new Set({a,b})) ===
		{
			[a,b]
			[b,a]
		}

		permutations(new Set({a,b,c})) ===
		{
			[a,b,c]
			[a,c,b]
			[b,a,c]
			[b,c,a]
			[c,a,b]
			[c,b,a]
		}


	This is kinda working now, but using sets means dupes get removed, so will need another version to allow for that.


*/

/** permutations
 * @param {Set<any>} set
 * @returns {Set}
 */
function permutations(set) {
	//console.log(`permutations(${Array.from(set)})`);
	let result = new Set();	// set of arrays

	let thisPermutation = [];

	if (set.size === 1) {
		result.add(Array.from(set));
	}
	else if (set.size > 1) {
		for (const value of set.values()) {
			//console.log(value);
			//temp = new Array(value);
			//console.log('temp',temp);

			let valueSet = new Set(value);
			let valueArray = new Array(value);

			let remainder = set.difference(valueSet)			// needs 'esnext'??
			//console.log('value:', value, 'remainder:', remainder);


			let remainderPermutations = permutations(remainder);

			for (const rp of remainderPermutations) {
				thisPermutation = valueArray.concat(rp);
				result.add(thisPermutation);
			}
		}
	}

	//console.log(`result(${Array.from(set)}) = `, result);

	return result;
}/* permutations */



/** @param {number} number */
function factorial(number) {
	const result = (number < 1) ? 1 : number * factorial(number-1);
	return result;
}