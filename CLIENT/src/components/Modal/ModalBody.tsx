import React from "react";

interface ModalBodyProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalBody: React.FunctionComponent<ModalBodyProps> = (props) => {
  const { className, style } = props;
  return (
    <div className={`modal__body ${className ? className : ""}`} style={style}>
      {props.children}
    </div>
  );
};

export default ModalBody;
