import * as $ from 'jquery';
import { initDatepickerButtons } from '../../assets/js/utils';

export default class FilterDateDropdown {
  constructor() {
    this.$filterDateDropdown = $('.js-filter-date-dropdown');
  }
  
  init() {
    const filterDateDropdown = this.$filterDateDropdown.datepicker({
      navTitles: { days: 'MM yyyy' },
      dateFormat: "dd M",
      multipleDatesSeparator: ' - ',
    }).data('datepicker');
    
    if (!!filterDateDropdown) {
      initDatepickerButtons(filterDateDropdown);
    }
  }
}
