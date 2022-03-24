import React from "react";
import Logo from "../../../components/Logo";
import Menu from "./Menu";
import Setting from "./Setting";

const Sidebar: React.FunctionComponent<{}> = (props) => {
  return <div className="sidebar">
    <Logo />
    <Menu />
    <Setting />
  </div>;
};

export default Sidebar;
