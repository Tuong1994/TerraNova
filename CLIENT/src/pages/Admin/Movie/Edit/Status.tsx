import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { IMovie } from "../../../../models/Movie";

interface StatusFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  movie: IMovie;
}

const StatusFields: React.FunctionComponent<StatusFieldsProps> = (props) => {
  const { langs, options, movie } = props;

  return (
    <Card.Wrapper className="item__inner item__status">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_3}</h3>
      <Field
        name="status"
        placeholder=" "
        component={FormControl.Select}
        defaultValue={options?.movieStatus.find(
          (i) => i.value === movie?.status
        )}
        option={options?.movieStatus}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default StatusFields;
