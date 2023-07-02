import React from "react";
import "./about.scss";
import line from '../../assets/Untitled-2.png'
const About = () => {
  return (
    <div id="about" className="about container">
     <img src={line} alt="" />
        {/* <div className="rotated_text_btn">
            <p>О Нас</p>
        </div>
        <div className="line"></div> */}
    </div>
  );
};

export default About;
