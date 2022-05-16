import React from "react";
import * as customHooks from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";
import { ReducerState } from "../../redux/store";

interface TrailerModalProps {}

const TrailerModal: React.FunctionComponent<TrailerModalProps> = (props) => {
  const { isTrailer } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { videoUrl } = useSelector((state: ReducerState) => state.VideoReducer);

  const modalRef = React.useRef<any>(null);

  const dispatch = useDispatch();

  customHooks.useOverFlow(isTrailer);

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

  const onHide = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_TRAILER_MODAL,
    });
  };

  return (
    <div
      className={`trailer__backdrop ${
        isTrailer ? "trailer__backdrop--active" : ""
      }`}
    >
      <div
        className={`backdrop__content ${
          isTrailer ? "backdrop__content--active" : ""
        }`}
        ref={modalRef}
      >
        <div className="content__icon">
          <div className="icon__wrapper" onClick={onHide}>
            <i className="fa fa-times"></i>
          </div>
        </div>

        <div className="content__media">
          <iframe
            className="media"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
