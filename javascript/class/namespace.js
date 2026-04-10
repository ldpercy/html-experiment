/* namespace.js
*/
import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";

//import "../../ldpercy.js";
class ldpercy {}


ldpercy.namespace = class namespace {}

ldpercy.namespace.App = class extends HTMLApp {
	name = "namespaceApp";
	info = "namespaceApp by ldpercy";

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
		//console.log('colourSchemeListener', event.target.dataset);
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourscheme);
	}





	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);

	}


}/* NamespaceApp */



ldpercy.namespace.app = new ldpercy.namespace.App();



// VSCode syntax highlights these two slightly differently:

class foo1 {}
foo1.name = "foo1";
foo1.bar = class {}
// class foo1.asdf {}		// doesn't work?
// class foo1['asdf'] {}	// doesn't work either

const foo2 = class {}
foo2.name = "foo2";
foo2.bar = class {}

