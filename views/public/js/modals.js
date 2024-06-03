// Получение всех элементов с классом 'portfolio-link'
const portfolioItems = document.querySelectorAll(".portfolio-link");
// Получение элемента модального окна
const modalElement = document.getElementById("portfolioModal1");

// Проверка, существует ли элемент модального окна
if (modalElement) {
  // Создание экземпляра модального окна Bootstrap
  const modal = new bootstrap.Modal(modalElement);
  modal.hide();
  // Добавление обработчика событий для каждого элемента 'portfolio-link'
  portfolioItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // Показ модального окна
      const modalBody = document.querySelector(".modal-body");
      const modalHeader = modalBody.querySelector(".header");
      const modalDate = modalBody.querySelector("#date");
      const modalImg = modalBody.querySelector(".img-fluid");
      modalHeader.textContent = "Альбом " + item.dataset.title;
      modalImg.src = item.dataset.image;
      modalDate.textContent = item.dataset.date;
      modal.show();
    });
  });

  // Получение всех элементов с классом 'close' для закрытия модального окна
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
      // Закрытие модального окна
      modal.hide();
    });
  });
} else {
  console.error("Модальное окно не найдено");
}
