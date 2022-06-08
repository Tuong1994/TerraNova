import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getUserDetail } from "../../../redux/actionCreators/UserCreators";
import ContentHeader from "../../../components/ContentHeader";
import UserInfo from "./Info";
import Order from "./Orders";
import Course from "./Course";
import Ticket from "./Ticket";
import utils from "../../../utils";

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
      <ContentHeader name={langs?.user.overview.mainTitle || ""} />
      <UserInfo lang={lang} langs={langs} user={user} />
      <Order langs={langs} user={user} />
      <Course lang={lang} langs={langs} user={user} />
      <Ticket lang={lang} langs={langs} user={user} />
    </div>
  );
};

export default OverView;
