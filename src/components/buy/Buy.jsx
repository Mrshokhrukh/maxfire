import React from "react";
import "./buy.scss";

import backImg from "../../assets/6 page/background.png";
import karzinka from "../../assets/6 page/02.png";
import havas from "../../assets/6 page/01.png";
import makro from "../../assets/6 page/03.png";
import { useTranslation } from "react-i18next";
const Buy = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="buy_info">
      <div className="buy_background_img" id="buy">
        <img src={backImg} alt="" />
      </div>

      <div
        className="container buy_page"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="buy_text_line">
          <div className="rotated_text_btn">
            <span>{t("six_page.main_text")}</span>
          </div>
          <div className="line"></div>
        </div>

        <div className="buy_page_main">
          <div className="buy_page_main_left">
            <span>{t("six_page.markets_text")}</span>
            <div className="brands">
              <div className="brands_img one">
                <a href="https://www.instagram.com/korzinkauz/" target="_blank">
                  <img src={karzinka} alt="" />
                </a>
              </div>{" "}
              <div className="brands_img three">
                <a
                  href="https://www.instagram.com/makro_supermarket/"
                  target="_blank"
                >
                  <img src={makro} alt="" />
                </a>
              </div>
              <div className="brands_img two">
                <a
                  href="https://www.instagram.com/havasuz/?hl=en"
                  target="_blank"
                >
                  <img src={havas} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="buy_page_main_right">
            <span>{t("six_page.info_1")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
