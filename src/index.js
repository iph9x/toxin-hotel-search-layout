

import 'air-datepicker';
import 'inputmask';
import 'slick-carousel';

import './style.scss';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('./', true, /\.js$/));
importAll(require.context('./', true, /\.(png|jpe?g)$/));
