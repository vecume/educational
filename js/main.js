const elHeaderSliderWrapper = $('.header__slider');
const elFeedbacksSliderWrapper = $('.feedbacks__slider');
elHeaderSliderWrapper.slick({
  nextArrow: '<button type="button" class="btn header-next"><img src="img/header-a-right.png" alt=""></button>',
  prevArrow: '<button type="button" class="btn header-prev"><img src="img/header-a-left.png" alt=""></button>'
});

elFeedbacksSliderWrapper.slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true
});