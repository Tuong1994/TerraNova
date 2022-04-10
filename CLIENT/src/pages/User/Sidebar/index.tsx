import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Avatar from "./Avatar";
import Menu from "./Menu";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  return (
    <div className="user-template__sidebar">
      <Avatar />
      <Menu />
    </div>
  );
};

export default Sidebar;
