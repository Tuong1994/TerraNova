import React from "react";
import moment from "moment";

interface CalenderProps {}

const Calendar: React.FunctionComponent<CalenderProps> = (props) => {
  const [calendar, setCalendar] = React.useState<any>([]);
  const [value, setValue] = React.useState<any>(moment());

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

  return (
    <div className="group__calendar">
      {calendar.map((week: any, index: number) => {
        return (
          <div className="calendar__week" key={index}>
            {week.map((day: any, index: number) => {
              return (
                <div
                  className="week__day"
                  key={index}
                  onClick={() => setValue(day)}
                >
                  <div
                    className={
                      value.isSame(day, "day") ? "week__day--selected" : ""
                    }
                  >
                    {day.format("D").toString()}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
