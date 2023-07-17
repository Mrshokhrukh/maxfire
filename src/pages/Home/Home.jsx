import React, { useEffect } from "react";
import HomePage from "../../components/homePage/HomePage";
import Adv from "../../components/advert/Adv";
import About from "../../components/about/About";
import phoneIcon from "../../assets/последние/phone icon.png";
import Info from "../../components/info/Info";
import Products from "../../components/products/Products";
import Buy from "../../components/buy/Buy";
import Traffic from "../../components/traffics/Traffic";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import "./Home.scss";
import ClientsPage from "../../components/clientsPage/ClientsPage";
import Aos from "aos";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <a href="tel:+998 97 775 75 01">
        <div className="callPhone_icon">
          <img src={phoneIcon} alt="" />
        </div>
      </a>
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
