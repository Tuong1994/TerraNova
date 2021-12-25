import React from "react";
import ContentHeader from "../../../components/ContentHeader/ContentHeader";
import pageTitleList from "../../../configs/pageTitleList";

const Course: React.FunctionComponent<{}> = props => {
    return (
        <div className="course">
            <ContentHeader name={pageTitleList.course} />
        </div>
    );
};

export default Course;