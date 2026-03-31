const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");
const links = document.querySelectorAll("#menuList a");

// abrir / fechar menu
toggle.addEventListener("click", () => {
  toggle.classList.toggle("ativo");
  menu.classList.toggle("ativo");
});

// fechar ao clicar em um link
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
    toggle.classList.remove("ativo");
  });
});

// fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("ativo");
    toggle.classList.remove("ativo");
  }
});
