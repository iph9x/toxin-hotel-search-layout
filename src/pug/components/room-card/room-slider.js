$('.card-slider__image-box').each((key, item) => {
  let sliderIdName =  'slider' + key;
  item.id = sliderIdName;
  console.log($(item).find('.card-slider__next'))
  let nextAr = $(item).parent().find('.card-slider__next');
  let prevAr = $(item).parent().find('.card-slider__prev');
  let sliderId = '#' + sliderIdName;


  
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
})