import React from "react";
import * as FormControl from "../../components/Fields";
import { ILangs } from "../../interfaces/lang";
import { IMovieInfo } from "../../models/MovieSchedule";
import { ISeat } from "../../models/Seat";
import Button from "../../components/Button";
import moment from "moment";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import { EPaymentTypes } from "../../models/Order";

interface RBookInfoProps {
  langs: ILangs;
  movieInfo: IMovieInfo;
  listBookedSeat: ISeat[];
  buttonLoading: boolean;
  stepTwo: boolean;
  open: boolean;
  renderMovieName: () => React.ReactNode;
  renderBookedSeat: () => React.ReactNode;
  renderTotal: () => React.ReactNode;
  onBookTicket: () => void;
  onChangeContract: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RBookInfo: React.FunctionComponent<RBookInfoProps> = (props) => {
  const {
    langs,
    movieInfo,
    listBookedSeat,
    buttonLoading,
    stepTwo,
    open,
    setOpen,
    renderMovieName,
    renderBookedSeat,
    renderTotal,
    onBookTicket,
    onChangeContract,
    onChangePayment,
  } = props;

  return (
    <div
      className={`responsive__book-info ${
        open ? "responsive__book-info--active" : ""
      }`}
    >
      <div className="book-info__close">
        <div className="close__btn" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
      </div>

      {/* Price */}
      <div className="book-info__price">
        <p>{renderTotal()?.toLocaleString()} VND</p>
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
        <FormControl.InputCustom
          name="email"
          placeholder=" "
          label={langs?.form.email}
          onChange={(e) => onChangeContract(e)}
        />
        <FormControl.InputCustom
          name="phone"
          placeholder=" "
          label={langs?.form.phone}
          onChange={(e) => onChangeContract(e)}
        />
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
                value={EPaymentTypes.cash}
                onChange={(e) => onChangePayment(e)}
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
                value={EPaymentTypes.zalo}
                onChange={(e) => onChangePayment(e)}
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
                value={EPaymentTypes.vib}
                onChange={(e) => onChangePayment(e)}
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
          <Button
            className={`button--submit ${
              buttonLoading ? "button--disabled" : ""
            }`}
            onClick={onBookTicket}
          >
            <ButtonLoading />
            <span>{langs?.button.bookTicket}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RBookInfo;
