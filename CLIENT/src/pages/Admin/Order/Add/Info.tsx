import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import Button from "../../../../components/Button";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";

interface InfoFieldsProps {
  langs: ILangs;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs } = props;

  const dispatch = useDispatch();

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">{langs?.admin.order.subTitle_1}</h3>
      <div className="inner__action">
        <Button
          className="button--submit"
          onClick={() => {
            dispatch({
              type: EModalActionTypes.OPEN_PRODUCT_LIST_MODAL,
            });
          }}
        >
          {langs?.button.chooseProduct}
        </Button>
        <span>{langs?.admin.order.or}</span>
        <Button className="button--add">{langs?.button.addProduct}</Button>
      </div>
    </Card.Wrapper>
  );
};

export default InfoFields;
