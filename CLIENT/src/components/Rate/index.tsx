import React from "react";

interface RateProps {}

const Rate: React.FunctionComponent<RateProps> = (props) => {
  const [rating, setRating] = React.useState<any>(null);
  const [hover, setHover] = React.useState<any>(null);

  const getColor = (value: any) => {
    if (value <= (hover || rating)) {
      return "#ffc107";
    } else {
      return "#e4e5e9";
    }
  };

  return (
    <div className="rate">
      <div className="rate__star">
        {[...Array(5)].map((star: any, i: number) => {
          const ratingValue = i + 1;
          return (
            <label className="star__item">
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <i
                className="fas fa-star"
                style={{ color: getColor(ratingValue) }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              ></i>
            </label>
          );
        })}
      </div>
      <div className="rate__content">
        <p>{rating !== null ? rating : 0}/5 - (1 voted)</p>
      </div>
    </div>
  );
};

export default Rate;
