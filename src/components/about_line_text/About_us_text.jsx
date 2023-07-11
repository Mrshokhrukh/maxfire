import React, { useEffect } from "react";
import "./ab_line_text.scss";
const Category_text = ({ text }) => {
  return (
    <div className="about_us_text_line">
      <div className="rotated_text_btn">
        <span>{text}</span>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Category_text;
