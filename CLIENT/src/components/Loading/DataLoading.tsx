import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";

interface IDataLoadingProps {
  className?: string;
  spinnerClassName?: string;
}

const DataLoading: React.FunctionComponent<IDataLoadingProps> = (props) => {
  const { className, spinnerClassName } = props;
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const renderLoading = () => {
    if (dataLoading) {
      return (
        <div className={`data-loading ${className ? className : ""}`}>
          <div className={`data-loading__spinner ${spinnerClassName ? spinnerClassName : ""}`}></div>
        </div>
      );
    } else {
      return <div className={`data-loading data-loading--hide ${className ? className : ""}`}>
      <div className={`data-loading__spinner ${spinnerClassName ? spinnerClassName : ""}`}></div>
    </div>;
    }
  };
  return <>{renderLoading()}</>;
};

export default DataLoading;
