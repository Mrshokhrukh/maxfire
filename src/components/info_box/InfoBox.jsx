import React from "react";
import "./infobox.scss";
import { GiHotSpices } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import shape from "../../assets/shape.png";
const InfoBox = () => {
  return (
    <div className="adv_info">
      <div className="adv_info_cont">
        <div className="shape_blur_img">
          <img src={shape} alt="" />
        </div>
        <h1>ДРЕВЕСНО-УГОЛЬНЫЕ БРИКЕТ</h1>
        <div className="info_text">
          <p>
            <span className="info_text_icon">
              <BsArrowRight />
            </span>
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
  );
};

export default InfoBox;
