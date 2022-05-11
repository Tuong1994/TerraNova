import React from "react";
import { EBadgeStatus } from "../../interfaces/badge";

interface BadgeProps {
  status?: number;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  getStatus?: () => number;
  getTitle?: () => string;
  getIcon?: () => React.ReactNode;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { status, title, icon, className, getStatus, getTitle, getIcon } =
    props;

  const getClassName = () => {
    if (status || getStatus) {
      switch (status || (getStatus && getStatus())) {
        case EBadgeStatus.success: {
          return "badge--success";
        }
        case EBadgeStatus.warning: {
          return "badge--warning";
        }
        case EBadgeStatus.info: {
          return "badge--info";
        }
        case EBadgeStatus.error: {
          return "badge--error";
        }
      }
    }
    return "";
  };

  return (
    <div className={`badge ${getClassName()} ${className ? className : ""}`}>
      <span>{title || (getTitle && getTitle())}</span>

      <span>{icon || (getIcon && getIcon())}</span>
    </div>
  );
};

export default Badge;
