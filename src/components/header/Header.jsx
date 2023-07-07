import React, { useEffect, useState } from "react";
import "./Header.scss";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/logo.png";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  let header = useRef(null);
  let nav_link = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
            <a href="#home">{t("header_elements.el_1")}</a>
          </li>
          <li
            ref={nav_link}
            className={category == "about" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("about")}
          >
            <a href="#about">{t("header_elements.el_2")}</a>
          </li>
          <li
            ref={nav_link}
            className={category == "products" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("products")}
          >
            <a href="#products">{t("header_elements.el_3")}</a>
          </li>
          <li
            ref={nav_link}
            className={category == "buy" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("buy")}
          >
            <a href="#">{t("header_elements.el_4")}</a>
          </li>
          <li
            ref={nav_link}
            className={category == "contact" ? "nav_link active" : "nav_link"}
            onClick={() => changeCatg("contact")}
          >
            <a href="#">{t("header_elements.el_5")}</a>
          </li>
        </ul>
        <div className="lang">
          <div className="ru" onClick={() => changeLanguage("rus")}>
            <p>ru</p>
          </div>
          <div className="uz" onClick={() => changeLanguage("uz")}>
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
