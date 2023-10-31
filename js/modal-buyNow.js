(() => {
  // пошук селекторів
  const refs = {
    openBuy: document.querySelector(".header-nav__button"),
    openMobileBuy: document.querySelector(".burger-nav__button"),
    closeBuy: document.querySelector(".modal__close-button"),
    modalBuy: document.querySelector(".backdrop"),
  };

  refs.openBuy.addEventListener("click", toggleModal);
  refs.openMobileBuy.addEventListener("click", toggleModal);

  refs.closeBuy.addEventListener("click", toggleModal);
  // обробрики
  function toggleModal() {
    // console.log("cxcxcxc");
    // додаємо клас
    refs.modalBuy.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-buy-open");
  }
})();
