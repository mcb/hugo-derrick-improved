document.addEventListener("DOMContentLoaded", function(event) { 

  var headerOverlay = document.querySelectorAll('.header__overlay'),
  menuList = document.querySelectorAll('.main-nav__box'),
  menuOpenIcon = document.querySelectorAll('.main-nav__open'),
  menuCloseIcon = document.querySelectorAll('.main-nav__close');

  /* =======================
  // Menu and Navigation
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  headerOverlay.click(function () {
    menuClose();
    // searchClose(); // this was never defined in the original theme?
  });

  function menuOpen() {
    menuList.classList.add('visible');
    headerOverlay.classList.add('visible');
  }

  function menuClose() {
    menuList.classList.remove('visible');
    headerOverlay.classList.remove('visible');
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