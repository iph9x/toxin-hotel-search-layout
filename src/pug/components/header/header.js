$('.js-header-btn').on('click', (e) => {
  $('.js-menu').toggleClass('header__menu_visible');
  $('.js-header-btn').toggleClass('header__menu-btn_active');
});