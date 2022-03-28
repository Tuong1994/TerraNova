import React from "react";
import Card from "../../../components/Card/Card";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners: React.FunctionComponent = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const cardData = [
    {
      id: 1,
      name: "ASUS",
      imgSrc: "../img/logo/rog-strix_logo.jpg",
      desc: langs?.home.partners.asusContent,
    },
    {
      id: 2,
      name: "GIGABYTE",
      imgSrc: "../img/logo/aorus_logo.jpg",
      desc: langs?.home.partners.gigaContent,
    },
    {
      id: 3,
      name: "MSI",
      imgSrc: "../img/logo/msi-gaming_logo.jpg",
      desc: langs?.home.partners.msiContent,
    },
    {
      id: 4,
      name: "ASROCK",
      imgSrc: "../img/logo/phantom_logo.jpg",
      desc: langs?.home.partners.asrockContent
    },
    {
      id: 5,
      name: "KINGSTON",
      imgSrc: "../img/logo/hyperx_logo.jpg",
      desc: langs?.home.partners.kingstonContent,
    },
    {
      id: 6,
      name: "WESTERN",
      imgSrc: "../img/logo/wd_logo.jpg",
      desc: langs?.home.partners.westernContent,
    },
    {
      id: 7,
      name: "VIEWSONIC",
      imgSrc: "../img/logo/viewsonic-gaming_logo.jpg",
      desc: langs?.home.partners.viewContent,
    },
    {
      id: 8,
      name: "LG",
      imgSrc: "../img/logo/lg-gaming_logo.jpg",
      desc: langs?.home.partners.lgContent,
    },
    {
      id: 9,
      name: "SAMSUNG",
      imgSrc: "../img/logo/samsung-galaxy_logo.jpg",
      desc: langs?.home.partners.samsungContent,
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "partners__slider",
  };
  return (
    <div className="home__partners">
      <div className="partners__title">
        <h3>{langs?.home.partners.title}</h3>
      </div>
      <Slider {...settings}>
        <div className="slider__item">
          {cardData.slice(0, 3).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="slider__item">
          {cardData.slice(3, 6).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="slider__item">
          {cardData.slice(6, 9).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
