import React from "react";
import { ELangs, ILangs } from "../../interfaces/lang";
import { EPaymentTypes } from "../../models/Order";
import { ITicket } from "../../models/Ticket";
import TableCol from "../Table/TableCol";

interface TicketUserRowProps {
  lang: string;
  langs: ILangs;
  ticket: ITicket;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTicketId: React.Dispatch<React.SetStateAction<string>>;
}

const TicketUserRow: React.FunctionComponent<TicketUserRowProps> = (props) => {
  const { lang, langs, ticket, setIsShow, setTicketId } = props;

  const renderMovieName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return ticket?.info?.movieNameENG;
      }
      case ELangs.VN: {
        return ticket?.info?.movieNameVN;
      }
      case ELangs.CH: {
        return ticket?.info?.movieNameCH;
      }
    }
  };

  const renderPaymentType = () => {
    switch (ticket?.paymentType) {
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
    <tr className="ticket-row">
      <TableCol>
        <div>{ticket.id}</div>
      </TableCol>
      <TableCol>
        <div>{renderMovieName()}</div>
      </TableCol>
      <TableCol>
        <div>{ticket?.info?.address}</div>
      </TableCol>
      <TableCol>
        <div>{ticket?.seats?.length}</div>
      </TableCol>
      <TableCol>
        <div>{ticket?.totalPay?.toLocaleString()} VND</div>
      </TableCol>
      <TableCol>
        <div>{renderPaymentType()}</div>
      </TableCol>
      <TableCol>
        <div
          className="button--delete"
          onClick={() => {
            setTicketId(ticket.id || "");
            setIsShow(true)
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default TicketUserRow;
