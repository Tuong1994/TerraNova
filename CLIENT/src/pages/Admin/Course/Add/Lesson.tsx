import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { toast } from "react-toastify";
import { ILangs } from "../../../../interfaces/lang";
import Button from "../../../../components/Button";

interface LessonFieldsProps {
  langs: ILangs;
  lessonArr: any;
  setLessonArr: React.Dispatch<React.SetStateAction<any>>;
}

const LessonFields: React.FunctionComponent<LessonFieldsProps> = (props) => {
  const { langs, lessonArr, setLessonArr } = props;

  const [title, setTitle] = React.useState<any>({
    nameENG: "",
    nameVN: "",
    nameCH: "",
  });

  const handleChange = (e: any) => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const newLesson = {
      ...title,
      id: Math.floor(Math.random() * 1000000),
    };
    let temp = [...lessonArr];
    temp.push(newLesson);
    setLessonArr(temp);
    setTitle({
      nameENG: "",
      nameVN: "",
      nameCH: "",
    });
    toast.success(langs?.toastMessages.success.create);
  };

  const handleRemove = (id: any) => {
    let temp = [...lessonArr];
    setLessonArr(temp.filter((i) => i.id !== id));
    toast.success(langs?.toastMessages.success.remove);
  };

  return (
    <Card.Wrapper className="item__inner item__lesson">
      <h3 className="inner__title">
        {langs?.admin.course.subTitle_7}
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

      {lessonArr.length > 0 && (
        <div className="inner__list">
          <h4 className="list__title">
            {langs?.admin.course.lessonList}
          </h4>
          {(() => {
            if (lessonArr && lessonArr.length > 0) {
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
