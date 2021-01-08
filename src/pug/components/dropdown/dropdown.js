import '../../../assets/js/jquery-3.5.1.min.js';
import * as $ from 'jquery';

$('.dropdown-arrow').on('click', (e) => {
  let menu =  $(e.target).next().next();
  let menuParent = menu.parent();

  menu.toggle();
  menuParent.toggleClass('field-wrapper_active');
  menuParent.find('.field-wrapper__input').toggleClass('field-wrapper__input_active');
});

let checkButtonState = () => {
  $('.dropdown__circle-btn_reduce').each((index, el) => {
    let counter = $(el).next();
    let count = Number.parseInt(counter.text())

    count === 0
      ? $(el).addClass('dropdown__circle-btn_disabled')
      : $(el).removeClass('dropdown__circle-btn_disabled');
  });
}

$('.dropdown__circle-btn_reduce').on('click', (e) => {
  let target =  $(e.target);
  let counter = target.next();
  let count = Number.parseInt(counter.text());
  
  count === 0 ? count = 0 : count--;  
  counter.text(count);

  checkButtonState();
});

$('.dropdown__circle-btn_increase').on('click', (e) => {
  let target =  $(e.target);
  let counter = target.prev();
  let count = Number.parseInt(counter.text());

  count >= 9 ? count = 9 : count++;
  counter.text(count);

  checkButtonState();
});



