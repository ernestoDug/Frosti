// слухач
let itemList = document.querySelectorAll(".review__item");

let position = 0;
if (itemList) {
  // задаємо інтервл та змінюємо зет индекси та фон
  setInterval(() => {
    itemList[position].style.zIndex = 0;
    position++;

    // тернаник
    position = position === itemList.length ? 0 : position;

    itemList[position].style.backgroundColor = getRandomColor();
    itemList[position].style.zIndex = 1;
  }, 3000);
}
// генеруємо колір
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// галерея
// слухач
let itemList2 = document.querySelectorAll(".gallery-js");

let position2 = 0;
if (itemList2) {
  // задаємо інтервл та змінюємо зет индекси та фон
  setInterval(() => {
    itemList2[position2].style.zIndex = 0;
    position2++;

    // тернаник
    position2 = position2 === itemList2.length ? 0 : position2;

    itemList2[position2].style.zIndex = 1;
  }, 3000);
}
