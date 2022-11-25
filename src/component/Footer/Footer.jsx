import React from "react";
import app from "./img/appstore.svg";
import facebook from "./img/facebook.svg";
import google from "./img/googleplay.svg";
import instagram from "./img/instagram.svg";
import logo from "./img/logo.svg";
import ok from "./img/ok.svg";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";
import s from "./style.module.css";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__navigation}>
          <div className={s.footer__links}>
            <ul className={s.links__dodo}>
              <li className={s.menu__item}>Додо Пицца</li>
              <li className={s.menu__item}>О нас</li>
              <li className={s.menu__item}>Додо-книга</li>
              <li className={s.menu__item}>Блог «Сила ума»</li>
              <li className={s.menu__item}>Додо ИС</li>
            </ul>
            <ul className={s.links__job}>
              <li className={s.menu__item}>Работа</li>
              <li className={s.menu__item}>В пиццерии</li>
              <li className={s.menu__item}>В контакт-центре</li>
            </ul>
            <ul className={s.links__partners}>
              <li className={s.menu__item}>Партнерам</li>
              <li className={s.menu__item}>Франшиза</li>
              <li className={s.menu__item}>Инвестиции</li>
              <li className={s.menu__item}>Поставщикам</li>
              <li className={s.menu__item}>Предложить помещение</li>
            </ul>
            <ul className={s.links__interesting}>
              <li className={s.menu__item}>Это интересно</li>
              <li className={s.menu__item}>Экскурсии и мастер-классы</li>
              <li className={s.menu__item}>Корпоративные заказы</li>
            </ul>
          </div>

          <div className={s.footer__contacts}>
            <img
              src={google}
              width="135"
              height="40"
              alt="Google Play"
              className={s.footer__img}
            />
            <img
              src={app}
              width="136"
              height="40"
              alt="Apple Store"
              className={s.footer__img}
            />
            <a className={s.phone__number} href="tel:8-800-302-00-60">
              8-800-302-00-60
            </a>
            <span className={s.phone__hint}>Звонок бесплатный</span>
            <a className={s.footer__mail} href="mailto:feedback@dodopizza.com">
              feedback@dodopizza.com
            </a>
          </div>

          <div className={s.footer__facts}>
            <div className={s.facts__left}>
              <p className={s.facts__title}>1 396 362 874 ₽</p>
              <p className={s.facts__description}>
                Выручка российской сети в этом месяце. В прошлом — 2 460 305 416
                ₽
              </p>
            </div>

            <div className={s.facts__right}>
              <p className={s.facts__title}>688 пиццерий</p>
              <p className={s.facts__description}>
                в 14 странах, включая Китай, США и Великобританию
              </p>
            </div>
          </div>
        </div>

        <div className={s.footer__info}>
          <div className={s.info__logo}>
            <img
              src={logo}
              width="276"
              height="22"
              alt="Footer Logo"
              className={s.footer__img}
            />
          </div>
          <div className={s.info__links}>
            <a className={s.info__link} href="#">
              Правовая информация
            </a>
            <a className={s.info__link} href="#">
              Калорийность и состав
            </a>
            <a className={s.info__link} href="#">
              Помощь
            </a>
          </div>
          <div className={s.info__social}>
            <img
              className={s.footer__img}
              src={facebook}
              width="32"
              height="32"
              alt="Facebook"
            />
            <img
              className={s.footer__img}
              src={instagram}
              width="32"
              height="32"
              alt="Instagram"
            />
            <img
              className={s.footer__img}
              src={ok}
              width="32"
              height="32"
              alt="Odnoklassniki"
            />
            <img
              className={s.footer__img}
              src={vk}
              width="32"
              height="32"
              alt="Vkontakte"
            />
            <img
              className={s.footer__img}
              src={youtube}
              width="32"
              height="32"
              alt="Youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
