import React from "react";
import Calendar from "./Calander";

interface DateFieldProps {}

const DateField: React.FunctionComponent<DateFieldProps> = (props) => {

  return (
    <div className="form__group">
      <div className="group__field">
        <input placeholder=" " type="text" className="field__control" />
        <label htmlFor="" className="field__label">
          Date
        </label>
      </div>

      <Calendar />
    </div>
  );
};

export default DateField;
