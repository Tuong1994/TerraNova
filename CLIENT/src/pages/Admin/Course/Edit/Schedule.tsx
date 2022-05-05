import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { IOptionsLang } from "../../../../configs/options";
import { ILangs } from "../../../../interfaces/lang";
import { EDateType, ICourse } from "../../../../models/Course";
import { toast } from "react-toastify";
import { IQueryList } from "../../../../interfaces/query";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Button";
import moment from "moment";
import {
  createCourseSchedule,
  removeCourseSchedule,
} from "../../../../redux/actionCreators/CourseScheduleCreators";

interface ScheduleFieldsProps {
  langs: ILangs;
  courseDetail: ICourse;
  options: IOptionsLang;
  scheduleArr: any;
  setScheduleArr: React.Dispatch<React.SetStateAction<any>>;
}

const ScheduleFields: React.FunctionComponent<ScheduleFieldsProps> = (
  props
) => {
  const { langs, courseDetail, options, scheduleArr, setScheduleArr } = props;

  const [startDate, setStartDate] = React.useState<string>("");
  const [dateType, setDateType] = React.useState<number>(0);
  const [branch, setBranch] = React.useState<number>(0);
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const renderDateType = (v: number) => {
    if (v === EDateType.even) {
      return `${langs?.course.detail.register.schedule.mon} + ${langs?.course.detail.register.schedule.wed} + ${langs?.course.detail.register.schedule.fri}`;
    } else if (v === EDateType.odd) {
      return `${langs?.course.detail.register.schedule.tue} + ${langs?.course.detail.register.schedule.thur} + ${langs?.course.detail.register.schedule.sat}`;
    } else if (v === EDateType.last) {
      return `${langs?.course.detail.register.schedule.sat} + ${langs?.course.detail.register.schedule.sun}`;
    }
  };

  const handleAdd = () => {
    if (isReset) {
      setIsReset(false);
    }
    const query: IQueryList = {
      courseId: courseDetail?.id || courseDetail?.courseId,
    };
    const newSchedule = {
      startDate: startDate,
      dateType: dateType,
      branch: branch,
      courseId: courseDetail?.id || courseDetail?.courseId,
    };

    dispatch(
      createCourseSchedule(
        newSchedule,
        query,
        langs?.toastMessages.success.create,
        langs?.toastMessages.error.create
      )
    );

    setStartDate("");
    setDateType(0);
    setBranch(0);
    setIsReset(true);
  };

  const handleRemove = (id: any) => {
    const query: IQueryList = {
      courseId: courseDetail?.id || courseDetail?.courseId,
      courseScheduleId: id,
    };

    dispatch(
      removeCourseSchedule(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
  };

  return (
    <Card.Wrapper className="item__inner item__schedule">
      <h3 className="inner__title">
        {langs?.admin.course.subTitle_5}
      </h3>
      <FormControl.InputCustom
        type="date"
        placeholder=" "
        value={startDate}
        label={langs?.form.startDate}
        groupClassName="inner__control"
        onChange={(e) => {
          const value = e.target.value;
          setStartDate(value);
        }}
      />
      <FormControl.SelectCustom
        id="value"
        name="label"
        placeholder=" "
        groupClassName="inner__control"
        isReset={isReset}
        label={langs?.form.dateType}
        value={options?.dateType.find((i) => i.value === dateType)}
        option={options?.dateType}
        onChange={(value: any) => {
          setDateType(value);
        }}
      />
      <FormControl.SelectCustom
        id="value"
        name="label"
        placeholder=" "
        groupClassName="inner__control"
        isReset={isReset}
        label={langs?.form.branch}
        value={options?.branch.find((i) => i.value === branch)}
        option={options?.branch}
        onChange={(value: any) => {
          setBranch(value);
        }}
      />

      <div className="inner__add">
        <Button
          type="button"
          className={`button--submit ${
            startDate === "" || dateType === 0 || branch === 0
              ? "button--disabled"
              : ""
          }`}
          onClick={handleAdd}
        >
          <i className="fa-solid fa-plus"></i>
          <span>{langs?.button.add}</span>
        </Button>
      </div>

      {scheduleArr?.length > 0 && (
        <div className="inner__list">
          <h4 className="list__title">
            {langs?.admin.course.scheduleList}
          </h4>
          {(() => {
            if (scheduleArr && scheduleArr?.length > 0) {
              return scheduleArr.map((schedule: any) => {
                return (
                  <Card.Wrapper className="list__card" key={schedule.id}>
                    <ul className="card__inner">
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.startDate} : </p>
                          <p>
                            {moment(schedule?.startDate).format("DD/MM/YYYY")}
                          </p>
                        </div>
                      </li>
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.dateType} : </p>
                          <p>{renderDateType(schedule?.dateType)}</p>
                        </div>
                      </li>
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.branch} : </p>
                          <p>{schedule?.branch}</p>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="card__close"
                      onClick={() => {
                        handleRemove(schedule.id);
                      }}
                    >
                      <i className="fa fa-times"></i>
                    </div>
                  </Card.Wrapper>
                );
              });
            }
          })()}
        </div>
      )}
    </Card.Wrapper>
  );
};

export default ScheduleFields;
