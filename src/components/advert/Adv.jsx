import React from "react";
import "./adv.scss";
import { GiHotSpices } from "react-icons/gi";

const Adv = () => {
  return (
    <div className="adv">
      <div></div>
      <div className="adv_info">
        <div className="adv_info_cont">
          <div className="blured"></div>
          <div className="circled_blur"></div>
          <h1>ДРЕВЕСНО-УГОЛЬНЫЕ БРИКЕТ</h1>
          <div className="info_text">
            <p>
              предназначен для быстрого и безопасного приготовления мяса, рыбы,
              птицы и других различных блюд на мангалах, грилях и барбекю.
            </p>
          </div>
          <div className="adv_info_btns">
            <button className="button">
              <span className="icon">
                <ion-icon name="flame-outline"></ion-icon>
              </span>
              натуральный
            </button>
            <button className="button">
              <span className="icon">
                <ion-icon name="hourglass-outline"></ion-icon>
              </span>
              горить дольше
            </button>
            <button className="button">
              <span className="icon">
                <GiHotSpices />
              </span>
              2x горячее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adv;
