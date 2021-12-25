import React from "react";
import * as customHook from "../../../hooks/index";

const MovieBanner: React.FunctionComponent<{}> = (props) => {
  const [reveal, setReveal] = React.useState<boolean>(false);
  const bannerRef = React.useRef<any>(null);
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
          MOVIES
        </p>
        <p
          className={
            reveal
              ? "wrapper__text wrapper__text-two wrapper__text--active"
              : "wrapper__text wrapper__text-two"
          }
        >
          Enjoys with your family
        </p>
      </div>
    </div>
  );
};

export default MovieBanner;
