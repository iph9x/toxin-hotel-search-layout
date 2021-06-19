const mask = $('.js-masked-text-field__input');
Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(mask);