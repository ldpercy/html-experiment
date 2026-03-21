//
//	polygonApp.js
//

import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";
import { Maths } from "../../[common]/maths.module.js";
import * as geometry from "../../[common]/geometry.module.js";
import { ui } from "./user-interface.js";


class PolygonApp extends HTMLApp {

	appName	= "polygon";
	appInfo = ["Polygon by ldpercy"];

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


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.polygon_colourScheme || 'light');
		this.redraw();
		this.updateStyle();
	}/* documentDOMContentLoaded */





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

	];


	polygonChangeListener(event) {
		this.redraw();
	}

	styleChangeListener(event) {
		this.updateStyle();
	}

	colourSchemeListener(event) {
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourscheme);
	}

	colourSchemeSpecialListener(event) {
		//console.log('colourSchemeListener', event.target.dataset);
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourschemespecial);

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
		//console.debug('polygonApp.redraw', arguments);

		const polygonGroup = this.getPolygonPath(
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






	/** getPolygonPath
	 * TODO: this all needs to be converted over to planar space & angle objects
	 *
	 * @param {number} radius
	 * @param {number} sides
	 * @param {number} pointStep
	 * @param {number} startDivision
	 * @param {number} copies
	 * @param {number} divisionOffset
	 * @param {string} copyPaths
	 * @param {string} coordinates
	 */
	getPolygonPath(
			radius,				// radius of points
			sides, 				// how many sides the polygon has
			pointStep, 			// how many divisions to the next vertex
			startDivision,		// integer divisions of the base angle to the start of the polygon
			copies, 			// number of copies of the polygon to draw
			divisionOffset,		// integer divisions of the base angle between the copies
			copyPaths,			// combined or separate svg paths
			coordinates,		// absolute or relative
		) {
		//console.debug(arguments);
		let result = '';
		let path = '';
		let x = 0, y = 0;

		const mainAngle = Maths.TAU / sides;

		const startAngle = mainAngle/startDivision;

		let pointRadians = startAngle;
		let lastPoint = new geometry.Point(0,0);
		for (let c=0; c < copies; c++) {

			pointRadians += mainAngle/divisionOffset;

			let degrees = c * (360/copies);

			for (let i=0; i <= sides; i++)
			{
				pointRadians += mainAngle * pointStep;

				const p = new geometry.PolarPoint(pointRadians, radius).toPoint();

				if (coordinates === 'relative') {

					x = p.x - lastPoint.x;
					y = p.y - lastPoint.y;

					path  += (i===0) ? `m${this.round(x)},${this.round(y)} ` : `l${this.round(x)},${this.round(y)} `;
					lastPoint = p;

				} else {
					x = p.x;
					y = p.y;
					//console.log(i,Math.round(degrees(pointRadians)),x,y);

					path  += (i===0) ? `M${this.round(x)},${this.round(y)} ` : `L${this.round(x)},${this.round(y)} `;
				}
			}// for i

			if (copyPaths === 'separate') {
				result += `<path d="${path} z" style="--degrees:${degrees}"/>`;
				lastPoint = new geometry.Point(0,0);
				path = '';
			}
			else {
				path += ` Z `;
			}
		}// for c

		if (copyPaths === 'combined') {
			result = `<path d="${path} z" style="--degrees:0"/>`;
		}

		return result;
	}/* getPolygonPath */

	/** round
	 * @param {number} number
	 * @param {number} decimalPlaces
	 * @return {string}
	 */
	round(number, decimalPlaces = this.element.decimalPlaces.value) {
		return number.toFixed(decimalPlaces);
	}

}/* PolygonApp */






export const polygonApp = new PolygonApp();

