import React from "react";
import "./chooseUs.scss";
import video from "../../assets/8 page/background/571699_Grill_Meat_Barbecue_3840x2160.mp4";
import grImg from "../../assets/8 page/free-icon-guarantee-3832075.png";
import lorryImg from "../../assets/8 page/free-icon-lorry-605863.png";
import delImg from "../../assets/8 page/free-icon-possibility-5430059.png";
import shape from "../../assets/8 page/shape.png";

const ChooseUs = () => {
  return (
    <div className="page_8_choose_us">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="our_priorities_page container">
        <div className="our_priorities_page_text">

          <p>почему выбирают нас ?</p>
        </div>

        <div className="eighth_page_info_boxes">
          <div className="box_guarent">
            <div className="img_round">

            <img src={grImg} alt="" />
            </div>
            <div className="title_text">
              <p>Гарантия</p>
            </div>
            <div className="title_description">
              <p>
                Качество брикетов для нас на первом месте, брекеты производятся
                в России, брекеты не имеют неприятного запаха
              </p>
            </div>
          </div>
          <div className="box_lorry">
            <div className="img_round">

            <img src={lorryImg} alt="" />
            </div>
            <div className="title_text">
              <p>Доставка</p>
            </div>
            <div className="title_description">
              <p>
                мы сами организуем быструю и самую выгодную доставку брикетов в
                ваш адрес
              </p>
            </div>
          </div>
          <div className="box_possibilities">
            <div className="img_round">

            <img src={delImg} alt="" />
            </div>

            <div className="title_text">
              <p>Возможности</p>
            </div>
            <div className="title_description">
              <p>
                предоставляем возможность рассрочки и отсрочки постоянным
                клиентам
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
