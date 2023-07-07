import React, { useEffect } from "react";
import "./homepage.scss";
import { BsArrowDown } from "react-icons/bs";
import medal from "../../assets/medal.png";
import CircularText from "../circularText/CircularText";

const HomePage = () => {
  return (
    <div className="homepage container" id="home">
      <div className="homepage_text">
        <div>
          <h1 className="text">
            высококачественний <br /> древесный уголь
          </h1>
          <div className="adv_text">
            <p>Без дыма и запаха</p>
          </div>
        </div>
        <div className="adv_exp">
          <img src={medal} alt="" className="medal_img" />
          <p>10+ лет в продаже</p>
        </div>
      </div>
      <CircularText icon={<BsArrowDown />} text={"листавйте вниз * листавйте вниз *"} />
    </div>
  );
};

export default HomePage;
