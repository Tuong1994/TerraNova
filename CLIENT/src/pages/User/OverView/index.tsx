import React from "react";
import * as Card from "../../../components/Card";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";
import { IQueryList } from "../../../interfaces/query";
import { getUserDetail } from "../../../redux/actionCreators/UserCreators";
import UserInfo from "./Info";
import Order from "./Orders";

interface OverViewProps {}

const OverView: React.FunctionComponent<OverViewProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  React.useEffect(() => {
    _getUserDetail();
  }, []);

  const _getUserDetail = () => {
    const query: IQueryList = {
      userId: user?.id,
    };
    dispatch(getUserDetail(query));
  };

  return (
    <div className="overview">
      <h3 className="overview__title">{langs?.user.overview.overviewTitle}</h3>
      <UserInfo langs={langs} user={user} />
      <Order user={user} langs={langs} />
    </div>
  );
};

export default OverView;
