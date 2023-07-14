import React from "react";
import "./InfoBoxTwo.scss";
import blured from "../../assets/shape.png";
import { BsArrowRight } from "react-icons/bs";
import right from "../../assets/down-arrow.png";
import { useTranslation } from "react-i18next";
const InfoBoxTwo = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="desc_infogram">
      <div className="infogram_back_blur_img" >
        <img src={blured} alt="" />
      </div>
      <h1>
        <span className="starter_text">{t('fourth_page.starter_text')} </span> - {t('fourth_page.after_starter_text')}
      </h1>
      <div className="infogram_text">
        <p>
          <img src={right} alt="" className="right_arrow_img" /> {t('fourth_page.text_1')}
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> {t('fourth_page.text_2')}
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> {t('fourth_page.text_3')}
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> {t('fourth_page.text_4')}
        </p>
      </div>
    </div>
  );
};

export default InfoBoxTwo;
