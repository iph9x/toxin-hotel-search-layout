import * as $ from 'jquery';
import { initDatepickerButtons } from '../../../assets/js/utils';

const dateInInput = $('.js-date-in');

dateInInput.each((ind) => {
  const $dateIn = $(dateInInput[ind]);
  const $dateContainer = $dateIn.parent().parent();
  const $dateOut = $dateContainer.find('.js-date-out');

  const $datepicker = $dateIn.datepicker({
    navTitles: { days: 'MM yyyy' },
    onSelect: function (fd) {
      $dateIn.val(fd.slice(0, 10));
      $dateOut.val(fd.slice(11));
    },
  }).data('datepicker');
  initDatepickerButtons($datepicker);

  const dateOutBlurHandler = (e) => {
    const value = e.target.value.split('.');
    const dateInValue = $dateIn.val().split('.');
    const valueIsNotEmpty = value[0] !== '';
    const dateInIsNotEmpty = $dateIn[0] !== '';
  
    if (valueIsNotEmpty && dateInIsNotEmpty) {
      const dates = [
        new Date(dateInValue[2], Number.parseInt(dateInValue[1]) - 1, dateInValue[0]),
        new Date(value[2], Number.parseInt(value[1]) - 1 , value[0]),
      ];
  
      $datepicker.selectDate(dates);
    }
  };

  $dateOut.on('select', () => $datepicker.show());
  $dateOut.on('blur', (e) => dateOutBlurHandler(e));
});