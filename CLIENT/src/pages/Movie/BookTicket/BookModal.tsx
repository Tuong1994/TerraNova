import React from "react";
import * as Modal from "../../../components/Modal";
import * as Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { ILangs } from "../../../interfaces/lang";
import { IMovieInfo } from "../../../models/MovieSchedule";
import { ISeat } from "../../../models/Seat";
import { ITicket } from "../../../models/Ticket";
import { EPaymentTypes } from "../../../models/Order";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import moment from "moment";

interface BookModalProps {
  langs: ILangs;
  movieInfo: IMovieInfo;
  ticket: ITicket;
  renderMovieName: () => React.ReactNode;
  renderBookedSeat: () => React.ReactNode;
}

const BookModal: React.FunctionComponent<BookModalProps> = (props) => {
  const {
    langs,
    movieInfo,
    ticket,
    renderMovieName,
    renderBookedSeat,
  } = props;

  const { isBookingTicket } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_BOOKING_TICKET_MODAL,
    });
  };

  const renderPaymentType = () => {
    switch (ticket.paymentType) {
      case EPaymentTypes.cash: {
        return langs?.paymentType.cash;
      }
      case EPaymentTypes.zalo: {
        return langs?.paymentType.zalo;
      }
      case EPaymentTypes.vib: {
        return langs?.paymentType.vib;
      }
    }
  };

  return (
    <Modal.Wrapper
      isShowing={isBookingTicket}
      onHide={handleHideModal}
      className="book-modal"
    >
      <Modal.Header
        title={langs?.movie.bookTicket.modal.title}
        onHide={handleHideModal}
      />
      <Modal.Body className="book-modal__body">
        {/* Info */}
        <Card.Wrapper className="body__card">
          <h3 className="card__title">
            {langs?.movie.bookTicket.modal.subTitle_1}
          </h3>
          <ul className="card__content">
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
                {langs?.movie.bookTicket.bookInfo.theater}{" "}
                {movieInfo.theaterName}
              </p>
            </li>
          </ul>
        </Card.Wrapper>

        {/* Contact */}
        <Card.Wrapper className="body__card">
          <h3 className="card__title">
            {langs?.movie.bookTicket.modal.subTitle_2}
          </h3>
          <ul className="card__content">
            <li className="content__item">
              <p>{langs?.form.email} : </p>
              <p>{ticket?.contact?.email}</p>
            </li>
            <li className="content__item">
              <p>{langs?.form.phone} : </p>
              <p>{ticket?.contact?.phone}</p>
            </li>
          </ul>
        </Card.Wrapper>

        {/* Seats */}
        <Card.Wrapper className="body__card">
          <div className="card__seat">
            <p>
              {langs?.movie.bookTicket.bookInfo.seat} :{" "}
              <span>{renderBookedSeat()}</span>
            </p>
          </div>
        </Card.Wrapper>

        {/* Payment type */}
        <Card.Wrapper className="body__card">
          <div className="card__payment">
            <p>{langs?.movie.bookTicket.bookInfo.payment} : </p>
            <p>{renderPaymentType()}</p>
          </div>
        </Card.Wrapper>
      </Modal.Body>

      <Modal.Footer className="book-modal__footer">
        <div className="footer__note">
          <p>{langs?.movie.bookTicket.modal.regards}</p>
          <p>{langs?.movie.bookTicket.bookInfo.note_1}</p>
        </div>
        <div className="footer__action">
          <Button
            className="button--add action__item"
            onClick={() => {
              window.location.reload();
              setTimeout(() => {
                handleHideModal();
              }, 500);
            }}
          >
            {langs?.movie.bookTicket.modal.continue}
          </Button>
          <Link to="/movie" className="button--delete action__item">
            {langs?.movie.bookTicket.modal.return}
          </Link>
        </div>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default BookModal;
