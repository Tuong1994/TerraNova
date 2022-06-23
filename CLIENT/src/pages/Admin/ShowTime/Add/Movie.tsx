import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { IMovie } from "../../../../models/Movie";

interface MovieFieldsProps {
  lang: string;
  langs: ILangs;
  isReset: boolean;
  movies: IMovie[];
}

const MovieFields: React.FunctionComponent<MovieFieldsProps> = (props) => {
  const { lang, langs, isReset, movies } = props;

  const getMovieName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return "nameENG";
      }
      case ELangs.VN: {
        return "nameVN";
      }
      case ELangs.CH: {
        return "nameCH";
      }
    }
  };

  return (
    <Card.Wrapper className="item__inner inner__movie">
      <h3 className="inner__title">{langs?.admin.showTime.subTitle_3}</h3>
      <Field
        name="movieId"
        component={FormControl.Select}
        dataLabel={getMovieName()}
        dataValue="id"
        groupClassName="inner__control"
        data={movies}
        isPaging
        total={movies?.length}
        limits={10}
      />
    </Card.Wrapper>
  );
};

export default MovieFields;
