# scroll_position
A javascript function that returns the position of a scrolled page.
It can be handy when building a scroll progress bar or parallax effect.

### Install
Place a copy of scrollPosition.js inside the project's javascript folder.
Add a script tag to the HTML body like so:
```html
...
<script src="scrollPosition.js"></script>
<script src="base.js"></script>
</body>
</html>
```

### Use
The function call returns a number between 0 and 100 representing a percentage of how far a page has been scrolled.
```javascript
console.log(scrolled());
```
or
```javascript
targetElement.style.width = `${scrolled()}%`;
```