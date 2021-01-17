import * as $ from 'jquery';


let picker = $('#date-in').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $('#date-in').val(fd.slice(0, 10));
    $('#date-out').val(fd.slice(11));
  }
}).data('datepicker');

$('.datepicker--apply').on('click', () => {
  picker.hide()
});

$('.datepicker--clear').on('click', () => {
  picker.clear()
});

$('#date-out').on('select', () => {
  picker.show();
});

$('#date-out').on('blur', (e) => {
  let value = e.target.value.split('.');
  let dateInValue = $('#date-in').val().split('.');

  let dates = [
    new Date(dateInValue[2], Number.parseInt( dateInValue[1]) - 1, dateInValue[0]),
    new Date(value[2], Number.parseInt(value[1]) - 1 , value[0])
  ]

  picker.selectDate(dates);
});