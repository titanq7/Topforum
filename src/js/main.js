
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

$(document).ready(function() {
  $("#conference").select2();
});

$(document).ready(function() {
  $(".conference").select2();
});

$(".partners__slider").owlCarousel({
  loop: true,
  margin: 12,
  items: 6,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
});


