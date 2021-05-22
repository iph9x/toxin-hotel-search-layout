import * as $ from 'jquery';

const picker = $('#date-in').datepicker({ 
  onSelect: function (fd) {
    $('#date-in').val(fd.slice(0, 10));
    $('#date-out').val(fd.slice(11));
  }
}).data('datepicker');

const dateOutBlurHandler = (e) => {
  const value = e.target.value.split('.');
  const dateIn = $('#date-in').val().split('.');
  const valueIsNotEmpty = value[0] !== '';
  const dateInIsNotEmpty = dateIn[0] !== '';

  if (valueIsNotEmpty && dateInIsNotEmpty) {
    const dates = [
      new Date(dateIn[2], Number.parseInt(dateIn[1]) - 1, dateIn[0]),
      new Date(value[2], Number.parseInt(value[1]) - 1 , value[0]),
    ];

    picker.selectDate(dates);
  }
};

$('.datepicker--apply').on('click', () => picker.hide());
$('.datepicker--clear').on('click', () => picker.clear());

$('#date-out').on('select', () => picker.show());
$('#date-out').on('blur', (e) => dateOutBlurHandler(e));
