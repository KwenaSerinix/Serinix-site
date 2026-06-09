document.addEventListener('DOMContentLoaded', function () {
  function toggleMenu(btnId, menuId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  toggleMenu('menuBtn', 'mobileMenu');
  toggleMenu('menuBtnTop', 'mobileMenuTop');
  toggleMenu('menuBtnServices', 'mobileMenuServices');
  toggleMenu('menuBtnContact', 'mobileMenuContact');
});
