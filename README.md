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
const targetElement = document.querySelector("div");
targetElement.style.width = `${scrolled()}%`;
```

### See the example

[example code](../scroll_position/example/)


<a href="https://github.com/mppatterson84/scroll_position/tree/master/example" target="_blank">Example Code</a>


<a href="https://mppatterson84.github.io/scroll_position/example/example.html" target="_blank">Live Demo</a>