import React from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
  className?: string;
  leffClassName?: string;
  rightClassName?: string;
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  const { className, leffClassName, rightClassName } = props;
  return (
    <Link to="/" className={`logo ${className}`}>
      <div className="logo__wrapper">
        <div className={`wrapper__left ${leffClassName ? leffClassName : ""}`}>
          T
        </div>
        <div
          className={`wrapper__right ${rightClassName ? rightClassName : ""}`}
        >
          <div>ERRA</div>
          <div>NOVA</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
