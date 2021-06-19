import DateDropdown from './date-dropdown';

const dateInputs = new DateDropdown('js-date-in', 'js-date-out');
dateInputs.init();

const maskDate = $('.js-date-dropdown__input');

for (let i = 0; i < maskDate.length; i += 1) {
  Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(maskDate[i]);
}