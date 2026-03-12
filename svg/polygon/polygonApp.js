//
//	polygonApp.js
//

import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";
import { Maths } from "../[library]/maths.module.js";
import * as geometry from "../[library]/geometry.module.js";


class PolygonApp extends HTMLApp {


	appInfo = ["Polygon by ldpercy"];



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
	];


	polygonChangeListener(event) {
		this.redraw();
	}

	styleChangeListener(event) {
		this.updateStyle();
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.redraw();
		this.updateStyle();
	}/* documentDOMContentLoaded */


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
	};


	redraw() {
		//console.debug('polygonApp.redraw', arguments);

		const starGroup = this.getStarPath(
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
		document.getElementById('star-group').innerHTML = starGroup;
	}/* redraw */



	updateStyle() {
		//console.debug('polygonApp.updateStyle');

		if (document.getElementById('input-fillRule').value === 'evenodd') {
			document.getElementById('star-group').classList.add('evenodd');
		}
		else {
			document.getElementById('star-group').classList.remove('evenodd');
		}

		if (document.getElementById('input-showMarkers').checked) {
			document.getElementById('star-group').classList.add('show-markers');
		}
		else {
			document.getElementById('star-group').classList.remove('show-markers');
		}

		if (document.getElementById('input-showGrid').checked) {
			document.getElementById('group-grid').style.display = '';
		}
		else {
			document.getElementById('group-grid').style.display = 'none';
		}

		const startColour = document.getElementById('input-startColour').value;
		document.getElementById('star-group').style.setProperty('--start-colour',startColour);

		const opacity = document.getElementById('input-opacity').value;
		document.getElementById('star-group').style.setProperty('--opacity', opacity);


	}/* updateStyle */



	/** getStarPath
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
	getStarPath(
			radius,				// radius of points
			sides, 				// how many sides the polygon has
			pointStep, 			// how many divisions to the next vertex
			startDivision,		// integer divisions of the base angle to the start of the polygon
			copies, 			// number of copies of the polygon to draw
			divisionOffset,		// integer divisions of the base angle between the copies
			copyPaths,			// combined or separate svg paths
			coordinates,		// absolute or relative
		) {
		console.debug(arguments);
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
				result += `<path class="star" d="${path} z" style="--degrees:${degrees}"/>`;
				lastPoint = new geometry.Point(0,0);
				path = '';
			}
			else {
				path += ` Z `;
			}
		}// for c

		if (copyPaths === 'combined') {
			result = `<path class="star" d="${path} z" style="--degrees:0"/>`;
		}

		return result;
	}/* getStarPath */

	/** round
	 * @param {number} number
	 * @param {number} decimalPlaces
	 * @return {string}
	 */
	round(number, decimalPlaces = this.element.decimalPlaces.value) {
		return number.toFixed(decimalPlaces);
	}

}/* PolygonApp */






const polygonApp = new PolygonApp();

