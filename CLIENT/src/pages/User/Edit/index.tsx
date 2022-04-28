import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getUserDetail } from "../../../redux/actionCreators/UserCreators";
import ContentHeader from "../../../components/ContentHeader";
import UserEditForm from "./Form";
import utils from "../../../utils";
import Upload from "../../../components/Upload";

interface UserEditProps {}

const UserEdit: React.FunctionComponent<UserEditProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const dispatch = useDispatch();

  customHooks.useLoading();

  const langs = utils.changeLang(lang);

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
    <div className="user-edit">
      <ContentHeader name={langs?.user.update.mainTitle || ""} />
      <UserEditForm lang={lang} langs={langs} user={user} />
    </div>
  );
};

export default UserEdit;
