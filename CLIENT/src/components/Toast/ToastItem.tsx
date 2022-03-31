import React from "react";
import { EToastType } from "../../interfaces/toast";

interface ToastItemProps {
  type: number;
  title: string;
  onClose: (id: any) => void;
}

const ToastItem: React.FunctionComponent<ToastItemProps> = (props) => {
  const { type, title, onClose } = props;

  const getType = React.useMemo(() => {
    switch (type) {
      case EToastType.success: {
        return "success";
      }
      case EToastType.error: {
        return "error";
      }
      case EToastType.warning: {
        return "warning";
      }
    }
  }, [type]);

  const getIcon = React.useMemo(() => {
    switch (type) {
      case EToastType.success: {
        return <i className="fa-solid fa-circle-check"></i>;
      }
      case EToastType.error: {
        return <i className="fa-solid fa-circle-xmark"></i>;
      }
      case EToastType.warning: {
        return <i className="fa-solid fa-circle-exclamation"></i>;
      }
    }
  }, [type]);

  return (
    <div className={`wrapper__item wrapper__item--${getType}`}>
      <div className="item__line"></div>
      <div className="item__icon">{getIcon}</div>
      <div className="item__title">{title}</div>
      <div
        className="item__close"
        onClick={onClose}
      >
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default ToastItem;
