import React from "react";
import Button from "../../../components/Button";
import { ILangs } from "../../../interfaces/lang";
import { ESeatType, ISeat } from "../../../models/Seat";

interface TheatreProps {
  langs: ILangs;
  seats: ISeat[];
}

const Theatre: React.FunctionComponent<TheatreProps> = (props) => {
  const { langs, seats } = props;

  const [convertArr, setConvertArr] = React.useState<any>([]);

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
          <div className="seats__line">
            <div className="line__name">{lineArr[index]}</div>
            <div className="line__button">
              {i.map((j: any) => {
                const vipClass =
                  j.type === ESeatType.vip ? "button__inner--vip" : "";
                const isBooked = j.isBooked ? "button__inner--booked": "";
                return (
                  <Button className={`button__inner ${vipClass} ${isBooked}`}>
                    <p className="inner__name">{j.isBooked ? <i className="fa fa-times"></i> : j.name}</p>
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

  console.log(convertArr);

  return (
    <div className="content__theatre">
      <div className="theatre__screen">
        <div className="screen__info"></div>
        <div>{langs?.movie.bookTicket.theatre.screen}</div>
      </div>

      <div className="theatre__seats">{renderSeat()}</div>
    </div>
  );
};

export default Theatre;
