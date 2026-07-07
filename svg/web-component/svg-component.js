/* index.js
*/

import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {

	appInfo = ["Experiment: SVG Web Components"];

	eventListeners = [
		{
			query: '#button-lightMode',
			type: 'click',
			listener: this.modeClickListener
		},
		{
			query: '#button-darkMode',
			type: 'click',
			listener: this.modeClickListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];




	modeClickListener(event) {
		//console.log(event.target.attributes); //attributes['value']
		const newMode = event.target.attributes['mode'].value;
		this.setMode(newMode);
	}


	setMode(mode) {
		//console.log('setMode', mode);
		if (mode === 'light')
		{
			document.documentElement.classList.replace('dark','light') ;
		}
		else {
			document.documentElement.classList.replace('light','dark') ;
		}
		localStorage.mode = mode;
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setMode(localStorage.mode);


		/*
		const url = window.location;
		document.getElementById('input-url').value = url;
		const urlObj = new URL(url);
		console.log(urlObj);
		*/


		// console.log('document.styleSheets:', document.styleSheets);


	}


}/* IndexApp */



var indexApp = new IndexApp();



// Create a class for the element
class MyCustomElement extends HTMLElement {
	static observedAttributes = ["color", "size"];

	constructor() {
		// Always call super first in constructor
		super();

		/*
		let template = document.getElementById("template0");
		let templateContent = template.content;
		*/

		/** @type { HTMLTemplateElement } */
		let template = document.querySelector("#template0");
		let templateContent = template.content;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(templateContent.cloneNode(true));

	}

	connectedCallback() {
		console.log("Custom element added to page.");
	}

	disconnectedCallback() {
		console.log("Custom element removed from page.");
	}

	connectedMoveCallback() {
		console.log("Custom element moved with moveBefore()");
	}

	adoptedCallback() {
		console.log("Custom element moved to new page.");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed.`);
	}
}

customElements.define("my-custom-element", MyCustomElement);





