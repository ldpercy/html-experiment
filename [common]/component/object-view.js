/*
**	ObjectView
**

Inheriting common styles


This works though:
	@import "/html-experiment/[common]/style.css";
*/

import { render } from '../js-to-html.js';


export class ObjectView extends HTMLElement {
	// static observedAttributes = ["colour"];

	// /** @type {HTMLInputElement} */ colorInput;
	// /** @type {HTMLInputElement} */ textInput;

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<style>
				/* @import "/html-experiment/[common]/style.css";				this works */


				#htmlOutput, #jsonOutput {
					font-family:monospace;
					font-size:13px;
				}

				#htmlOutput {

					table { border-collapse:collapse; width:100%; }
					th { vertical-align: middle; font-weight:normal; }
					td,th { padding:0.2em 0.4em; border-width:1px; border-style:dotted;}
					th { border-color: var(--body-background); }

					table.array {
						&>tbody>tr>th { background-color: #aaaaaa;}
						&>tbody>tr>td { border-color: #aaaaaa; }
					}

					table.object {
						border-color: orange;
						&>tbody>tr>th { background-color: lightsalmon;}
						&>tbody>tr>td { border-color: lightsalmon; }


						&>tbody>tr:first-child { border-radius: 1ex;}
						&>tbody>tr:first-child {
							&>th { border-radius: 1ex 0ex 0ex 0ex; }
							&>td { border-radius: 0ex 1ex 0ex 0ex; }
						}
						&>tbody>tr:last-child>th { border-radius: 0ex 0ex 0ex 1ex; }

					}
				}
				#jsonOutput {
					tab-size:4;
					border:1px dashed grey;
					padding:1ex;
					border-radius:1ex;
				}
			</style>

			<h3>html:</h3>
			<div id="htmlOutput"></div>
			<h3>json:</h3>
			<pre id="jsonOutput"></pre>
		`;

		//console.log('this', this);
		//console.log('document', document);
		//console.log('shadowRoot', this.shadowRoot);
		this.htmlOutput = this.shadowRoot.querySelector('#htmlOutput');
		this.jsonOutput = this.shadowRoot.querySelector('#jsonOutput');

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

	/**
	 * @param {any} data
	 */
	render(data) {
		this.htmlOutput.innerHTML = render(data);
		this.jsonOutput.innerHTML = JSON.stringify(data, undefined, '	');
	}


}/* class PageHeader */


customElements.define("object-view", ObjectView);
