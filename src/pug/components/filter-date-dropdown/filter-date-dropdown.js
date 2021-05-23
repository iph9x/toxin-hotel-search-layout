import * as $ from 'jquery';
import { initDatepickerButtons } from '../../../assets/js/utils';

const filterDrodown = $('.js-filter-date-dropdown').datepicker({
  navTitles: { days: 'MM yyyy' },
  dateFormat: "dd M",
  multipleDatesSeparator: ' - ',
}).data('datepicker');


if (!!filterDrodown) {
  initDatepickerButtons(filterDrodown);
}
