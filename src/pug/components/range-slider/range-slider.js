import * as $ from 'jquery';

const track = $('.range-slider__track');
const circleLeft = $('.range-slider__circle_left');
const circleRight = $('.range-slider__circle_right');

const rangeInputLeft = $('.range-slider__input');
const rangeInputRight = $('.range-slider__input_right');

const rangeLabelLeft = $('.range-slider__label_left');
const rangeLabelRight = $('.range-slider__label_right');

const changeLeftBorder = () => {
  const min = Number.parseInt(rangeInputLeft.attr('min'));
  const max = Number.parseInt(rangeInputLeft.attr('max'));
  let value = rangeInputLeft.val();

  value = Math.min(Number.parseInt(value), Number.parseInt(rangeInputRight.val()) - 1);
  const percent = ((value - min) / (max - min) ) * 100;

  circleLeft.css('left', percent + '%');
  track.css('left', percent + '%' );

  rangeLabelLeft.html(value);
}

const changeRightBorder = () => {
  const min = Number.parseInt(rangeInputRight.attr('min'));
  const max = Number.parseInt(rangeInputRight.attr('max'));
  let value = rangeInputRight.val();

  value = Math.max(Number.parseInt(value), Number.parseInt(rangeInputLeft.val()) + 1);

  const percent = ((value - min) / (max - min) ) * 100;

  circleRight.css('right', (100 - percent) + '%');
  track.css('right', (100 - percent) + '%');

  rangeLabelRight.html(value);
};

if (track.length > 0) {
  changeLeftBorder();
  changeRightBorder();
}

rangeInputLeft.on('input change', changeLeftBorder);
rangeInputRight.on('input change', changeRightBorder);
