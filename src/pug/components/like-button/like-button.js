import * as $ from 'jquery';

const likeBtnHandler = (e) => {
  const $input = $(e.target);
  const inputVal = Number.parseInt($(e.target).val());
  const $icon = $(e.target).next();
  const $parent = $(e.target).parent();

  $parent.toggleClass('like-button__item_active');

  if ($parent.hasClass('like-button__item_active')) {
    $icon.html('favorite')
    $input.val(inputVal + 1)
  } else {
    $icon.html('favorite_border');
    $input.val(inputVal - 1);
  }
};

$('.like-button__input').on('click', (e) => likeBtnHandler(e));
