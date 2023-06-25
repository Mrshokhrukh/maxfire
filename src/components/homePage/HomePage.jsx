import React, { useEffect } from "react";
import "./homepage.scss";
import { BsArrowDown } from "react-icons/bs";
const HomePage = () => {
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
    <div className="homepage">
      <div className="homepage_text">
        <div>
          <h1>
            высококачественний <br /> древесный уголь
          </h1>
          <div className="adv_text">
            <p>Без дыма и запаха</p>
          </div>
        </div>

        <div className="adv_exp">
          <p>10+ лет в продаже</p>
        </div>
      </div>
      <div className="to_bottom_circled_text">
        <div className="to_bottom_icon">
          <BsArrowDown />
        </div>
        <div className="circle_text">
          <p>листавйте вниз * листавйте вниз * </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
