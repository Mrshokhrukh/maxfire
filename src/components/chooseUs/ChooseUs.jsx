import React from "react";
import "./chooseUs.scss";
import video from "../../assets/8 page/background/571699_Grill_Meat_Barbecue_3840x2160.mp4";

const ChooseUs = () => {
  return (
    <div className="page_8_choose_us">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="our_priorities_page container">
        <h1 className="our_priorities_page_text">почему выбирают нас ?</h1>
        <div className="eighth_page_info_boxes">
          <div className="box_grant"></div>
          <div className="box_delivery"></div>
          <div className="box_possibilities"></div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
