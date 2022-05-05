import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import Upload from "../../../../components/Upload";

interface InfoFieldsProps {
  langs: ILangs;
  isReset: boolean;
  onSelectImg: (file: any) => void;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs, isReset, onSelectImg } = props;

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">
        {langs?.admin.course.subTitle_1}
      </h3>
      <div className="inner__control">
        <div className="control__group">
          <Upload isReset={isReset} onChange={onSelectImg} />
        </div>
        <div className="control__group">
          <Field
            name="nameENG"
            placeholder=" "
            label={langs?.form.courseNameENG}
            component={FormControl.Input}
            groupClassName="group__item"
          />
          <Field
            name="nameVN"
            placeholder=" "
            label={langs?.form.courseNameVN}
            component={FormControl.Input}
            groupClassName="group__item"
          />
          <Field
            name="nameCH"
            placeholder=" "
            label={langs?.form.courseNameCH}
            component={FormControl.Input}
            groupClassName="group__item"
          />
        </div>
      </div>
    </Card.Wrapper>
  );
};

export default InfoFields;
