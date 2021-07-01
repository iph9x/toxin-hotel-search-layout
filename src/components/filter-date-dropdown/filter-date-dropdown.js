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
      initDatepickerButtons(filterDateDropdown);
      this.$filterDateDropdownArrow.on('click', () => filterDateDropdown.show());
    }
  }
}
