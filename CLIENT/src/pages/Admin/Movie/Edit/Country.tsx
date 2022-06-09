import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { IMovie } from "../../../../models/Movie";

interface CountryFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  movie: IMovie;
}

const CountryFields: React.FunctionComponent<CountryFieldsProps> = (props) => {
  const { langs, options, movie } = props;

  return (
    <Card.Wrapper className="item__inner item__country">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_4}</h3>
      <Field
        name="country"
        placeholder=" "
        component={FormControl.Select}
        defaultValue={options?.movieCountry.find(
          (i) => i.value === movie?.country
        )}
        option={options?.movieCountry}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default CountryFields;
