import React from "react";
import { EStatus } from "../../models/Order";
import { EProductStatus } from "../../models/Product";

interface BadgeProps {
  status?: number;
  title?: string;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { status, title } = props;

  const getClassName = () => {
    if (status) {
      switch (status) {
        case (EStatus.paid): {
          return "badge--success";
        }
        case (EProductStatus.stocking): {
          return "badge--success"
        }
      }
    }
    return "";
  };

  return <div className={`badge ${getClassName()}`}>{title}</div>;
};

export default Badge;
