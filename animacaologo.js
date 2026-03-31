const toggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu ul");

toggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
