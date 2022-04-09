import React from "react";
import * as customHook from "../../hooks/index";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";

interface IModalContainerProps {
  isShowing: boolean;
  onHide(): void;
  className?: string;
}

const ModalContainer: React.FunctionComponent<IModalContainerProps> = (
  props
) => {
  const { isShowing, className, onHide } = props;

  const [shouldRender, setShouldRender] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  customHook.useOverFlow(isShowing);

  const modalRef = React.useRef<any>(null);

  React.useEffect(() => {
    let timeOutId: any;
    if (isShowing && !shouldRender) {
      setShouldRender(true);
    } else if (!isShowing && shouldRender) {
      timeOutId = setTimeout(() => setShouldRender(false), 400);
    }
    return () => clearTimeout(timeOutId);
  });

  React.useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onHide();
      }
    };
    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <React.Fragment>
      {shouldRender ? (
        <div
          className={
            isShowing
              ? `modal-container modal-container--active`
              : "modal-container"
          }
        >
          <div
            className={
              isShowing
                ? `modal-container__inner modal-container__inner--active ${
                    className ? className : ""
                  }`
                : "modal-container__inner"
            }
            ref={modalRef}
          >
            {props.children}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ModalContainer;
