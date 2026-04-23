document.addEventListener("DOMContentLoaded", () => {
  // Основные элементы
  const modal = document.getElementById("modal");
  const iframe = document.getElementById("modal-iframe");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentPage = 0;
  const totalPages = 49;

  // --- Функция: обновить состояние кнопок ---
  function updateNavButtons() {
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;

    prevBtn.style.opacity = currentPage <= 1 ? "0.4" : "0.8";
    nextBtn.style.opacity = currentPage >= totalPages ? "0.4" : "0.8";

    prevBtn.style.cursor = currentPage <= 1 ? "not-allowed" : "pointer";
    nextBtn.style.cursor = currentPage >= totalPages ? "not-allowed" : "pointer";
  }

  // --- Функция: открыть страницу ---
  function openModal(pageNum) {
    const page = Math.max(1, Math.min(pageNum, totalPages));
    currentPage = page;
    iframe.src = `pages/page${page}.html`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    modal.setAttribute("aria-hidden", "false");

    // Обновляем состояние кнопок
    updateNavButtons();

    // Фокус на модальное окно для доступности
    modal.focus();
  }

  // --- Функция: закрыть окно ---
  function closeModal() {
    modal.style.display = "none";
    iframe.src = ""; // Очищаем iframe
    document.body.style.overflow = "";
    modal.setAttribute("aria-hidden", "true");
    document.body.focus(); // Возвращаем фокус
  }

  // --- Открытие модального окна ---
  document.querySelectorAll(".tree-node a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const match = href.match(/page(\d+)\.html$/);
      const pageNum = match ? parseInt(match[1], 10) : 1;
      openModal(pageNum);
    });
  });

  // --- Обработчики событий ---
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) openModal(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) openModal(currentPage + 1);
  });

  // --- Клавиатурная навигация ---
  document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;

    switch (e.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (currentPage > 1) openModal(currentPage - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        if (currentPage < totalPages) openModal(currentPage + 1);
        break;
    }
  });

  // --- Дополнительно: ARIA и доступность ---
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Страница буквицы");

  closeBtn.setAttribute("aria-label", "Закрыть модальное окно");
  prevBtn.setAttribute("aria-label", "Предыдущая буквица");
  nextBtn.setAttribute("aria-label", "Следующая буквица");

  modal.setAttribute("tabindex", "-1");

  // === Адаптивная сетка: встроена в DOMContentLoaded ===
  function resizeFamilyTree() {
    const tree = document.querySelector('.family-tree');
    if (!tree) return; // Защита

    const windowWidth = window.innerWidth;

    if (windowWidth <= 480) {
      tree.style.width = '90%';
    } else if (windowWidth <= 768) {
      tree.style.width = '85%';
    } else {
      tree.style.width = '100%';
      tree.style.maxWidth = '600px';
    }
  }

  // Вызываем при загрузке и ресайзе
  resizeFamilyTree(); // Сразу при загрузке
  window.addEventListener('resize', resizeFamilyTree);
});
