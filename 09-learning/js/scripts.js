// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector("#year").textContent = year;

const ham = document.querySelector("#ham");
const nav = document.querySelector("#primaryNav");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  nav.classList.toggle("open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "cube",
  speed: 2000,
  //autoplay
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
