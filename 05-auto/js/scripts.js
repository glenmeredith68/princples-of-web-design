// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;



function toggleMenu() {
    document.querySelector("nav").classList.toggle("open");
    document.querySelector("#hamb").classList.toggle("open");
}
  
  const ham = document.querySelector("#hamb").addEventListener("click", () => {
    toggleMenu();
  });
  