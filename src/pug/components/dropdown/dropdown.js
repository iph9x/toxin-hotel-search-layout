import '../../../assets/js/jquery-3.5.1.min.js';
import * as $ from 'jquery';

const createDropdownObj = () => {
  $('.dropdown__menu').each((ind, el) => {
    const input = $(el).parent().find('.field-wrapper__input');
    const items = $(el).find('.dropdown__item');
    const clearBtn = $(el).find('.dropdown__clear');
    const id = el.id;

    const createObj = (obj) => {
      items.each((i, item) => {
        const counter = $(item).find('.dropdown__digit');
        const key = counter.attr('id');
        const value = counter.text();

        obj[key] = Number.parseInt(value);
      });
    }; 

    if (id === 'guests') {
      const itemsObj = {
        'adults': 0,
        'children': 0,
        'babies': 0
      };

      createObj(itemsObj);

      const guests = itemsObj.adults + itemsObj.children;
      input.val(`${guests} гостей`);

      const reducer = (acc, current) => acc + current;
      const sum = Object.values(itemsObj).reduce(reducer, 0);
      
      if (sum === 0) {
        clearBtn.addClass('dropdown__clear_disabled');
      } else {
        clearBtn.removeClass('dropdown__clear_disabled');
      }
    } else if (id === 'rooms') {
      const itemsObj = {
        'bedrooms': 0,
        'bed': 0,
        'bathrooms': 0
      };

      createObj(itemsObj);

      const { bedrooms, bed, bathrooms } = itemsObj;
      const bedroomsVal = `${bedrooms} спальни`;
      const bedVal = bed > 0 ? `, ${bed} кровати` : '';
      const bathsVal = bathrooms > 0 ? `, ${bathrooms} ванных комнат` : '';

      input.val(`${bedroomsVal}${bedVal}${bathsVal}`);
    }
  })
}

const clearHandler = (e) => {
  const menuItems = $(e.target).parent().parent().find('.dropdown__item');
  const input = $(e.target).parent().parent().parent().find('.field-wrapper__input');

  menuItems.each((i, el) => {
    $(el).find('.dropdown__circle-btn_reduce').addClass('dropdown__circle-btn_disabled');
    $(el).find('.dropdown__counter').find('.dropdown__digit').text('0');
  });

  createDropdownObj();
  input.val('Сколько гостей');
};

const arrowHandler = (e) => {
  const menu =  $(e.target).next().next();
  const menuParent = menu.parent();

  menu.toggle();
  menuParent.toggleClass('field-wrapper_active');
  menuParent.find('.field-wrapper__input').toggleClass('field-wrapper__input_active');
};

const applyHandler = (e) => {
  const menu =  $(e.target).parent().parent();
  const menuParent = menu.parent();

  menu.toggle();
  menuParent.toggleClass('field-wrapper_active');
  menuParent.find('.field-wrapper__input').toggleClass('field-wrapper__input_active');
};

const checkButtonState = () => {
  $('.dropdown__circle-btn_reduce').each((index, el) => {
    const counter = $(el).next();
    const count = Number.parseInt(counter.text());

    if (count === 0) {
      $(el).addClass('dropdown__circle-btn_disabled');
    } else {
      $(el).removeClass('dropdown__circle-btn_disabled');
    }
  });
};

const reduceHandler = (e) => {
  const target =  $(e.target);
  const counter = target.next();
  let count = Number.parseInt(counter.text());

  count === 0 ? count = 0 : count--;  
  counter.text(count);

  checkButtonState();
  createDropdownObj();
};

const increaseHandler = (e) => {
  const target = $(e.target);
  const counter = target.prev();
  let count = Number.parseInt(counter.text());

  count >= 9 ? count = 9 : count++;
  counter.text(count);

  checkButtonState();
  createDropdownObj();
};

$('.dropdown__clear').on('click', (e) => clearHandler(e));
$('.js-dropdown-arrow').on('click', (e) => arrowHandler(e));
$('.dropdown__apply').on('click', (e) => applyHandler(e));
$('.dropdown__circle-btn_reduce').on('click', (e) => reduceHandler(e));
$('.dropdown__circle-btn_increase').on('click', (e) => increaseHandler(e));

checkButtonState();



