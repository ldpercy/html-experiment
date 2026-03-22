import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";
import { polygonApp } from "./polygonApp.js";
import * as preset from "./preset.js";





class UserInterface {

	element = {};

	/** @type {object}
	 * Note to self: like this typechecking on elements is totally sidestepped - need to find typesafe ways of doing this
	 */
	elementMap = {
		radius			: 'input-radius',
		sides			: 'input-sides',
		pointStep		: 'input-pointStep',
		startDivision	: 'input-startDivision',
		copies			: 'input-copies',
		divisionOffset	: 'input-divisionOffset',
		separatePaths	: 'input-copyPaths',
		coordinates		: 'input-coordinates',
		decimalPlaces	: 'input-decimalPlaces',
		saveLink		: 'link-save',
	};


	keyFunctionMap = {
		'?'	: this.toggleAppInfoDialog,
	};


	eventListeners = [
		{
			query: '#form-polygon',
			type: 'change',
			listener: this.polygonChangeListener
		},
		{
			query: '#form-style',
			type: 'change',
			listener: this.styleChangeListener
		},
		{
			query: '.colourScheme-selector',
			type: 'click',
			listener: this.colourSchemeListener
		},
		{
			query: '.colourScheme-selector',
			type: 'dblclick',
			listener: this.colourSchemeSpecialListener
		},
		{
			query: '#link-save',
			type: 'click',
			listener: this.saveListener
		},
		{
			query: '#input-stroke-dasharray',
			type: 'change',
			listener: this.setStrokeDasharray,
		},
		{
			query: '#input-stroke-width',
			type: 'change',
			listener: this.setStrokeWidth,
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
		this.element = HTMLApp.buildElementMap(document, this.elementMap)
		HTMLApp.addEventListeners(this.eventListeners, this);
		console.debug('user-interface constructor');
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




	polygonChangeListener(event) {
		this.redraw();
	}

	styleChangeListener(event) {
		this.updateStyle();
	}

	colourSchemeListener(event) {
		event.preventDefault();
		polygonApp.setColourScheme(event.target.dataset.colourscheme);
	}

	colourSchemeSpecialListener(event) {
		//console.log('colourSchemeListener', event.target.dataset);
		event.preventDefault();
		polygonApp.setColourScheme(event.target.dataset.colourschemespecial);

	}


	setStrokeWidth() {
		const strokeWidth = document.forms['form-style']['input-stroke-width'].value;
		document.body.style.setProperty('--stroke-width', strokeWidth);
	}

	setStrokeDasharray() {
		const dasharray = document.forms['form-style']['input-stroke-dasharray'].value;
		//document.getElementById('polygon-group').style.setProperty('--stroke-dasharray', dasharray);
		document.body.style.setProperty('--stroke-dasharray', dasharray);

		const dasharaySum = dasharray.trim().split(' ').join(' + ');
		//console.debug(dasharaySum);

		document.body.style.setProperty('--to-stroke-dashoffset',`calc(${dasharaySum})`);
		//toStrokeDashoffset =
	}


	saveListener(event) {

		//this.element.saveLink.download = 'polygon.text';
		//this.element.saveLink.href = "data:text/plain;utf8,This is polygon.text";

		//	download="~/foo.text" href="data:text/plain;utf8,Some fantastic content to download"
		//event.preventDefault();

		// a very quick naive attempt that doesnb't quite work - needs some svg cleaning and rebuilding
		this.element.saveLink.download = 'polygon_download.svg';

		const polygonGroup = document.getElementById('polygon-group').innerHTML;

		const svg= `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1200 -1200 2400 2400" preserveAspectRatio="xMidYMid meet" >
				<title>polygon</title>
				<g id="polygon-group" style="stroke:black;fill:grey;fill-opacity:50%;">
					${polygonGroup}
				</g>
			</svg>
		`;

		const url = new URL(`data:text/plain;utf8,${svg}`);
		this.element.saveLink.href = url.toString();

		console.log(url.toString());
	}



	redraw() {
		console.debug('polygonApp.redraw', this.element);


		const polygonGroup = polygonApp.getPolygonPath(
			this.element.radius.value,
			this.element.sides.value,
			this.element.pointStep.value,
			this.element.startDivision.value,
			this.element.copies.value,
			this.element.divisionOffset.value,
			this.element.separatePaths.value,
			this.element.coordinates.value,
		);

		//console.log(starPath);
		document.getElementById('polygon-group').innerHTML = polygonGroup;
	}/* redraw */



	updateStyle() {
		//console.debug('polygonApp.updateStyle');


		if ( document.forms['form-style']['input-fillRule'].value === 'evenodd') {
			document.getElementById('polygon-group').classList.add('evenodd');
		}
		else {
			document.getElementById('polygon-group').classList.remove('evenodd');
		}

		if (document.forms['form-style']['input-antCrawl'].checked) {
			document.getElementById('polygon-group').classList.add('ant-crawl');
		}
		else {
			document.getElementById('polygon-group').classList.remove('ant-crawl');
		}


		// if ( document.forms['form-style']['input-showMarkers'].checked) {
		// 	document.getElementById('polygon-group').classList.add('show-markers');
		// }
		// else {
		// 	document.getElementById('polygon-group').classList.remove('show-markers');
		// }

		if ( document.forms['form-style']['input-showGrid'].checked) {
			document.getElementById('group-grid').style.display = '';
		}
		else {
			document.getElementById('group-grid').style.display = 'none';
		}

		const startColour =  document.forms['form-style']['input-startColour'].value;
		document.getElementById('polygon-group').style.setProperty('--start-colour',startColour);

		const opacity =  document.forms['form-style']['input-fill-opacity'].value;
		document.getElementById('polygon-group').style.setProperty('--fill-opacity', opacity);


		this.setStrokeDasharray();
		this.setStrokeWidth();

	}/* updateStyle */





}/* Controller */

export const ui = new UserInterface();



