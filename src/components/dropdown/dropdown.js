export default class Dropdown {
  constructor() {   
    this.checkButtonState();
  }

  init() {
    $('.js-dropdown__button_action_clear').on('click', (e) => this.clearHandler(e));
    $('.js-dropdown').on('click', (e) => this.inputClickHandler(e));
    $('.js-dropdown__button_action_apply').on('click', (e) => this.applyHandler(e));
    $('.js-dropdown__circle-btn_action_reduce').on('click', (e) => this.btnAdjustHandler(e, true));
    $('.js-dropdown__circle-btn_action_increase').on('click', (e) => this.btnAdjustHandler(e, false));
    $(document).on('click', this.hideMenuHandler);
    $('.js-date-dropdown__input').on('click', this.hideMenuHandler);
    $('.js-masked-text-field').on('click', this.hideMenuHandler);
    $('.js-dropdown__menu').parents('.js-dropdown').on('click', (e) => e.stopPropagation());
  }

  createDropdownObj(menu) {
    const $input = menu.parent().find('.js-dropdown__input');
    const itemsArr = menu.find('.js-dropdown__item');
    const $clearBtn = menu.find('.js-dropdown__button_action_clear');
    const id = menu.attr('data-menu-type');
  
    const createObj = (obj) => {
      itemsArr.each((i) => {
        const $counter = $(itemsArr[i]).find('.js-dropdown__digit');
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

      const guestsCount = itemsObj.adults + itemsObj.children;
      const babiesCount = itemsObj.babies;
      const guests = this.determineCase(guestsCount, ['гость', 'гостя', 'гостей']);
      const babies = this.determineCase(babiesCount, ['младенец', 'младенца', 'младенцев']);
      const totalGuests = [];

      if (guestsCount > 0) totalGuests.push(guests);
      if (babiesCount > 0) totalGuests.push(babies);

      $input.val(totalGuests.join(', '));
  
      const reducer = (acc, current) => acc + current;
      const sum = Object.values(itemsObj).reduce(reducer, 0);
  
      if (sum === 0) {
        $input.val('Сколько гостей');
        $clearBtn.addClass('dropdown__button_disabled');
      } else {
        $clearBtn.removeClass('dropdown__button_disabled');
      }
    } else if (id === 'rooms') {
      const itemsObj = {
        'bedrooms': 1,
        'bed': 1,
        'bathrooms': 1
      };
  
      createObj(itemsObj);
  
      const { bedrooms, bed, bathrooms } = itemsObj;
      const bedroomsVal = this.determineCase(bedrooms, ['спальня', 'спальни', 'спален']);
      const bedVal = this.determineCase(bed, ['кровать', 'кровати', 'кроватей']);
      const bathsVal = this.determineCase(bathrooms, ['ванная комната', 'ванные комнаты', 'ванных комнат']);
  
      $input.val(`${bedroomsVal}, ${bedVal}, ${bathsVal}`);
    }
  }

  determineCase(count, titles) {
    const cases = [2, 0, 1, 1, 1, 2];  
    const title = titles[
      count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[(count % 10 < 5) ? count % 10 : 5]
    ];

    return `${count} ${title}`;
  }

  clearHandler(e) {
    const $menu = $(e.target).parents('.js-dropdown__menu');
    const $menuItems = $menu.find('.js-dropdown__item');
    const $input = $menu.parent().find('.js-dropdown__input');
  
    $menuItems.each((i) => {
      $($menuItems[i]).find('.js-dropdown__circle-btn_action_reduce').addClass('dropdown__circle-btn_disabled');
      $($menuItems[i]).find('.js-dropdown__counter').find('.js-dropdown__digit').text('0');
    });
  
    this.createDropdownObj($menu);
    $input.val('Сколько гостей');
  }

  hideMenuHandler() {
    const $menu = $('.js-dropdown__menu');

    $menu.each((i) => {
      const $itemMenu = $($menu[i]);
      const $menuWrapper = $itemMenu.parent();
      const $dropdownInput = $menuWrapper.find('.js-dropdown__input');

      $itemMenu.hide();
      $menuWrapper.removeClass('dropdown_active');
      $dropdownInput.removeClass('dropdown__input_active');
    });
  }

  inputClickHandler(e) {
    const $dropdown = $(e.currentTarget);
    const $menu = $dropdown.find('.js-dropdown__menu');
    const $dropdownInput = $dropdown.find('.js-dropdown__input');
    const inputIsActive = $dropdown.hasClass('dropdown_active');
    const targetParentIsMenu = $(e.target).parents('.js-dropdown__menu')?.attr('class');
    const targetIsMenu = $(e.target).attr('class').includes('dropdown__menu');

    if (!targetIsMenu && !targetParentIsMenu) {
      this.hideMenuHandler();
    }

    if (!inputIsActive) {
      $menu.toggle();
      $dropdown.toggleClass('dropdown_active');
      $dropdownInput.toggleClass('dropdown__input_active');
    }
  }

  applyHandler(e) {
    e.stopPropagation(e);
    const $menu = $(e.target).parents('.js-dropdown__menu');
    const $menuParent = $menu.parent();
  
    $menu.hide();
    $menuParent.removeClass('dropdown_active');
    $menuParent.find('.js-dropdown__input').toggleClass('dropdown__input_active');
  }

  checkButtonState() {
    const $btnReduce = $('.js-dropdown__circle-btn_action_reduce');
  
    $btnReduce.each((i) => {
      const $btn = $($btnReduce[i]);
      const $counter = $btn.next();
      const count = Number.parseInt($counter.text());
  
      if (count === 0) {
        $btn.attr('disabled', true);
        $btn.addClass('dropdown__circle-btn_disabled');
      } else {
        $btn.attr('disabled', false);
        $btn.removeClass('dropdown__circle-btn_disabled');
      }
    });
  }

  btnAdjustHandler(e, isReduce) {
    const $target =  $(e.target);
    let $counter;
    let count;
  
    if (isReduce) {
      $counter = $target.next();
      count = Number.parseInt($counter.text());
      count = count < 1 ? 0 : count - 1;
      $counter.text(count);
    } else {
      $counter = $target.prev();
      count = Number.parseInt($counter.text());
      count = count >= 9 ? 9 : count + 1;
      $counter.text(count);
    }

  
    this.checkButtonState();
    this.createDropdownObj($target.parents('.js-dropdown__menu'));
  }
}
