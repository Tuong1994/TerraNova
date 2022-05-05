import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { useDispatch } from "react-redux";
import {
  createLesson,
  removeLesson,
} from "../../../../redux/actionCreators/LessonCreators";
import { IQueryList } from "../../../../interfaces/query";
import Button from "../../../../components/Button";
import { ICourse } from "../../../../models/Course";

interface LessonFieldsProps {
  langs: ILangs;
  courseDetail: ICourse;
  lessonArr: any;
}

const LessonFields: React.FunctionComponent<LessonFieldsProps> = (props) => {
  const { langs, courseDetail, lessonArr } = props;

  const [title, setTitle] = React.useState<any>({
    nameENG: "",
    nameVN: "",
    nameCH: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const query: IQueryList = {
      courseId: courseDetail?.id || courseDetail?.courseId,
    };
    const newLesson = {
      ...title,
      courseId: courseDetail?.id || courseDetail?.courseId,
    };

    dispatch(
      createLesson(
        newLesson,
        query,
        langs?.toastMessages.success.create,
        langs?.toastMessages.error.create
      )
    );

    setTitle({
      nameENG: "",
      nameVN: "",
      nameCH: "",
    });
  };

  const handleRemove = (id: any) => {
    const query: IQueryList = {
      courseId: courseDetail?.id || courseDetail?.courseId,
      lessonId: id,
    };
    dispatch(
      removeLesson(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
  };

  return (
    <Card.Wrapper className="item__inner item__lesson">
      <h3 className="inner__title">
        {langs?.admin.course.addCourse.subTitle_7}
      </h3>
      <FormControl.InputCustom
        name="nameENG"
        placeholder=" "
        value={title.nameENG}
        label={langs?.form.lessonNameENG}
        groupClassName="inner__control"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <FormControl.InputCustom
        name="nameVN"
        placeholder=" "
        value={title.nameVN}
        label={langs?.form.lessonNameVN}
        groupClassName="inner__control"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <FormControl.InputCustom
        name="nameCH"
        placeholder=" "
        value={title.nameCH}
        label={langs?.form.lessonNameCH}
        groupClassName="inner__control"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="inner__add">
        <Button
          type="button"
          className={`button--submit ${
            title.nameVN === "" || title.nameENG === "" || title.nameCH === ""
              ? "button--disabled"
              : ""
          }`}
          onClick={handleAdd}
        >
          <i className="fa-solid fa-plus"></i>
          <span>{langs?.button.add}</span>
        </Button>
      </div>

      {lessonArr?.length > 0 && (
        <div className="inner__list">
          <h4 className="list__title">
            {langs?.admin.course.addCourse.lessonList}
          </h4>
          {(() => {
            if (lessonArr && lessonArr?.length > 0) {
              return lessonArr.map((lesson: any) => {
                return (
                  <Card.Wrapper className="list__card" key={lesson.id}>
                    <ul className="card__inner">
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.lessonNameENG} : </p>
                          <p>{lesson.nameENG}</p>
                        </div>
                      </li>
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.lessonNameVN} : </p>
                          <p>{lesson.nameVN}</p>
                        </div>
                      </li>
                      <li className="inner__list">
                        <div className="list__content">
                          <p>{langs?.form.lessonNameCH} : </p>
                          <p>{lesson.nameCH}</p>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="card__close"
                      onClick={() => {
                        handleRemove(lesson.id);
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

export default LessonFields;
