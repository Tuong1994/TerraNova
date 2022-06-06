import React from "react";
import * as customHooks from "../../../hooks";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieScheduleDetail } from "../../../redux/actionCreators/MovieScheduleCreators";
import { IMovieInfo } from "../../../models/MovieSchedule";
import { ISeat } from "../../../models/Seat";
import { bookTicket } from "../../../redux/actionCreators/TicketCreators";
import { IContact } from "../../../models/Ticket";
import { ELangs } from "../../../interfaces/lang";
import { ACCESSTOKEN } from "../../../configs/setting";
import { history } from "../../../App";
import Step from "./Step";
import Theatre from "./Theatre";
import BookInfo from "./BookInfo";
import BookAction from "./BookAction";
import RBookInfo from "../../../responsive/RBookInfo";
import BookModal from "./BookModal";
import utils from "../../../utils";
import TimeOutModal from "./TimeOutModal";

const BookTicket: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const movieScheduleId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const { movieScheduleDetail } = useSelector(
    (state: ReducerState) => state.MovieScheduleReducer
  );
  const { listBookedSeat, ticket } = useSelector(
    (state: ReducerState) => state.TicketReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [stepOne, setStepOne] = React.useState<boolean>(false);
  const [stepTwo, setStepTwo] = React.useState<boolean>(false);
  const [stepThree, setStepThree] = React.useState<boolean>(false);
  const [openBookInfo, setOpenBookInfo] = React.useState<boolean>(false);
  const [movieInfo, setMovieInfo] = React.useState<IMovieInfo>({});
  const [seats, setSeats] = React.useState<ISeat[]>([]);
  const [paymentType, setPaymentType] = React.useState<number>(0);
  const [contact, setContact] = React.useState<IContact>({
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  React.useEffect(() => {
    const query: IQueryList = {
      movieScheduleId: movieScheduleId,
    };
    dispatch(getMovieScheduleDetail(query));
  }, []);

  React.useEffect(() => {
    if (movieScheduleDetail) {
      setMovieInfo(movieScheduleDetail?.movieInfo || {});
      setSeats(movieScheduleDetail?.seats || []);
    }
  }, [movieScheduleDetail]);

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

  const renderTotal = () => {
    return listBookedSeat.reduce((total, seat) => {
      return (total += seat.price || 0);
    }, 0);
  };

  const handleChangeContract = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPaymentType(value);
    setStepTwo(true);
  };

  const handleBookTicket = () => {
    const query: IQueryList = {
      movieScheduleId: movieScheduleId,
    };
    const data = {
      movieScheduleId: movieScheduleId,
      userId: user?.id,
      seats: listBookedSeat,
      contact: contact,
      paymentType: paymentType,
    };
    dispatch(
      bookTicket(
        data,
        query,
        langs?.toastMessages.success.bookingTicket,
        langs?.toastMessages.error.bookingTicket
      )
    );
    setStepThree(true);
  };

  if (!localStorage.getItem(ACCESSTOKEN)) {
    history.push("/signIn");
  }

  return (
    <div className="book-ticket">
      <Step
        langs={langs}
        stepOne={stepOne}
        stepTwo={stepTwo}
        stepThree={stepThree}
      />
      <div className="book-ticket__content">
        <Theatre
          langs={langs}
          movieInfo={movieInfo}
          seats={seats}
          listBookedSeat={listBookedSeat}
          setStepOne={setStepOne}
          setStepTwo={setStepTwo}
          setStepThree={setStepThree}
        />
        <BookAction
          langs={langs}
          listBookedSeat={listBookedSeat}
          setOpenBookInfo={setOpenBookInfo}
        />
        <BookInfo
          langs={langs}
          movieInfo={movieInfo}
          listBookedSeat={listBookedSeat}
          buttonLoading={buttonLoading}
          stepTwo={stepTwo}
          renderMovieName={renderMovieName}
          renderBookedSeat={renderBookedSeat}
          renderTotal={renderTotal}
          onBookTicket={handleBookTicket}
          onChangeContract={handleChangeContract}
          onChangePayment={handleChangePayment}
        />
        <RBookInfo
          langs={langs}
          movieInfo={movieInfo}
          listBookedSeat={listBookedSeat}
          buttonLoading={buttonLoading}
          stepTwo={stepTwo}
          open={openBookInfo}
          setOpen={setOpenBookInfo}
          renderMovieName={renderMovieName}
          renderBookedSeat={renderBookedSeat}
          renderTotal={renderTotal}
          onBookTicket={handleBookTicket}
          onChangeContract={handleChangeContract}
          onChangePayment={handleChangePayment}
        />
      </div>
      <BookModal
        langs={langs}
        movieInfo={movieInfo}
        ticket={ticket}
        renderMovieName={renderMovieName}
        renderBookedSeat={renderBookedSeat}
      />
      <TimeOutModal langs={langs} />
    </div>
  );
};

export default BookTicket;
