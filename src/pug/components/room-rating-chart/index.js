import RoomRatingChart from './room-rating-chart';

if ($('.js-rating-chart').get(0)) {
  const roomRatingChart = new RoomRatingChart('js-rating-chart');
  roomRatingChart.init();
}
