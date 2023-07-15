import React, { useEffect, useState } from "react";
import "./traffic.scss";
import circle from "../../assets/7 page/ellips.png";
import backImg2 from "../../assets/7 page/background.png";
import backImg1 from "../../assets/track_res.jpg";
import { useTranslation } from "react-i18next";
const Traffic = () => {
  const [isSmall, SetIsSmall] = useState(true);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    if (window.innerWidth < 768) {
      SetIsSmall(true);
    } else {
      SetIsSmall(false);
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth < 768) {
        SetIsSmall(true);
      } else {
        SetIsSmall(false);
      }
    });

    return () => {
      window.removeEventListener("resize", function () {});
    };
  }, [window.innerWidth]);

  return (
    <div className="traffic_page">
      <div className="track_background_img">
        <img
          src={isSmall ? backImg1 : backImg2}
          alt=""
          className="delivery_back_img"
        />
      </div>

      <div className="main_about_right container">
        <div className="traffic_page_info">
          <div className="main_texts">
            <div className="wrapp">
              <h1>{t("seven_page.main_text")}</h1>
              <img src={circle} alt="" className="cirlce_img" />
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
