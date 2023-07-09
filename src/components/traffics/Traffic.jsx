import React from "react";
import "./traffic.scss";
import circle from "../../assets/7 page/ellips.png";
import backImg2 from "../../assets/7 page/background.png";
const Traffic = () => {
  return (
    <div className="traffic_page">
      <div className="track_background_img">
        <img src={backImg2} alt="" />
      </div>

      <div className="main_about_right container">
        <div className="traffic_page_info">
          <div className="main_texts">
            <div className="wrapp">
              <h1>Услуга</h1>
              <img src={circle} alt="" />
            </div>
            <p>доставки по узбекистану</p>
          </div>
          <div className="grant_info">
            <p>Доставим ваш заказ в течени 1-10 дней в зависимости от объема</p>
          </div>

          <div className="btn_big_box">
            При заказа от 100 шт доставка за наш счет.
          </div>

          <div className="last_location_text">
            <p>Также вы можете сделать самовывоз с нашего завода в Ташкенте.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
