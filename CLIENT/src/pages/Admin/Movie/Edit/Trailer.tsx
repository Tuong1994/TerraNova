import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface TrailerFieldsProps {
  langs: ILangs;
}

const TrailerFields: React.FunctionComponent<TrailerFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__trailer">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_5}</h3>
      <Field
        name="trailer"
        placeholder=" "
        groupClassName="inner__control"
        component={FormControl.Input}
      />
      <div className="inner__note">
          <p>{langs?.admin.movie.note}</p>
      </div>
    </Card.Wrapper>
  );
};

export default TrailerFields;
