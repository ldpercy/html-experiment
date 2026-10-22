/*
**	js-to-html


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


### Plug ins
Some sort of plug-in system would be handy here.
Eg a way to specify extra modules that define object renderers for things of particular types.

Might be able to use this in some instances:
	thing.constructor.name


*/




/**
 * @param {any} thing
 * @return {string}
 */
export function render(thing) {
	let result = '';

	switch (typeof thing) {
		case 'undefined':	result = `<code>undefined</code>`;	break;
		case 'boolean':		result = `<code>${thing}</code>`;		break;
		case 'string':		result = `<span>${thing}</span>`;		break;
		case 'number':		result = `<span>${thing}</span>`;		break;
		case 'bigint':		result = `<span>${thing}</span>`;		break;
		case 'symbol':		result = `<span>${String(thing)}</span>`;		break;
		case 'object':		result = renderObject(thing); 		break;
		case 'function':	result = renderFunction(thing); 		break;
		default:			result = `<strong>${thing}</strong>`;	break;
	}

	return result;
}



/**
 * @param {object} object
 * @return {string}
 */
function renderObject(object) {
	let result = '';

	if (object === null) {
		result = `<code>null</code>`;
	}
	else if (Array.isArray(object)) {
		result = renderArray(object);
	}
	else {
		result = renderObjectObject(object);
	}

	return result;

}

/**
 * @param {array} array
 * @return {string}
 */
function renderArray(array) {
	let elements = '';
	for (const [index, element] of array.entries()) {
		//console.log(index, element);
		elements += `<tr><th>${index}</th><td>${render(element)}</td></tr>`;
	}
	// const elements = array.map(
	// 	(item)=>`<li>${render(item)}</li>`
	// );
	const result = `
		<table class="array">
			${elements}
		</table>
	`;
	return result;
}


/**
 * @param {object} object
 * @return {string}
 */
function renderObjectObject(object) {
	let elements = '';
	for (const [key, value] of Object.entries(object)) {
		elements += `<tr><th>${key}</th><td>${render(value)}</td></tr>`;
	}
	const result = `
		<table class="object">
			${elements}
		</table>
	`;
	//console.log(result);
	return result;
}





/**
 * @param {function} func
 * @return {string}
 */
function renderFunction(func) {
	let result = func.toString();
	return result;
}