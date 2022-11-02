import small_caesar_1x from "./images/small-caesar-1x.jpg";
import small_caesar_2x from "./images/small-caesar-2x.jpg";
import small_carbonara_1x from "./images/small-carbonara-1x.jpg";
import small_carbonara_2x from "./images/small-carbonara-2x.jpg";
import small_salmon_1x from "./images/small-salmon-1x.jpg";
import small_salmon_2x from "./images/small-salmon-2x.jpg";
import small_two_pizzas_1x from "./images/small-two-pizzas-1x.jpg";
import small_two_pizzas_2x from "./images/small-two-pizzas-2x.jpg";

const cardItem = [
  {
    id: 1,
    src: small_caesar_1x,
    srcset: small_caesar_2x,
    alt: "Цезарь",
    title: "Цезарь",
    price: "от 445 ₽",
  },

  {
    id: 2,
    src: small_salmon_1x,
    srcset: small_salmon_2x,
    alt: "Лосось",
    title: "Нежный лосось",
    price: "от 495 ₽",
  },

  {
    id: 3,
    src: small_two_pizzas_1x,
    srcset: small_two_pizzas_2x,
    alt: "2 пиццы",
    title: "2 пиццы",
    price: "от 899 ₽",
  },

  {
    id: 4,
    src: small_carbonara_1x,
    srcset: small_carbonara_2x,
    alt: "Карбонара",
    title: "Карбонара",
    price: "от 395 ₽",
  },
];

export default cardItem;
