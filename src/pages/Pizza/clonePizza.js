import pizza_1x_1 from "./img/pizza-1x-1.png";
import pizza_2x_1 from "./img/pizza-2x-1.png";
import pizza_1x_2 from "./img/pizza-1x-2.png";
import pizza_2x_2 from "./img/pizza-2x-2.png";
import pizza_1x_3 from "./img/pizza-1x-3.png";
import pizza_2x_3 from "./img/pizza-2x-3.png";
import pizza_1x_4 from "./img/pizza-1x-4.png";
import pizza_2x_4 from "./img/pizza-2x-4.png";
import pizza_1x_5 from "./img/pizza-1x-5.png";
import pizza_2x_5 from "./img/pizza-2x-5.png";
import pizza_1x_6 from "./img/pizza-1x-6.png";
import pizza_2x_6 from "./img/pizza-2x-6.png";
import pizza_1x_7 from "./img/pizza-1x-7.png";
import pizza_2x_7 from "./img/pizza-2x-7.png";
import pizza_1x_8 from "./img/pizza-1x-8.png";
import pizza_2x_8 from "./img/pizza-2x-8.png";

const pizza = [
  {
    id: 1,
    image_1x: pizza_1x_1,
    image_2x: pizza_2x_1,
    name: "Пицца из половинок",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    price: 600,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
    
  },
  {
    id: 2,
    image_1x: pizza_1x_2,
    image_2x: pizza_2x_2,
    name: "Пепперони-сердце",
    description: "Пикантная пепперони, моцарелла, томатный соус",
    price: 625,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 3,
    image_1x: pizza_1x_3,
    image_2x: pizza_2x_3,
    name: "Пирог-сердце",
    description: "Ананасы, брусника, сгущенное молоко",
    price: 625,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 4,
    image_1x: pizza_1x_4,
    image_2x: pizza_2x_4,
    name: "Чиззи чеддер",
    description:
      "Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы",
    price: 625,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 5,
    image_1x: pizza_1x_5,
    image_2x: pizza_2x_5,
    name: "Цыпленок блю чиз",
    description: "Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо",
    price: "от 445 ₽",
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 6,
    image_1x: pizza_1x_6,
    image_2x: pizza_2x_6,
    name: "Нежный лосось",
    description: "Лосось, томаты черри, соус песто, моцарелла, соус альфредо",
    price: 495,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 7,
    image_1x: pizza_1x_7,
    image_2x: pizza_2x_7,
    name: "Сырная",
    description:
      "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо",
    price: 245,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
  {
    id: 8,
    image_1x: pizza_1x_8,
    image_2x: pizza_2x_8,
    name: "Пепперони фреш",
    description:
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
    price: 245,
    type: 'tomodal',
    ingredients: [
      {
        name: 'Ветчина',
        removable: true,
      },
      {
        name: 'сыр чеддер',
        removable: false,
      },
      {
        name: 'сладкий перец',
        removable: true,
      },
      {
        name: 'моцарелла',
        removable: false,
      },
      {
        name: 'томатный соус',
        removable: false,
      },
      {
        name: 'чеснок',
        removable: true,
      },
      {
        name: 'итальянские травы',
        removable: true,
      },
    ]
  },
];

export default pizza;