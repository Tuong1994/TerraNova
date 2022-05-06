import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IUser } from "../../../../models/User";
import Upload from "../../../../components/Upload";

interface AccountFieldsProps {
  langs: ILangs;
  user: IUser | null;
  onSelectedImg: (file: any) => void;
}

const AccountFields: React.FunctionComponent<AccountFieldsProps> = (props) => {
  const { langs, user, onSelectedImg } = props;

  return (
    <Card.Wrapper className="item__inner item__account">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_1}</h3>
      <div className="inner__group">
        <div className="group__control">
          <Upload defaultImg={user?.avatar} onChange={onSelectedImg} />
        </div>
        <div className="group__control">
          <Field
            name="account"
            placeholder=" "
            label={langs?.form.account}
            component={FormControl.Input}
            groupClassName="control__field"
          />
        </div>
      </div>
    </Card.Wrapper>
  );
};

export default AccountFields;
