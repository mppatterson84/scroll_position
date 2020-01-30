const targetElement = document.querySelector("div.progressBar div");

window.addEventListener("load", function () {
    targetElement.style.width = `${scrolled()}%`;
});

window.addEventListener("scroll", function () {
    targetElement.style.width = `${scrolled()}%`;
    console.log(`${scrolled()}% scrolled`);
});