import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";

interface ISpinnerProps {
  className?: string;
}

const Spinner: React.FunctionComponent<ISpinnerProps> = (props) => {
  const { className } = props;
  const { isLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const renderLoading = () => {
    if (isLoading) {
      return <div className={`spinner ${className}`}></div>;
    } else {
      return null;
    }
  };
  return <>{renderLoading()}</>;
};

export default Spinner;
