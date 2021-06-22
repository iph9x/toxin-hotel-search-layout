import RoomRatingChart from './room-rating-chart';

if ($('.room-rating-chart__canvas').get(0)) {
  const roomRatingChart = new RoomRatingChart('room-rating-chart__canvas');
  roomRatingChart.init();
}
