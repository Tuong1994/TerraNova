import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IMovie } from "../../../../models/Movie";
import Upload from "../../../../components/Upload";

interface InfoFieldsProps {
  langs: ILangs;
  movie: IMovie;
  onSelectImg: (file: any) => void;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs, movie, onSelectImg } = props;

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">
        {langs?.admin.movie.subTitle_1}
      </h3>
      <div className="inner__control">
        <div className="control__group">
          <Upload defaultImg={movie?.image} onChange={onSelectImg} />
        </div>
        <div className="control__group">
          <Field
            name="nameENG"
            placeholder=" "
            label={langs?.form.movieNameENG}
            component={FormControl.Input}
            groupClassName="group__item"
          />
          <Field
            name="nameVN"
            placeholder=" "
            label={langs?.form.movieNameVN}
            component={FormControl.Input}
            groupClassName="group__item"
          />
          <Field
            name="nameCH"
            placeholder=" "
            label={langs?.form.movieNameCH}
            component={FormControl.Input}
            groupClassName="group__item"
          />
        </div>
      </div>
    </Card.Wrapper>
  );
};

export default InfoFields;
