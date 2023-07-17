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
import { useTranslation } from "react-i18next";
const ClientsPage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="clientPage container">
      <div className="clients_text_line">
        <div className="rotated_text_btn">
          <span>{t("night_page.main_text")}</span>
        </div>
        <div className="line"></div>
      </div>

      <div
        className="about_cmpanies"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="text_about_clients">
          <p>{t("night_page.info")}</p>
        </div>

        <div className="companies_collabs">
          <a href="https://www.instagram.com/korzinkauz/" target="_blank">
            <img src={kar} alt="" />
          </a>
          <a
            href="https://www.instagram.com/makro_supermarket/"
            target="_blank"
          >
            <img src={mac} alt="" />
          </a>
          <a
            href="https://www.instagram.com/carrefouruzbekistan/"
            target="_blank"
          >
            <img src={carr} alt="" />
          </a>

          <a
            href="https://www.instagram.com/marinno_shashlik_market/"
            target="_blank"
          >
            <img src={mar} alt="" />
          </a>
          <a
            href="https://www.instagram.com/shashlik_marinad.uz/"
            target="_blank"
          >
            <img src={shash} alt="" />
          </a>
          <a
            href="https://www.instagram.com/makon_supermarket/"
            target="_blank"
          >
            <img src={makon} alt="" />
          </a>

          <a href="https://www.instagram.com/safia_uz/" target="_blank">
            <img src={saf} alt="" />
          </a>

          <a
            href="https://www.instagram.com/svetofor_taraz_alfarabi/"
            target="_blank"
          >
            <img src={svet} alt="" />
          </a>

          <a href="https://www.instagram.com/emin.marinad/" target="_blank">
            <img src={emin} alt="" />
          </a>

          <a href="https://www.instagram.com/gosht.uz/" target="_blank">
            <img src={gosh} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
