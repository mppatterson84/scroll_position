const targetElement = document.querySelector("div.progressBar div");

window.addEventListener("load", () => {
    targetElement.style.width = `${scrolled()}%`;
});

window.addEventListener("scroll", () => {
    targetElement.style.width = `${scrolled()}%`;
    console.log(`${scrolled()}% scrolled`);
});