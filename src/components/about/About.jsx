import React from "react";
import "./about.scss";
import line from "../../assets/Untitled-2.png";
import yu from "../../assets/youtube.com.png";
import video1 from "../../assets/8 page/background/571699_Grill_Meat_Barbecue_3840x2160.mp4";
import backImg from "../../assets/3 page/background.png";
import CircularText from "../circularText/CircularText";
// import plan from "../../assets/play-button (1).png";
import { IoPlayOutline } from "react-icons/io5";
import Category_text from "../about_line_text/About_us_text";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="about_back_img_about">
        <img src={backImg} alt="" />
      </div>
      <div id="about" className="about container"   data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        {/* <img src={line} alt="" className="line_img" /> */}

        <Category_text text={`${t("third_page.about_text")}`} />

        <div className="about_text">
          <p>{t("third_page.desc")}</p>
        </div>

        <div
          className="about_youtube_video"
          onClick={() =>
            (window.location.href = "https://youtu.be/0UKTXivgZ0U")
          }
        >
          <div className="youtube_icon">
            <a href="https://youtu.be/0UKTXivgZ0U" target="_blank">
              <img src={yu} alt="404" />
            </a>
          </div>
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>

          <div className="play_btn_icon">
            <CircularText
              icon={<IoPlayOutline />}
              text={"листавйте вниз * листавйте вниз *"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
