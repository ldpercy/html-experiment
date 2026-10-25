/*
**	object-render

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
*/



/* Plug ins

Some sort of plug-in system would be handy here.
Eg a way to specify extra modules that define object renderers for things of particular types.

Might be able to use this in some instances:
	thing.constructor.name


Ideas:
* need to bring in nominated modules, or maybe just the render methods from certain modules?
* or even just a reference to the render functions themselves?
* plugins should be able to override default behaviour, so should go before things in here
*
* if a plugin has bee


*/



export class ObjectRenderer {

	/** @type Map<function,function> */
	customRenderer;
	// customRenderer.set(thing matcher function, thing renderer function)

	mainRenderFn = this.render;

	/** @argument Map<function,function> customRenderer */
	constructor(customRenderer = new Map()) {
		this.customRenderer = customRenderer;
	}


	debugCustomRenderer() {
		console.log('debugCustomRenderer:',this.customRenderer)
	}



	/** render
	 * @param {any} thing
	 * @return {string}
	 */
	render(thing) {
		let result = '';
		let customRenderFunction = [];

		this.customRenderer.forEach(
			(renderFn, testFn) => {				// key and val are reversed in forEach for some reason
				console.log(testFn, renderFn);
				if (testFn(thing)) {						// what if we have multiple matches??
					customRenderFunction.push(renderFn)
				}
			}
		);

		if (customRenderFunction.length) {
			console.log('custom Render Functions:',customRenderFunction);

			customRenderFunction.forEach(
				(renderFn) => {
					console.log('---------------', this.mainRenderFn);
					result += renderFn(thing, this);		// just going to concatenate multiple matches for now, until I figure what I really want here
				}
			);
			//result = customRenderFunction(thing);
		}
		else {

			switch (typeof thing) {
				case 'undefined':	result = `<code>undefined</code>`;		break;
				case 'boolean':		result = `<code>${thing}</code>`;		break;
				case 'string':		result = `<span>${thing}</span>`;		break;
				case 'number':		result = `<span>${thing}</span>`;		break;
				case 'bigint':		result = `<span>${thing}</span>`;		break;
				case 'symbol':		result = `<span>${String(thing)}</span>`;		break;
				case 'object':		result = this.renderObject(thing); 			break;
				case 'function':	result = this.renderFunction(thing); 		break;
				default:			result = `<strong>${thing}</strong>`;	break;
			}
		}

		return result;
	}/* render */



	/**	renderObject
	 * @param {object} object
	 * @return {string}
	 */
	renderObject(object) {
		let result = '';

		if (object === null) {
			result = `<code>null</code>`;
		}
		else if (Array.isArray(object)) {
			result = this.renderArray(object);
		}
		else {
			result = this.renderObjectObject(object);
		}

		return result;

	}

	/**	renderArray
	 * @param {array} array
	 * @return {string}
	 */
	renderArray(array) {
		let elements = '';
		for (const [index, element] of array.entries()) {
			//console.log(index, element);
			elements += `<tr><th>${index}</th><td>${this.render(element)}</td></tr>`;
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
	}/* renderArray */


	/**	renderObjectObject
	 * @param {object} object
	 * @return {string}
	 */
	renderObjectObject(object) {
		let elements = '';
		for (const [key, value] of Object.entries(object)) {
			elements += `<tr><th>${key}</th><td>${this.render(value)}</td></tr>`;
		}
		const result = `
			<table class="object">
				${elements}
			</table>
		`;
		//console.log(result);
		return result;
	}/* renderObjectObject */


	/**	renderFunction
	 * @param {function} func
	 * @return {string}
	 */
	renderFunction(func) {
		let result = func.toString();
		return result;
	}/* renderFunction */


}/* ObjectRenderer */





// thing condition function
// thing renderer runction









