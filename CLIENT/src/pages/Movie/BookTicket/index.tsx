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
import Step from "./Step";
import Theatre from "./Theatre";
import BookInfo from "./BookInfo";
import utils from "../../../utils";
import BookAction from "./BookAction";
import RBookInfo from "../../../responsive/RBookInfo";

const BookTicket: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const movieScheduleId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieScheduleDetail } = useSelector(
    (state: ReducerState) => state.MovieScheduleReducer
  );
  const { listBookedSeat } = useSelector(
    (state: ReducerState) => state.TicketReducer
  );

  const [stepOne, setStepOne] = React.useState<boolean>(false);
  const [stepTwo, setStepTwo] = React.useState<boolean>(false);
  const [stepThree, setStepThree] = React.useState<boolean>(false);
  const [openBookInfo, setOpenBookInfo] = React.useState<boolean>(false);
  const [movieInfo, setMovieInfo] = React.useState<IMovieInfo>({});
  const [seats, setSeats] = React.useState<ISeat[]>([]);

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

  const handleBookTicket = () => {
    setStepThree(true);
  };

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
          lang={lang}
          langs={langs}
          movieInfo={movieInfo}
          listBookedSeat={listBookedSeat}
          stepTwo={stepTwo}
          setStepTwo={setStepTwo}
          onBookTicket={handleBookTicket}
        />
        <RBookInfo
          lang={lang}
          langs={langs}
          movieInfo={movieInfo}
          listBookedSeat={listBookedSeat}
          stepTwo={stepTwo}
          open={openBookInfo}
          setStepTwo={setStepTwo}
          setOpen={setOpenBookInfo}
          onBookTicket={handleBookTicket}
        />
      </div>
    </div>
  );
};

export default BookTicket;
