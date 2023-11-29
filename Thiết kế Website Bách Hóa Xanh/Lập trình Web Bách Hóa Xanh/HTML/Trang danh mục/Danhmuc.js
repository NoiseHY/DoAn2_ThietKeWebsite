document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menuDM .has-submenu > a');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const parent = this.parentElement;
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        // Ẩn submenu
        document.querySelectorAll('.menuDM .has-submenu').forEach(function(sub) {
          sub.classList.remove('active');
        });
        parent.classList.add('active');
      }
    });
  });

  const submenuItems = document.querySelectorAll('.menuDM .has-submenu .submenu a');

  submenuItems.forEach(function(submenuItem) {
    submenuItem.addEventListener('click', function(event) {
      event.stopPropagation(); // Ngăn chặn sự kiện click lan rộng đến cha nếu có
      document.querySelectorAll('.menuDM .has-submenu').forEach(function(sub) {
        sub.classList.remove('active');
      });
    });
  });

  // Ẩn submenu khi click
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = document.querySelector('.menuDM').contains(event.target);
    if (!isClickInsideMenu) {
      document.querySelectorAll('.menuDM .has-submenu').forEach(function(sub) {
        sub.classList.remove('active');
      });
    }
  });
});
