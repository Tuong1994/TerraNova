import React from "react";
import { ILangs } from "../../interfaces/lang";
import { ICineplex } from "../../models/Cineplex";
import Cinema from "./Cinema";

interface CineplexProps {
  lang: string;
  langs: ILangs;
  cineplex: ICineplex;
}

const Cineplex: React.FunctionComponent<CineplexProps> = (props) => {
  const { lang, langs, cineplex } = props;

  const [tabActive, setTabActive] = React.useState<boolean>(false);

  return (
    <div className="card__item">
      <div className="item__title" onClick={() => setTabActive(!tabActive)}>
        <img
          className="title__logo"
          src={`/img/logo/${cineplex.logo}`}
          alt={cineplex.name}
        />
        <i
          className={`fa-solid fa-angle-down ${tabActive && "fa--active"}`}
        ></i>
      </div>

      <div className={`item__content ${tabActive && "item__content--active"}`}>
        {cineplex?.cinemas?.slice(0, 5).map((cinema) => {
          return (
            <Cinema key={cinema.id} lang={lang} langs={langs} cinema={cinema} />
          );
        })}
      </div>
    </div>
  );
};

export default Cineplex;
