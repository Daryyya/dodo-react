import combo_1x_1 from "./img/combo-1x-1.png";
import combo_2x_1 from "./img/combo-2x-1.png";
import combo_1x_2 from "./img/combo-1x-2.png";
import combo_2x_2 from "./img/combo-2x-2.png";
import combo_1x_3 from "./img/combo-1x-3.png";
import combo_2x_3 from "./img/combo-2x-3.png";
import combo_1x_4 from "./img/combo-1x-4.png";
import combo_2x_4 from "./img/combo-2x-4.png";
import combo_1x_5 from "./img/combo-1x-5.png";
import combo_2x_5 from "./img/combo-2x-5.png";

const combo = [
  {
    id: 9,
    image_1x: combo_1x_1,
    image_2x: combo_2x_1,
    name: "Комбо за 599 ₽",
    description:
      "Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.",
    price: 599,
    type: 'tocart',
  },
  {
    id: 10,
    image_1x: combo_1x_2,
    image_2x: combo_2x_2,
    name: "2 пиццы",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    price: 899,
    type: 'tocart',
  },
  {
    id: 11,
    image_1x: combo_1x_3,
    image_2x: combo_2x_3,
    name: "2 пиццы и закуска",
    description:
      "2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек",
    price: 799,
    type: 'tocart',
  },
  {
    id: 12,
    image_1x: combo_1x_4,
    image_2x: combo_2x_4,
    name: "Пицца и 2 закуски",
    description:
      "Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек",
    price: 799,
    type: 'tocart',
  },
  {
    id: 13,
    image_1x: combo_1x_5,
    image_2x: combo_2x_5,
    name: "Комбо за 999 ₽",
    description:
      "3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен",
    price: 999,
    type: 'tocart',
  },
];

export default combo;
