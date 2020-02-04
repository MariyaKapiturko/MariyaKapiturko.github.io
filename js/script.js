$(".review-cards").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }
  ]
});