import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface ProductSetProps {
  langs: ILangs;
}

const ProductSet: React.FunctionComponent<ProductSetProps> = (props) => {
  const { langs } = props;

  return (
    <div className="product-home__set">
      <div className="set__item">
        <h3 className="item__title">{langs?.product.home.set.title_1}</h3>
        <div className="item__image">
          <img src="/img/product/pc.jpg" alt="pc" />
        </div>
        <div className="item__action">
          <Link to="/product" className="button--fill action__link">
            {langs?.button.buy}
          </Link>
        </div>
      </div>

      <div className="set__item">
        <h3 className="item__title">{langs?.product.home.set.title_2}</h3>
        <div className="item__image">
          <img src="/img/product/monitor.png" alt="monitor" />
          <div className="image__video">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/EE-4GvjKcfs?autoplay=1&loop=1&muted=1&controls=0&playlist=EE-4GvjKcfs"
              allow="autoplay"
              className="video__player"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className="item__action">
          <Link to="/product" className="button--fill action__link">
            {langs?.button.buy}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSet;
