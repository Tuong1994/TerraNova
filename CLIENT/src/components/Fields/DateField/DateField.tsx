import React from "react";

const DateField: React.FunctionComponent<{}> = (props) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  const [isDrop, setIsDrop] = React.useState<boolean>(false);
  const [dateState, setDateState] = React.useState<any>(date);
  const [dayState, setDayState] = React.useState<any>(day);
  const [monthState, setMonthState] = React.useState<any>(month);
  const [yearState, setYearState] = React.useState<any>(year);
  const [months, setMonths] = React.useState<any>([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  console.log(monthState);

  const nextMonth = () => {
    setMonthState(monthState + 1)
    if (monthState >= 11) {
      setMonthState(0);
      setYearState(yearState + 1);
    }
  };

  const prevMonth = () => {
      setMonthState(monthState - 1)
      if(monthState <= 0) {
          setMonthState(11);
          setYearState(yearState - 1)
      }
  };

  return (
    <div className="form__group">
      <div className="group__field">
        <input type="text" className="field__control" />
        <label htmlFor="" className="field__label">
          Date
        </label>
        <div className="field__icon">
          <i className="fas fa-calendar-alt"></i>
        </div>
      </div>
      
      <div className="group__calendar">
        <div className="calendar__date">
          <div className="date__prev-btn" onClick={prevMonth}>
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="date__content">
            {months[monthState]} {dayState}
            {"/"}
            {yearState}
          </div>
          <div className="date__next-btn" onClick={nextMonth}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <div className="calendar__date-picker"></div>
      </div>
    </div>
  );
};

export default DateField;
