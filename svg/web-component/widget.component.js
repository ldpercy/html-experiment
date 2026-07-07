/*
**	WidgetComponent
*/


export class WidgetComponent extends HTMLElement {
	// static observedAttributes = ["colour"];

	// /** @type {HTMLInputElement} */ colorInput;
	// /** @type {HTMLInputElement} */ textInput;

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<svg>
				<style>
					rect { fill:royalblue; }
					text { font-size: 100px; fill: tomato; }
				</style>
				<rect x="-100" y="-100" width="200" height="200"/>
				<slot name="my-text">My default text</slot>
			</svg>
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


}/* class SimpleComponent */


customElements.define("widget-component", WidgetComponent);
