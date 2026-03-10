HTML element types
==================

Figure out correct types for queried element references.


```
2026-03-10		new task
```


I'm running into this in a few places, and have just thought of another case where it will apply - element ref structures in HTMLApp.

The references returned by getElementById, querySelectorAll, form.elements etc often don't have the needed interfaces, so will fail typechecks when using particular attributes.

For example `getElementById` returns an HTMLElement (or SVGElement) but can't easily be used type-safely for input attributes:

> Property 'value' does not exist on type 'HTMLElement'.ts(2339)

So far I've some some success typecasting the returns from querySelectorAll, but not from getElementById for some reason.

Need to delve into this a bit and find consistent solns.

