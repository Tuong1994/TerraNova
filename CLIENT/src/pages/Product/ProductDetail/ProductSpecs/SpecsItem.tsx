import React from "react";
import { IDescription } from "../../../../models/Product";

interface SpecsItemProps {
  desc: IDescription;
}

const SpecsItem: React.FunctionComponent<SpecsItemProps> = (props) => {
  const { desc } = props;

  return (
    <tr className="table__row">
      <td className="table__col">{desc.name}</td>
      <td className="table__col">{desc.content}</td>
    </tr>
  );
};

export default SpecsItem;
