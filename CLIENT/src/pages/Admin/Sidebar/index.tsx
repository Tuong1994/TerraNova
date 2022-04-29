import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../../components/Logo";
import { ReducerState } from "../../../redux/store";
import Menu from "./Menu";
import Setting from "./Setting";

const Sidebar: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  return (
    <div className="sidebar">
      <Logo />
      <Menu lang={lang} />
      <Setting />
    </div>
  );
};

export default Sidebar;
