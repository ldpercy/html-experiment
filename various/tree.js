
/*
**	tree.js
*/


import { ObjectView } from '../[common]/component/object-view.js';
import * as st from '../[common]/module/tree-simple.js';


let t1 = new st.ArrayNode;
//t1.foo = 'asdasd';




let c1 = new st.ArrayNode();

t1.appendChild(c1);


console.log('t1',t1.constructor.name, t1);

console.log('Object.getPrototypeOf(t1)', Object.getPrototypeOf(t1));

console.log(t1.child);
console.log(t1.parent);


let dv = /** @type {ObjectView} */ (document.getElementById('data-output'));		// really like to find a better way to do this...



console.log()

dv.render(t1);


