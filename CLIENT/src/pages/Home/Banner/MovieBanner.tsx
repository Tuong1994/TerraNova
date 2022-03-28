import React from "react";
import * as customHook from "../../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

const MovieBanner: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);

  const bannerRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHook.useReveal(bannerRef, setReveal);

  return (
    <div className="home__movie-banner" ref={bannerRef}>
      <div className="movie-banner__wrapper">
        <p
          className={
            reveal
              ? "wrapper__text wrapper__text-one wrapper__text--active"
              : "wrapper__text wrapper__text-one"
          }
        >
          {langs?.home.banner.title_3}
        </p>
        <p
          className={
            reveal
              ? "wrapper__text wrapper__text-two wrapper__text--active"
              : "wrapper__text wrapper__text-two"
          }
        >
          {langs?.home.banner.content_3}
        </p>
      </div>
    </div>
  );
};

export default MovieBanner;
