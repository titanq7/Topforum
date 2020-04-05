$(document).ready(function () {
  $(".slider__wraper").owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  function menuDrop(click, dropList) {
    $(click).on("click", function (e) {
      e.preventDefault();
      $(dropList).slideToggle(200);
      $(document).mouseup(function (e) {
        // событие клика по веб-документу
        let div = $(click); // тут указываем ID элемента
        if (
          !div.is(e.target) && // если клик был не по нашему блоку
          div.has(e.target).length === 0
        ) {
          $(dropList).hide(100); // скрываем его
        }
      });
    });
  }

  menuDrop(".menu__item-exhibitors", ".menu__item-exhibitors-list");
  menuDrop(".menu__item-speakers", ".menu__item-speaker-list");
  menuDrop(".menu__item-sponsors", ".menu__item-sponsors-list");

  $(".burger-menu").on("click", function (e) {
    e.preventDefault();
    $(".menu__list").toggleClass("menu__list--active");
    $(".burger-menu").fadeToggle();

    $(document).mouseup(function (e) {
      let div = $(".menu__item");
      if (
        !div.is(e.target) && // если клик был не по нашему блоку
        div.has(e.target).length === 0
      ) {
        $(".menu__list").removeClass("menu__list--active");
        $(".burger-menu").fadeToggle();
      }
    });
  });

  // $(".burger-menu").on("click", function(e) {
  //   e.preventDefault();
  //   $(".menu__list").toggleClass("menu__list--active");

  //   $(document).mouseup(function(e) {
  //     let div = $(".menu__list");
  //     if (!div.is(e.target) && div.has(e.target).length === 0) {
  //       $(".menu__list").removeClass("menu__list--active");
  //     }
  //   });
  // });

  // $(".burger-menu").on("click", function (e) {
  //   e.preventDefault();
  //   $(".menu__list").toggleClass("menu__list--active");

  // });
});

$(document).ready(function () {
  $("#conference").select2();
});

$(document).ready(function () {
  $(".conference").select2();
});

$(".partners__slider").owlCarousel({
  loop: true,
  margin: 12,
  items: 6,
  dots: false,
  responsiveClass: true,
  responsive: {
    400: {
      items: 2,
      autoWidth: true,
    },
    700: {
      items: 2,
      autoWidth: true,
    },
    800: {
      items: 3,
      autoWidth: true,
    },
    900: {
      items: 3,
      autoWidth: true,
    },
    1000: {
      items: 4,
      autoWidth: true,
    },
    1199: {
      items: 4,
    },
  },
});
