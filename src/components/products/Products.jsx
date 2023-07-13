import React, { useEffect, useState } from "react";
import "./products.scss";
import backImg from "../../assets/5 page/background.png";
import { products } from "../../assets/data";
import "./title.scss";
import Category_text from "../about_line_text/About_us_text";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  const [slides, setSlides] = useState(4);
  const [isCenter, setIsCenter] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="products_background_img">
        {/* <img src={backImg} alt="" /> */}
      </div>
      <div className="products_page" id="products">
        <div className="products_text_line container">
          <div className="rotated_text_btn">
            <span>Брикеты</span>
          </div>
          <div className="line"></div>
        </div>

        <div className="products_container">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              901: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1201: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
              1600: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            slidesPerView={4.3}
            centeredSlides={false}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <div className="overflow_hidden_products">
              {products?.map((card, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="card">
                      <img src={card.img} alt="" id="img" />
                      <div className="product_info">
                        <div className="product_name">
                          <h2>{card.name}</h2>
                          <h2>{card.weight}</h2>
                        </div>
                        <div className="full_info">
                          <div className="p_i_left">
                            <p>производство:</p>
                            <p>время горения:</p>
                            <p>мин. объем заказа:</p>
                            <p>используется для:</p>
                          </div>
                          <div className="p_i_right">
                            <p>{card.location}</p>
                            <p>{card.time}</p>
                            <p>{card.min_order}</p>
                            <p>{card.used_for}</p>
                          </div>
                        </div>
                        <button className="price_btn">{card.price}</button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
