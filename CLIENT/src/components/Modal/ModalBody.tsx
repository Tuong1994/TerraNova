import React from "react";

interface ModalBodyProps {
  className?: string;
}

const ModalBody: React.FunctionComponent<ModalBodyProps> = (props) => {
  const { className } = props;
  return (
    <div className={`modal__body ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export default ModalBody;
