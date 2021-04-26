
const filters = document.querySelectorAll(".filters input");
const outputs = document.querySelectorAll(".filters output");
filters.forEach(input => input.addEventListener("input", applyFilters));

function applyFilters() {
   const suffix = this.dataset.sizing || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
   event.target.nextElementSibling.value = this.value;
}
const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", resetFilters);
function resetFilters() {
   let variable_array = ["--blur","--invert","--sepia","`--saturate","--hue"];
   let start_value_array = ['0px','0%','0%','100%','0deg'];
   for(let i = 0; i < variable_array.length; i++) {
      document.documentElement.style.setProperty(variable_array[i],start_value_array[i]);
   }
  filters.forEach(input => reset(input));
}
  function reset(input) {
     switch(input.name) {
        case "saturate":
           input.value = 100;
           input.nextElementSibling.textContent = 100;
           break;
         default:
           input.value = 0;
           input.nextElementSibling.textContent = 0;
       }
  }
  // load option --- punkt__4
const nextButton = document.querySelector(".btn-next");
const image = document.getElementById("image");
let currentItem = 0;
nextButton.addEventListener("click", switchPicture);
window.addEventListener("DOMContentLoaded", function () {
   let time = (new Date()).getHours();
   let src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
   //let src = 'assets/images/';
   if(time >= 6 && time < 12) {
      src = src + 'morning/';
   } else if(time >= 12 && time < 18){
      src = src + 'day/'
   } else if(time >= 18 && time < 24) {
      src = src + 'evening/' 
   } else {
      src = src + 'night/';
   }
   image.src = src + '01.jpg';
   //drawImage(image.src);

 });

function switchPicture() {
   let time = (new Date()).getHours();
   let src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
   //let src = 'assets/images/';
   let images_array = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg",
   "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"];
   if(time >= 6 && time < 12) {
      src = src + 'morning/';
   } else if(time >= 12 && time < 18){
      src = src + 'day/'
   } else if(time >= 18 && time < 24) {
      src = src + 'evening/' 
   } else {
      src = src + 'night/';
   }
   currentItem++;
   if(currentItem > (images_array.length - 1)) {
      currentItem = 0;
   }
   src = src + images_array[currentItem];
   image.src=src;
   //drawImage(image.src);
}
// load image implementation
const inputFileButton = document.getElementById("btnInput");

inputFileButton.addEventListener("change",uploadImage);
function uploadImage(e) {
   const file = inputFileButton.files[0];
   const reader = new FileReader();
   reader.onload = () => {
      image.src = reader.result;
     // drawImage(reader.result);
   }
   reader.readAsDataURL(file);
}
//download implementation
const filterControls = document.querySelectorAll("input[type=range]");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
let ctxFilters;
function applyFilter() {
  ctxFilters = "";
  filterControls.forEach(function (item, index) {
    if (item.getAttribute("data-filter") === blur) item.value * 3;
    ctxFilters +=
      item.getAttribute("data-filter") +
      "(" +
      item.value +
      item.getAttribute("data-sizing") +
      ") ";
  });
  ctx.filter = ctxFilters;
  //return ctxFilters;
  //ctx.drawImage(img, 0, 0);
}
function drawImage() {
  const img = new Image();  
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = image.src;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    applyFilter();
    ctx.drawImage(img, 0, 0);
  }; 
}
const saveButton = document.querySelector(".btn-save");
saveButton.addEventListener('click', function(e) {
   drawImage();
   var link = document.createElement('a');
   link.setAttribute("download", "matyashovska.png");
   link.setAttribute("href", canvas.toDataURL());
   link.click();
   link.delete;
 });



 