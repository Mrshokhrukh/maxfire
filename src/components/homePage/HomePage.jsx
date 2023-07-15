import React, { useEffect, useState } from "react";
import "./homepage.scss";
import { BsArrowDown } from "react-icons/bs";
import medal from "../../assets/medal.png";
import CircularText from "../circularText/CircularText";
import { useTranslation } from "react-i18next";
import pageOne from "../../assets/1 page+picture.png";
import resHome from "../../assets/home_page_back_res.png";
const HomePage = () => {
  const [t, i18n] = useTranslation("global");
  const [isSmall, SetIsSmall] = useState(false);
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
    <>
      <div className="background_img">
        <img src={isSmall ? resHome : pageOne} alt="" />
      </div>
      <div className="homepage container" id="home">
        <div className="homepage_text">
          <div>
            <h1 className="text">
              <span>{t("home_page_text.main_text")}</span> <br />
              {t("home_page_text.main_text_br")}
            </h1>
            <div className="adv_text">
              <p>{t("home_page_text.btn_text")}</p>
            </div>
          </div>
          <div className="adv_exp">
            <img src={medal} alt="" className="medal_img" />
            <p>{t("home_page_text.age_medal")}</p>
          </div>
        </div>
        <CircularText
          icon={<BsArrowDown />}
          text={"листавйте вниз * листавйте вниз *"}
        />
      </div>
    </>
  );
};

export default HomePage;
