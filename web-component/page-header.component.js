/*
**	PageHeader
*/


export class PageHeader extends HTMLElement {
	// static observedAttributes = ["colour"];

	// /** @type {HTMLInputElement} */ colorInput;
	// /** @type {HTMLInputElement} */ textInput;

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<header>
				<h1><a href=""><slot name="page-title">Default page title</slot></a></h1>
				<nav>
					<a class="colourScheme-selector" href="?colourScheme=light" title="Light colour scheme" data-colourscheme="light">🟓</a>
					<a class="colourScheme-selector" href="?colourScheme=dark" title="Dark colour scheme" data-colourscheme="dark">🟒</a>
					<a title="To folder" href="./">🖿</a>
					<a title="Parent folder" href="../">🡅</a>
				</nav>
			</header>
		`;

		//console.log('this', this);
		//console.log('document', document);
		//console.log('shadowRoot', this.shadowRoot);

		this.shadowRoot.querySelectorAll('.colourScheme-selector').forEach(
			(element) => {
				element.addEventListener(
					'click',
					(event) => {
						event.preventDefault();
						const eventTarget = /** @type {HTMLElement} */ (event.target);		// this cast is awkward - see if there is a 'proper' way
						this.setColourScheme(eventTarget.dataset.colourscheme);
					}
				);
			}
		);

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

}/* class PageHeader */


customElements.define("page-header", PageHeader);
