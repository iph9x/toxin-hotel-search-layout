export default class RangeSlider {
  constructor() {
    this.$track = $('.js-range-slider__track');
    this.$circleLeft = $('.js-range-slider__circle_side_left');
    this.$circleRight = $('.js-range-slider__circle_side_right');
    this.$rangeInputLeft = $('.js-range-slider__input_side_left');
    this.$rangeInputRight = $('.js-range-slider__input_side_right');
    this.$rangeLabelLeft = $('.js-range-slider__label_side_left');
    this.$rangeLabelRight = $('.js-range-slider__label_side_right');
  }

  init() {
    if (this.$track.length > 0) {
      this.changeLeftBorder();
      this.changeRightBorder();
    }

    this.$rangeInputLeft.on('input change', (e) => this.changeLeftBorder(e));
    this.$rangeInputRight.on('input change', (e) => this.changeRightBorder(e));
  }

  changeLeftBorder(e) {
    const $leftInput = e ? $(e.target) : this.$rangeInputLeft;
    const currentInputValue = Number.parseInt($leftInput.val());
    const rightInputValue = Number.parseInt(this.$rangeInputRight.val()) - 1;
    const value = Math.min(currentInputValue, rightInputValue);
    const percent = this.getValueInPrecent($leftInput, value);

    this.$circleLeft.css('left', `${percent}%`);
    this.$track.css('left', `${percent}%`);
    this.$rangeLabelLeft.html(value);
    $leftInput.val(value);
  }

  changeRightBorder(e) {
    const $rightInput = e ? $(e.target) : this.$rangeInputRight;
    const currentInputValue = Number.parseInt($rightInput.val());
    const leftInputValue = Number.parseInt(this.$rangeInputLeft.val()) + 1;
    const value = Math.max(currentInputValue, leftInputValue);
    const percent = this.getValueInPrecent($rightInput, value);
    
    this.$circleRight.css('right', (100 - percent) + '%');
    this.$track.css('right', (100 - percent) + '%');
    this.$rangeLabelRight.html(value);
    $rightInput.val(value);
  }

  getValueInPrecent($input, value) {
    const min = Number.parseInt($input.attr('min'));
    const max = Number.parseInt($input.attr('max'));

    return ((value - min) / (max - min)) * 100;
  }
}
