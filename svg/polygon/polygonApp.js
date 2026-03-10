//
//	polygonApp.js
//

import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";

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
	}/* documentDOMContentLoaded */



	redraw() {
		//console.debug('polygonApp.redraw', arguments);

		const radius = document.getElementById('input-radius').value;
		const sides = document.getElementById('input-sides').value;
		const pointStep = document.getElementById('input-pointStep').value;
		const startDivision = document.getElementById('input-startDivision').value;

		const copies = document.getElementById('input-copies').value;
		const divisionOffset = document.getElementById('input-divisionOffset').value;
		const separatePaths = document.getElementById('input-copyPaths').value;
		const coordinates = document.getElementById('input-coordinates').value;

		const starGroup = this.getStarPath(radius, sides, pointStep, startDivision, copies, divisionOffset, separatePaths, coordinates);

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



	/* getStarPath
	TODO: this all needs to be converted over to planar space & angle objects
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
		let result = '';
		let path = '';
		let x = 0, y = 0;

		const mainAngle = Maths.TAU / sides;

		const startAngle = mainAngle/startDivision;

		let pointRadians = startAngle;
		let lastPoint = new Point(0,0);
		for (let c=0; c < copies; c++) {

			pointRadians += mainAngle/divisionOffset;

			let degrees = c * (360/copies);

			for (let i=0; i <= sides; i++)
			{
				pointRadians += mainAngle * pointStep;

				const p = new PolarPoint(pointRadians, radius).toPoint();

				if (coordinates === 'relative') {

					x = Math.round(p.x - lastPoint.x);
					y = Math.round(p.y - lastPoint.y);

					path  += (i===0) ? `m${x},${y} ` : `l${x},${y} `;
					lastPoint = p;

				} else {
					x = Math.round(p.x);
					y = Math.round(p.y);
					//console.log(i,Math.round(degrees(pointRadians)),x,y);

					path  += (i===0) ? `M${x},${y} ` : `L${x},${y} `;
				}
			}// for i

			if (copyPaths === 'separate') {
				result += `<path class="star" d="${path} z" style="--degrees:${degrees}"/>`;
				lastPoint = new Point(0,0);
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



}/* PolygonApp */



const polygonApp = new PolygonApp();

