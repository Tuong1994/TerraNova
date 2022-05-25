import React from "react";
import Button from "../../../components/Button";
import { ILangs } from "../../../interfaces/lang";
import { ISeat } from "../../../models/Seat";

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
    if (seats && seats.length > 0) {
    }
  };

  console.log(convertArr);

  return (
    <div className="content__theatre">
      <div className="theatre__screen">
        <div className="screen__info"></div>
        <div>{langs?.movie.bookTicket.theatre.screen}</div>
      </div>

      <div className="theatre__seats">{}</div>
    </div>
  );
};

export default Theatre;
