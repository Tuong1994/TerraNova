import React from "react";

const NoData: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="nodata">
      <div className="nodata__icon">
        <i className="fas fa-exclamation-circle"></i>
      </div>
      <div className="nodata__content">
        <p>No data found</p>
      </div>
    </div>
  );
};

export default NoData;
