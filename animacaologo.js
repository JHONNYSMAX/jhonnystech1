const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("ativo");
  menu.classList.toggle("ativo");
});
