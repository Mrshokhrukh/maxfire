import React, { useEffect } from "react";
import "./circular.scss";
const CircularText = ({ text, icon }) => {
  useEffect(() => {
    const text = document.querySelectorAll(".circle_text p")[0];
    const text1 = document.querySelectorAll(".circle_text p")[1];
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style='transform:rotate(${i * 6.4}deg)'>${char}</span>`
      )
      .join("");
    text1.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style='transform:rotate(${i * 6.4}deg)'>${char}</span>`
      )
      .join("");
  }, []);


  return (
    <div
      className="to_bottom_circled_text"
      onClick={() => (window.location.href = "#contact")}
    >
      <div className="to_bottom_icon">{icon}</div>
      <div className="circle_text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CircularText;
