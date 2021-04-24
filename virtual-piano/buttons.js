const notesButton = document.querySelector(".btn-notes");
const lettersButton = document.querySelector(".btn-letters");
const my_piano_keys = document.querySelectorAll(".piano-key");

notesButton.addEventListener('click', function() {
    if(notesButton.classList.contains('btn-active')) {
        return;
    } else {
        notesButton.classList.add("btn-active");
        lettersButton.classList.remove("btn-active");
        my_piano_keys.forEach(key => key.classList.remove("letter"));
    }
});

lettersButton.addEventListener('click', function() {
    if(lettersButton.classList.contains('btn-active')) {
        return;
    } else {
        lettersButton.classList.add("btn-active");
        notesButton.classList.remove("btn-active");
        my_piano_keys.forEach(key => key.classList.add("letter"));
    }
});