import React from "react";
import Button from "../../../components/Button";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";
import { ISeat } from "../../../models/Seat";

interface BookActionProps {
  langs: ILangs;
  listBookedSeat: ISeat[];
  setOpenBookInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookAction: React.FunctionComponent<BookActionProps> = (props) => {
  const { langs, listBookedSeat, setOpenBookInfo } = props;

  const renderBookedSeat = () => {
    return listBookedSeat.map((i) => {
      return (
        <React.Fragment key={i.id}>
          {i.lineName} - {i.name},{" "}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="content__book-action">
      <Card.Wrapper className="book-action__card">
        <div className="card__seat">
          <p>
            {langs?.movie.bookTicket.bookInfo.seat} :{" "}
            <span>{renderBookedSeat()}</span>
          </p>
        </div>
        <div className="card__action">
          <Button
            className={`button--submit action__button ${
              !listBookedSeat.length ? "button--disabled" : ""
            }`}
            onClick={() => setOpenBookInfo(true)}
          >
            {langs?.button.bookTicket}
          </Button>
        </div>
      </Card.Wrapper>
    </div>
  );
};

export default BookAction;
