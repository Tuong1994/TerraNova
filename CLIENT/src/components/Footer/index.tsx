import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import Logo from "../Logo";
import utils from "../../utils";

const Footer: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const logoArr = [
    {
      id: 1,
      src: "/img/logo/gigabyte_logo.png",
    },
    {
      id: 2,
      src: "/img/logo/asus_logo.jpg",
    },
    {
      id: 3,
      src: "/img/logo/msi_logo.png",
    },
    {
      id: 4,
      src: "/img/logo/asrock_logo.jpg",
    },
    {
      id: 5,
      src: "/img/logo/kingston_logo.png",
    },
    {
      id: 6,
      src: "/img/logo/western_logo.png",
    },
    {
      id: 7,
      src: "/img/logo/lg_logo.jpg",
    },
    {
      id: 8,
      src: "/img/logo/viewsonic_logo.png",
    },
  ];

  const policyArr = [
    {
      id: 1,
      title: langs?.footer.policy.warranty,
      link: "/",
    },
    {
      id: 2,
      title: langs?.footer.policy.reward,
      link: "/",
    },
  ];

  const categoryArr = [
    {
      id: 1,
      title: langs?.footer.categories.product,
      link: "/product",
    },
    {
      id: 2,
      title: langs?.footer.categories.course,
      link: "/course",
    },
    {
      id: 3,
      title: langs?.footer.categories.movie,
      link: "/movie",
    },
    {
      id: 4,
      title: langs?.footer.categories.aboutUs,
      link: "/abouUs",
    },
  ];

  return (
    <div className="footer">
      <div className="footer__info">
        <Logo className="info__logo" />

        <div className="info__item info__partners">
          <h4 className="item__title">{langs?.footer.partners}</h4>
          <div className="item__list">
            {logoArr.map((l) => {
              return (
                <img key={l.id} className="list__logo" src={l.src} alt="logo" />
              );
            })}
          </div>
        </div>

        <div className="info__group">
          <div className="group__item group__policy">
            <h4 className="item__title">{langs?.footer.policy.title}</h4>
            <div className="item__list">
              {policyArr.map((p) => {
                return (
                  <Link to={p.link} key={p.id} className="list__link">
                    {p.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="group__item group__category">
            <h4 className="item__title">{langs?.footer.categories.title}</h4>
            <div className="item__list">
              {categoryArr.map((m) => {
                return (
                  <Link to={m.link} key={m.id} className="list__link">
                    {m.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="info__item info__socials">
          <h4 className="item__title">{langs?.footer.socials}</h4>
          <div className="item__list">
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
