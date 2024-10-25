function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  }

  window.addEventListener('resize', function() {
    const menu = document.getElementById('side-menu');
    const screenWidth = window.innerWidth;
t
    if (screenWidth > 500 && menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  });