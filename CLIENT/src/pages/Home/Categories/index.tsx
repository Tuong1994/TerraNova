import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Card from "../../../components/Card/Card";
import utils from "../../../utils";

const Categories: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="home__categories">
        <Card className="categories__card">
          <h4 className="card__title">{langs?.home.categories.title_1}</h4>
          <div className="card__body">
            <p className="body__content">{langs?.home.categories.content_1}</p>
          </div>
        </Card>

        <Card className="categories__card">
          <h4 className="card__title">{langs?.home.categories.title_2}</h4>
          <div className="card__body">
            <p className="body__content">{langs?.home.categories.content_2}</p>
          </div>
        </Card>

        <Card className="categories__card">
          <h4 className="card__title">{langs?.home.categories.title_3}</h4>
          <div className="card__body">
            <p className="body__content">{langs?.home.categories.content_3}</p>
          </div>
        </Card>
    </div>
  );
};

export default Categories;
