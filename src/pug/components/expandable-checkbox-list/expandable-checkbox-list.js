import * as $ from 'jquery';

const listArrowHandler = (e) => {
  $(e.target).toggleClass('expandable-checkbox-list__arrow_rotate');
  const $checkboxItems =  $(e.target).parents('.expandable-checkbox-list').find('.checkbox-buttons__items');

  $checkboxItems.toggle();
};

$('.expandable-checkbox-list__arrow').on('click', (e) => listArrowHandler(e));
