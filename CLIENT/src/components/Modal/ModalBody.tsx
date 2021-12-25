import React from "react";

const ModalBody: React.FunctionComponent<{}> = props => {
    return <div className="modal__body">
        {props.children}
    </div>
}

export default ModalBody;