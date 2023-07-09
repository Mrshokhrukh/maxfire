import React from "react";
import "./buy.scss";
import backImg from "../../assets/6 page/background.png";
import karzinka from "../../assets/6 page/korzinka logo.png";
import havas from "../../assets/6 page/havas.png";
import makro from "../../assets/6 page/makro logo.png";
const Buy = () => {
  return (
    <div>
      <div className="buy_background_img">
        <img src={backImg} alt="" />
      </div>

      <div className="container buy_page">
        <div className="buy_text_line">
          <div className="rotated_text_btn">
            <p>купить</p>
          </div>
          <div className="line"></div>
        </div>

        <div className="buy_page_main">
          <div className="buy_page_main_left">
            <p className="text">в сетях магазинов:</p>
            <div className="brands">
              <div>
                <img src={karzinka} alt="" />
              </div>
              <div>
                <img src={havas} alt="" />
              </div>
              <div>
                <img src={makro} alt="" />
              </div>
            </div>
          </div>
          <div className="buy_page_main_right">
            <p>
              Кроме этого можете <br />
              приобрести в больших <br />
              и маленьких <br />
              мясных магазинах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
