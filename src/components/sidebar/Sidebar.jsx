import React, { useEffect } from "react";
import "./sidebar.scss";
import { useTranslation } from "react-i18next";

import { CgClose } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Sidebar = ({ isOpen, close }) => {
  const [t, i18n] = useTranslation("global");
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const closeSidebar = () => {
    close(false);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        close(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="closemenu" onClick={closeSidebar}>
        <CgClose />
      </div>
      <ul className="nav_elements">
        <a href="#home">
          Главная
          <li>
            <span className="sidebar_icon_sjow">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </li>
        </a>

        <a href="#about">
          О Нас
          <li>
            <span className="sidebar_icon_sjow">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </li>
        </a>

        <a href="#products">
          Брикеты
          <li>
            <span className="sidebar_icon_sjow">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </li>
        </a>

        <a href="#buy">
          Где Купить?
          <li>
            <span className="sidebar_icon_sjow">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </li>
        </a>

        <a href="#contact">
          Контакты
          <li>
            <span className="sidebar_icon_sjow">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </li>
        </a>

        <div className="langauages">
          <div className="uz" onClick={() => changeLanguage("uz")}>
            <p>UZ</p>
          </div>
          <div className="rus" onClick={() => changeLanguage("rus")}>
            <p>RUS</p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
