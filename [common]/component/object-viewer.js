/*
**	ObjectViewer
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
				@import "/html-experiment/[common]/component/object-viewer.css";				/* this works */
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
