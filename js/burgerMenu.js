(() => {
  // пошук за селекторами
  const burgerMenu = document.querySelector(".js-burger-wrapp");
  const openMenu = document.querySelector(".js-open-burger");
  const closeMenu = document.querySelector(".js-close-burger");
  const burger = () => {
    const isMenuOpen =
      // додаємо класс
      burgerMenu.classList.toggle("is-open");
    burgerMenu.classList.remove.toggle("is-open");
  };
  // слухачі на клік
  openMenu.addEventListener("click", burger);
  closeMenu.addEventListener("click", burger);
})();
