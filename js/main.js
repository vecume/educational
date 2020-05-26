const elHeaderSliderWrapper = $('.header__slider');
const elFeedbacksSliderWrapper = $('.feedbacks__slider');
const elPartnersSliderWrapper = $('.partners-box');
const elGallerySliderWrapper = $('.gallery__slider');

elHeaderSliderWrapper.slick({
  nextArrow: '<button type="button" class="btn header-next"><img src="img/header-a-right.png" alt=""></button>',
  prevArrow: '<button type="button" class="btn header-prev"><img src="img/header-a-left.png" alt=""></button>'
});

elFeedbacksSliderWrapper.slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  dotsClass: 'slider-controllers'
});

elGallerySliderWrapper.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="btn header-next"><img src="img/arrow-right.png" alt=""></button>',
  prevArrow: '<button type="button" class="btn header-prev"><img src="img/arrow-left.png" alt=""></button>'
});

elPartnersSliderWrapper.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="btn header-next"><img src="img/arrow-right.png" alt=""></button>',
  prevArrow: '<button type="button" class="btn header-prev"><img src="img/arrow-left.png" alt=""></button>'
});