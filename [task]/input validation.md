Input validation
================


This has cropped up as a problem in screensaver, and I'm starting to think about it, but I don't think it's going to be as quick and easy as I'd hoped.

Around about here is where regular folks would lean on a library/ui-framework.


* Built-in html validation attributes are probably good enough for my needs to invalidate whole forms & prevent submits, though I know there use-cases for more advanced kinds of whole-form validation where inputs are depedendant
* I'm mainly interested in live setting-style inputs, and what to do with sets and gets when values are invalid


Live setting inputs
-------------------

* validation attributes don't prevent you from having invalid