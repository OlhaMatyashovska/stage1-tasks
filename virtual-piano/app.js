// lets start with  button that displays the image fullscreen or not
// it works with esc button too)))
function activateFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();        // W3C spec
    }
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     // Firefox
    }
    else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    }
    else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();      // IE/Edge
    }
  };
function deactivateFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };
const fullscreenButton = document.querySelector(".fullscreen");
function changeDisplay() {
    if(fullscreenButton.classList.contains("openfullscreen")) {
        fullscreenButton.classList.remove("openfullscreen");
        activateFullscreen(document.documentElement);
    } else {
        fullscreenButton.classList.add("openfullscreen");
        deactivateFullscreen(document.documentElement);
    }
}
fullscreenButton.addEventListener('click', changeDisplay);
