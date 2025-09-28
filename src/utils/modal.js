function modal() {
  const modalBtns = document.querySelectorAll(".modal__btn");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal__content");

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalContent.src = btn.src;
      modalContent.alt = btn.alt;
      modal.classList.add("modal__fade-in");
      modal.classList.remove("modal__fade-out");
      modalContent.classList.add("modal__zoom-in");
      modalContent.classList.remove("modal__zoom-out");
    });
  });

  modal.addEventListener("click", (event) => {
    // if (event.target == modal) {
    modal.classList.add("modal__fade-out");
    modal.classList.remove("modal__fade-in");
    modalContent.classList.add("modal__zoom-out");
    modalContent.classList.remove("modal__zoom-in");
    // }
  });
}

export default modal;
