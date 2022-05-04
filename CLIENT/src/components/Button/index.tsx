import React from "react";
import { getClassName } from "../../interfaces/button";

interface iButtonProps {
  style?: React.CSSProperties;
  className?: string;
  activeIndex?: number;
  activeButton?: number;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?(): any;
  isDisabled?: boolean;
}

const Button: React.FunctionComponent<iButtonProps> = (props) => {
  const { className, style, type, activeIndex, activeButton, isDisabled, onClick } = props;

  return (
    <button
      type={type}
      className={
       activeIndex && activeIndex === activeButton
          ? `${getClassName(className)} button--active`
          : className
      }
      onClick={onClick}
      disabled={isDisabled}
      style={style}
    >
      {props.children}
    </button>
  );
};

export default Button;
