import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

const NoData: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="nodata">
      <div className="nodata__icon">
        <i className="fas fa-exclamation-circle"></i>
      </div>
      <div className="nodata__content">
        <p>{langs?.noData.data}</p>
      </div>
    </div>
  );
};

export default NoData;
