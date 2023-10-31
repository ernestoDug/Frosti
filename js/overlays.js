(() => {
  const refs = {
    // для селекторів кнопок
    card1BtnOpen: document.querySelector(".card1Btn"),
    card2BtnOpen: document.querySelector(".card2Btn"),
    card3BtnOpen: document.querySelector(".card3Btn"),
    // для оверелеїв пролуктів
    card1: document.querySelector(".card_1_overlay"),
    card2: document.querySelector(".card_2_overlay"),
    card3: document.querySelector(".card_3_overlay"),
  };
  //   слухачі
  refs.card1BtnOpen.addEventListener("click", toggleСard1);
  refs.card2BtnOpen.addEventListener("click", toggleСard2);
  refs.card3BtnOpen.addEventListener("click", toggleСard3);

  // обробники

  function toggleСard1() {
    refs.card1.classList.toggle("overlayOpen");
    refs.card1BtnOpen.classList.toggle("rotateSVG");
  }

  function toggleСard2() {
    refs.card2.classList.toggle("overlayOpen");
    refs.card2BtnOpen.classList.toggle("rotateSVG");
  }
  function toggleСard3() {
    refs.card3.classList.toggle("overlayOpen");
    refs.card3BtnOpen.classList.toggle("rotateSVG");
  }
})();
