import React from "react";
import { IOrder } from "../../models/Order";
import TableCol from "./TableCol";

interface ICartsRowProps {
  item: IOrder;
}

const CartsRow: React.FunctionComponent<ICartsRowProps> = (props) => {
  const { item } = props;

  return (
    <tr className="carts-row">
      <TableCol>
        <div className="col__img">
          <img src="../img/product_img.jpg" alt="product" />
        </div>
      </TableCol>
      <TableCol>
        <div className="col__item">{item.productName}</div>
      </TableCol>
      <TableCol>
        <div className="col__item">{item.amount}</div>
      </TableCol>
      <TableCol>
        {(() => {
          if (item.amount && item.price) {
            return <div className="col__item">{item.price * item.amount}</div>;
          }
        })()}
      </TableCol>
      <TableCol>
        <div className="col__item">
          <div className="button--delete">
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </TableCol>
    </tr>
  );
};

export default CartsRow;
