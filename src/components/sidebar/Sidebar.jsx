import React from "react";
import "./sidebar.scss";


import { CgClose } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Sidebar = ({ isOpen, close }) => {
  const closeSidebar = () => {
    close(false);
  };
  return (
    
    <div className={isOpen ? "sidebar open" : "sidebar"}>
    
      <div className="closemenu" onClick={closeSidebar}>
        <CgClose />
      </div>
      <ul className="nav_elements">
        <li>
          <a href="#">Главная</a>
          <span className="sidebar_icon_sjow">
            {" "}
            <AiOutlineDoubleRight />
          </span>
        </li>
        <li>
          <a href="#">О Нас</a>
          <span className="sidebar_icon_sjow">
            {" "}
            <AiOutlineDoubleRight />
          </span>
        </li>
        <li>
          <a href="#">Брикеты</a>
          <span className="sidebar_icon_sjow">
            {" "}
            <AiOutlineDoubleRight />
          </span>
        </li>
        <li>
          <a href="#">Где Купить?</a>
          <span className="sidebar_icon_sjow">
            {" "}
            <AiOutlineDoubleRight />
          </span>
        </li>
        <li>
          <a href="#">Контакты</a>
          <span className="sidebar_icon_sjow">
            {" "}
            <AiOutlineDoubleRight />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
