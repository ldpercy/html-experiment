import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";
import { polygonApp } from "./polygonApp.js";
import * as preset from "./preset.js";

class UserInterface {

	keyFunctionMap = {
		'?'	: this.toggleAppInfoDialog,
	};


	eventListeners = [
		{
			query: '#form-clock',
			type: 'change',
			listener: this.formChangeHandler
		},
		{
			element: document,
			type: 'keydown',
			listener: this.keyboardHandler
		},
		{
			query: 'select,input',
			type: 'keydown',
			listener: (event)=>event.stopPropagation()
		},

		{
			query: '#button-showAppInfo',
			type: 'click',
			listener: this.toggleAppInfoDialog,
		},
	];


	constructor() {
		HTMLApp.addEventListeners(this.eventListeners, this);
		console.debug('user-interface');

		this.setUrlParameters();
	}


	setUrlParameters() {

		console.debug('setUrlParameters');

		const presetName = polygonApp.getUrlParameter('preset');

		if (preset[presetName]) {

			this.loadPreset(preset[presetName]);
		}


	}


	loadPreset(preset) {

		//this.foo = preset.bar;

	}






	keyboardHandler(event) {
		if (!event.altKey && !event.ctrlKey && !event.metaKey) {

			if (this.keyFunctionMap[event.key]) {
				event.preventDefault();
				this.keyFunctionMap[event.key]();
			}
		}
	}/* keyboardHandler */


	toggleAppInfoDialog() {
		// console.debug('someone write this');
	}



}/* Controller */

export const ui = new UserInterface();



