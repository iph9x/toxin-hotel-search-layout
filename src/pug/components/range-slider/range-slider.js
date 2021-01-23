import * as $ from 'jquery';

let track = $('.range-slider__track');
let circleLeft = $('.range-slider__circle_left');
let circleRight = $('.range-slider__circle_right');

let rangeInputLeft = $('.range-slider__input');
let rangeInputRight = $('.range-slider__input_right');

let rangeLabelLeft = $('.range-slider__label_left');
let rangeLabelRight = $('.range-slider__label_right');

const changeLeftBorder = () => {
  let min = Number.parseInt(rangeInputLeft.attr('min'));
  let max = Number.parseInt(rangeInputLeft.attr('max'));
  let value = rangeInputLeft.val();

  value = Math.min(Number.parseInt(value), Number.parseInt(rangeInputRight.val()) - 1);
  let percent = ((value - min) / (max - min) ) * 100;

  circleLeft.css('left', percent + '%');
  track.css('left', percent + '%' );

  rangeLabelLeft.html(value);
}

const changeRightBorder = () => {
  let min = Number.parseInt(rangeInputRight.attr('min'));
  let max = Number.parseInt(rangeInputRight.attr('max'));
  let value = rangeInputRight.val();

  value = Math.max(Number.parseInt(value), Number.parseInt(rangeInputLeft.val()) + 1);
  let percent = ((value - min) / (max - min) ) * 100;

  circleRight.css('right', (100 - percent) + '%');
  track.css('right', (100 - percent) + '%');

  rangeLabelRight.html(value);
}
if (track.length > 0) {
  changeLeftBorder();
  changeRightBorder();
}

rangeInputLeft.on('input change', changeLeftBorder);
rangeInputRight.on('input change', changeRightBorder);