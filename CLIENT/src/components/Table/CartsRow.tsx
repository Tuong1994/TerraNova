import React from "react";
import { IProductCarts } from "../../models/Carts";
import TableCol from "./TableCol";
import Button from "../Button";

interface ICartsRowProps {
  item: IProductCarts;
  removeItem: (i: IProductCarts) => void;
  setProductUpdate: React.Dispatch<React.SetStateAction<IProductCarts>>;
}

const CartsRow: React.FunctionComponent<ICartsRowProps> = (props) => {
  const { item, removeItem, setProductUpdate } = props;

  const [amount, setAmount] = React.useState<any>(item.amount);

  React.useEffect(() => {
    if (item) {
      setAmount(item?.amount);
    }
  }, [item]);

  React.useEffect(() => {
    setProductUpdate({
      ...item,
      amount: amount,
    });
  }, [amount]);

  return (
    <tr className="carts-row">
      <TableCol>
        <div className="col__img">
          <img src="../img/product_img.jpg" alt="product" />
        </div>
      </TableCol>
      <TableCol>
        <div>{item.productName}</div>
      </TableCol>
      <TableCol>
        <div className="col__amount">
          <div
            className={`amount__button ${
              amount == 1 ? "amount__button--disabled" : ""
            }`}
            onClick={() => {
              setAmount(amount - 1);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </div>

          <div className="amount__content">{amount}</div>

          <div
            className="amount__button"
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </TableCol>
      <TableCol>
            <div>{item.price && item.price.toLocaleString()} VND</div>
      </TableCol>
      <TableCol>
        {(() => {
          if (amount && item.price) {
            return <div>{(item.price * amount).toLocaleString()} VND</div>
          }
        })()}
      </TableCol>
      <TableCol>
        <div>
          <Button
            className="button--delete"
            onClick={() => {
              removeItem(item);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </TableCol>
    </tr>
  );
};

export default CartsRow;
