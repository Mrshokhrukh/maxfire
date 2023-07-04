import React from "react";
import "./info.scss";
import back_photo from "../../assets/background.png";
import InfoBoxTwo from "../infoBoxTwo/InfoBoxTwo";
const Info = () => {
  return (
    <div className="info_page">
      <div className="info_back_img">
        <img src={back_photo} alt="" />
      </div>
      <div className="info container">
        <InfoBoxTwo />
      </div>
    </div>
  );
};

export default Info;
