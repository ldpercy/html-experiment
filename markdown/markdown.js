/*
**	Markdown
*/


/** markdownToHTML
 * from: codewolfy Build Your Own Markdown to HTML Converter Using JavaScript
 * @param {string} markdown
 */
function markdownToHTML(markdown) {
	let result = markdown;

	result = result.replace(/^###### (.*$)/gim, "<h6>$1</h6>");
	result = result.replace(/^##### (.*$)/gim, "<h5>$1</h5>");
	result = result.replace(/^#### (.*$)/gim, "<h4>$1</h4>");
	result = result.replace(/^### (.*$)/gim, "<h3>$1</h3>");
	result = result.replace(/^## (.*$)/gim, "<h2>$1</h2>");
	result = result.replace(/^# (.*$)/gim, "<h1>$1</h1>");
	result = result.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
	result = result.replace(/\*(.*?)\*/gim, "<em>$1</em>");
	result = result.replace(/`([^`]+)`/gim, "<code>$1</code>");
	result = result.replace(/([^]+)([^)]+)/gim, "<a href='$2' target='_blank'>$1</a>");
	result = result.replace(/\n{2,}/g, "</p><p>");
	result = "<p>" + result + "</p>";
	result = result.replace(/<p><h([1-6])>/g, "<h$1>");
	result = result.replace(/<h([1-6])><p>/g, "</h$1>");
	result = result.replace(/<p>\s*<\/p>/g, "");

	return result;
}/* markdownToHTML */




