import slide1 from "./meatless-1x.jpg";
import slide2 from "./i1.webp";
import slide3 from "./i3.webp";
import slide4 from "./i4.webp";
import slide5 from "./i.webp";
import s from "./Slider.module.css";

export const img = [
  <img className={s.img} key={slide1} src={slide1} />,
  <img className={s.img} key={slide2} src={slide2} />,
  <img className={s.img} key={slide3} src={slide3} />,
  <img className={s.img} key={slide4} src={slide4} />,
  <img className={s.img} key={slide5} src={slide5} />,
];
