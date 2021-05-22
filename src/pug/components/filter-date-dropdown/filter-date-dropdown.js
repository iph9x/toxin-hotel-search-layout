import * as $ from 'jquery';

const filterDrodown = $('#filter-date-dropdown').datepicker({
  dateFormat: "dd M",
  multipleDatesSeparator: ' - ',
}).data('datepicker');

if (!!filterDrodown) {
  $('.datepicker--apply').on('click', () => filterDrodown.hide());
  $('.datepicker--clear').on('click', () => filterDrodown.clear());
}
