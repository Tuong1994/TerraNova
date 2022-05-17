import React from "react";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { EVideoActionTypes } from "../../../../redux/actionTypes/VideoActionTypes";
import { IMovie } from "../../../../models/Movie";
import { ILangs } from "../../../../interfaces/lang";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MovieCarouselProps {
  lang: string;
  langs: ILangs;
  movies: IMovie[];
}

const MovieCarousel: React.FunctionComponent<MovieCarouselProps> = (props) => {
  const { movies, langs } = props;

  const dispatch = useDispatch();

  const slideArr = [
    {
      id: 1,
      name: "THE BATMAN",
      desc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis",
      bg: "/img/movie/the_batman.jpg",
      video: "https://www.youtube.com/embed/mqqft2x_Aa4",
    },
    {
      id: 2,
      name: "FANTASTIC BEAST: THE SECRETS OF DUMBLEDORE",
      desc: "The story of this third film revolves around Professor Albus Dumbledore (Jude Law) discovering that the powerful Dark Wizard Gellert Grindelwald (Mads Mikkelsen) is plotting to take control of the Wizarding World. Unable to stop Grindelwald's mighty army alone, Dumbledore places his trust in Paranormal Researcher Newt Scamander (Eddie Redmayne) and his teammates to carry out this dangerous mission. How long can Dumbledore stay out in a situation like that, hanging by a hair?",
      bg: "/img/movie/secret_of_dumbledore.jpg",
      video: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
      id: 3,
      name: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
      desc: "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
      bg: "/img/movie/doctor_strange_2.jpg",
      video: "https://www.youtube.com/embed/3xccmeAsy8g",
    },
  ];

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
    <div className="movie-home__carousel">
      <Slider {...settings}>
        {slideArr.map((slide: any) => {
          return (
            <div className="carousel__slide" key={slide.id}>
              <img className="slide__bg" src={slide.bg} alt={slide.name} />
              <div className="slide__content">
                <div className="content__button">
                  <div
                    className="button__play"
                    onClick={() => {
                      dispatch({
                        type: EVideoActionTypes.ADD_LINK,
                        payload: slide.video,
                      });
                      setTimeout(() => {
                        dispatch({
                          type: EModalActionTypes.OPEN_TRAILER_MODAL,
                        });
                      }, 300);
                    }}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
                <div className="content__detail">
                  <h1 className="detail__title">{slide.name}</h1>
                  <p className="detail__text">
                    {langs?.movie.home.carousel.content} : {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
