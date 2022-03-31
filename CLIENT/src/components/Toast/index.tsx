import React from "react";
import * as customHooks from "../../hooks";
import ReactDOM from "react-dom";
import ToastItem from "./ToastItem";
import utils from "../../utils";
import { EToastType } from "../../interfaces/toast";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EToastActionType } from "../../redux/actionTypes/ToastActionTypes";

interface ToastProps {
  autoClose?: () => void;
  autoCloseTime?: () => void;
}

const Toast = (props: ToastProps, ref: any) => {
  const { toast } = useSelector((state: ReducerState) => state.ToastReducer);
  const [toasts, setToasts] = React.useState<any>([]);
  const [removing, setRemoving] = React.useState<any>("");
  const dispatch = useDispatch();

  const { loaded, portalId } = customHooks.useCreateToast();

  React.useEffect(() => {
    if (utils.checkObjectEmpty(toast)) {
      setToasts([...toasts, { ...toast, id: utils.uuid() }]);
    }
  }, [toast]);

  React.useEffect(() => {
    if (toasts.length) {
      const id = toasts[toasts.length - 1].id;
      setTimeout(() => setRemoving(id), 5000);
    }
  }, [toast]);

  React.useEffect(() => {
    if (removing) {
      setToasts((t: any) => t.filter((i: any) => i.id !== removing));
      dispatch({
        type: EToastActionType.REMOVE
      })
    }
  }, [removing]);

  const removeToast = (id: any) => {
    setToasts(toasts.filter((t: any) => t.id !== id));
    dispatch({
      type: EToastActionType.REMOVE
    })
  };

  console.log(toast);

  return loaded ? (
    ReactDOM.createPortal(
      <div className="toast__wrapper">
        {toasts.map((t: any) => (
          <ToastItem
            key={utils.uuid()}
            title={t.title}
            type={t.type}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>,
      document.getElementById(portalId)!
    )
  ) : (
    <></>
  );
};

export default React.forwardRef(Toast);
