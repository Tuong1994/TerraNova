import React from "react";
import { EBadgeStatus } from "../../interfaces/badge";

interface BadgeProps {
  status?: number;
  title?: string;
  icon?: React.ReactNode;
  isResponsive?: boolean;
  getStatus?: () => number;
  getTitle?: () => string;
  getIcon?: () => React.ReactNode;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { status, title, icon, isResponsive, getStatus, getTitle, getIcon } =
    props;

  const [display, setDisplay] = React.useState<string>("");

  React.useEffect(() => {
    if (isResponsive) {
      const size = window.innerWidth;
      if (size <= 480) {
        setDisplay("none");
      }
      console.log(size)
    }
  }, [isResponsive]);

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
    <div className={`badge ${getClassName()}`}>
      <span style={isResponsive ? { display: display } : {}}>
        {title || (getTitle && getTitle())}
      </span>

      {isResponsive && <span>{icon || (getIcon && getIcon())}</span>}
    </div>
  );
};

export default Badge;
