import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="head">
      <div className="header">
        <div className="logo">
          <img
            src="https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243831-stock-photo-letter-s-logo.jpg"
            alt=""
          />
        </div>
        <ul className="elements">
          <li>
            <a href="#">главная</a>
          </li>
          <li>
            <a href="#">о нас</a>
          </li>
          <li>
            <a href="#">брикеты</a>
          </li>
          <li>
            <a href="#">где купить?</a>
          </li>
          <li>
            <a href="#">контакты</a>
          </li>
        </ul>
        <div className="lang">
          <div className="ru">
            <p>ru</p>
          </div>
          <div className="uz">
            <p>uz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
