import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import phone from "../../assets/последние/phone icon.png";
import ins from "../../assets/последние/instagram.png";
import tg from "../../assets/последние/telegram.png";
import fac from "../../assets/последние/facebook.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="footer" id="contact">
      <div className="footer_form">
        <div className="address_footer container">
          <div className="address_info">
            <p className="address_info_title">{t('footer.loc')}</p>
            <div className="infos">
              <span>{t('footer.city')},</span>
              <span>{t('footer.target')},</span>
              <span>{t('footer.home')}</span>
            </div>
            <div className="work_time">
              <p>{t('footer.work_time')}</p>
            </div>
          </div>
          <div className="form_space">
            <form>
              <div className="formDiv one">
                <label htmlFor="name">{t('footer.form_name')}:</label>
                <input type="text" />
              </div>
              <div className="formDiv two">
                <label htmlFor="phone">{t('footer.form_email')}:</label>
                <input type="text" />
              </div>
              <button className="form_btn">{t('footer.record')}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="phone_social_footer container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="phoneNumber">
          <a href="tel:+998 97 775 75 01">
            <div className="phone_icon">
              <img src={phone} alt="" />
            </div>

            <div className="number">
              <span>{t('footer.call')}:</span>

              <p>+998 97 775 75 01</p>
            </div>
          </a>
        </div>
        <div className="socialMedia">
          <p>{t('footer.media_text')}</p>
          <div className="social_icons">
            <div className="social_icon">
              <a href="https://instagram.com/maxfire.uz?igshid=MzRlODBiNWFlZA==">
                <img src={ins} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a href="https://t.me/maxfireuz">
                <img src={tg} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a href="https://www.youtube.com/channel/UCRIsBKCeGp4We6AXktB5ISQ">
                <img src={fac} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
