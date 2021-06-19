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
    const $icon = $input.next();

    if ($parent.hasClass('like-button__item_active')) {
      $icon.html('favorite');
      $input.val(inputVal + 1);
    } else {
      $icon.html('favorite_border');
      $input.val(inputVal - 1);
    }
  }
}
