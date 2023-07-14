import React from "react";
import "./chooseUs.scss";
import video from "../../assets/8 page/background/571699_Grill_Meat_Barbecue_3840x2160.mp4";
import grImg from "../../assets/8 page/free-icon-guarantee-3832075.png";
import lorryImg from "../../assets/8 page/free-icon-lorry-605863.png";
import delImg from "../../assets/8 page/free-icon-possibility-5430059.png";
import shape from "../../assets/8 page/shape.png";
import { useTranslation } from "react-i18next";

const ChooseUs = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="page_8_choose_us">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="our_priorities_page container">
        <div className="our_priorities_page_text">
          <p>{t("eight_page.main_text")}</p>
        </div>

        <div className="eighth_page_info_boxes">
          <div className="box_guarent">
            <div className="img_round">
              <img src={grImg} alt="" />
            </div>
            <div className="title_text">
              <p>{t("eight_page.title_1")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_1")}</p>
            </div>
          </div>
          <div className="box_lorry">
            <div className="img_round">
              <img src={lorryImg} alt="" />
            </div>
            <div className="title_text">
              <p>{t("eight_page.title_2")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_2")}</p>
            </div>
          </div>
          <div className="box_possibilities">
            <div className="img_round">
              <img src={delImg} alt="" />
            </div>

            <div className="title_text">
              <p> {t("eight_page.title_3")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
