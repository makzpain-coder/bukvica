document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const iframe = document.getElementById("modal-iframe");
  const close = document.querySelector(".close");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentPage = 0; // Номер текущей страницы (1–49)
  const totalPages = 49; // Всего страниц

  // Открытие модального окна
  document.querySelectorAll(".tree-node a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const num = parseInt(href.match(/page(\d+)\.html/)?.[1]) || 1;
      openModal(num);
    });
  });

  // Открытие страницы по номеру
  function openModal(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > totalPages) pageNum = totalPages;

    currentPage = pageNum;
    iframe.src = `pages/page${pageNum}.html`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Закрытие модального окна
  function closeModal() {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "";
  }

  close.onclick = closeModal;

  window.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  window.onkeydown = (e) => {
    if (modal.style.display !== "flex") return;

    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  };

  // Навигация: предыдущая
  prevBtn.onclick = showPrev;
  function showPrev() {
    if (currentPage > 1) {
      openModal(currentPage - 1);
    }
  }

  // Навигация: следующая
  nextBtn.onclick = showNext;
  function showNext() {
    if (currentPage < totalPages) {
      openModal(currentPage + 1);
    }
  }
});
