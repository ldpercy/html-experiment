
/*
**	tree.js
*/


import { ObjectView } from '../[common]/component/object-viewer.js';
import * as st from '../[common]/module/tree-simple.js';

import {render, customRenderer, debugCustomRenderer} from '../[common]/js-to-html.js';


let t1 = new st.ArrayNode;
//t1.foo = 'asdasd';
console.log('Object.getPrototypeOf(t1)', Object.getPrototypeOf(t1));
console.log('t1',t1.constructor.name, t1);


let c1 = new st.ArrayNode();

t1.appendChild(c1);

//console.log(t1.child);
console.log('t1:',t1);



// let dv = /** @type {ObjectView} */ (document.getElementById('data-output'));		// really like to find a better way to do this...
// dv.render(t1);


let dho = /** @type {ObjectView} */ (document.getElementById('htmlOutput'));		// really like to find a better way to do this...

customRenderer.set(
	st.isArrayNode,
	st.renderArrayNode
);

debugCustomRenderer();

dho.innerHTML = render(t1);








