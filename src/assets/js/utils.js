export function initDatepickerButtons(root) {
  const $datepickerPopup = root.$content.parent();
  $datepickerPopup.find('.datepicker--pointer').remove();
  const buttonsTemplate = `<div class="datepicker--footer">
    <button type="button" class="datepicker--clear">Очистить</button>
    <button type="button" class="datepicker--apply">Применить</button>
  </div>`;
  $datepickerPopup.append(buttonsTemplate);

  const datepickerClearBtn = $datepickerPopup.find('.datepicker--clear');
  const datepickerApplyBtn = $datepickerPopup.find('.datepicker--apply');
  datepickerApplyBtn.on('click', () => root.hide());
  datepickerClearBtn.on('click', () => root.clear());
}
