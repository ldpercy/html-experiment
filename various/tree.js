
/*
**	tree.js
*/


import { ObjectView } from '../[common]/component/object-viewer.js';
import * as tree from '../[common]/module/tree-array.js';

import { ObjectRenderer } from '../[common]/module/object-render.js';


let t1 = new tree.Node;
//t1.foo = 'asdasd';
console.log('Object.getPrototypeOf(t1)', Object.getPrototypeOf(t1));
console.log('t1',t1.constructor.name, t1);


let c1 = new tree.Node();

t1.appendChild(c1);
t1.appendChild(new tree.Node());


//console.log(t1.child);
console.log('t1:',t1);



// let dv = /** @type {ObjectView} */ (document.getElementById('data-output'));		// really like to find a better way to do this...
// dv.render(t1);


let dho = /** @type {ObjectView} */ (document.getElementById('htmlOutput'));		// really like to find a better way to do this...



let customRenderer = new Map();
customRenderer.set(
	tree.isArrayNode,
	tree.renderArrayNode
);

let or = new ObjectRenderer(customRenderer);

//debugCustomRenderer();

dho.innerHTML = or.render(t1);








