const piano = document.querySelector('.piano');
const keys = document.querySelectorAll(".piano-key");
// Пишемо функцію, яка створює аудіо
function playAudio(src) {
   const audio = new Audio();
   audio.src = src;
   // Грає аудіо кожного разу з самого початку
   audio.currentTime = 0;
   audio.play();
}

function playAudioWithButton(event) {
  if(event.target.classList.contains("piano-key")) {
       const note = event.target.dataset.note;
       const src = `assets/audio/${note}.mp3`;
       keys.forEach(key => {
         if(key.classList.contains("piano-key-active")) {
            key.classList.remove("piano-key-active");
         }
       });
       event.target.classList.add("piano-key-active");
       playAudio(src);
  }
}
piano.addEventListener("click", (event) => playAudioWithButton(event));
window.addEventListener('keydown',(event) => playAudioWithKeyboard(event));

function playAudioWithKeyboard(event) {
  const musicNote = event.code.slice(3).toLowerCase();
  let note;
  // не дуже подобається реалізація через switch --  як можна було б переписати???
  switch(musicNote) {
    case "t":
      note="d♯";
      break;
    case "r":
      note="c♯";
      break;
    case "u":
      note="f♯";
      break;
    case "i":
      note="g♯";
      break;
    case "o":
      note="a♯";
      break;
    case "c":
    case "d":
    case "e":
    case "f":
    case "g":
    case "a":
    case "b":
      note=musicNote;
      break;
    default:
      return;
  }
  const src = `assets/audio/${note}.mp3`;
  // event.target тут кнопки клавіатури
  const keyPressed = document.querySelector(`div[data-note="${note}"]`);
  keys.forEach(key => {
    if(key.classList.contains("piano-key-active")) {
       key.classList.remove("piano-key-active");
    }
  });
  keyPressed.classList.add("piano-key-active");
  playAudio(src);
}
piano.addEventListener('mouseover', function (event) {
  if(event.which == 1) {
    playAudioWithButton(event);
  }
});