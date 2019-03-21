/*Note: You will need to copy/past this code into a bookmark to work as a bookmarklet
  Otherwise, you can run this code in the console
  
  How this works:
  1) get color from the client (Hex or string)
  2) change the background color of the document
  3) change the background color of divs in the document (as they can sometimes cover/hide the document background)
*/

javascript: (function () {
  let color = prompt('Background Color? Hex or name will do', 'blue');
  document.body.style.backgroundColor = color;
  let divElements = document.querySelectorAll('div');
  for (elements of divElements) {
	   elements.style.backgroundColor = color;
  }
})();
