import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";

interface IButtonLoadingProps {
  className?: string;
}

const ButtonLoading: React.FunctionComponent<IButtonLoadingProps> = (props) => {
  const { className } = props;
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const renderLoading = () => {
    if (buttonLoading) {
      return <div className={`button-loading ${className}`}></div>;
    } else {
      return null;
    }
  };
  return <>{renderLoading()}</>;
};

export default ButtonLoading;
