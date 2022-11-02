import React from "react";
import style from "./style.module.css";

const Modal = ({ setIsOpen, id, data }) => {
  const card = data.filter((el) => el.id === id)[0];
  console.log(card);
  return (
    <div className={style.popup}>
      <div className={style.modal}>
        <div className={style.imgWrap}>
          <img
            className={style.img}
            src={card.image_2x}
            alt=""
            width={372}
            height={372}
          />
        </div>
        <div className={style.info}>
          <p className={style.title}>{card.name}</p>
          <p className={style.text}>Lorem ipsum dolor sit amet.</p>
          <div className={style.radioWrap}>
          <label>
          <input className={style.radioInput} type="radio" name="size" />
          <span className={style.radio}>Маленькая</span>
          </label>
          <label>
          <input className={style.radioInput} type="radio" name="size" />
          <span className={style.radio}>Средняя</span>
          </label>
          <label>
          <input className={style.radioInput} type="radio" name="size" />
          <span className={style.radio}>Большая</span>
          </label>
          </div>
          
          

          <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
