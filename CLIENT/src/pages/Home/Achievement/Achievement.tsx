import React from "react";

const Achievement: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="home__achievement">
      <div className="achievement__wrapper">
        <div className="wrapper__icon">
          <i className="far fa-building"></i>
        </div>
        <div className="wrapper__number">02</div>
        <div className="wrapper__title">Branches</div>
      </div>

      <div className="achievement__wrapper">
        <div className="wrapper__icon">
          <i className="fas fa-users"></i>
        </div>
        <div className="wrapper__number">15730</div>
        <div className="wrapper__title">Customers</div>
      </div>

      <div className="achievement__wrapper">
        <div className="wrapper__icon">
          <i className="fas fa-handshake"></i>
        </div>
        <div className="wrapper__number">08</div>
        <div className="wrapper__title">Partners</div>
      </div>
    </div>
  );
};

export default Achievement;
