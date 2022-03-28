import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import Logo from "../Logo";
import utils from "../../utils";

const Footer: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="footer">
      <div className="footer__info">
        <Logo className="info__logo" />

        <div className="info__partners">
          <h4 className="partners__title">{langs?.footer.partners}</h4>
          <div className="partners__list">
            <img
              className="list__logo"
              src="../img/logo/gigabyte_logo.png"
              alt="gigabyte"
            />
            <img
              className="list__logo"
              src="../img/logo/asus_logo.jpg"
              alt="asus"
            />
            <img
              className="list__logo"
              src="../img/logo/msi_logo.png"
              alt="msi"
            />
            <img
              className="list__logo"
              src="../img/logo/asrock_logo.jpg"
              alt="asrock"
            />
            <img
              className="list__logo"
              src="../img/logo/kingston_logo.png"
              alt="kingston"
            />
            <img
              className="list__logo"
              src="../img/logo/western_logo.png"
              alt="western"
            />
            <img
              className="list__logo"
              src="../img/logo/lg_logo.jpg"
              alt="lg"
            />
            <img
              className="list__logo"
              src="../img/logo/viewsonic_logo.png"
              alt="viewsonic"
            />
          </div>
        </div>

        <div className="info__socials">
          <h4 className="socials__title">{langs?.footer.socials}</h4>
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
        <h4 className="address__name">{langs?.footer.company}</h4>
        <ul className="address__info">
          <li className="info__list">{langs?.footer.address_1}</li>
          <li className="info__list">{langs?.footer.address_2}</li>
          <li className="info__list">
            Tel: 028 3975 3100 - Email: terra_nova@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
