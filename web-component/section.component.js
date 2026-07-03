/*
**	SectionComponent
*/


export class SectionComponent extends HTMLElement {
	// static observedAttributes = ["colour"];

	// /** @type {HTMLInputElement} */ colorInput;
	// /** @type {HTMLInputElement} */ textInput;

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<section>
				<slot name="heading">Section component default heading</slot>
				<p>
					non-slot content from the component template
				</p>

				<!-- these, when filled, show up in the regular dom and can be easily styled from the outside -->
				<slot name="slot1">section-component default slot1</slot>
				<slot name="slot2">section-component default slot2</slot>
				<slot name="slot3">section-component default slot3</slot>
				<!-- unfilled slots stay in the shadow dom -->

			</section>
		`;

		//console.log('this', this);
		//console.log('document', document);
		//console.log('shadowRoot', this.shadowRoot);

		// this.shadowRoot.querySelectorAll('.colourScheme-selector').forEach(
		// 	(element) => {
		// 		element.addEventListener(
		// 			'click',
		// 			(event) => {
		// 				event.preventDefault();
		// 				const eventTarget = /** @type {HTMLElement} */ (event.target);		// this cast is awkward - see if there is a 'proper' way
		// 				this.setColourScheme(eventTarget.dataset.colourscheme);
		// 			}
		// 		);
		// 	}
		// );

	}/* constructor */


	connectedCallback() {
		//console.log("Custom element added to page.");
	}

	disconnectedCallback() {
		//console.log("Custom element removed from page.");
	}

	connectedMoveCallback() {
		//console.log("Custom element moved with moveBefore()");
	}

	adoptedCallback() {
		//console.log("Custom element moved to new page.");
	}


	attributeChangedCallback(name, oldValue, newValue) {
		// console.log(
		// 	`Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
		// );
	}

	/** @param {string} schemeName */
	setColourScheme(schemeName) {
		document.documentElement.dataset.colourscheme = schemeName;
	}

}/* class SectionComponent */


customElements.define("section-component", SectionComponent);
