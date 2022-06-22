import React from "react";
import { useDispatch } from "react-redux";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import actions from "../../../../configs/actions";
import { ILangs } from "../../../../interfaces/lang";

interface OrdererFieldsProps {
  userList: any;
  langs: ILangs;
  isReset: boolean;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const OrdererFields: React.FunctionComponent<OrdererFieldsProps> = (props) => {
  const { langs, isReset, userList, userId, setUserId } = props;

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const dispatch = useDispatch();

  const { users, total, limits } = userList;

  const totalPage = Math.ceil(total / limits);
  const start = (currentPage - 1) * limits;
  const end = start + limits;
  const optionUser = users.slice(start, end).map((user: any) => {
    const userName = `${user.firstName} ${user.lastName}`;
    return { label: userName, value: user.id };
  });;

  const handlePrev = () => {
    dispatch(actions.openDataLoading);
    setCurrentPage((prevValue) => prevValue - 1);
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 500);
  };

  const handleNext = () => {
    dispatch(actions.openDataLoading);
    setCurrentPage((prevValue) => prevValue + 1);
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
        isReset={isReset}
        isPaging={true}
        currentPage={currentPage}
        totalPage={totalPage}
        option={optionUser}
        value={optionUser.find((i: any) => i.value === userId)}
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
