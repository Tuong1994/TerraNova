import React from "react";
import * as customHook from "../../hooks/index";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";

interface IModalContainerProps {
  isShowing: boolean;
}

const ModalContainer: React.FunctionComponent<IModalContainerProps> = (
  props
) => {
  const { isShowing } = props;
  const modalRef = React.useRef<any>(null);
  const dispatch = useDispatch();
  customHook.useOverFlow(isShowing);

  React.useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch({
          type: EModalActionTypes.CLOSE_MODAL,
        });
      }
    };
    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <div
      className={
        isShowing
          ? "modal-container modal-container--active"
          : "modal-container"
      }
    >
      <div
        className={
          isShowing
            ? "modal-container__inner modal-container__inner--active"
            : "modal-container__inner"
        }
        ref={modalRef}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ModalContainer;
