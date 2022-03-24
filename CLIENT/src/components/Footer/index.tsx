import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="footer">
      <div className="footer__info">
        <Logo className="info__logo" />

        <div className="info__partners">
          <h4 className="partners__title">Partners</h4>
          <div className="partners__list">
            <img
              className="list__logo"
              src="../img/gigabyte_logo.png"
              alt="gigabyte"
            />
            <img className="list__logo" src="../img/asus_logo.jpg" alt="asus" />
            <img className="list__logo" src="../img/msi_logo.png" alt="msi" />
            <img
              className="list__logo"
              src="../img/asrock_logo.jpg"
              alt="asrock"
            />
            <img
              className="list__logo"
              src="../img/kingston_logo.png"
              alt="kingston"
            />
            <img
              className="list__logo"
              src="../img/western_logo.png"
              alt="western"
            />
            <img className="list__logo" src="../img/lg_logo.jpg" alt="lg" />
            <img
              className="list__logo"
              src="../img/viewsonic_logo.png"
              alt="viewsonic"
            />
          </div>
        </div>

        <div className="info__socials">
          <h4 className="socials__title">Socials</h4>
          <div className="socials__list">
            <Link to="/" className="list__logo">
              <i className="fab fa-apple"></i>
            </Link>
            <Link to="/" className="list__logo">
              <i className="fab fa-android"></i>
            </Link>
            <Link to="/" className="list__logo">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="list__logo">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__address">
        <h4 className="address__name">TERRA NOVA TRADING COMPANY</h4>
        <ul className="address__info">
          <li className="info__list">
            Branches 1: 102 Nguyen Dinh Chinh Str, Ward 15, District Phu Nhuan,
            HCMC
          </li>
          <li className="info__list">
            Branches 2: 12B Nguyen Huu Canh Str, Ward 19, District Binh Thanh
            HCMC
          </li>
          <li className="info__list">Tel: 028 3975 3100 - Email: terra_nova@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
