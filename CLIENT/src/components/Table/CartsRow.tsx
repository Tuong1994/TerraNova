import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { IQueryList } from "../../interfaces/query";
import { ICarts } from "../../models/Carts";
import { removeCarts } from "../../redux/actionCreators/CartsCreators";
import TableCol from "./TableCol";
import utils from "../../utils";

interface ICartsRowProps {
  item: ICarts;
}

const CartsRow: React.FunctionComponent<ICartsRowProps> = (props) => {
  const { item } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const handleRemoveItem = () => {
    const query: IQueryList = {
      cartsId: item.cartsId,
    };
    dispatch(
      removeCarts(
        query,
        langs?.toastMessages.success.removeCart,
        langs?.toastMessages.error.removeCart
      )
    );
  };

  return (
    <tr className="carts-row">
      <TableCol>
        <div className="col__item col__img">
          <img src="../img/product_img.jpg" alt="product" />
        </div>
      </TableCol>
      <TableCol>
        <div className="col__item">{item.productName}</div>
      </TableCol>
      <TableCol>
        <div className="col__item col__amount">
          <div
            className={`amount__button ${
              item.amount == 1 ? "amount__button--disabled" : ""
            }`}
          >
            <i className="fa-solid fa-minus"></i>
          </div>

          <div className="amount__content">{item.amount}</div>

          <div className="amount__button">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </TableCol>
      <TableCol>
        {(() => {
          if (item.amount && item.price) {
            return (
              <div className="col__item">
                {(item.price * item.amount).toLocaleString()} VND
              </div>
            );
          }
        })()}
      </TableCol>
      <TableCol>
        <div className="col__item">
          <div className="button--delete" onClick={handleRemoveItem}>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </TableCol>
    </tr>
  );
};

export default CartsRow;
