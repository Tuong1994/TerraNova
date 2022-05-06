import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";

interface StudentFieldsProps {
  langs: ILangs;
}

const StudentFields: React.FunctionComponent<StudentFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__student">
      <h3 className="inner__title">{langs?.admin.course.subTitle_8}</h3>
    </Card.Wrapper>
  );
};

export default StudentFields;
