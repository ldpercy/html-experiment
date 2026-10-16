File
====

* https://developer.mozilla.org/en-US/docs/Web/API/File
* https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications




Server-side file read
---------------------

Two techniques at the moment, fetch and import.
Fetch has been around for ages, and works everywhere.

Import is usually used for js modules, but the 'with' option allows for json and css (& more).
In firefox at the moment you can also import with `type:'text'` for a general file reader.

Each uses different semantics for the requested resource, fetch represents a http request/response; import follows module resolution rules.

Still working out the details, and whether either works out better for certain kinds of tasks.

I suspect for well-known local payloads like json import might work out better?
Will experiment.


### https://jakearchibald.com/2025/importing-vs-fetching-json/

> When you import a module (be it JS, WASM, CSS, or JSON), it's cached for the lifetime of the environment (e.g. a page or worker), even if the result is a network or parsing failure.

> But if you're doing something like:
>
>		const { default: results } = await import('/api/search?q=whatever', {with: { type: 'json' },});
>
> …then you have a memory leak, because each set of search results will live in the module graph for the life of the page. That isn't the case with fetch(), where returned objects can be garbage collected once they're out of reference.

> It makes sense to use JSON module imports for local static JSON resources where you need all/most of the data within.



### Fetch
> To read server-side files, use `fetch()`, with CORS permission if reading cross-origin.

```js
	const response = await fetch(resource);
	//console.log(textImport);

	if (response.ok) {
		result = response.text();
	} else {
		console.log(`fetchFile: cannot read "${resource}"`);
	}
```


### Import


```js
	// static, 'text' is ff only at the moment
	import fileContent from './filename.txt' with { type:'text' };

	// dynamic, 'text' is ff only only at the moment
	const fileContent = (await import(`./${fileName}`, { with: { type:'text' }})).default;
```




File upload and file download/save
----------------------------------

As far as I can tell right now the two processes are separated off from each other in terms of the api (though I can't see a really explicit statement to this effect yet).

Files that get selected/uploaded via things like file pickers can be manipulated/read etc, but don't seem to generate a persistent handle to carry through from upload through to save/download.

I'll have to think a bit more about this.
Once a file is saved I can probably maintain a handle?




showSaveFilePicker
------------------

https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker

Chrome only at the moment.

In ff should be able to get the savefile handle in other ways.


writableStream
--------------

https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream

```js
	const writableStream = await fileHandle.createWritable();

	console.log(writableStream);
	const filecontent = document.forms['myForm']['myInput'].value;

	// write the file
	await writableStream.write(filecontent);

	// close the file and write the contents to disk.
	await writableStream.close();
```




Input type=file
---------------


	value: "C:\\fakepath\\computer.svg"


hahaha


File/save download
------------------

I've done a leetle bit of this before, but several years ago, need to revisit.

This is one the main things I want initially - the ability to construct a payload and prompt the for the user to save it.

Thinking mainly of docs like html & svg, and composites of.

Just went and looked, don't have the old code, only have vague memories of how it worked.
Not sure if a server round-trip was required or it was all in-browser.

I seem to recall it involved a data url, but unsure.
Aha:

* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#download
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download


```html
	<a download="filename.txt" href="data:text/plain;utf8,Fantastic content to download">
		an 'a' element with a download attribute
	</a>
```

Brilliant.
Like this i hopefully should be able to save and load files.
Dangers of course....


### Triggering with a button
```html
	<button type="button" onclick="document.getElementById('dummy-anchor').click()">
		trigger file download
	</button>
	<a id="dummy-anchor" download="filename.txt" href="data:text/plain;utf8,download file content">
		download anchor to be triggered
	</a>
```


Href data
---------

Content gets truncated at hashes - will need url escaping of some sort.

Encoding hashes with `%23` works.

Need a proper refresher on URL escaping to get this right for all the reserved chars that might appear.


Here ya go:
*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent