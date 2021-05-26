import $ from 'jquery';
import './assets/favicons/favicon';
import './assets/js/jquery.inputmask.min.js';
import './assets/js/slick.min.js';
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
import './pug/components/room-card/room-slider.js';
import './pug/components/filter-date-dropdown/filter-date-dropdown.js';

const maskDate = $('.js-date-dropdown__input');
for (let i = 0; i < maskDate.length; i++) {
  Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(maskDate[i]);
}

const mask = $('.js-masked-text-field');
Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(mask);