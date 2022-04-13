import React from "react";
import * as Card from "../../../../components/Card";
import { useSelector } from "react-redux";
import { ILangs } from "../../../../interfaces/lang";
import { ICarts, IProductCarts } from "../../../../models/Carts";
import { ReducerState } from "../../../../redux/store";
import CartsItem from "../../../../components/CartsItem";
import utils from "../../../../utils";

interface CartsDetailProps {
  cartsDetail: any;
  langs: ILangs;
}

const CartsDetail: React.FunctionComponent<CartsDetailProps> = (props) => {
  const { cartsDetail, langs } = props;

  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  return (
    <Card.Wrapper className="body__item">
      <Card.Body>
        <h5 className="item__title">{langs?.productCarts.modal.product}</h5>
        {(() => {
          if (utils.checkObjectEmpty(user)) {
            if (cartsDetail && cartsDetail.length > 0) {
              return cartsDetail.map((i: ICarts, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {i.products?.map(
                      (product: IProductCarts, index: number) => {
                        return (
                          <CartsItem
                            key={index}
                            item={product}
                            groupClassName="item__group"
                            imgClassName="group__img"
                            contentClassName="group__content"
                          />
                        );
                      }
                    )}
                  </React.Fragment>
                );
              });
            }
          } else {
            if (cartsDetail && cartsDetail?.products?.length > 0) {
              return cartsDetail?.products?.map(
                (product: IProductCarts, index: number) => {
                  return (
                    <CartsItem
                      key={index}
                      item={product}
                      groupClassName="item__group"
                      imgClassName="group__img"
                      contentClassName="group__content"
                    />
                  );
                }
              );
            }
          }
        })()}
      </Card.Body>
    </Card.Wrapper>
  );
};

export default CartsDetail;
