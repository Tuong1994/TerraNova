import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

interface RateProps {
  className?: string;
  starClass?: string;
  onChange?: (v: any) => void;
}

const Rate: React.FunctionComponent<RateProps> = (props) => {
  const { className, starClass, onChange } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [rating, setRating] = React.useState<any>(null);
  const [hover, setHover] = React.useState<any>(null);

  const langs = utils.changeLang(lang);

  const starArr = [
    {
      id: 1,
      emoji: "fas fa-star",
    },
    {
      id: 2,
      emoji: "fa-solid fa-face-frown-slight",
    },
    {
      id: 3,
      emoji: "fa-solid fa-face-meh",
    },
    {
      id: 4,
      emoji: "fa-solid fa-face-grin",
    },
    {
      id: 5,
      emoji: "fa-solid fa-face-grin-beam",
    },
  ];

  const getColor = (value: any) => {
    if (value <= (hover || rating)) {
      return "#ffc107";
    } else {
      return "#e4e5e9";
    }
  };

  return (
    <div className={`rate ${className ? className : ""}`}>
      <div className="rate__star">
        {starArr.map((star: any, i: number) => {
          const ratingValue = i + 1;
          return (
            <label className={`star__item ${starClass ? starClass : ""}`} key={star.id}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                }}
                onChange={() => {
                  if (ratingValue !== null) {
                    return onChange && onChange(ratingValue);
                  }
                }}
              />
              <div className="item__icon">
                <i
                  className="fas fa-star"
                  style={{ color: getColor(ratingValue) }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                ></i>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Rate;
