import React from "react";
import Carts from "../Carts";
import Translate from "../Translate";

interface HeaderFeaturesProps {
  movieId: string;
}

const HeaderFeatures: React.FunctionComponent<HeaderFeaturesProps> = (
  props
) => {
  const { movieId } = props;

  return (
    <div className="features__others">
      {document.location.pathname !== "/movie" &&
        document.location.pathname !== `/movieDetail/${movieId}` && (
          <Carts className="others__item" />
        )}
      <Translate className="others__item" childClass="item__inner" />
    </div>
  );
};

export default HeaderFeatures;
