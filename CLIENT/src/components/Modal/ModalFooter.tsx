import React from "react";

const ModalFooter: React.FunctionComponent<{}> = (props) => {
  return <div className="modal__footer">
    {props.children}
  </div>;
};

export default ModalFooter;
