import '../../../assets/js/jquery-3.5.1.min.js';
import * as $ from 'jquery';

const createDropdownObj = (menu) => {
  const $input = menu.parent().find('.field-wrapper__input');
  const itemsArr = menu.find('.dropdown__item');
  const $clearBtn = menu.find('.dropdown__clear');
  const id = menu.attr('data-menu-type');

  const createObj = (obj) => {
    itemsArr.each((i) => {
      const $counter = $(itemsArr[i]).find('.dropdown__digit');
      const key = $counter.attr('data-menu-item-id');
      const value = $counter.text();

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
    $input.val(`${guests} гостей`);

    const reducer = (acc, current) => acc + current;
    const sum = Object.values(itemsObj).reduce(reducer, 0);

    if (sum === 0) {
      $clearBtn.addClass('dropdown__clear_disabled');
    } else {
      $clearBtn.removeClass('dropdown__clear_disabled');
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

    $input.val(`${bedroomsVal}${bedVal}${bathsVal}`);
  }

};

const clearHandler = (e) => {
  const $menu = $(e.target).parents('.dropdown__menu');
  const $menuItems = $menu.find('.dropdown__item');
  const $input = $menu.parent().find('.field-wrapper__input');

  $menuItems.each((i) => {
    $($menuItems[i]).find('.dropdown__circle-btn_reduce').addClass('dropdown__circle-btn_disabled');
    $($menuItems[i]).find('.dropdown__counter').find('.dropdown__digit').text('0');
  });

  createDropdownObj($menu);
  $input.val('Сколько гостей');
};

const inputClickHandler = (e, isArrow = false) => {
  const $menu = isArrow ? $(e.target).next().next() : $(e.target).next();
  const $menuParent = $menu.parent();

  $menu.toggle();
  $menuParent.toggleClass('field-wrapper_active');
  if (isArrow) {
    $(e.target).prev().toggleClass('field-wrapper__input_active')
  } else {
    $(e.target).toggleClass('field-wrapper__input_active')
  }
};

const applyHandler = (e) => {
  const $menu = $(e.target).parents('.dropdown__menu');
  const $menuParent = $menu.parent();

  $menu.toggle();
  $menuParent.toggleClass('field-wrapper_active');
  $menuParent.find('.field-wrapper__input').toggleClass('field-wrapper__input_active');
};

const checkButtonState = () => {
  const $btnReduce = $('.dropdown__circle-btn_reduce');

  $btnReduce.each((i) => {
    const $btn = $($btnReduce[i]);
    const $counter = $btn.next();
    const count = Number.parseInt($counter.text());

    if (count === 0) {
      $btn.addClass('dropdown__circle-btn_disabled');
    } else {
      $btn.removeClass('dropdown__circle-btn_disabled');
    }
  });
};

const btnAdjustHandler = (e, isReduce) => {
  const $target =  $(e.target);
  let $counter;
  let count;
  if (isReduce) {
    $counter = $target.next();
    count = Number.parseInt($counter.text());
    count === 0 ? count = 0 : count--;  
    $counter.text(count);
  } else {
    $counter = $target.prev();
    count = Number.parseInt($counter.text());
    count >= 9 ? count = 9 : count++;
  }
  $counter.text(count);

  checkButtonState();
  createDropdownObj($target.parents('.dropdown__menu'));
};

$('.dropdown__clear').on('click', (e) => clearHandler(e));
$('.js-dropdown-arrow').on('click', (e) => inputClickHandler(e, true));
$('.js-dropdown').on('click', (e) => inputClickHandler(e));
$('.dropdown__apply').on('click', (e) => applyHandler(e));
$('.dropdown__circle-btn_reduce').on('click', (e) => btnAdjustHandler(e, true));
$('.dropdown__circle-btn_increase').on('click', (e) => btnAdjustHandler(e, false));

checkButtonState();
