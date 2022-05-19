import React from "react";
import DataLoading from "../../components/Loading/DataLoading";
import { ILangs } from "../../interfaces/lang";
import { ICineplex } from "../../models/Cineplex";
import Cinema from "./Cinema";

interface CineplexProps {
  lang: string;
  langs: ILangs;
  index: number;
  tabActive: any;
  i: ICineplex;
  cineplex: ICineplex;
  setCineplexId: React.Dispatch<React.SetStateAction<string>>;
  setTabActive: React.Dispatch<React.SetStateAction<any>>;
}

const Cineplex: React.FunctionComponent<CineplexProps> = (props) => {
  const {
    i,
    index,
    lang,
    langs,
    cineplex,
    tabActive,
    setCineplexId,
    setTabActive,
  } = props;

  return (
    <div className="card__item">
      <div
        className="item__title"
        onClick={() => {
          setCineplexId(i.id || "");
          if (tabActive.active) {
            setTabActive({
              active: false,
              index: index,
            });
          } else {
            setTabActive({
              active: true,
              index: index,
            });
          }
        }}
      >
        <img className="title__logo" src={`/img/logo/${i.logo}`} alt={i.name} />
        <i
          className={`fa-solid fa-angle-down ${
            tabActive.active && tabActive.index === index && "fa--active"
          }`}
        ></i>
      </div>

      <div
        className={`item__content ${
          tabActive.active &&
          tabActive.index === index &&
          "item__content--active"
        }`}
      >
        <DataLoading />
        {cineplex?.cinemas?.map((cinema) => {
          return (
            <Cinema key={cinema.id} lang={lang} langs={langs} cinema={cinema} />
          );
        })}
      </div>
    </div>
  );
};

export default Cineplex;
