import React from "react";
import Card from "../../../components/Card/Card";
import { Link } from "react-router-dom";

const Categories: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="home__categories">
      <Card className="categories__card">
        <h4 className="card__title">Products</h4>
        <div className="card__body">
          <p className="body__content">
            Trusted by many partners, Terra Nova specialize in supplying and
            distributing all kinds of items such as electronics, essential
            appliances, computer accessories, etc.
          </p>
        </div>
        <div className="card__button">
          <Link to="/" className="button--round">
            See more
          </Link>
        </div>
      </Card>

      <Card className="categories__card">
        <h4 className="card__title">Courses</h4>
        <div className="card__body">
          <p className="body__content">
            With many attractive courses, you can choose the one that's suit for
            you. Terra Nova will satisfy you
          </p>
        </div>
        <div className="card__button">
          <Link to="/" className="button--round">
            See more
          </Link>
        </div>
      </Card>
      
      <Card className="categories__card">
        <h4 className="card__title">Movies</h4>
        <div className="card__body">
          <p className="body__content">
            Terra Nova will give you attractive movies from many countries.
          </p>
        </div>
        <div className="card__button">
          <Link to="/" className="button--round">
            See more
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Categories;
