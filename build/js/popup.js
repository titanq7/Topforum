  // Modal

  let WidthWithOutScroll = document.body.scrollWidth - document.body.clientWidth;
  console.log(WidthWithOutScroll);

  function modalWindow(button, close, modal) { 
    let more = document.querySelector(button), // Получаем аргументы.
      closeWindow = document.querySelector(close), // Получаем аргументы.
      overlay = document.querySelector(modal); // Получаем аргументы.

    more.addEventListener("click", function() { // При клике на кнопку.
      overlay.style.display = "block"; // Меняем стиль попапа на блок.
      this.classList.add("more-splash"); // Добавляем кнопке эффект через класс more-splash.
      document.body.style.overflow = "hidden"; // Добавляем overflow hidden, что бы не было прокрутки когда активный попап.
      document.body.style.paddingRight = WidthWithOutScroll + 4 + "px"; // Добавляем overflow hidden, что бы не было прокрутки когда активный попап.

    });

    closeWindow.addEventListener("click", function() { // при клике на closeWindow.
      overlay.style.display = "none"; // Закрываем modal.
      more.classList.remove("more-splash"); // И убираем у кнопки класс с анимацией.
      document.body.style.overflow = ""; // Убираем overflow.
      document.body.style.paddingRight = 0 + "px"; // Добавляем overflow hidden, что бы не было прокрутки когда активный попап.
    });
  }

  modalWindow(".menu__second-button", ".popup-close", ".overlay");

