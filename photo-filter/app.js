// Спробуємо зробити пункт__2
// Почнемо просто з написання робочого коду
const filters = document.querySelectorAll(".filters input");
filters.forEach(input => input.addEventListener("input", applyFilters));
//outputs.forEach(output => output.addEventListener("input", setCorrectData));
function applyFilters() {
   const suffix = this.dataset.sizing || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

