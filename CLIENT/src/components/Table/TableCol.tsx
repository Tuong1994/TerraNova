import React from "react";

const TableCol: React.FunctionComponent<{}> = props => {
    return <td>
        {props.children}
    </td>
}

export default TableCol;