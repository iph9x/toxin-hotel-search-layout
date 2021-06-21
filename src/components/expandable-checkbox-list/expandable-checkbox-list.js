export default class ExpandableCheckboxList {
  constructor(elSelector) {
    this.$list = $(elSelector);

    this.$arrow = this.$list.find('.js-expandable-checkbox-list__arrow');
  }

  init() {
    this.onClickArrow();
  }

  onClickArrow() {
    this.$arrow.on('click', (e) => this.listArrowHandler(e));
  }

  listArrowHandler(e) {
    const arrow = $(e.target);
    const listWrapper = arrow.parents('.js-expandable-checkbox-list');
    const checkboxItems = listWrapper.find('.js-expandable-checkbox-list__items')

    arrow.toggleClass('expandable-checkbox-list__arrow_rotate');
    checkboxItems.toggle();
  }
}
