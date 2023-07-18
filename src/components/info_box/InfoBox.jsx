import React from "react";
import "./infobox.scss";
import { GiHotSpices } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import shape from "../../assets/shape.png";
import { useTranslation } from "react-i18next";
const InfoBox = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div
      className="adv_info"
      // data-aos="fade-up"
      // data-aos-anchor-placement="top-top"
    >
      <div className="adv_info_cont">
        <div className="shape_blur_img">
          <img src={shape} alt="" />
        </div>
        <h1>{t("second_page.main_text")}</h1>
        <div className="info_text">
          <p>
            <span className="info_text_icon">
              <BsArrowRight />
            </span>
            {t("second_page.desc")}
          </p>
        </div>
        <div className="adv_info_btns">
          <button className="button">
            <span className="icon">
              <ion-icon name="flame-outline"></ion-icon>
            </span>
            {t("second_page.btn_1")}
          </button>
          <button className="button">
            <span className="icon">
              <ion-icon name="hourglass-outline"></ion-icon>
            </span>
            {t("second_page.btn_2")}
          </button>
          <button className="button">
            <span className="icon">
              <GiHotSpices />
            </span>
            {t("second_page.btn_3")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
