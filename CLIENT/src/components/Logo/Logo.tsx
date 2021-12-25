import React from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
  className?: string;
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  const { className } = props;
  return (
    <Link to="/" className={`logo ${className}`}>
      <div className="logo__wrapper">
        <div className="wrapper__left">T</div>
        <div className="wrapper__right">
          <div>ERRA</div>
          <div>NOVA</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
