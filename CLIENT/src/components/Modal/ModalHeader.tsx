import React from "react";

interface IModalHeaderProps {
  title?: string;
  className?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  onHide(): void;
}

const ModalHeader: React.FunctionComponent<IModalHeaderProps> = (props) => {
  const { title, className, titleClassName, style, onHide } = props;

  return (
    <div className={`modal__header ${className ? className : ""}`} style={style}>
      <div className={`header__title ${titleClassName ? titleClassName : ""}`}>{title}</div>
      <div className="button--delete header__button" onClick={onHide}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default ModalHeader;
