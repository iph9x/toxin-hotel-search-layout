export default class Header {
  constructor() {
    this.$headerButton = $('.js-header-btn');
    this.$menu = $('.js-menu');
  }

  init() {
    this.$headerButton.on('click', (e) => this.handleHeaderBtnClick(e));
  }

  handleHeaderBtnClick(e) {
    $('.js-menu').toggleClass('header__menu_visible');
    $(e.target).toggleClass('header__menu-btn_active');
  }
}
