import React from "react";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";

interface CountDownProps {
  className?: string;
}

const CountDown: React.FunctionComponent<CountDownProps> = (props) => {
  const { className } = props;

  const [min, setMin] = React.useState<number>(5);
  const [sec, setSec] = React.useState<number>(0);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      } else if (sec === 0) {
        if (min === 0) {
          dispatch({
            type: EModalActionTypes.OPEN_TIMEOUT_MODAL,
          });
          clearInterval(interval);
        } else {
          setMin(min - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={`countdown ${className ? className : ""}`}>
      <p>
        {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
      </p>
    </div>
  );
};

export default CountDown;
