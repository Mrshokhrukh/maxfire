import React from "react";
import "./traffic.scss";
import circle from "../../assets/7 page/ellips.png";
import backImg2 from "../../assets/7 page/background.png";
import { useTranslation } from "react-i18next";
const Traffic = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="traffic_page">
      <div className="track_background_img">
        <img src={backImg2} alt="" />
      </div>

      <div className="main_about_right container">
        <div className="traffic_page_info">
          <div className="main_texts">
            <div className="wrapp">
              <h1>{t("seven_page.main_text")}</h1>
              {/* <img src={circle} alt="" /> */}
            </div>
            <p>{t("seven_page.info_1")}</p>
          </div>
          <div className="grant_info">
            <p>{t("seven_page.info_2")}</p>
          </div>

          <div className="btn_big_box">{t("seven_page.info_3")}</div>

          <div className="last_location_text">
            <p>{t("seven_page.info_4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
