import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface TheatreNoteProps {
  langs: ILangs;
}

const TheatreNote: React.FunctionComponent<TheatreNoteProps> = (props) => {
  const { langs } = props;

  const noteItems = [
    {
      id: 1,
      title: langs?.movie.bookTicket.theatre.vip,
      background: "#f5b966",
    },
    {
      id: 2,
      title: langs?.movie.bookTicket.theatre.regular,
      background: "#4272d8",
    },
    {
      id: 3,
      title: langs?.movie.bookTicket.theatre.booked,
      background: "#f22121",
    },
    {
      id: 4,
      title: langs?.movie.bookTicket.theatre.booking,
      background: "#0faf37",
    },
  ];

  return (
    <div className="note__wrapper">
      <p className="wrapper__title">{langs?.movie.bookTicket.theatre.note}</p>
      <div className="wrapper__list">
        {noteItems.map((i) => {
          return (
            <div className="list__item" key={i.id}>
              <div className="item__bg" style={{backgroundColor: i.background}}></div>
              <div className="item__title">{i.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheatreNote;
