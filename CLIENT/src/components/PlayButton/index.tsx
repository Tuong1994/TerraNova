import React from "react";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";
import { EVideoActionTypes } from "../../redux/actionTypes/VideoActionTypes";

interface PlayButtonProps {
  payload: any;
  className?: string;
}

const PlayButton: React.FunctionComponent<PlayButtonProps> = (props) => {
  const { payload, className } = props;

  const dispatch = useDispatch();

  return (
    <div
      className={`play-button ${className ? className : ""}`}
      onClick={() => {
        dispatch({
          type: EVideoActionTypes.ADD_LINK,
          payload: payload,
        });
        setTimeout(() => {
          dispatch({
            type: EModalActionTypes.OPEN_TRAILER_MODAL,
          });
        }, 300);
      }}
    >
      <i className="fa-solid fa-play"></i>
    </div>
  );
};

export default PlayButton;
