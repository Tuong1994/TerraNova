import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Slider from "react-slick";
import Blob from "../../../components/Blob";
import utils from "../../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const settings = {
    // dots: true,
    // arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slider",
  };

  const slideArr = [
    {
      id: 1,
      title: langs?.home.carousel.slideTitle_1,
      content: langs?.home.carousel.content_1,
      link: "/product",
      src: "/img/carousel/pc.png",
    },
    {
      id: 2,
      title: langs?.home.carousel.slideTitle_2,
      content: langs?.home.carousel.content_2,
      link: "/course",
      src: "/img/carousel/course.png",
    },
    {
      id: 3,
      title: langs?.home.carousel.slideTitle_3,
      content: langs?.home.carousel.content_3,
      link: "/movie",
      src: "/img/carousel/movie.jpg",
    },
  ];

  return (
    <div className="carousel__slider">
      <Slider {...settings}>
        {slideArr.map((slide) => {
          return (
            <div className="slider__item slider__item-one" key={slide.id}>
              <div className="item__wrapper">
                <div className="wrapper__content">
                  <p className="content__text">{slide.title}</p>
                  <p className="content__text">{slide.content}</p>
                  <div className="content__action">
                    <Link to={slide.link} className="button--fill-white">
                      {langs?.button.seeMore}
                    </Link>
                    <Link smooth to="/#consult" className="button--fill-white">
                      {langs?.button.advise}
                    </Link>
                  </div>
                </div>
                <div className="wrapper__image">
                  <Blob
                    width="450px"
                    height="450px"
                    background="#fff"
                    className="image__blob"
                  />
                  <img className="image" src={slide.src} alt="image" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
