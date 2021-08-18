import { initDatepickerButtons } from '../../assets/js/utils';

export default class FilterDateDropdown {
  constructor() {
    this.$filterDateDropdownInput = $('.js-filter-date-dropdown__input');
    this.$filterDateDropdownArrow = $('.js-filter-date-dropdown__arrow');
  }
  
  init() {
    const filterDateDropdown = this.$filterDateDropdownInput.datepicker({
      navTitles: { days: 'MM yyyy' },
      dateFormat: "dd M",
      multipleDatesSeparator: ' - ',
      onSelect: (formattedDate) => this.$filterDateDropdownInput.val(formattedDate.toLowerCase()),
    }).data('datepicker');

    if (!!filterDateDropdown) {
      const filterDateDropdownContainerWidth = this.$filterDateDropdownInput.parent().width();

      if (filterDateDropdownContainerWidth < 300) {
        filterDateDropdown.$datepicker.css('padding', '5px');
        filterDateDropdown.$datepicker.width(filterDateDropdownContainerWidth - 12);
      }


      initDatepickerButtons(filterDateDropdown);
      this.$filterDateDropdownArrow.on('click', () => filterDateDropdown.show());
    }
  }
}
