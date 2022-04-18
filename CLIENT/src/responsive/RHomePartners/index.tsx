import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

interface RHomePartnersProps {}

const RHomePartners: React.FunctionComponent<RHomePartnersProps> = (props) => {
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
      desc: langs?.home.partners.asrockContent,
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

  return (
    <div className="home-partners__responsive">
      <h3 className="responsive__title">{langs?.home.partners.title}</h3>
      <div className="responsive__list">
        {cardData.map((card) => {
          return (
            <div key={card.id} className="list__item">
              <div className="item__inner">
                <img className="inner__img" src={card.imgSrc} alt={card.name} />
                <p className="inner__name">{card.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RHomePartners;
