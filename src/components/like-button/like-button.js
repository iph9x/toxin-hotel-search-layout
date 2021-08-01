export default class LikeButton {
  constructor() {
    this.$input = $('.js-like-button__input');
  }

  init() {
    this.$input.on('click', (e) => this.handleButtonClick(e));
  }

  handleButtonClick(e) {
    const $input = $(e.target);
    const $parent = $input.parent();
    $parent.toggleClass('like-button__item_active');

    const inputVal = Number.parseInt($input.val());

    $input.val($parent.hasClass('like-button__item_active') ? inputVal + 1 : inputVal - 1);
  }
}
