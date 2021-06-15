import $ from 'jquery';

import './styles/main.scss';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('./', true, /\.js$/));

const maskDate = $('.js-date-dropdown__input');

for (let i = 0; i < maskDate.length; i += 1) {
  Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(maskDate[i]);
}

const mask = $('.js-masked-text-field');
Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(mask);