import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { useDispatch } from "react-redux";
import actions from "../../../../configs/actions";

interface OrdererFieldsProps {
  userList: any;
  langs: ILangs;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const OrdererFields: React.FunctionComponent<OrdererFieldsProps> = (props) => {
  const { langs, userList, userId, setUserId } = props;

  const [orderers, setOrderers] = React.useState<any>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [defaultUser, setDefaultUser] = React.useState<string>("");
  const dispatch = useDispatch();

  const { users, total, limits } = userList;

  const totalPage = Math.ceil(total / limits);
  const start = (currentPage - 1) * limits;
  const end = start + limits;
  const userArr = users.slice(start, end);

  React.useEffect(() => {
    if (userArr && userArr.length > 0) {
      const newArr = userArr.map((user: any) => {
        const userName = `${user.firstName} ${user.lastName}`;
        return { label: userName, value: user.id };
      });
      setOrderers(newArr);
    }
    const user = users.find((i: any) => i.id === userId);
    const userName = `${user?.firstName} ${user?.lastName}`;
    setDefaultUser(userName)
  }, [users]);

  const handlePrev = () => {
    dispatch(actions.openDataLoading);
    setCurrentPage((prev) => prev - 1);
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 500);
  };

  const handleNext = () => {
    dispatch(actions.openDataLoading);
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 500);
  };

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
        defaultValue={defaultUser}
        groupClassName="inner__control"
        onPrev={handlePrev}
        onNext={handleNext}
        onChange={(value: any) => {
          setUserId(value);
        }}
      />
    </Card.Wrapper>
  );
};

export default OrdererFields;
