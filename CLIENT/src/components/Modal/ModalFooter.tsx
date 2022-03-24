import React from "react";
interface ModalFooterProps {
  className?: string;
}

const ModalFooter: React.FunctionComponent<ModalFooterProps> = (props) => {
  const { className } = props;
  return <div className={`modal__footer ${className ? className : ""}`}>{props.children}</div>;
};

export default ModalFooter;
