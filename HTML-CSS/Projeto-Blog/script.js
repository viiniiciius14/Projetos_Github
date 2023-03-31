const btn_menu = document.getElementById('btn_menu');
const hamburguer = document.getElementById('hamburguer');

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


/*script tema site*/
 const theme = document.getElementsById('btn_theme');

 function toggleTheme() {
  const dark = document.getElementsById('header');
  dark.classList.toggle('active');
 }

theme.addEventListener('click', toggleTheme);