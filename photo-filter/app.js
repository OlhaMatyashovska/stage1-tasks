// Спробуємо зробити пункт__2
// Почнемо просто з написання робочого коду
const filters = document.querySelectorAll(".filters input");
filters.forEach(input => input.addEventListener("input", applyFilters));
//outputs.forEach(output => output.addEventListener("input", setCorrectData));
function applyFilters() {
   const suffix = this.dataset.sizing || '';
   // не дуже розумію як працює setProperty and Css variables
   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
   event.target.nextElementSibling.value = this.value;
}

