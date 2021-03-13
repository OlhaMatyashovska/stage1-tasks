// Спробуємо зробити пункт__2
// Почнемо просто з написання робочого коду
const filters = document.querySelectorAll(".filters input");
const outputs = document.querySelectorAll(".filters output");
filters.forEach(input => input.addEventListener("input", applyFilters));

function applyFilters() {
   const suffix = this.dataset.sizing || '';
   // не дуже розумію як працює setProperty and Css variables
   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
   event.target.nextElementSibling.value = this.value;
}
// reset_3
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
// треба розібратись чому не працює ця функція
//   function reset(input) {
//    if(!(input.name="saturate")) {
//       input.value = 0;
//       input.nextElementSibling.textContent = 0;
//       }  else {
//          input.value = 100;
//          input.nextElementSibling.textContent = 100;
//       }
//   }
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