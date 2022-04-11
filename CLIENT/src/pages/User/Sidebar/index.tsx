import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";
import Avatar from "./Avatar";
import Menu from "./Menu";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {

  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="user-template__sidebar">
      <Avatar user={user} langs={langs} />
      <Menu lang={lang} />
    </div>
  );
};

export default Sidebar;
