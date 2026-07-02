/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: Web Component";
	appInfo = ["Experiment: Web Component"];

	eventListeners = [
		{
			query: '.colourScheme-selector',
			type: 'click',
			listener: this.colourSchemeListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];


	colourSchemeListener(event) {
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourscheme);
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);
	}


}/* IndexApp */



var indexApp = new IndexApp();


