import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import phone from "../../assets/последние/phone icon.png";
import ins from "../../assets/последние/instagram.png";
import tg from "../../assets/последние/telegram.png";
import fac from "../../assets/последние/facebook.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_form">
        <div className="address_footer container">
          <div className="address_info">
            <p className="address_info_title">Адрес:</p>
            <div className="infos">
              <span>город Ташкент,</span>
              <span>Зангиотинский район п-к Чигатай Октепе,</span>
              <span>ул.Шифобахш сувлар, дом 7</span>
            </div>
            <div className="work_time">
              <p>Пн - Сб: с 09:00 до 20:00</p>
            </div>
          </div>
          <div className="form_space">
            <form>
              <div className="formDiv one">
                <label htmlFor="name">Введите ваше имя:</label>
                <input type="text" />
              </div>
              <div className="formDiv two">
                <label htmlFor="phone">Введите свой номер телефона:</label>
                <input type="text" />
              </div>
              <button className="form_btn">Оставить заявку</button>
            </form>
          </div>
        </div>
      </div>
      <div className="phone_social_footer container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="phoneNumber">
          <a href="tel:+998 97 775 75 01">
            <div className="phone_icon">
              <img src={phone} alt="" />
            </div>

            <div className="number">
              <span>Вызов:</span>

              <p>+998 97 775 75 01</p>
            </div>
          </a>
        </div>
        <div className="socialMedia">
          <p>Следите за нами в соц. сетях</p>
          <div className="social_icons">
            <div className="social_icon">
              <a href="#">
                <img src={ins} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a href="#">
                <img src={tg} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a href="#">
                <img src={fac} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
