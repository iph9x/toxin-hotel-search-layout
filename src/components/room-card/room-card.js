export default class RoomCard {
  constructor() {
    this.$roomImageBoxes = $('.js-room-card__image-box');
  }

  init() {
    this.$roomImageBoxes.each((i) => {
      const $imageBox = $(this.$roomImageBoxes[i]);
      const nextAr = $imageBox.parent().find('.js-room-card__next-slide');
      const prevAr = $imageBox.parent().find('.js-room-card__prev-slide');
      
      $imageBox.slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: prevAr,
        nextArrow: nextAr,
      });

      $('.slick-dots').addClass('room-card__images-nav');
      $('.slick-dots li').addClass('room-card__nav-dot');
      $('.slick-dots li button').addClass('room-card__nav-button');
    })
  }
}
