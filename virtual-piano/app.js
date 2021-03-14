


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