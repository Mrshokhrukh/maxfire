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
import { useTranslation } from "react-i18next";

const Products = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="products_background_img">
        {/* <img src={backImg} alt="" /> */}
      </div>
      <div className="products_page" id="products">
        <div className="products_text_line container">
          <div className="rotated_text_btn">
            <span>{t("fives_page.main_text")}</span>
          </div>
          <div className="line"></div>
        </div>

        <div className="swiper-container">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: false,
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
                spaceBetween: 40,
              },
              1600: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            slidesPerView={4.3}
            centeredSlides={true}
            spaceBetween={50}
            navigation={true}
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
                <SwiperSlide key={i} className="carousel-slide">
                  <div className="card">
                    <img src={card.img} alt="" id="img" />
                    <div className="product_info">
                      <div className="product_name">
                        <h2>{card.name}</h2>
                        <h2>{card.weight}</h2>
                      </div>
                      <div className="full_info">
                        <div className="p_i_left">
                          <p>{t("fives_page.product_info_1")}:</p>
                          <p>{t("fives_page.product_info_2")}:</p>
                          <p>{t("fives_page.product_info_3")}:</p>
                          <p>{t("fives_page.product_info_4")}:</p>
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
