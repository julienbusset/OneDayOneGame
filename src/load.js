// Variables
// Screen size manager
var mainHeight;
var mainWidth;
// Container manager
var mainContainer;

$(document).ready(function () {
    initScreen();
    getWindowsSize();
    initContainer();
});

function initScreen() {
    $(document.body).css({
        "margin":"0px",
        "overflow":"hidden"
    });
}

function getWindowsSize() {
    mainHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    mainWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function initContainer() {
    $(document.body).prepend('<div id="mainContainer"></div>');
    mainContainer = $("#mainContainer");
    mainContainer.css({
        "margin":"0px",
        "position":"relative",
        "overflow":"hidden"
    });
    setContainerSize(mainHeight, mainWidth);
}

// Can be used only after mainContainer has been initialized (check it?)
function setContainerSize(height, width) {
    $(mainContainer).height(height);
    $(mainContainer).width(width);
}