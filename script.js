document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('#menu-icon');
    var navlist = document.querySelector('.navlist');
  
    menu.addEventListener("click", function() {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
    });
  });
  