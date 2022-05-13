import React from "react";
import CarouselSlider from "./CarouselSlider";

const Carousel: React.FunctionComponent<{}> = (props) => {
  return <div className="home__carousel">
      <CarouselSlider />
  </div>;
};

export default Carousel;
