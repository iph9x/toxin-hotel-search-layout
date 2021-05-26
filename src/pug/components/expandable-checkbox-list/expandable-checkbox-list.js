import * as $ from 'jquery';

const listArrowHandler = (e) => {
  $(e.target).toggleClass('expandable-checkbox-list__arrow_rotate');
  const $checkboxItems =  $(e.target).parents('.js-expandable-checkbox-list').find('.js-checkbox-buttons__items');

  $checkboxItems.toggle();
};

$('.js-expandable-checkbox-list__arrow').on('click', (e) => listArrowHandler(e));
