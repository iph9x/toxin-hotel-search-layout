$('#header-btn').on('click', (e) => {
  $('#menu').toggleClass('header__menu_visible');
  $('#header-btn').toggleClass('header__menu-btn_active');
});