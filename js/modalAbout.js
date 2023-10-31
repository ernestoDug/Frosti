(() => {
  const refs = {
    // бекдроп
    modalAbout: document.querySelector(".backdrop-js"),
    // кнопка відкриття дізнатись більше
    openModal: document.querySelector(".about-describe__button"),
    // хрестик
    closeModal: document.querySelector(".modal__close-js"),
  };
  // слухач
  refs.openModal.addEventListener("click", togleModal);
  refs.closeModal.addEventListener("click", togleModal);
  // обробник
  function togleModal() {
    refs.modalAbout.classList.toggle("is-hidden");
    // console.log("5555555555555");
  }
})();
