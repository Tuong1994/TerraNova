import React from "react";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";
import { IUser } from "../../../models/User";
import Table from "../../../components/Table";
import TicketUserRow from "../../../components/TableRow/TicketUserRow";

interface TicketProps {
  lang: string;
  langs: ILangs;
  user: IUser | null;
}

const Ticket: React.FunctionComponent<TicketProps> = (props) => {
  const { lang, langs, user } = props;

  return (
    <div className="overview__ticket">
      <h3 className="ticket__title">{langs?.user.overview.ticketTitle}</h3>
      <Card.Wrapper className="ticket__list">
        <Table
          headers={[
            { title: langs?.tableHeader.ticketId || "" },
            { title: langs?.tableHeader.movie || "" },
            { title: langs?.tableHeader.cinema || "" },
            { title: langs?.tableHeader.seats || "" },
            { title: langs?.tableHeader.totalPay || "" },
            { title: langs?.tableHeader.paymentType || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={user?.tickets || 0}
          noDataTitle={langs?.noData.ticket || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/" className="button--submit">
                {langs?.button.bookTicket}
              </Link>
            );
          }}
        >
          {(() => {
            if (user?.tickets && user?.tickets?.length > 0) {
              return user?.tickets?.map((ticket) => {
                return (
                  <TicketUserRow
                    key={ticket.id}
                    lang={lang}
                    langs={langs}
                    ticket={ticket}
                  />
                );
              });
            }
          })()}
        </Table>
      </Card.Wrapper>
    </div>
  );
};

export default Ticket;
