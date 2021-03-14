function activateFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();       
    }
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     
    }
    else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(); 
    }
    else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();   
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
fullscreenButton.addEventListener('click', changeDisplay);
function changeDisplay() {
    if(fullscreenButton.classList.contains("openfullscreen")) {
        fullscreenButton.classList.remove("openfullscreen");
        activateFullscreen(document.documentElement);
    } else {
        fullscreenButton.classList.add("openfullscreen");
        deactivateFullscreen(document.documentElement);
    }
}
