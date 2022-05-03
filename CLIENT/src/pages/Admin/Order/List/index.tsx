import React from "react";
import * as Card from "../../../../components/Card";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import ContentHeader from "../../../../components/ContentHeader";
import utils from "../../../../utils";
import Table from "../../../../components/Table";
import { Link } from "react-router-dom";

const Order: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="order">
      <ContentHeader name={langs?.admin.pageTitle.order || ""} />
      <Card.Wrapper>
        <Table
          headers={[
              {title: langs?.tableHeader.number || ""},
              {title: langs?.tableHeader.orderId || ""},
              {title: langs?.tableHeader.products || ""},
              {title: langs?.tableHeader.orderStatus || ""},
              {title: langs?.tableHeader.price || ""},
              {title: langs?.tableHeader.createdAt || ""},
              {title: langs?.tableHeader.features || ""},
          ]}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/order" className="button--add">
                {langs?.button.addOrder}
              </Link>
            );
          }}
        ></Table>
      </Card.Wrapper>
    </div>
  );
};

export default Order;
