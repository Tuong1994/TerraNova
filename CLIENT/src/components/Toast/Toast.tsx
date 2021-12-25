import React from "react";
import { ReducerState } from "../../redux/store";
import { useSelector } from "react-redux";

const Toast: React.FunctionComponent<{}> = (props) => {
  const { show, success, error } = useSelector(
    (state: ReducerState) => state.ToastReducer
  );

  const renderToast = () => {
    if (success.active) {
      return (
        <div
          className={`toast__wrapper ${
            show ? "toast__wrapper--active" : ""
          } toast__success`}
        >
          <div className="wrapper__message">{success.message}</div>

          <div className="wrapper__icon wrapper__success">
            <i className="fas fa-check"></i>
          </div>
        </div>
      );
    } else if (error.active) {
      return (
        <div
          className={`toast__wrapper ${
            show ? "toast__wrapper--active" : ""
          } toast__error`}
        >
          <div className="wrapper__message">{error.message}</div>

          <div className="wrapper__icon wrapper__error">
            <i className="fas fa-times"></i>
          </div>
        </div>
      );
    }
  };

  return <>{renderToast()}</>;
};

export default Toast;
