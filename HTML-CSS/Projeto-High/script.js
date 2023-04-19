var btn_menu = document.getElementById('btn_menu');
var menu = document.getElementById('nav');
var ul = document.getElementById('ul');


btn_menu.onclick = function(){
  btn_menu.classList.toggle('active_1');
  if (btn_menu.classList.contains('active_1')) {
    menu.style.visibility = 'visible'
    menu.style.maxHeight = '300px'
    menu.style.width = '100%'
    menu.style.transition = '.5s ease'
    ul.style.visibility = 'visible'
    
  }else {
    ul.style.visibility = 'hidden'
    menu.style.maxHeight = '0px'
    menu.style.width = '0%';
  }
  
}