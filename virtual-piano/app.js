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
const notesButton = document.querySelector(".btn-notes");
const lettersButton = document.querySelector(".btn-letters");
notesButton.addEventListener('click', function() {
    if(notesButton.classList.contains('btn-active')) {
        return;
    } else {
        notesButton.classList.add("btn-active");
        lettersButton.classList.remove("btn-active");
    }
});
lettersButton.addEventListener('click', function() {
    if(lettersButton.classList.contains('btn-active')) {
        return;
    } else {
        lettersButton.classList.add("btn-active");
        notesButton.classList.remove("btn-active");
    }
});
const piano = document.querySelector('.piano');
const keys = document.querySelectorAll(".piano-key");
function playAudio(src) {
   const audio = new Audio();
   audio.src = src;
   audio.currentTime = 0;
   audio.play();
}
function bindAudio(e) {
  if(e.target.classList.contains("piano-key")) {
       console.log(e.code);
       const note = e.target.dataset.note;
       const src = `assets/audio/${note}.mp3`;
       playAudio(src);
  }
}
piano.addEventListener("click", bindAudio);
piano.addEventListener('click', (event) => {
  if(event.target.classList.contains('piano-key')) {
    keys.forEach((el) => {
      if(el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active');
      }
    });
    event.target.classList.add('piano-key-active');
  }
});
window.addEventListener('keydown',keyBoardAudio);
function keyBoardAudio(e) {
  const musicNote = e.code.slice(3).toLowerCase();
  const src = `assets/audio/${musicNote}.mp3`;
  const key = document.querySelector(`div[data-note="${musicNote}"]`);
  keys.forEach((el) => {
    if(el.classList.contains('piano-key-active')) {
      el.classList.remove('piano-key-active');
    }
  });
  key.classList.add("piano-key-active");
  playAudio(src);
}
piano.addEventListener('mousemove', function (e) {
  if(e.which === 1) {
      bindAudio(e);
  }
});