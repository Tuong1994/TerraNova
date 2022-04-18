import React from "react";
import Card from "../../../components/Card/Card";

interface PartnersCardProps {
  card: any;
}

const PartnersCard: React.FunctionComponent<PartnersCardProps> = (props) => {
  const { card } = props;

  return (
    <Card className="item__card" key={card.id}>
      <div className="card__inner">
        <div className="inner__front">
          <div className="front__content">
            <img className="content__img" src={card.imgSrc} alt={card.name} />
            <div className="content__inner">
              <h1 className="inner__title">{card.name}</h1>
            </div>
          </div>
        </div>
        <div className="inner__back">
          <h4 className="back__title">{card.name}</h4>
          <p>{card.desc}</p>
        </div>
      </div>
    </Card>
  );
};

export default PartnersCard;
