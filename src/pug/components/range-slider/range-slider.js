let track = document.getElementsByClassName('range-slider__track')[0];
let circleLeft = document.getElementsByClassName('range-slider__circle_left')[0];
let circleRight = document.getElementsByClassName('range-slider__circle_right')[0];

let rangeInputLeft = document.getElementsByClassName('range-slider__input')[0];
let rangeInputRight = document.getElementsByClassName('range-slider__input_right')[0];

let rangeLabelLeft = document.getElementsByClassName('range-slider__label_left')[0];
let rangeLabelRight = document.getElementsByClassName('range-slider__label_right')[0];

const changeLeftBorder = () => {
  let min = Number.parseInt(rangeInputLeft.min);
  let max = Number.parseInt(rangeInputLeft.max);
  let value = rangeInputLeft.value;

  value = Math.min(Number.parseInt(value), Number.parseInt(rangeInputRight.value) - 1);
  let percent = ((value - min) / (max - min) ) * 100;

  circleLeft.style.left = percent + '%';
  track.style.left = percent + '%';

  rangeLabelLeft.innerHTML = value;
}

const changeRightBorder = () => {
  let min = Number.parseInt(rangeInputRight.min);
  let max = Number.parseInt(rangeInputRight.max);
  let value = rangeInputRight.value;

  value = Math.max(Number.parseInt(value), Number.parseInt(rangeInputLeft.value) + 1);
  let percent = ((value - min) / (max - min) ) * 100;

  circleRight.style.right = (100 - percent) + '%';
  track.style.right = (100 - percent) + '%';

  rangeLabelRight.innerHTML = value;
}

changeLeftBorder();
changeRightBorder();

rangeInputLeft.addEventListener("input", changeLeftBorder);
rangeInputRight.addEventListener("input", changeRightBorder);