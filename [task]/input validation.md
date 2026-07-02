Input validation
================


This has cropped up as a problem in screensaver, and I'm starting to think about it, but I don't think it's going to be as quick and easy as I'd hoped.

Around about here is where regular folks would lean on a library/ui-framework.


* Built-in html validation attributes are probably good enough for my needs to invalidate whole forms & prevent submits, though I know there use-cases for more advanced kinds of whole-form validation where inputs are depedendant
* I'm mainly interested in live setting-style inputs, and what to do with sets and gets when values are invalid


Live setting inputs
-------------------

* Validation attributes don't always prevent you from having invalid *state* in the input, it just gets marked as such

This is the main situation I'm interested in right now, as most of my one page apps are using inputs as 'live' controls.


### Ideas

Don't think i can prevent invalid input states in lots of cases as intermediate invalid states might be needed before reaching a valid one - url or email address for eg.

For some fairly simple cases it might be doable though - eg strictly positive integers.
(I've seen some websites do things like this for numeric inputs like phone nos.)

* For live inputs where the values could get read at any time you could store the 'last known good' value in a data attribute and read that during invalid states

Doing that in a consistent or reusable way? Not sure yet...


There might be a few different use cases here:

* An isolated input that must have a valid readable value, eg something not inside form. Not common, but possible.
* A set of inputs grouped into a form that must have valid readable state,
* A form backed by an object/class instance mediating its state - this is the most likely setup for my apps


The first, simplest, version is simply to rewrite all the accessors such that they return the last good valid input when they're in an invalid state.
That's easy enough.
Wonder if there's a neater way to do it though.


Possibly: [proxy and reflect](<../javascript/proxy and reflect.md>)


### Input restriction levels

* Allow invalid - this is the 'default' as html validation doesn't usually prevent invalid state, only submission
* Prevent invalid - active scripting to prevent invalid chars/values/state entirely

NB Browsers disagree a bit about the their implementations of input types and restrictions.



### Base HTMLForm class

Doing this manually at the moment, but thinking about making a base class for HTMLCommon that can assist with some of these tasks.

* app form classes extends base form
* initlialise with the form element
* it can add required validation features depending on needs, like valid live read
* Could possibly auto create some getters/setters with proxies? Though might lose jsdoc typechecking/typesafety?
*

