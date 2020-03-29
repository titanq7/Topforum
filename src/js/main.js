$(document).ready(function() {
  $(".slider__wraper").owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  });
});
