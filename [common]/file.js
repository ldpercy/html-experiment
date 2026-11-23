/*
**	file.js
*/


/** importFile
 * @param {string} filePath
 * @returns {Promise<string>}
 */
export async function importFile(filePath) {
	//console.log(textImport);
	let result = undefined;

	try {
		const textImport = await import(`./${filePath}`, { with: { type:'text' }});
		//console.log(textImport);
		result = textImport.default;
	}
	catch {
		console.log(`importFile: cannot read "${filePath}"`);
	}

	return result;
}/* importFile */




/** importJson
 * @param {string} filePath
 * @returns {Promise<object>}
 */
export async function importJson(filePath) {
	//console.log(textImport);
	let result = undefined;

	try {
		const jsonImport = await import(`${filePath}`, { with: { type:'json' }});
		//console.log('jsonImport',jsonImport);
		result = jsonImport.default;
	}
	catch {
		console.log(`importJson: cannot read "${filePath}"`);
	}

	return result;
}/* importJson */



/** fetchFile
 * @param {string} filePath
 * @returns {Promise<string>}
 */
export async function fetchFile(filePath) {
	let result = undefined;
	//let result = ;

	// fetch(filePath)
	// 	.then(
	// 		(response) => {
	// 			//console.log(response);
	// 			console.log(response.text());
	// 			return response.text();
	// 		}
	// 	)
	// 	.then(
	// 		(text) => {
	// 			result = text;
	// 		}
	// 	)
	// 	.catch(
	// 		(e) => console.error(e)
	// 	);
	// 	console.log('fetchFile', filePath, result);

	const response = await fetch(filePath);
	//console.log(textImport);

	if (response.ok) {
		result = response.text();
	} else {
		console.log(`fetchFile: cannot read "${filePath}"`);
	}

	return result;
}/* fetchFile */




/**
 * @param {string} filePath
 * @param {string} method
 * @returns {Promise<string>}
 */
export async function doFileRead(filePath, method = 'fetch') {
	console.log('doFileRead:', method, filePath);

	let fileContent;
	if (method === 'import') {
		fileContent = await importFile(filePath);		// import version
	} else {
		fileContent = await fetchFile(filePath);		// fetch version
	}

	return fileContent;
}/* doFileRead */











/*	examples from
** https://stackoverflow.com/questions/14446447/how-can-i-read-a-local-text-file-in-the-browser



fetch("myText.txt")
	.then((res) => res.text())
	.then((text) => {
	// Do something with "text"
	})
	.catch((e) => console.error(e));

//

fetch('file.txt')
	.then(response => response.text())
	.then(text => console.log(text))
	// Outputs the content of the text file

//

const logFileText = async file => {
	const response = await fetch(file)
	const text = await response.text()
	console.log(text)
}

logFileText('file.txt')

*/




