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
import utils from "../../../utils";
import Theatre from "./Theatre";
import BookInfo from "./BookInfo";

const BookTicket: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const movieScheduleId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieScheduleDetail } = useSelector(
    (state: ReducerState) => state.MovieScheduleReducer
  );

  const [stepOne, setStepOne] = React.useState<boolean>(false);
  const [stepTwo, setStepTwo] = React.useState<boolean>(false);
  const [stepThree, setStepThree] = React.useState<boolean>(false);
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

  return (
    <div className="book-ticket">
      <Step
        langs={langs}
        stepOne={stepOne}
        stepTwo={stepTwo}
        stepThree={stepThree}
      />
      <div className="book-ticket__content">
        <Theatre langs={langs} seats={seats} />
        <BookInfo langs={langs} />
      </div>
    </div>
  );
};

export default BookTicket;
