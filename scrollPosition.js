function scrolled() {
    /*
    Return a number between 0 and 100 representing
    a percentage of how far a page has been scrolled.
    */
    var cHeight = document.body.clientHeight;
    var wHeight = window.innerHeight;
    var scrollOffset = window.pageYOffset;
    var onePercentOfHeight = (cHeight - wHeight) / 100;
    var scrollPosition = scrollOffset / onePercentOfHeight;

    return scrollPosition;
}