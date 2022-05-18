import React from "react";
import { ILangs } from "../../interfaces/lang";
import { ICinema } from "../../models/Cinema";
import Movie from "./Movie";

interface CinemaProps {
  lang: string;
  langs: ILangs;
  cinema: ICinema;
}

const Cinema: React.FunctionComponent<CinemaProps> = (props) => {
  const { lang, langs, cinema } = props;

  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className="content__cinema">
      <div
        className={`cinema__title ${active && "cinema__title--active"}`}
        onClick={() => setActive(!active)}
      >
        <img src="/img/cinema.png" alt={cinema.name} className="title__image" />
        <div className="title__detail">
          <p>{cinema.name}</p>
          <p>{cinema.address}</p>
        </div>
      </div>

      <div className={`cinema__content ${active && "cinema__content--active"}`}>
        {cinema?.movieList?.slice(0, 10).map((movie) => {
          return (
            <Movie key={movie.id} lang={lang} langs={langs} movie={movie} />
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
