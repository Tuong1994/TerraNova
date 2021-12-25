import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider: React.FunctionComponent<{}> = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slider",
  };
  return (
    <div className="carousel__slider">
      <Slider {...settings}>
        <div className="slider__item slider__item-one">
          <div className="item__wrapper">
            <p>PC ACCESSORIES</p>
            <p>Build your own PC</p>
          </div>
        </div>

        <div className="slider__item slider__item-two">
          <div className="item__wrapper">
            <p>COURSE</p>
            <p>Gain knownledge for yourself</p>
          </div>
        </div>

        <div className="slider__item slider__item-three">
          <div className="item__wrapper">
            <p>MOVIES</p>
            <p>Enjoys with your family</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
