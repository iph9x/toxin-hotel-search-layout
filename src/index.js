import $ from 'jquery';
import './assets/js/jquery.inputmask.min.js';
import './assets/js/datepicker.js';
import './assets/js/chart.min.js';
import './styles/main.scss';
import './pug/components/dropdown/dropdown.js';
import './pug/components/rate-button/rate-button.js';
import './pug/components/range-slider/range-slider.js';
import './pug/components/expandable-checkbox-list/expandable-checkbox-list.js';
import './pug/components/room-reservation/room-reservation.js';
import './pug/components/header/header.js';
import './pug/components/like-button/like-button.js';
import './pug/components/room-rating-chart/room-rating-chart.js';

let maskDate = document.getElementsByClassName('date-dropdown__input');
for (let i = 0; i < maskDate.length; i++) {
  Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(maskDate[i]);
}

let mask = document.getElementsByClassName('masked-text-field');
Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(mask);