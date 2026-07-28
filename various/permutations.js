


/* permutations needs be a recursive function i think


	input is a set of elements, order unimportant

	output is set (order unimportant i think) of ordered sequences of the elements

	eg
		permutations(new Set({a,b,c})) =

		{
			[a,b,c]
			[a,c,b]
			[b,a,c]
			[b,c,a]
			[c,a,b]
			[c,b,a]
		}

*/

/** permutations
 * @param {Set} set
 * @returns {Set<array>}
 */
function permutations(set) {
	let result = new Set();



	let temp = [];

	for (const value of set.values()) {
		console.log(value);

		let valueSet = new Set(value);
		temp = new Array(value);
		let difference = set.difference(valueSet)			// needs 'esnext'??
		console.log('difference', difference);

		let subsetPermutations = permutations(difference);



		for (let permutation in subsetPermutations) {
			temp.concat(permutation);
			result.add(temp);
		}

	}

	return result;
}
