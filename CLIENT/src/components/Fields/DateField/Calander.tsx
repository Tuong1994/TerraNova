import React from "react";
import * as FormControl from "../../../components/Fields";
import moment from "moment";

interface CalenderProps {
  value: any;
  name: string;
  isDropdown: boolean;
  enableTime?: boolean;
  setFieldValue: (n: any, v: any) => void;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  setDefaultValue: React.Dispatch<React.SetStateAction<string>>;
}

const Calendar: React.FunctionComponent<CalenderProps> = (props) => {
  const {
    isDropdown,
    enableTime,
    name,
    value,
    setValue,
    setDefaultValue,
    setFieldValue,
  } = props;

  const [calendar, setCalendar] = React.useState<any>([]);

  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  const monthArr = moment.months();
  const optionsMonth = monthArr.map((m, index) => {
    return { label: m, value: index + 1 };
  });

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
    if (isSelected(day)) return "day--selected";
    if (isToday(day)) return "day--today";
    if (beforeDay(day)) return "day--before";
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
          {/* <FormControl.SelectCustom
            id="value"
            name="label"
            groupClassName="content__month"
            inputClassName="control"
            iconClassName="icon"
            defaultValue={value.format("MMMM")}
            option={optionsMonth}
            onChange={(value) => {}}
          />
          <FormControl.InputCustom
            groupClassName="content__year"
            inputClassName="control"
            value={value.format("YYYY")}
          /> */}
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
                      setDefaultValue("");
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

        {enableTime && (
          <div className="body__time">
            <FormControl.InputCustom groupClassName="time__input" />
            <div className="time__text">:</div>
            <FormControl.InputCustom groupClassName="time__input" />
            <FormControl.InputCustom groupClassName="time__input" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
