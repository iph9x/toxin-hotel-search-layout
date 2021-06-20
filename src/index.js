import './assets/styles/main.scss';

import 'air-datepicker';
import 'inputmask';
import 'slick-carousel';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('./', true, /\.js$/));
