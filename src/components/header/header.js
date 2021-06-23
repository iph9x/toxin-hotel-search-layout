export default class Header {
  constructor() {
    this.$headerButton = $('.js-header__menu-btn');
    this.$menu = $('.js-header__menu');
  }

  init() {
    this.$headerButton.on('click', (e) => this.handleHeaderBtnClick(e));
  }

  handleHeaderBtnClick(e) {
    $('.js-header__menu').toggleClass('header__menu_visible');
    $(e.target).toggleClass('header__menu-btn_active');
  }
}
