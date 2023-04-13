const btn_menu = document.getElementById('btn_menu');
const hamburguer = document.getElementById('hamburguer');
const shadow_div = document.getElementById('img_livraria-shadow')

function toggleMenu() {
  const nav= document.getElementById('nav');
  nav.classList.toggle('active');
}

function toggleHam() {
  const header = document.getElementById('header');
  header.classList.toggle('active');
}

btn_menu.addEventListener('click', toggleMenu);
hamburguer.addEventListener('click', toggleHam);
