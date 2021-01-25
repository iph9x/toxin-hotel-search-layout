import * as $ from 'jquery';

$('.like-button__input').on('click', (e) => {
  let input = $(e.target);
  let inputVal = Number.parseInt($(e.target).val());

  let icon = $(e.target).next();
  let parent = $(e.target).parent();

  parent.toggleClass('like-button__item_active');

  if (parent.hasClass('like-button__item_active')) {
    icon.html('favorite')
    input.val(inputVal + 1)
  } else {
    icon.html('favorite_border');
    input.val(inputVal - 1);
  }
});