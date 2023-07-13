import React, { useEffect } from "react";
import "./sidebar.scss";

import { CgClose } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Sidebar = ({ isOpen, close }) => {
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
      </ul>
    </div>
  );
};

export default Sidebar;
