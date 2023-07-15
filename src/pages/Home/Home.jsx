import React from "react";
import HomePage from "../../components/homePage/HomePage";
import Adv from "../../components/advert/Adv";
import About from "../../components/about/About";

import Info from "../../components/info/Info";
import Products from "../../components/products/Products";
import Buy from "../../components/buy/Buy";
import Traffic from "../../components/traffics/Traffic";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import './Home.scss'
import ClientsPage from "../../components/clientsPage/ClientsPage";
const Home = () => {
  return (
    <>
     
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
