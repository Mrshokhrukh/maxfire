import React from "react";
import "./InfoBoxTwo.scss";
import blured from "../../assets/shape.png";
import { BsArrowRight } from "react-icons/bs";
const InfoBoxTwo = () => {
  return (
    <div className="desc_infogram">
      <img src={blured} alt="" className="infogram_back_blur_img" />

      <h1>
        <span className="starter_text">Стартер </span> - для розжига угля
      </h1>
      <div className="infogram_text">
        <p>
          <BsArrowRight /> изготовлен из качественного металла толщиной 0,5 мм
        </p>
        <p>
          <BsArrowRight /> стильная и удобная ручка из дуба не порежет пальцы
        </p>
        <p>
          <BsArrowRight /> диаметр стартера 18 см, высота 30 см
        </p>
        <p>
          <BsArrowRight /> идеальный объем для 2 кг брикета
        </p>
      </div>
    </div>
  );
};

export default InfoBoxTwo;
