File
====

* https://developer.mozilla.org/en-US/docs/Web/API/File
* https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications



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