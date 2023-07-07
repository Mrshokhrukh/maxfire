import React, { useEffect } from "react";
import "./circular.scss";
const CircularText = ({ text, icon }) => {
  useEffect(() => {
    a();
  }, [text]);
  let a = () => {
    const text = document.querySelector(".circle_text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style='transform:rotate(${i * 6.4}deg)'>${char}</span>`
      )
      .join("");
  };

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
