HTML Experiment
===============

`HTML` `CSS` `SVG` `JavaScript` `🍦JS` `DOM` `JSDoc`

<p align="center">
	<img width="15%" src="./favicon.svg" alt="HTML Experiment" title="HTML Experiment"/>
</p>

Experiments might be:
* horribly broken
* really dumb
* incomplete
* quite old


Slightly interesting things
---------------------------

> [!NOTE]
> Anything reusable should be moved to `html-common`

* [demo/polygon](./demo/polygon/)
* [css/colour](./css/colour.html)
* [css/colour-calc](./css/colour-calc.html)
* [css/perspective](./css/perspective.html)
* [dom/transform](./dom/transform.html)
* [dom/transform3d](./dom/transform3d.html)
* [svg/text/baseline](./svg/text/baseline.svg)


jsconfig & JSDoc
----------------

JavaScript typechecking is enabled in `./jsconfig.json` with the following settings:

```js
	"compilerOptions": {
		"checkJs": true,
		"target": "esnext",
		"module": "esnext"
	}
```
However this currently only works for `.js` files - see [jsdoc typechecking for inline scripts](<[project]/jsdoc typechecking for inline scripts.md>).

> [!IMPORTANT]
> Make sure the `compilerOptions` are set to something modern or you can get really confusing and outdated errors

*Some* information about library levels here:
https://www.typescriptlang.org/tsconfig#high-level-libraries


Tasks
-----

Details in [the project folder](./[project]/todo.md).

Currently working on:
* A small testing library
* JSDoc typing & type safety in general
* CSS colour calculation experiments
* 2D and 3D transformations with the DOM and CSS
* Temporal API
