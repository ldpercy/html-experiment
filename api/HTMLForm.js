/* HTMLForm
*/
//export
class HTMLForm {

	/** @type {HTMLFormElement}	*/
	#formElement;


	/** @param {HTMLFormElement} formElement */
	constructor(formElement) {
		this.#formElement =  formElement;
	}

	/** @returns {HTMLFormElement}	*/
	get element() {
		return this.#formElement;
	}


	/** get formData
	 * @returns {FormData}
	 * Note: FormData has no toString method
	 */
	get formData() {
		const result = new FormData(this.element);
		return result;
	}


	/** get formEntries
	 * @returns {object}
	 * all values are returned as strings
	 */
	get formEntries() {
		const result = Object.fromEntries(this.formData);
		return result;
	}




	/** get formSettings
	 * Close dupe of HTMLApp.getFormData
	 * @returns {object}
	 */
	get formSettings() {
		const result = {}
		let input;

		let elements = this.element.elements;

		/*
		HTMLFormControlsCollection seems kind of fundamentally broken/not very practical as an interface.
		There's no way I can see to get a type-correct input element out of it.
		*/


		for (let item in elements) {
			console.log(item);
			input = elements[item];		// this returns Element rather than something useful like HTMLInputElement
			input.name;					// Property 'name' does not exist on type 'Element'.ts(2339)
		}




		// for (let i=0 ; i < this.element.elements.length; i++) {


		// 	input = /** @type {HTMLInputElement} */ (this.element.elements[i]);

		// 	if (input.name) { // need to ignore unnamed form elements like buttons

		// 		if (input.type === 'radio') {
		// 			//console.debug('radio', input);
		// 			result[input.name] = this.element[input.name].value;
		// 		}
		// 		else if (input.type === 'checkbox')
		// 		{
		// 			result[input.name] = input.checked;
		// 		}
		// 		else
		// 		{
		// 			result[input.name] = input.value;
		// 		}
		// 	}
		// }

		//console.debug('getFormData result' , result);
		return result;
	}



}/* HTMLForm */
