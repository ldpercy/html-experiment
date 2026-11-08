

console.log('nav.js');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);




function documentDOMContentLoaded() {


	console.log('documentDOMContentLoaded');


	document.innerHTML =+ `
		<g id="nav">
			<text style="fill:yellow; stroke: silver; stroke-width: 2px; font-size: 5em; dominant-baseline:middle;">
				<a title="To folder" href="./">🖿</a>
				<a title="Parent folder" href="../">🡅</a>
			</text>
		</g>

	`;


	console.log(document);

}/* documentDOMContentLoaded */




