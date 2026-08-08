JSON
====


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON




* tabs chars in strings are *not* allowed




Types
-----
https://jsonic.io/guides/json-types


> * JSON has 6 types: string, number, boolean (true/false), null, array, object — no integer, date, or undefined
> * Numbers: IEEE 754 double precision — integers up to 2^53−1 (9,007,199,254,740,991) are exact; larger integers lose precision in JSON.parse()
> * NaN and Infinity are NOT valid JSON — JSON.stringify(NaN) silently returns "null"
> * undefined is not JSON — JSON.stringify({'{ a: undefined }'}) returns "{'{}'}", silently dropping the key
> * TypeScript mapping: string→string, number→number, boolean→boolean, null→null, array→T[], object→Record or interface
>
>JSON has exactly 6 data types: string (double-quoted UTF-8), number (IEEE 754 double-precision float), boolean (true/false, unquoted), null (unquoted), array (ordered list), and object (unordered key-value pairs) — no integers, dates, undefined, or functions.


