import React from "react";
import { IMovie } from "../../../../models/Movie";
import { ILangs } from "../../../../interfaces/lang";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PlayButton from "../../../../components/PlayButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MovieCarouselProps {
  lang: string;
  langs: ILangs;
  movies: IMovie[];
}

const MovieCarousel: React.FunctionComponent<MovieCarouselProps> = (props) => {
  const { movies, langs } = props;

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
        {movies.slice(3, 6).map((m: any) => {
          return (
            <div className="carousel__slide" key={m.id}>
              <img className="slide__bg" src={m.image || "/img/movie/doctor_strange_2.jpg"} alt={m.name} />

              <div className="slide__content">
                <div className="content__button">
                  <PlayButton payload={m.trailer} className="button__play" />
                </div>

                <div className="content__detail">
                  <h1 className="detail__title">{m.nameENG}</h1>
                  <Link to={`/movieDetail/${m.id}`} className="button--submit detail__button">
                    {langs?.button.bookTicket}
                  </Link>
                  <p className="detail__text">
                    {langs?.movie.home.carousel.content} : {m.descENG}
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
