
//import stylesheet from "./js-import.css" with { type: 'css' };
import stylesheet from "./api.css" with { type: 'css' };

/*
This is throwing up typecheck errors at the moment, but it *does* work

I don't think this is my code - might be a problem with quick-lint or vscode's ts typchecking?

Chrome is giving a different error:

	js-import.html:1 @import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.


*/





console.log(stylesheet);
console.log(stylesheet.cssRules[0].style[0]);	// The only references i can find to custom vars are in _numbered_ styles , but they don't include the value???


console.log(stylesheet.cssRules[0].style.getPropertyValue('--org-colour'));
// BINGO - that's how you do it





/*
Reading css vars this way doesn't seem to work though

	0: "--org-colour"

	js-import.js:12 --org-colour

Can't get the value out?

*/

const asdf = await import("./api.css", { with: { type: "css" }});

//const asdf = await import("", { with: { type: "css" }});

console.log('asdf',asdf);


/*
There might be other ways to achieve what I'm trying here anyway...?


So I think to get the project colour for the HTML app i'll need a CSS import, static or dynamic, and if organised properly read it like:

	import stylesheet from "../index.css" with { type: 'css' };				// static
	await stylesheet = import("./index.css", { with: { type: "css" }});		// dynamic

	this.projectColour = stylesheet.cssRules[0].style.getPropertyValue('--project-colour')

*/