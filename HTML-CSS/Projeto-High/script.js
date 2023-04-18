var btn_menu = document.getElementById('btn_menu');
btn_menu.onclick = function(){
  btn_menu.classList.toggle('active_1');
  var menu = document.getElementById('nav');
  menu.style.visibility = 'visible'
  menu.style.width = '100%'
  menu.style.transition = '.5s ease'
   
}