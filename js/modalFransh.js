(() => {
  const refs = {
    // відкривалка
    openButton: document.querySelector(".contacts__btn-js"),
    // закривалка
    closeButton: document.querySelector(".modal__close-button-js"),
    // бекдроп
    modalbackdrop: document.querySelector(".backdropFranshiz-js"),
  };

  refs.openButton.addEventListener("click", toggleModal);
  refs.closeButton.addEventListener("click", toggleModal);
  // обробчик
  function toggleModal() {
    refs.modalbackdrop.classList.toggle("is-hidden");
  }
})();
