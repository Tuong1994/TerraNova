import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { ELangs } from "../../interfaces/lang";
import { IMovieSchedule } from "../../models/MovieSchedule";
import TableCol from "../Table/TableCol";

interface ShowTimeAdminRowProps {
  lang: string;
  index: number;
  schedule: IMovieSchedule;
}

const ShowTimeAdminRow: React.FunctionComponent<ShowTimeAdminRowProps> = (
  props
) => {
  const { lang, index, schedule } = props;

  const renderMovieName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return schedule.movie?.nameENG;
      }
      case ELangs.VN: {
        return schedule.movie?.nameVN;
      }
      case ELangs.CH: {
        return schedule.movie?.nameCH;
      }
    }
  };

  return (
    <tr>
      <TableCol>
        <p>{index + 1}</p>
      </TableCol>
      <TableCol>
        <p>{moment(schedule.showTime).format("DD/MM/YYYY")}</p>
      </TableCol>
      <TableCol>
        <p>{renderMovieName()}</p>
      </TableCol>
      <TableCol>
        <p>{schedule.cinema?.name}</p>
      </TableCol>
      <TableCol>
        <p>{moment(schedule.createdAt).format("DD/MM/YYYY")}</p>
      </TableCol>
      <TableCol>
        <p>{moment(schedule.updatedAt).format("DD/MM/YYYY")}</p>
      </TableCol>
      <TableCol>
        <Link to={`/admin/product/editProduct`} className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div className="button--delete">
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default ShowTimeAdminRow;
