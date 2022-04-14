import React from "react";
import * as customHook from "../../hooks/index";

const Movie: React.FunctionComponent<{}> = (props) => {
  customHook.useLoading();
  return <div></div>;
};

export default Movie;
