import React from "react";
import { useDispatch } from "react-redux";
import { ILangs } from "../../../interfaces/lang";
import { ESeatType, ISeat } from "../../../models/Seat";
import { ETicketActionTypes } from "../../../redux/actionTypes/TicketActionTypes";
import { IMovieInfo } from "../../../models/MovieSchedule";
import Button from "../../../components/Button";
import CountDown from "../../../components/CountDown";
import TheatreNote from "./Note";
import moment from "moment";

interface TheatreProps {
  langs: ILangs;
  movieInfo: IMovieInfo;
  seats: ISeat[];
  listBookedSeat: ISeat[];
  setStepOne: React.Dispatch<React.SetStateAction<boolean>>;
  setStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setStepThree: React.Dispatch<React.SetStateAction<boolean>>;
}

const Theatre: React.FunctionComponent<TheatreProps> = (props) => {
  const {
    langs,
    movieInfo,
    seats,
    listBookedSeat,
    setStepOne,
    setStepTwo,
    setStepThree,
  } = props;

  const [convertArr, setConvertArr] = React.useState<any>([]);

  const dispatch = useDispatch();

  const lineArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  React.useEffect(() => {
    setConvertArr(
      seats
        ?.sort((a, b) => {
          return Number(a.name) - Number(b.name);
        })
        .reduce(
          (rows, key, index) =>
            (index % 10 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,
          [] as any[]
        )
    );
  }, [seats]);

  const renderSeat = () => {
    if (convertArr.length > 0) {
      return convertArr.map((i: any, index: number) => {
        return (
          <div className="seats__line" key={index}>
            <div className="line__name">{lineArr[index]}</div>
            <div className="line__button">
              {i.map((s: any) => {
                const indexClass = listBookedSeat.findIndex(
                  (i) => i.id === s.id
                );
                const bookingClass =
                  indexClass !== -1 ? "button__inner--booking" : "";
                const vipClass =
                  s.type === ESeatType.vip ? "button__inner--vip" : "";
                const isBooked = s.isBooked ? "button__inner--booked" : "";
                return (
                  <Button
                    key={s.id}
                    className={`button__inner ${vipClass} ${bookingClass} ${isBooked}`}
                    onClick={() => {
                      dispatch({
                        type: ETicketActionTypes.ADD_SEAT,
                        payload: {
                          ...s,
                          lineName: lineArr[index],
                        },
                      });
                      // Set step one
                      if (listBookedSeat.length > 0) {
                        setStepOne(true);
                      } else {
                        setStepOne(false);
                        setStepTwo(false);
                        setStepThree(false);
                      }
                    }}
                  >
                    <p className="inner__name">
                      {s.isBooked ? <i className="fa fa-times"></i> : s.name}
                    </p>
                    <div className="inner__line"></div>
                  </Button>
                );
              })}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="content__theatre">
      <div className="theatre__info">
        <div className="info__content">
          <p>{movieInfo.cinemaName}</p>
          <p>
            {moment(movieInfo.schedule).format("DD/MM/YYYY")} -{" "}
            {moment(movieInfo.schedule).format("HH:mm:A")}
          </p>
        </div>

        <div className="info__countdown">
          <p className="countdown__title">
            {langs?.movie.bookTicket.theatre.holdingTime}
          </p>
          <CountDown />
        </div>
      </div>

      <div className="theatre__screen">
        <p>{langs?.movie.bookTicket.theatre.screen}</p>
      </div>

      <div className="theatre__seats">{renderSeat()}</div>

      <div className="theatre__note">
        <TheatreNote langs={langs} />
      </div>
    </div>
  );
};

export default Theatre;
