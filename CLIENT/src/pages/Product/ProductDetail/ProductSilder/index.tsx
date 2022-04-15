import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const ProductSlider: React.FunctionComponent<{}> = (props) => {
  const imageList = [
    {
      id: 1,
      src: "../img/logo/aorus_logo.jpg",
    },
    {
      id: 2,
      src: "../img/logo/rog-strix_logo.jpg",
    },
    {
      id: 3,
      src: "../img/logo/phantom_logo.jpg",
    },
  ];
  const setting = {
    thumbnailHeight: "20%",
    hasThumbnailsAtMax: false,
    canAutoPlay: true,
    isAutoPlaying: true,
    autoPlayInterval: 2000,
    leftIcon: false,
    rightIcon: false,
    playIcon: false,
    pauseIcon: false,
    maxIcon: false,
    hasIndexBoard: false,
  };
  return (
    <div className="content__slider">
      <Carousel images={imageList} className="slider__wrapper" {...setting} />
    </div>
  );
};

export default ProductSlider;
