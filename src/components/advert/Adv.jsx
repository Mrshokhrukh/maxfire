import React from "react";
import "./adv.scss";

import img from "../../assets/background.png";
import InfoBox from "../info_box/InfoBox";
const Adv = () => {
  return (
    <>
      <div className="adv_back">
        <div className="adv_back_img">
          <img src={img} alt="" />
        </div>
        <div className="adv container">
          <InfoBox />
        </div>
      </div>
    </>
  );
};

export default Adv;
