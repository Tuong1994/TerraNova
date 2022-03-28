import React from "react";
import CarouselForm from "./CarouselForm";
import CarouselSlider from "./CarouselSlider";

const Carousel: React.FunctionComponent<{}> = (props) => {
  return <div className="home__carousel">
      <CarouselForm />
      <CarouselSlider />
  </div>;
};

export default Carousel;
