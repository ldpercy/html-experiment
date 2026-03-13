Storage
=======

https://developer.mozilla.org/en-US/docs/Web/API/Storage



* I though I'd accidentally done something one time like `ctrl-shift-r` that wiped the localStorage, but trying now can't replicate.
	See if there are any user actions that might do this.




Local storage
-------------

>  a Storage object for the Document's *origin*

* https://developer.mozilla.org/en-US/docs/Glossary/Origin
* https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#definition_of_an_origin


With my local dev server I'm seeing some shared items in localStorage for this reason.
Should check some other places, eg github pages where the domain is the same, only the path is different.
Might need to segregate storage into app namespaces.


