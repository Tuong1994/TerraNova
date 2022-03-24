import React from "react";
import { Link } from "react-router-dom";

interface ICartsProps {
  className?: string;
}

const Carts: React.FunctionComponent<ICartsProps> = (props) => {
  const { className } = props;
  return (
    <div className="carts">
      <Link to="/" className={`carts__icon ${className}`}>
        <i className="fa fa-shopping-cart"></i>
      </Link>
      <div className="carts__total">1</div>
    </div>
  );
};

export default Carts;
