import React from "react";
import ContentHeader from "../../../components/ContentHeader";
import pageTitleList from "../../../configs/pageTitleList";

const Customer: React.FunctionComponent<{}> = props => {
    return (
        <div className="customer">
            <ContentHeader name={pageTitleList.customer} />
        </div>
    )
}

export default Customer;