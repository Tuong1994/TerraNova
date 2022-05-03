import React from "react";
import * as Card from "../../../../components/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import ContentHeader from "../../../../components/ContentHeader";
import pageTitleList from "../../../../configs/pageTitleList";
import utils from "../../../../utils";
import Table from "../../../../components/Table";

const Customer: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="customer">
      <ContentHeader name={pageTitleList.customer} />
      <Card.Wrapper>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.userId || "" },
            { title: langs?.tableHeader.account || "" },
            { title: langs?.tableHeader.name || "" },
            { title: langs?.tableHeader.role || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/customer" className="button--add">
                {langs?.button.addUser}
              </Link>
            );
          }}
        ></Table>
      </Card.Wrapper>
    </div>
  );
};

export default Customer;
