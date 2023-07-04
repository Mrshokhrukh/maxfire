import React from "react";
import "./about.scss";
import line from "../../assets/Untitled-2.png";
import yu from "../../assets/youtube.com.png";
import video1 from "../../assets/8 page/background/571699_Grill_Meat_Barbecue_3840x2160.mp4";
import backImg from "../../assets/3 page/background.png";
const About = () => {
  return (
    <div>
      <div className="about_back_img">
        <img src={backImg} alt="" />
      </div>
      <div id="about" className="about container">
        <img src={line} alt=""  className="line_img"/>
        {/* <div className="rotated_text_btn">
            <p>О Нас</p>
        </div>
        <div className="line"></div> */}

        <div className="about_text">
          <p>
            Max fire - Производим уголь с 2014 года. Общая производительность
            наших печей составляет более 200 тонн древесного угля в месяц.
          </p>
          <p>
            Наша компания зарекомендовала себя как надежный производитель
            качественного древесного угля! Мы строго контролируем все
            производственные процессы: начиная от выбора и заготовки древесины и
            заканчивая контролем качества фасовки и своевременной доставки.
          </p>
        </div>

        <div className="about_youtube_video">
          <div className="youtube_icon">
            <a href="https://www.youtube.com" target="_blank">
              <img src={yu} alt="404" />
            </a>
          </div>
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
