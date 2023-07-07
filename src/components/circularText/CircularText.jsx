import React, { useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import './circular.scss'
const CircularText = () => {
  useEffect(() => {
    const text = document.querySelector(".circle_text p");
    text.innerHTML = text.innerText
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
      onClick={() => (window.location.href = "#about")}
    >
      <div className="to_bottom_icon">
        <BsArrowDown />
      </div>
      <div className="circle_text">
        <p>листавйте вниз * листавйте вниз * </p>
      </div>
    </div>
  );
};

export default CircularText;
