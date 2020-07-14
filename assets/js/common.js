document.addEventListener("DOMContentLoaded", function(event) { 

  var menuList = document.querySelector('.main-nav__box'),
  menuOpenIcon = document.querySelector('.main-nav__open'),
  menuCloseIcon = document.querySelector('.main-nav__close');

  /* =======================
  // Menu and Navigation
  ======================= */
  menuOpenIcon.onclick = function() {
    menuOpen();
  }

  menuCloseIcon.onclick = function () {
    menuClose();
  }

  function menuOpen() {
    menuList.classList.add('visible'); 
  }

  function menuClose() {
    menuList.classList.remove('visible');
  }



  /* ================================
  // AOS - Animate On Scroll Library
  ================================ */
  AOS.init();


  /* =======================
  // Responsive Videos
  ======================= */

  fitvids('.post__content, .page__content', {
    players: ['iframe[src*="ted.com"]']
  })

});