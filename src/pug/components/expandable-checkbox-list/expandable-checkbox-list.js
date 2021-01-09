import * as $ from 'jquery';

$('.expandable-checkbox-list__arrow').on('click', (e) => {
  $(e.target).toggleClass('expandable-checkbox-list__arrow_rotate');
  let checkboxItems =  $(e.target).parent().parent().find('.checkbox-buttons__items');

  checkboxItems.toggle();
});