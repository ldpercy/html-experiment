/* index.js
*/
import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


console.log('IndexApp');

class IndexApp extends HTMLApp {
	name = "IndexApp";
	info = "IndexApp by ldpercy";

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

		const url = window.location.href;

		//document.getElementById('input-url').value = url;

		const urlObj = new URL(url);

		//console.log(urlObj);


		//console.log('document.styleSheets:', document.styleSheets);

		console.log('Your protocol is:', new URL(window.location.href).protocol);

	}


}/* IndexApp */



var indexApp = new IndexApp();


