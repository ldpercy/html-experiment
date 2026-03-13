Storage
=======

https://developer.mozilla.org/en-US/docs/Web/API/Storage



* I though I'd accidentally done something one time like `ctrl-shift-r` that wiped the localStorage, but trying now can't replicate.
	See if there are any user actions that might do this.




Local storage
-------------

>  a Storage object for the Document's *origin*

https://developer.mozilla.org/en-US/docs/Glossary/Origin

> Web content's origin is defined by the scheme (protocol), hostname (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.


https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#definition_of_an_origin

> Two URLs have the same origin if the protocol, port (if specified), and host are the same for both. You may see this referenced as the "scheme/host/port tuple", or just "tuple".


With my local dev server I'm seeing some shared items in localStorage for this reason.
Should check some other places, eg github pages where the domain is the same, only the path is different.
Might need to segregate storage into app namespaces.

**Just checked**

`localStorage` is common between my github pages apps, so will need to namespace them.


