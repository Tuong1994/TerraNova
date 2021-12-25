import React from "react";
import ContentHeader from "../../../components/ContentHeader/ContentHeader";
import pageTitleList from "../../../configs/pageTitleList";

const Order: React.FunctionComponent<{}> = props => {
    return (
        <div className="home">
            <ContentHeader name={pageTitleList.order} />
        </div>
    )
}

export default Order;