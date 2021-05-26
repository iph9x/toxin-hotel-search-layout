$('.js-room-card__image-box').each((key, item) => {
  const sliderIdName =  'slider' + key;
  item.id = sliderIdName;

  const nextAr = $(item).parent().find('.js-room-card__next-slide');
  const prevAr = $(item).parent().find('.js-room-card__prev-slide');
  const sliderId = '#' + sliderIdName;
  
  $(sliderId).slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: prevAr,
    nextArrow: nextAr,
  });
});
