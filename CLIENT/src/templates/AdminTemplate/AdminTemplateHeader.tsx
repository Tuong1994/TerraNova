import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { IQueryList } from "../../interfaces/query";
import { getUserDetail } from "../../redux/actionCreators/UserCreators";
import Translate from "../../components/Translate";

const AdminTemplateHeader: React.FunctionComponent<{}> = (props) => {
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const dispatch = useDispatch();

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
    <div className="content__header">
      <div className="header__user">
        <Link to="/user" className="user__link">
          <span className="link__name">
            {user?.firstName} {user?.lastName}
          </span>
          <img
            src={user?.avatar || "../img/avatar.png"}
            alt=""
            className="link__img"
          />
        </Link>
      </div>
      <div className="header__translate">
        <Translate />
      </div>
    </div>
  );
};

export default AdminTemplateHeader;
