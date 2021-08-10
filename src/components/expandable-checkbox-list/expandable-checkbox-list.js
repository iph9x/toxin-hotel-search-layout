export default class ExpandableCheckboxList {
  constructor(elSelector) {
    this.$list = $(elSelector);
    this.$listHeader = this.$list.find('.js-expandable-checkbox-list__wrapper-title');
    this.$arrow = this.$list.find('.js-expandable-checkbox-list__arrow');
  }

  init() {
    this.onClickArrow();
    $(document).on('click', (e) => this.hideListHandler(e));
  }

  onClickArrow() {
    this.$listHeader.on('click', (e) => this.clickListHeaderHandler(e));
  }

  hideListHandler(e) {
    const $target = $(e.target);
    const targetClassName = $target.attr('class');
    const targetBlockClassname = targetClassName?.split('__')[0];
    const parentNodeIsList = $target.parents('.js-expandable-checkbox-list')?.attr('class');
    const targetIsNotList = targetBlockClassname !== 'expandable-checkbox-list';

    if (targetIsNotList && !parentNodeIsList) {
      // const $checkboxItems = this.$list.find('.js-expandable-checkbox-list__items')
      this.$list.each((i) => {
        const $list = $(this.$list[i]);
        const $listArrow = $list.find('.js-expandable-checkbox-list__arrow');
        const $listItems = $list.find('.js-expandable-checkbox-list__items');

        $listItems.hide();
        $listArrow.removeClass('expandable-checkbox-list__arrow_rotated');
      });
    }
  }

  clickListHeaderHandler(e) {
    const $target = $(e.currentTarget);
    const $arrow = $target.find('.js-expandable-checkbox-list__arrow');
    const $listWrapper = $target.parents('.js-expandable-checkbox-list');
    const $list = $listWrapper.find('.js-expandable-checkbox-list__items');

    $arrow.toggleClass('expandable-checkbox-list__arrow_rotated');
    $list.toggle();
  }
}
