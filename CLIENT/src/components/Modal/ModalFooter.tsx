import React from "react";
interface ModalFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalFooter: React.FunctionComponent<ModalFooterProps> = (props) => {
  const { className, style } = props;
  return (
    <div
      className={`modal__footer ${className ? className : ""}`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default ModalFooter;
