import React from "react";
import "./InfoBoxTwo.scss";
import blured from "../../assets/shape.png";
import { BsArrowRight } from "react-icons/bs";
import right from "../../assets/down-arrow.png";
const InfoBoxTwo = () => {
  return (
    <div className="desc_infogram">
      <div className="infogram_back_blur_img" >
        <img src={blured} alt="" />
      </div>
      <h1>
        <span className="starter_text">Стартер </span> - для розжига угля
      </h1>
      <div className="infogram_text">
        <p>
          <img src={right} alt="" className="right_arrow_img" /> изготовлен из
          качественного металла толщиной 0,5 мм
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> стильная и
          удобная ручка из дуба не порежет пальцы
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> диаметр
          стартера 18 см, высота 30 см
        </p>
        <p>
          <img src={right} alt="" className="right_arrow_img" /> идеальный объем
          для 2 кг брикета
        </p>
      </div>
    </div>
  );
};

export default InfoBoxTwo;
