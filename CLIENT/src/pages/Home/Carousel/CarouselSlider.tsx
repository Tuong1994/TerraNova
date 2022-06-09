import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Slider from "react-slick";
import utils from "../../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

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
            <p>{langs?.home.carousel.slideTitle_1}</p>
            <p>{langs?.home.carousel.slideContent_1}</p>
          </div>
          <div className="item__image">
            <img src="/img/product_img.jpg" alt="pc" />
          </div>
        </div>

        <div className="slider__item slider__item-two">
          <div className="item__wrapper">
            <p>{langs?.home.carousel.slideTitle_2}</p>
            <p>{langs?.home.carousel.slideContent_2}</p>
          </div>
        </div>

        <div className="slider__item slider__item-three">
          <div className="item__wrapper">
            <p>{langs?.home.carousel.slideTitle_3}</p>
            <p>{langs?.home.carousel.slideContent_3}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
