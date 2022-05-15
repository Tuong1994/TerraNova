import React from "react";
import { history } from "../../../../App";
import { ACCESSTOKEN } from "../../../../configs/setting";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { IProduct } from "../../../../models/Product";
import { ILangs } from "../../../../interfaces/lang";

interface ProductRateProps {
  langs: ILangs;
  product: IProduct;
}

const ProductRate: React.FunctionComponent<ProductRateProps> = (props) => {
  const { product, langs } = props;

  const dispatch = useDispatch();

  const [point, setPoint] = React.useState<number>(0);

  React.useEffect(() => {
    if (product) {
      setPoint(product.ratePoint || 0);
    }
  }, [product]);

  const getColor = (i: number) => {
    if (i <= point) {
      return "#ffc107";
    } else {
      return "#e4e5e9";
    }
  };

  return (
    <div className="rate__wrapper">
      <div
        className="wrapper__star"
        onClick={() => {
          if (!localStorage.getItem(ACCESSTOKEN)) {
            history.push("/signIn");
          } else {
            dispatch({
              type: EModalActionTypes.OPEN_RATING_MODAL,
            });
          }
        }}
      >
        {[...Array(5)].map((star: any, i: number) => {
          const ratingValue = i + 1
          return (
            <label className="star__item" key={i}>
              <i className="fas fa-star" style={{ color: getColor(ratingValue) }}></i>
            </label>
          );
        })}
      </div>
      <div className="wrapper__content">
        <p>
          {point}/5 - ({product.rates?.length} {langs?.rate.voted})
        </p>
      </div>
    </div>
  );
};

export default ProductRate;
