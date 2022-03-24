import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";

interface IDataLoadingProps {
  className?: string;
}

const DataLoading: React.FunctionComponent<IDataLoadingProps> = (props) => {
  const { className } = props;
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const renderLoading = () => {
    if (dataLoading) {
      return (
        <div className={`data-loading ${className ? className : ""}`}>
          <div className="data-loading__spinner"></div>
        </div>
      );
    } else {
      return <div className={`data-loading data-loading--hide ${className ? className : ""}`}>
      <div className="data-loading__spinner"></div>
    </div>;
    }
  };
  return <>{renderLoading()}</>;
};

export default DataLoading;
