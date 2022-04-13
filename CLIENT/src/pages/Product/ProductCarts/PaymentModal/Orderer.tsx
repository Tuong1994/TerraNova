import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";
import { IUser } from "../../../../models/User";

interface OrdererProps {
  langs: ILangs;
  orderer: IUser;
}

const Orderer: React.FunctionComponent<OrdererProps> = (props) => {
  const { langs, orderer } = props;
  return (
    <Card.Wrapper className="body__item">
      <Card.Body>
        <h5 className="item__title">{langs?.productCarts.modal.orderer}</h5>

        <div className="item__content">
          <ul className="content__inner">
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.name} : </p>
                <strong>{orderer?.name}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.phone} : </p>
                <strong>{orderer?.phone}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.email} : </p>
                <strong>{orderer?.email}</strong>
              </div>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card.Wrapper>
  );
};

export default Orderer;
