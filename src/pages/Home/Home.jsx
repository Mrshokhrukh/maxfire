import React from "react";
import HomePage from "../../components/homePage/HomePage";
import Adv from "../../components/advert/Adv";
import About from "../../components/about/About";
import pageOne from "../../assets/1 page+picture.png";
import Info from "../../components/info/Info";
import Products from "../../components/products/Products";
import Buy from "../../components/buy/Buy";
import Traffic from "../../components/traffics/Traffic";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import ClientsPage from "../../components/clientsPage/ClientsPage";
const Home = () => {
  return (
    <>
      <div className="background_img">
        <img src={pageOne} alt="" />
      </div>
      <div className="home">
        <HomePage />
        <Adv />
        <About />
        <Info />
        <Products />
        <Buy />
        <Traffic />
        <ChooseUs />
        <ClientsPage />
      </div>
    </>
  );
};

export default Home;
