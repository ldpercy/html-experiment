Input validation
================


This has cropped up as a problem in screensaver, and I'm starting to think about it, but I don't think it's going to be as quick and easy as I'd hoped.

Around about here is where regular folks would lean on a library/ui-framework.


* Built-in html validation attributes are probably good enough for my needs to invalidate whole forms & prevent submits, though I know there use-cases for more advanced kinds of whole-form validation where inputs are depedendant
* I'm mainly interested in live setting-style inputs, and what to do with sets and gets when values are invalid


Live setting inputs
-------------------

* Validation attributes don't always prevent you from having invalid *state* in the input, it just gets flagged
*

### Ideas

Don't think i can prevent invalid input states in lots of cases as intermediate invalid states might be needed before reaching a valid one - url or email address for eg.

For some fairly simple cases it might be doable though - eg strictly positive integers.

* For live inputs where the values could get read at any time you could store the 'last known good' value in a data attribute and read that during invalid states

Doing that in a consistent or reusable way? Not sure yet...

