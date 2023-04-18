//CONFIGURAÇÕES PARA ABRIR O BOTÃO MENU
var a = window.document.getElementById('btn_menu');
a.addEventListener('mouseenter', mouseEnter);
a.addEventListener('mouseout', MouseOut);
a.addEventListener('click', openMenu);
function mouseEnter() {
  a.style.background = '#e8e8e8';
  a.style.width = '50px';
  a.style.textAlign = 'center';
  a.style.borderRadius = '5px';
  a.style.padding = '5px';
  a.style.cursor = 'pointer'
  a.style.transition = '0.3s ease';
}
function MouseOut() {
  a.style.background = '#f3f3f3'
}
function openMenu() {
  const nav = document.getElementById('nav');
  nav.style.visibility = 'visible'
}

//CONFIGURAÇÕES PARA FECHAR O MENU
var b = window.document.getElementById('btn_close');
b.addEventListener('mouseenter', mouseEnter_btnClose);
b.addEventListener('mouseout', MouseOut_btnClose);
b.addEventListener('click', closeMenu);
function mouseEnter_btnClose() {
  b.style.background = '#e8e8e8';
  b.style.textAlign = 'center';
  b.style.borderRadius = '5px';
  b.style.padding = '5px';
  b.style.cursor = 'pointer';
}
function MouseOut_btnClose() {
  b.style.background = '#f3f3f3'
}
function closeMenu() {
  const closeMenu = document.getElementById('nav')
  closeMenu.style.visibility = 'hidden'
}