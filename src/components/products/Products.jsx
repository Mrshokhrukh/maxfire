import React from "react";
import "./products.scss";
import backImg from "../../assets/5 page/background.png";
import Category_text from "../about_line_text/About_us_text";
const Products = () => {
  return (
    <>
      <div className="products_page_back_img">
        <img src={backImg} alt="" />
      </div>
      <div className="products_page container" id="products">
        <Category_text text={"Брикеты"} />

        <div className="products_container">

        </div>
      </div>
    </>
  );
};

export default Products;
