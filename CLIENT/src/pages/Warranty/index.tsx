import React from "react";
import * as customHooks from "../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import WarrantyBanner from "./Banner";
import WarrantyStep from "./Step";
import WarrantyCondition from "./Condition";
import utils from "../../utils";
import WarrantyReturns from "./Returns";

const Warranty: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  return (
    <div className="warranty">
      <WarrantyBanner langs={langs} />
      <WarrantyStep langs={langs} />
      <WarrantyCondition langs={langs} />
      <WarrantyReturns langs={langs} />
    </div>
  );
};

export default Warranty;
