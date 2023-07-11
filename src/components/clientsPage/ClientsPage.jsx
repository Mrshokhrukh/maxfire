import React from "react";
import "./clientsPage.scss";
import svet from "../../assets/последние/svetofor logo.png";
import mar from "../../assets/последние/marinno logo.png";
import shash from "../../assets/последние/shashlik marinad logo.png";
import mac from "../../assets/последние/makro logo.png";
import saf from "../../assets/последние/safia logo.png";
import emin from "../../assets/последние/emin.png";
import carr from "../../assets/последние/carrefour logo.png";
import gosh from "../../assets/последние/gosht logo.png";
import kar from "../../assets/последние/korzinka log.png";
import makon from "../../assets/последние/makon logo.png";
const ClientsPage = () => {
  return (
    <div className="clientPage container">
      <div className="clients_text_line">
        <div className="rotated_text_btn">
          <span>наши клиенты</span>
        </div>
        <div className="line"></div>
      </div>

      <div className="about_cmpanies">
        <div className="text_about_clients">
          <p>Работаем на постоянной основе с более 50 компаниями</p>
        </div>

        <div className="companies_collabs">
          <img src={svet} alt="" />
          <img src={mar} alt="" />
          <img src={shash} alt="" />
          <img src={mac} alt="" />
          <img src={saf} alt="" />
          <img src={emin} alt="" />
          <img src={carr} alt="" />
          <img src={gosh} alt="" />
          <img src={kar} alt="" />
          <img src={makon} alt="" />
        </div>

        
      </div>
    </div>
  );
};

export default ClientsPage;
