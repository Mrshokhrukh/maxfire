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

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth);

  //     if (window.innerWidth > 1300) {
  //       setSlides(4.3);
  //     }
  //     if (window.innerWidth < 1300) {
  //       setSlides(3.5);
  //     }
  //     if (window.innerWidth < 1100) {
  //       setSlides(3);
  //     }
  //     if (window.innerWidth < 900) {
  //       setSlides(2);
  //     }
  //     if (window.innerWidth < 768) {
  //       setSlides(1);
  //       setIsCenter(true);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       setWidth(window.innerWidth);
  //     });
  //   };
  // }, [window.innerWidth]);

  return (
    <>
      <div className="background_img">
        <img src={backImg} alt="" />
      </div>
      <div className="products_page" id="products">
        <div className="text_box_products_page">
          <div className="products_text_line">
            <div className="rotated_text_btn">
              <p>Брикеты</p>
            </div>
            <div className="line"></div>
          </div>
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
              868: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3.5,
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
            }}
            slidesPerView={4.3}
            centeredSlides={false}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
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
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
