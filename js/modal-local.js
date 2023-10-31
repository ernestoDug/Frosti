(() => {
  const refs = {
    // бекдроп
    backdrop: document.querySelector(".backdropLocal-js"),
    // кнопки
    openBtn: document.querySelector(".contacts__btnLocal-js"),
    closeBtn: document.querySelector(".modal__close-buttonLocal-js"),
  };

  refs.openBtn.addEventListener("click", toggleModal);
  refs.closeBtn.addEventListener("click", toggleModal);
  // обробник
  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-contacts-open");
  }
  // для всіх мап
  const maps = document.querySelectorAll(".map-section");

  const mapClicker = (id) => {
    id = id.split("_")[0];
    // перебираннясписку селекорів з додаванням класу невидимості або видаленнм
    maps.forEach((map) => {
      map.classList.add("noneVisual");
      if (map.id == id) {
        map.classList.remove("noneVisual");
      }
    });
  };
  // для всіх кнопок
  const mapButtons = document.querySelectorAll(".map-button");
  // console.log([...mapButtons]);
  // переберемо та повісемо слухачів
  [...mapButtons].forEach((button) => {
    button.addEventListener("click", () => mapClicker(button.id));
  });
})();
