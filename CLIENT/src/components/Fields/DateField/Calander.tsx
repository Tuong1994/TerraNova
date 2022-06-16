import React from "react";

interface CalenderProps {
  value: any;
  name: string;
  isDropdown: boolean;
  setFieldValue: (n: any, v: any) => void;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Calendar: React.FunctionComponent<CalenderProps> = (props) => {
  const { isDropdown, name, value, setValue, setFieldValue } = props;

  const [calendar, setCalendar] = React.useState<any>([]);

  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  React.useEffect(() => {
    const day = startDay.clone().subtract(1, "day");

    const temp = [];
    while (day.isBefore(endDay, "day")) {
      temp.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(temp);
  }, [value]);

  const isSelected = (day: any) => {
    return value.isSame(day, "day");
  };

  const beforeDay = (day: any) => {
    return day.isBefore(new Date(), "day");
  };

  const isToday = (day: any) => {
    return day.isSame(new Date(), "day");
  };

  const dayStyles = (day: any) => {
    if (beforeDay(day)) return "day--before";
    if (isSelected(day)) {
      if (beforeDay(day)) {
        return "day--selected";
      } else {
        return "day--selected";
      }
    }
    if (isToday(day)) return "day--today";
    return "";
  };

  const currentMonth = () => {
    return value.format("MMMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };

  const changePrevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const changeNextMonth = () => {
    return value.clone().add(1, "month");
  };

  return (
    <div
      className={`group__calendar ${
        isDropdown ? "group__calendar--active" : ""
      }`}
    >
      <div className="calendar__header">
        <div
          className="header__prev"
          onClick={() => setValue(changePrevMonth())}
        >
          {String.fromCharCode(171)}
        </div>

        <div className="header__content">
          {currentMonth()} - {currentYear()}
        </div>

        <div
          className="header__next"
          onClick={() => setValue(changeNextMonth())}
        >
          {String.fromCharCode(187)}
        </div>
      </div>

      <div className="calendar__day-name">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, index) => {
          return (
            <div key={index} className="day-name">
              {d}
            </div>
          );
        })}
      </div>

      <div className="calendar__body">
        {calendar.map((week: any, index: number) => {
          return (
            <div className="body__week" key={index}>
              {week.map((day: any, index: number) => {
                return (
                  <div
                    className="week__day"
                    key={index}
                    onClick={() => {
                      setValue(day);
                      setFieldValue(name, day.toISOString());
                    }}
                  >
                    <div className={`day ${dayStyles(day)}`}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
