import React from "react";
import * as FormControl from "../../components/Fields";
import { ELangs, ILangs } from "../../interfaces/lang";
import { IMovieInfo } from "../../models/MovieSchedule";
import { ISeat } from "../../models/Seat";
import Button from "../../components/Button";
import moment from "moment";

interface RBookInfoProps {
  lang: string;
  langs: ILangs;
  movieInfo: IMovieInfo;
  listBookedSeat: ISeat[];
  stepTwo: boolean;
  open: boolean;
  onBookTicket: () => void;
  setStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RBookInfo: React.FunctionComponent<RBookInfoProps> = (props) => {
  const {
    lang,
    langs,
    movieInfo,
    listBookedSeat,
    stepTwo,
    open,
    setStepTwo,
    setOpen,
    onBookTicket,
  } = props;

  const renderTotal = () => {
    return listBookedSeat.reduce((total, seat) => {
      return (total += seat.price || 0);
    }, 0);
  };

  const renderMovieName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return movieInfo.movieNameENG;
      }
      case ELangs.VN: {
        return movieInfo.movieNameVN;
      }
      case ELangs.CH: {
        return movieInfo.movieNameCH;
      }
    }
  };

  const renderBookedSeat = () => {
    return listBookedSeat.map((i) => {
      return (
        <React.Fragment key={i.id}>
          {i.lineName} - {i.name},{" "}
        </React.Fragment>
      );
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepTwo(true);
  };

  return (
    <div className={`responsive__book-info ${open ? "responsive__book-info--active" : ""}`}>
      <div className="book-info__close">
        <div className="close__btn" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
      </div>

      {/* Price */}
      <div className="book-info__price">
        <p>{renderTotal().toLocaleString()} VND</p>
      </div>

      {/* Schedule Info */}
      <ul className="book-info__content">
        <li className="content__item">
          <p>{langs?.movie.bookTicket.bookInfo.movieName} : </p>
          <p>{renderMovieName()}</p>
        </li>
        <li className="content__item">
          <p>{langs?.movie.bookTicket.bookInfo.cinemaName} : </p>
          <p>{movieInfo.cinemaName}</p>
        </li>
        <li className="content__item">
          <p>{langs?.movie.bookTicket.bookInfo.address} : </p>
          <p>{movieInfo.address}</p>
        </li>
        <li className="content__item">
          <p>{langs?.movie.bookTicket.bookInfo.showTime} : </p>
          <p>
            {moment(movieInfo.schedule).format("DD/MM/YYYY HH:mm:A")} -{" "}
            {langs?.movie.bookTicket.bookInfo.theater} {movieInfo.theaterName}
          </p>
        </li>
      </ul>

      {/* Seats */}
      <div className="book-info__seat">
        <p>
          {langs?.movie.bookTicket.bookInfo.seat} :{" "}
          <span>{renderBookedSeat()}</span>
        </p>
      </div>

      {/* User info */}
      <div className="book-info__contact">
        <p className="contact__title">
          {langs?.movie.bookTicket.bookInfo.contact}
        </p>
        <FormControl.InputCustom placeholder=" " label={langs?.form.email} />
        <FormControl.InputCustom placeholder=" " label={langs?.form.phone} />
      </div>

      {/* Payment type */}
      <div className="book-info__payment">
        <p className="payment__title">
          {langs?.movie.bookTicket.bookInfo.payment}
        </p>

        {listBookedSeat.length === 0 ? (
          <p className="payment__instruct">
            {langs?.movie.bookTicket.bookInfo.instruct}
          </p>
        ) : (
          <div className="payment__type">
            <div className="type__group">
              <input
                id="cash"
                type="radio"
                className="group__radio"
                name="paymentType"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="cash" className="group__label">
                <img
                  className="label__icon"
                  src="/img/icon/cash.png"
                  alt="icon"
                />
                <p className="label__content">{langs?.paymentType.cash}</p>
              </label>
            </div>
            <div className="type__group">
              <input
                id="zalo"
                type="radio"
                className="group__radio"
                name="paymentType"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="zalo" className="group__label">
                <img
                  className="label__icon"
                  src="/img/icon/zalo.png"
                  alt="icon"
                />
                <p className="label__content">{langs?.paymentType.zalo}</p>
              </label>
            </div>
            <div className="type__group">
              <input
                id="vib"
                type="radio"
                className="group__radio"
                name="paymentType"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="vib" className="group__label">
                <img
                  className="label__icon"
                  src="/img/icon/vib.png"
                  alt="icon"
                />
                <p className="label__content">{langs?.paymentType.vib}</p>
              </label>
            </div>
          </div>
        )}

        <div className="payment__note">
          <p>{langs?.movie.bookTicket.bookInfo.note_1}</p>
          <p>{langs?.movie.bookTicket.bookInfo.note_2}</p>
        </div>
      </div>

      <div className="book-info__action">
        {!stepTwo ? (
          <Button className="button--disabled">
            {langs?.button.bookTicket}
          </Button>
        ) : (
          <Button className="button--submit" onClick={onBookTicket}>
            {langs?.button.bookTicket}
          </Button>
        )}
      </div>
    </div>
  );
};

export default RBookInfo;
