HTML Experiment
===============

Experiments and tests of HTML, CSS, SVG, and JavaScript

<p align="center">
	<img width="15%" src="./favicon.svg" alt="HTML Experiment" title="HTML Experiment"/>
</p>

> [!NOTE]
> Anything reusable should be moved to `html-common`



Experiments might be:
* horribly broken
* really dumb
* incomplete
* quite old



Slightly interesting things
---------------------------

* [app/polygon](./app/polygon/)
* [css/colour](./css/colour.html)
* [css/colour-calc](./css/colour-calc.html)
* [css/perspective](./css/perspective.html)
* [dom/transform](./dom/transform.html)
* [dom/transform3d](./dom/transform3d.html)
* [svg/text/baseline](./svg/text/baseline.svg)


jsconfig & JSDoc
----------------

I'm using `jsconfig.json` to turn on typechecking, currently with the following settings - keep these updated to the latest:

```js
	"compilerOptions": {
		"checkJs": true,
		"target": "es2024",
		"module": "es2022"
	}
```

> [!IMPORTANT]
> Make sure `compilerOptions` in jsconfig are set to something modern or you can get really confusing and outdated errors


Tasks
-----

Details in [the task folder]([task]).

Currently working on:
* A small testing library
* JSDoc typing & type safety in general
* CSS colour calculation experiments
* 2D and 3D transformations with the DOM and CSS
* Temporal API
