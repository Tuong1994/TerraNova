import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { IUser } from "../../../../models/User";

interface OrdererFieldsProps {
  totalPage: number;
  users: IUser[];
  langs: ILangs;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const OrdererFields: React.FunctionComponent<OrdererFieldsProps> = (props) => {
  const { langs, totalPage, users, userId, setUserId } = props;

  const [orderers, setOrderers] = React.useState<any>([]);

  React.useEffect(() => {
    if (users && users.length > 0) {
      const newArr = users.map((user) => {
        const userName = `${user.firstName} ${user.lastName}`;
        return { label: userName, value: user.id };
      });
      setOrderers(newArr)
    }
  }, [users]);

  return (
    <Card.Wrapper className="item__inner item__customer">
      <h3 className="inner__title">{langs?.admin.order.subTitle_5}</h3>
      <FormControl.SelectCustom
        id="value"
        name="label"
        placeholder=" "
        isPaging={true}
        totalPage={totalPage}
        option={orderers}
        defaultValue={users.find((i: any) => i.value === userId)}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setUserId(value);
        }}
      />
    </Card.Wrapper>
  );
};

export default OrdererFields;
