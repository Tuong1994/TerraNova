import React from "react";
import { getClassName } from "../../interfaces/button";
interface iButtonProps {
  className?: string;
  activeIndex?: number;
  activeButton?: number;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?(): any;
  isDisabled?: boolean;
}

const Button: React.FunctionComponent<iButtonProps> = (props) => {
  const { className, type, activeIndex, activeButton, isDisabled, onClick } = props;

  return (
    <button
      type={type}
      className={
       activeIndex && activeIndex === activeButton
          ? `${getClassName(className)} button--active`
          : getClassName(className)
      }
      onClick={onClick}
      disabled={isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
