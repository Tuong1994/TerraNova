import React from "react";
import { EStatus } from "../../models/Order";

interface BadgeProps {
  status?: number;
  title?: string;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { status, title } = props;

  const getClassName = () => {
    if (status) {
      switch (status) {
        case EStatus.paid: {
          return "badge--paid";
        }
      }
    }
    return "";
  };

  return <div className={`badge ${getClassName()}`}>{title}</div>;
};

export default Badge;
