//console.log('common-script.js');


/** getUrlParameter
 * @param {string} name
 * @return {string}
 */
function getUrlParameter(name)
{
	return (new URL(window.location.href)).searchParams.get(name);
}


/* createLog
Returns a log function that logs to the console with performance timing.
Use:
	mylog = createLog();
*/
function createLog() {
	return (...values) => {
		console.log(performance.now(), ...values);
	}
}


/* createPageLog
Returns a function that logs text to a page element and also to the console.
Optional 'value' will be fully logged to console.
Includes performance timing.
Use:
	mylog = createPageLog(myPageLogElement);
	mylog('foobar', myValue);
*/
function createPageLog(logElement) {
	return (...values) => {
		logElement.innerHTML += `[${performance.now()}] ${values.join(' — ')}\n`;
		console.log(`[${performance.now()}]`, ...values);
	}
}//createPageLog






/* addEventListener
*/
function addEventListener(query, eventName, listener) {
	document.querySelectorAll(query).forEach((node) => {
		node.addEventListener(eventName,
			(event)=>listener(event)
		);
	});
}


/** @returns {string} */
function randomColourRGB() {
	const r = Math.round((Math.random()*255));
	const g = Math.round((Math.random()*255));
	const b = Math.round((Math.random()*255));
	const a = Math.random();
	return `rgb(${r} ${g} ${b} / ${a.toFixed(3)})`;
}

/** @returns {string} */
function randomColourHex() {
	const r = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	const g = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	const b = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	return `#${r}${g}${b}`;
}

/** @returns {string} */
function randomColourHexWithAlpha() {
	const r = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	const g = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	const b = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	const a = Math.round((Math.random()*255)).toString(16).padStart(2,'0');
	return `#${r}${g}${b}${a}`;
}