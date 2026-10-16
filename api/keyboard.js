/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: keyboard";
	appInfo = ["Experiment: keyboard"];

	eventListeners = [
		// {
		// 	element: document,
		// 	type: 'keydown',
		// 	listener: this.documentKeydownListener
		// },
		{
			query: 'textarea',
			type: 'keydown',
			listener: this.textareaKeydownListener
		},
		{
			query: 'textarea',
			type: 'change',
			listener: this.textareaChangeListener
		},
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






	documentKeydownListener(event) {
		console.log('documentKeydownListener',event);
	}

	textareaKeydownListener(event) {
		console.log('textareaKeydownListener',event);
		if (event.key === 'Escape') {
			event.target.blur();
		}
		if (event.key === 'Tab') {
			event.preventDefault();	// this stops the focus change, but doesn't print a tab character
		}



	}


	textareaChangeListener(event) {
		console.log('textareaChangeListener',event);
	}




	/*
	keyFunctionMap = {
		'd'	: doCommands,
		'c'	: svg.clearDrawing,
		'o'	: toOrigin,

		'!'	: () => ui.showCommandSet(1),		// ! == shift-1
		'@'	: () => ui.showCommandSet(2),		// @ == shift-2
		'#'	: () => ui.showCommandSet(3),		// # == shift-3

		'T'	: toggleTurtle,
		'C'	: toggleCenter,
		'R'	: toggleRotate,

		'+'	: zoomIn,
		'z'	: zoomIn,
		'Z'	: zoomOut,
		'-'	: zoomOut,

		'?'	: ui.togglePopover,
	};


	documentKeyListener(event) {
		//console.log('documentKeyListener', event);

		if (keyFunctionMap[event.key]) {
			event.preventDefault();
			keyFunctionMap[event.key]();
		}

	}/ * documentKeyListener */





	//
	// Application
	//


	colourSchemeListener(event) {
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourscheme);
	}



	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);
	}


}/* IndexApp */


/** @type {IndexApp} */
var indexApp = new IndexApp();


var foo ="//";




