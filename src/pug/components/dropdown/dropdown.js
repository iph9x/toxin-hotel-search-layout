import '../../../assets/js/jquery-3.5.1.min.js';
import * as $ from 'jquery';

let createDropdownObj = () => {
  $('.dropdown__menu').each((ind, el) => {
    let input = $(el).parent().find('.field-wrapper__input');
    let items = $(el).find('.dropdown__item');
    let clearBtn = $(el).find('.dropdown__clear');
    let id = el.id;

    let createObj = (obj) => {
      items.each((i, item) => {
        let counter = $(item).find('.dropdown__digit')
        let key = counter.attr('id')
  
        let value = counter.text();
    
        obj[key] = Number.parseInt(value);
      })
    }    

    if (id === 'guests') {
      let itemsObj = {
        'adults': 0,
        'children': 0,
        'babies': 0
      };

      createObj(itemsObj);

      let guests = itemsObj.adults + itemsObj.children;
      input.val(`${guests} гостей`);

      let reducer = (acc, current) => acc + current;
      let sum = Object.values(itemsObj).reduce(reducer, 0);
      
      if (sum === 0) {
        clearBtn.addClass('dropdown__clear_disabled');
      } else {
        clearBtn.removeClass('dropdown__clear_disabled');
      }
    } else if (id === 'rooms') {
      let itemsObj = {
        'bedrooms': 0,
        'bed': 0,
        'bathrooms': 0
      };

      createObj(itemsObj);
    }
  })
}

$('.dropdown__clear').on('click', e => {
  let menuItems = $(e.target).parent().parent().find('.dropdown__item');
  let input = $(e.target).parent().parent().parent().find('.field-wrapper__input');

  menuItems.each((i, el) => {
    $(el).find('.dropdown__circle-btn_reduce').addClass('dropdown__circle-btn_disabled');
    $(el).find('.dropdown__counter').find('.dropdown__digit').text('0');
  });
  
  createDropdownObj();
  input.val('Сколько гостей');
});



$('.dropdown-arrow').on('click', (e) => {
  let menu =  $(e.target).next().next();
  let menuParent = menu.parent();

  menu.toggle();
  menuParent.toggleClass('field-wrapper_active');
  menuParent.find('.field-wrapper__input').toggleClass('field-wrapper__input_active');
});

$('.dropdown__apply').on('click', (e) => {
  let menu =  $(e.target).parent().parent();
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
  createDropdownObj()
});

$('.dropdown__circle-btn_increase').on('click', (e) => {
  let target =  $(e.target);
  let counter = target.prev();
  let count = Number.parseInt(counter.text());

  count >= 9 ? count = 9 : count++;
  counter.text(count);

  checkButtonState();
  createDropdownObj()
});

checkButtonState();



