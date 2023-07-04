import React, { useEffect, useState } from "react";
import "./Header.scss";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/logo.png";
import { useRef } from "react";

const Header = () => {
  let header = useRef(null);
  let nav_link = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && window.scrollY > 50) {
        header.current.style.top = "0";
        header.current.style.boxShadow =
          "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;";
      } else if (window.innerWidth < 768 && window.scrollY > 20) {
        header.current.style.top = "0";
      } else {
        header.current.style.top = "50px";
      }
    };

    window.addEventListener("scroll", onResize);

    return () => {
      window.removeEventListener("scroll", onResize);
    };
  }, []);
  const close = (para) => {
    setIsOpen(para);
  };
  if (isOpen) {
    document.querySelector(".home").addEventListener("click", () => {
      setIsOpen(false);
    });
  }

  const changeCatg = (param) => {
    setCategory(param);
  };

  return (
    <div className="head" ref={header}>
      <div className="header">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        
        <ul className="elements">
          <li
            ref={nav_link}
            className={category == "home" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("home")}
          >
            <a href="#home">главная</a>
          </li>
          <li
            ref={nav_link}
            className={category == "about" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("about")}
          >
            <a href="#about">о нас</a>
          </li>
          <li
            ref={nav_link}
            className={category == "products" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("products")}
          >
            <a href="#">брикеты</a>
          </li>
          <li
            ref={nav_link}
            className={category == "buy" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("buy")}
          >
            <a href="#">где купить?</a>
          </li>
          <li
            ref={nav_link}
            className={category == "contact" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("contact")}
          >
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

        <div className="burger_menubar_opener" onClick={sidebarOpen}>
          <BurgerMenu />
        </div>
        <Sidebar isOpen={isOpen} close={close} />
      </div>
    </div>
  );
};

export default Header;
