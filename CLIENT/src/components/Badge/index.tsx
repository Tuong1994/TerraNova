import React from "react";
import { EBadgeStatus } from "../../interfaces/badge";

interface BadgeProps {
  status?: number;
  title?: string;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { status, title } = props;

  const getClassName = () => {
    if (status) {
      switch (status) {
        case EBadgeStatus.success: {
          return "badge--success";
        }
        case EBadgeStatus.warning: {
          return "badge--warning"
        }
        case EBadgeStatus.info: {
          return "badge--info"
        }
        case EBadgeStatus.error: {
          return "badge--error";
        }
      }
    }
    return "";
  };

  return <div className={`badge ${getClassName()}`}>{title}</div>;
};

export default Badge;
